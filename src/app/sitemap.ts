import type { MetadataRoute } from "next";
import { ROOMS } from "@/lib/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kulangararesidency.vercel.app";

  const staticRoutes = [
    "",
    "/rooms",
    "/gallery",
    "/amenities",
    "/location",
    "/contact",
    "/policies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...ROOMS.map((r) => ({
      url: `${baseUrl}/rooms/${r.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}

