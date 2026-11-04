# MotorByte

MotorByte is a static automotive blog built with Astro. Articles are written as Markdown files in `src/content/blog` and become public pages when the site is built. The site includes canonical URLs, article and website structured data, sitemap and robots files, an RSS feed, trust pages, and optional responsive AdSense placements.

## Write a post

Create a `.md` file in `src/content/blog` with frontmatter like this:

```md
---
title: "A story about a car"
description: "A short summary for the homepage and search results."
pubDate: 2026-11-04
category: "Car News"
author: "Your Name"
heroImage: "/images/my-car.jpg"
tags:
  - cars
  - road trips
updatedDate: 2026-11-05
heroImageAlt: "A classic sports car on a mountain road"
---

Write the story here using Markdown.
```

`title`, `description`, and `pubDate` are required. `category` defaults to `Car News`, `author` defaults to `MotorByte`, and `heroImage`, `heroImageAlt`, `updatedDate`, and `tags` are optional. Write original, useful articles, use descriptive headings, cite sources for reporting, and provide accurate image alt text. Put local images in `public/images` and reference them with a path such as `/images/my-car.jpg`.

## Production setup

1. Copy `.env.example` to `.env` for local work, or set the variables in your hosting provider.
2. Set `SITE_URL` to the final HTTPS domain you own. The value in `astro.config.mjs` is only a placeholder; canonical links, structured data, robots.txt, and the sitemap depend on the production URL.
3. Set `PUBLIC_CONTACT_EMAIL` to a monitored editorial/privacy contact address. Review the About, Contact, Editorial Policy, and Privacy pages and update them to reflect your actual operation, hosting, analytics, and legal requirements.
4. Add and verify your site in Google Search Console. Submit `/sitemap-index.xml`, inspect indexing, and validate structured data. Search rankings are not guaranteed.
5. Apply for AdSense using your real domain and follow Google's current site review and publisher requirements. Approval is not guaranteed. Publish original, substantial content and complete the site's contact, privacy, and other required disclosures before applying.
6. Only after receiving your publisher ID and creating ad units, set `PUBLIC_ADSENSE_CLIENT` (`ca-pub-...`), `PUBLIC_ADSENSE_HOME_SLOT`, and `PUBLIC_ADSENSE_ARTICLE_SLOT`. The ad code is omitted unless a valid publisher ID and slot are configured. The build then generates `dist/ads.txt` for that publisher.
7. Before serving ads to regions where consent is required, configure a Google-certified consent management platform and the correct consent settings for your audience. The site does not provide a consent-management platform; the privacy page is a starting point and must be reviewed and kept accurate.

Run `npm run dev` to preview drafts locally. Run `npm run build` to generate the static site in `dist`, then `npm run preview` to preview that production build. Set `SITE_URL` in the build environment so local/preview canonical URLs match the intended origin.

The site currently has no connected mailing-list provider or browser-based publishing dashboard. Posts are published by adding Markdown files and deploying the site. The placeholder domain and sample content are not a substitute for a real production domain and original editorial content.
