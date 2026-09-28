import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-28");
  return [
    { url: "https://velayon.com", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://velayon.com/products", lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://velayon.com/products/ai-product-photography-playbook", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://velayon.com/services/websites", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://velayon.com/services/apps", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://velayon.com/contact", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://velayon.com/privacy", lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: "https://velayon.com/terms", lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
