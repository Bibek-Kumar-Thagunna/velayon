import { createHmac, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

const SIGNATURE_TOLERANCE_SECONDS = 5;

type PaddleEvent = {
  event_id?: unknown;
  event_type?: unknown;
  occurred_at?: unknown;
  data?: {
    id?: unknown;
    status?: unknown;
  };
};

function signatureParts(header: string) {
  const parts = new Map<string, string[]>();

  for (const item of header.split(";")) {
    const [key, value] = item.trim().split("=", 2);
    if (!key || !value) continue;
    parts.set(key, [...(parts.get(key) ?? []), value]);
  }

  return parts;
}

function verifyPaddleSignature(rawBody: string, header: string, secret: string) {
  const parts = signatureParts(header);
  const timestamp = parts.get("ts")?.[0];
  const signatures = parts.get("h1") ?? [];

  if (!timestamp || signatures.length === 0 || !/^\d+$/.test(timestamp)) {
    return false;
  }

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > SIGNATURE_TOLERANCE_SECONDS) {
    return false;
  }

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}:${rawBody}`)
    .digest("hex");
  const expectedBuffer = Buffer.from(expected, "hex");

  return signatures.some((signature) => {
    if (!/^[a-f\d]{64}$/i.test(signature)) return false;

    const receivedBuffer = Buffer.from(signature, "hex");
    return receivedBuffer.length === expectedBuffer.length
      && timingSafeEqual(receivedBuffer, expectedBuffer);
  });
}

function text(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

export async function GET() {
  return Response.json(
    {
      ok: true,
      service: "Paddle webhook",
      configured: Boolean(process.env.PADDLE_WEBHOOK_SECRET),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    return Response.json({ error: "Webhook is not configured." }, { status: 503 });
  }

  const signature = request.headers.get("paddle-signature");
  const rawBody = await request.text();

  if (!signature || !rawBody) {
    return Response.json({ error: "Missing webhook signature or body." }, { status: 400 });
  }

  if (!verifyPaddleSignature(rawBody, signature, secret)) {
    return Response.json({ error: "Invalid webhook signature." }, { status: 401 });
  }

  let event: PaddleEvent;
  try {
    event = JSON.parse(rawBody) as PaddleEvent;
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const eventType = text(event.event_type) ?? "unknown";
  const eventId = text(event.event_id) ?? "unknown";

  if (eventType === "transaction.completed") {
    // Keep webhook handling fast. A production fulfillment service should use
    // eventId as its idempotency key before emailing or granting a download.
    console.info("Paddle transaction ready for fulfillment", {
      eventId,
      transactionId: text(event.data?.id),
      status: text(event.data?.status),
      occurredAt: text(event.occurred_at),
    });
  } else {
    console.info("Paddle webhook received", { eventId, eventType });
  }

  return Response.json({ received: true });
}
