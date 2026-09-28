import { permanentRedirect } from "next/navigation";

export function generateStaticParams() {
  return ["attendify", "hotel-management", "face-recognition", "expense-tracker"].map((slug) => ({ slug }));
}

export default function LegacyWorkDetailPage() {
  permanentRedirect("/services/apps");
}
