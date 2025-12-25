import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wavecon.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://wavecon.com/products",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://wavecon.com/industrial",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://wavecon.com/vrv",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://wavecon.com/contact",
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}
