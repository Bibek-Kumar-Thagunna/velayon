"use client";

import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { useCallback, useState } from "react";
import { checkoutUrl } from "@/lib/catalog";

const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
const isSandbox = process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox";
const isConfigured = Boolean(clientToken && priceId);

let paddlePromise: Promise<Paddle | undefined> | null = null;

function loadPaddle() {
  if (!clientToken) return Promise.resolve(undefined);

  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      token: clientToken,
      ...(isSandbox ? { environment: "sandbox" as const } : {}),
    });
  }

  return paddlePromise;
}

type PaddleCheckoutButtonProps = {
  className?: string;
  label?: string;
  fallbackLabel?: string;
};

export function PaddleCheckoutButton({
  className = "button button-primary",
  label = "Buy Now",
  fallbackLabel = "Request purchase access",
}: PaddleCheckoutButtonProps) {
  const [isOpening, setIsOpening] = useState(false);

  const openCheckout = useCallback(async () => {
    if (!isConfigured || !priceId) {
      window.location.assign(checkoutUrl);
      return;
    }

    setIsOpening(true);

    try {
      const paddle = await loadPaddle();
      if (!paddle) throw new Error("Paddle.js could not be initialized.");

      paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        settings: {
          displayMode: "overlay",
          variant: "one-page",
        },
      });
    } catch {
      window.location.assign(checkoutUrl);
    } finally {
      setIsOpening(false);
    }
  }, []);

  if (!isConfigured) {
    return <a className={className} href={checkoutUrl}>{fallbackLabel} <span aria-hidden="true">↗</span></a>;
  }

  return (
    <button
      className={className}
      type="button"
      onClick={openCheckout}
      onPointerEnter={() => { void loadPaddle(); }}
      onFocus={() => { void loadPaddle(); }}
      disabled={isOpening}
    >
      {isOpening ? "Opening secure checkout…" : label} <span aria-hidden="true">↗</span>
    </button>
  );
}

export function PaddleCheckoutNotice() {
  if (!isConfigured) {
    return <p className="microcopy">Secure checkout is being activated through Paddle. Until then, use the purchase request form to request access. No payment is collected on this website.</p>;
  }

  if (isSandbox) {
    return <p className="microcopy">Sandbox checkout is enabled for testing. Test payments are simulated and no real money is collected.</p>;
  }

  return <p className="microcopy">Secure checkout, taxes and payment processing are handled by Paddle as merchant of record.</p>;
}
