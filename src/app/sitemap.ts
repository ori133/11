import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.nav.map((item) => ({ url: new URL(item.href, siteConfig.url).toString() }));
}
