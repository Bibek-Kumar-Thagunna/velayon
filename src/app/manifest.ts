import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Velayon Dynamics",
    short_name: "Velayon",
    description: "Original digital products and professionally scoped websites and mobile applications from Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#ece9e2",
    theme_color: "#0a1a34",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
