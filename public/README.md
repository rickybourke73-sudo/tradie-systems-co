# Public assets

Drop these files in `/public` before going live. They're referenced by metadata, social cards, and the favicon.

## Required

| File | Purpose | Recommended size |
| --- | --- | --- |
| `favicon.ico` | Browser tab icon | 32×32 (multi-res .ico) |
| `apple-touch-icon.png` | iOS home screen | 180×180 |
| `icon.svg` | Modern favicon (Chrome) | square SVG |
| `og-default.png` | Default Open Graph card (homepage, fallback) | 1200×630 |
| `og-services.png` | Services page card | 1200×630 |
| `og-blog-default.png` | Fallback blog post card | 1200×630 |
| `logo.png` | Used in some embeds (Slack, Resend, Sanity) | 512×512 |
| `logo.svg` | High-res vector for the rare external use | square SVG |

## Optional

| File | Purpose |
| --- | --- |
| `founder.jpg` | Founder portrait — referenced from `components/sections/Founder.tsx` |
| `workflow-poster.png` | Static fallback for the workflow visual (printable / OG) |

## Generating OG images

For now, use a free tool like [og.tailgraph.com](https://og.tailgraph.com) or Figma export.

For a more sustainable setup, switch to Next.js' built-in OG generation via `app/opengraph-image.tsx` (per-route) — let us know if you'd like that wired up.

## Notes

- The favicon route is also handled automatically by Next if you place an `icon.png` in `/app`. Either approach works.
- Keep files under 200 KB each — this directory is served on every page load.
