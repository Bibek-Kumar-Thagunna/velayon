import { permanentRedirect } from "next/navigation";

export function generateStaticParams() {
  return ["ai-assisted-coding-pitfalls", "multi-platform-systems", "agentic-ai-development", "face-recognition-architecture"].map((slug) => ({ slug }));
}

export default function LegacyNotePage() {
  permanentRedirect("/products");
}
