import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://vyasa-sa-wikisource.github.io",
  integrations: [
    starlight({
      title: "Sanskrit Wikisource",
      description: "Publisher hub, content repos, and catalog for sa.wikisource.org texts in Project Vyasa.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vyasa-sa-wikisource",
        },
      ],
      sidebar: [
        {
          label: "Start",
          items: [{ label: "Overview", slug: "index" }],
        },
        {
          label: "How-to guides",
          items: [{ label: "Onboarding", slug: "onboarding" }],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
        {
          label: "Explanation",
          items: [{ autogenerate: { directory: "architecture" } }],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/vyasa-sa-wikisource/vyasa-sa-wikisource/edit/main/",
      },
    }),
  ],
});
