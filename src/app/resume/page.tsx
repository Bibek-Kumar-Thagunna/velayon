import { permanentRedirect } from "next/navigation";

export default function LegacyResumePage() {
  permanentRedirect("/");
}
