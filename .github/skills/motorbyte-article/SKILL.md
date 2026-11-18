---
name: motorbyte-article
description: "Research, write, add a properly licensed car image when available, validate, and publish a new MotorByte blog article. Use when asked to create a car article or new blog Markdown post."
argument-hint: "Car, model, or automotive topic; optionally include an angle"
---

# MotorByte Article Workflow

Use this workflow for a new MotorByte blog post in `src/content/blog/`. The selected agent is authorized to commit and push the finished post to `origin/main` after every check passes.

## 1. Check the workspace

1. Read the blog schema in [`src/content/config.ts`](../../../src/content/config.ts), article template in [`src/pages/blog/[...slug].astro`](../../../src/pages/blog/%5B...slug%5D.astro), and two or three recent posts for tone and structure.
2. Confirm the topic is specific enough to research and is not already covered by an existing post. If it is ambiguous or substantially duplicative, ask one focused question before editing.
3. Confirm the current branch is `main`, `origin` is configured, and the worktree is clean. If any check fails, stop before creating files; do not stash, overwrite, switch branches, or include existing user changes.

## 2. Research before drafting

1. Use web search and open source pages, not search snippets alone.
2. Verify important dates, specifications, production details, and historical claims against at least three reliable sources. Prefer manufacturer archives, museums, marque clubs with documented references, period publications, and established automotive publications.
3. Resolve conflicting claims by finding stronger evidence or qualify the statement. Do not invent quotes or present uncertain recollections as fact.
4. Record the sources in the Markdown frontmatter as `sources`, with a descriptive title and direct URL for each page. Link key claims in the article text where it reads naturally.

## 3. Find an image only when rights are clear

An image is optional. Do not delay a well-researched article just because an appropriate image is unavailable.

1. Prefer a relevant image with a verifiable Public Domain, CC0, or CC BY license from Wikimedia Commons or another reputable source with a clear file-specific license.
2. Verify the exact image's creator, license, attribution requirements, and source page. A free-to-view image, search result, or general website policy is not proof of permission to republish.
3. Download the original image file to `public/images/` with a unique, descriptive lowercase filename. Do not hotlink, crop, edit, or remove watermarks.
4. Add `heroImage`, a descriptive `heroImageAlt`, and `heroImageCredit`, `heroImageSource`, and `heroImageLicense` to the frontmatter. Preserve any required attribution.
5. If rights, attribution, or a valid downloadable image cannot be confirmed, omit all hero-image fields and report that no suitable licensed image was found.

## 4. Write the post

- Match the concise, enthusiast-friendly tone and section structure of the existing MotorByte posts. Aim for roughly 600–1,000 words unless the topic warrants a different length.
- Use a unique lowercase kebab-case filename in `src/content/blog/`.
- Include valid YAML frontmatter: `title`, `description`, `pubDate` (today's local date), `category`, `author: "MotorByte"`, `tags`, and `sources`. Use category `Opinion` unless the user specifies another existing category.
- Keep claims specific and supported. Avoid filler, unsupported superlatives, copied phrasing, and false first-person ownership or driving claims.
- Do not modify the site's layout or unrelated content for an individual article.

Example frontmatter:

```yaml
---
title: "A Specific, Accurate Headline"
description: "A concise summary of the article."
pubDate: 2026-01-31
category: "Opinion"
author: "MotorByte"
tags:
  - Example marque
  - Classic cars
sources:
  - title: "Relevant historical source"
    url: "https://example.com/article"
---
```

## 5. Validate and publish

1. Confirm any `heroImage` path resolves to a file under `public/images/`; confirm the image is a real image and its credit/source/license fields are present.
2. Run `npm run build`. Do not push if the build fails.
3. Check `git diff --check` and inspect the generated route under `dist/blog/<post-id>/index.html`. Confirm it contains the expected article title, source links, and image attribution when applicable.
4. Stage only the new Markdown post and its new image. Do not stage unrelated files.
5. Commit with a descriptive message such as `Add <model> feature` and include the required Copilot co-author trailer.
6. Push the commit to `origin main`. Never force-push. If the push is rejected or any command fails, stop and report the exact blocker rather than claiming success.
7. Verify the resulting commit and clean worktree, then report the post URL, source/image status, build result, and commit hash.
