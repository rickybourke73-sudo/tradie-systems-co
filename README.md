# Tradie Systems Co — Website

Production-ready Next.js website for [tradiesystemsco.com.au](https://tradiesystemsco.com.au) — a done-for-you quote follow-up service for Australian tradies.

Built with Next.js 14 (App Router), Tailwind CSS, Sanity CMS, and deployed on Vercel.

---

## Stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Styling:** Tailwind CSS, custom design tokens (ink / bone / signal palette)
- **Type system:** TypeScript (strict)
- **CMS:** Sanity v3 (mounted at `/studio`)
- **Forms:** Native API route at `/api/contact` (Resend-ready)
- **Booking:** Cal.com / Calendly embed
- **Analytics:** GA4 + Microsoft Clarity (env-gated)
- **Deploy:** Vercel

---

## Quick start

```bash
# 1. Install
pnpm install        # or npm install / yarn

# 2. Set up env vars
cp .env.example .env.local
# fill in values — see "Environment variables" below

# 3. Run dev server
pnpm dev
# → http://localhost:3000
# → http://localhost:3000/studio (Sanity)
```

---

## Environment variables

All keys are documented in [`.env.example`](./.env.example). Critical ones:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `NEXT_PUBLIC_BOOKING_URL` | Cal.com / Calendly link used in CTAs |
| `CONTACT_EMAIL` | Where contact form leads land |
| `RESEND_API_KEY` | (Optional) for production email delivery |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |

In Vercel: add these under **Project → Settings → Environment Variables**.

---

## Project structure

```
app/
  api/contact/         # Lead form handler
  blog/                # Blog index + dynamic [slug] post pages
  contact/             # Contact page (form + booking embed)
  faqs/                # FAQ page (with category nav)
  services/            # Services page
  studio/[[...index]]/ # Sanity studio mount
  layout.tsx           # Root layout, fonts, JSON-LD, analytics
  page.tsx             # Homepage
  sitemap.ts           # Dynamic sitemap.xml
  robots.ts            # robots.txt
  not-found.tsx        # 404

components/
  layout/              # Header, Footer
  sections/            # Homepage section components (Hero, WorkflowVisual, etc.)
  ui/                  # Button, Section, Logo, FaqAccordion, ContactForm

lib/
  sanity.ts            # Sanity client + GROQ queries
  schema.tsx           # JSON-LD generators (Org, FAQ, Article, Service, etc.)
  seo.ts               # buildMetadata helper
  site.config.ts       # Single source of truth for site config
  utils.ts             # cn(), formatDate(), readingTime()

content/
  faqs.ts              # FAQ content (fallback for first-load before CMS)
  posts.ts             # Blog post registry (3 full posts + 17 stubs)

sanity/
  schemas/             # Document schemas: post, category, author, faq, service, siteSettings, seo

docs/
  SEO_AEO_STRATEGY.md  # Search + AI engine optimization plan
  BLOG_STRATEGY.md     # Topical clusters, internal linking, cadence
  COPY_GUIDE.md        # Voice, tone, terms to avoid
```

---

## Sanity CMS setup

1. Create a free project at <https://www.sanity.io/manage>.
2. Copy the project ID into `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Run `pnpm dev` and visit `/studio`.
4. Sign in. The studio is configured with these document types:
   - **Site Settings** (singleton): hero copy, CTA labels, booking URL
   - **Blog Posts**: full content with portable text body
   - **Categories** & **Authors**: blog taxonomy
   - **FAQs**: question + answer with category filter
   - **Services**: outcomes-focused service blocks

5. To enable CORS so the live site can fetch content:
   - Sanity Manage → API → CORS origins
   - Add `https://tradiesystemsco.com.au` and `http://localhost:3000`

The site reads from Sanity via GROQ queries in `lib/sanity.ts`. Until content is added, the homepage falls back to the curated content in `content/`.

---

## Contact form delivery

The contact form posts to `/api/contact`. By default, leads are logged to the Vercel function logs.

To send real emails, install Resend and uncomment the Resend block in [`app/api/contact/route.ts`](./app/api/contact/route.ts):

```bash
pnpm add resend
```

Set `RESEND_API_KEY` in your env, and verify your sending domain at <https://resend.com/domains>.

---

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import into Vercel (<https://vercel.com/new>).
3. Add env vars from `.env.example`.
4. Deploy.
5. Add the production domain `tradiesystemsco.com.au` in Vercel → Domains.
6. Update DNS (Vercel will give you the records).
7. Submit `https://tradiesystemsco.com.au/sitemap.xml` in Google Search Console and Bing Webmaster.

---

## Analytics

GA4 and Microsoft Clarity scripts are loaded in `app/layout.tsx` and only render when their env vars are set.

The contact form fires a `generate_lead` event on successful submit (visible in `components/ui/ContactForm.tsx`). To track booking-call clicks, hook into the CTA button click handlers or set up auto-capture in Clarity.

Recommended GA4 conversions to mark:
- `generate_lead` (contact form submit)
- `book_call_click` (any "Book a Strategy Call" CTA)

---

## Adding content

### A new blog post via CMS
1. Open `/studio` → **Blog Posts** → **+**
2. Fill in title, slug, excerpt, body, category, author, publishedAt.
3. Publish. The post appears at `/blog/{slug}` on next request.

### A new blog post in code (fastest)
Add an entry to `content/posts.ts` and an optional body file. The blog index and dynamic page will pick it up automatically.

### A new service
Add to the `services` array in `app/services/page.tsx`, or create a Service document in the studio (CMS-driven services page is a future enhancement).

---

## SEO & AEO

See [`docs/SEO_AEO_STRATEGY.md`](./docs/SEO_AEO_STRATEGY.md) and [`docs/BLOG_STRATEGY.md`](./docs/BLOG_STRATEGY.md) for the full plan.

Key technical SEO already in place:
- Per-page metadata via `buildMetadata()` helper
- `Organization`, `LocalBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Article`, and `Service` JSON-LD
- Dynamic sitemap.xml and robots.txt
- Semantic heading structure on every page
- Open Graph + Twitter card metadata
- Mobile-first responsive layouts
- Image optimization via `next/image`

---

## License

© 2024 Tradie Systems Co. All rights reserved.
