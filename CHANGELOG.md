# Changelog — QA & Polish Pass

This is a record of the full quality-control pass against the production-ready Tradie Systems Co site. It catalogs every change made during the polish, what category each change falls under, and any follow-up actions required from the team.

The brand, palette, typography, and overall layout structure were preserved. Changes were scoped to fixes, consistency, accessibility, SEO, and conversion quality.

---

## 1. Critical fixes

### HTML entity rendering bug
- Found the actual reported bug: `&rsquo;` and similar entities inside **JSX attribute strings** (`<SectionHeader title="It&rsquo;s..." />`). Attributes are not parsed as HTML, so the entity was rendering as literal text in the browser.
- Fixed across 6 files via a scoped regex that only touched `title=`, `description=`, `eyebrow=`, `placeholder=`, `aria-label=`, `alt=` attributes.
- Replaced all `&rsquo;`, `&ldquo;`, `&rdquo;`, `&hellip;`, `&mdash;`, `&ndash;`, `&nbsp;`, `&amp;`, `&copy;` with Unicode equivalents in 17 source files via a one-pass script. JSX text-content entities remaining are harmless (JSX renders them correctly) but consistency is now higher.

### Booking embed
- New `components/ui/BookingEmbed.tsx` client component replaces the bare iframe that was 404ing.
- Three states: **loading** (animated calendar skeleton), **ready** (live iframe), **failed** (clean fallback card with "Open in new tab" CTA and a "Send a message instead" link).
- Detects the placeholder Cal.com URL pattern (the default `cal.com/tradiesystemsco/strategy-call` is not a real account) and skips the iframe entirely, rendering the friendly fallback. As soon as a real booking URL is set in `site.config.ts`, the embed becomes live.
- 6-second timeout for genuine failures (provider down, blocked by extensions). No raw 404 ever surfaces.

### Duplicate CTA fatigue
- The footer had a floating "Stop losing jobs" CTA strip that overlapped with the page's `<FinalCta />` block on every page, creating two back-to-back identical CTAs. Removed the footer's floating CTA. `<FinalCta />` remains the on-page closer; the footer is now a clean nav + brand + socials block.

### Broken footer links
- `/privacy` and `/terms` previously 404'd. Created on-brand stub pages with AU-Privacy-Act-aware content (legal review still required).
- Industry links pointed to `/blog?industry=...` — a query string that no page handled. Redirected to `/services` and to a working `/blog?category=...` query.

---

## 2. Forms & validation

### `ContactForm` — full rebuild
- Removed `dangerouslySetInnerHTML` in label rendering.
- Linked every `<label>` to its `<input>` via `useId()`-generated `htmlFor`/`id` pairs.
- Per-field error states (`aria-invalid`, inline error messages with `role="alert"`).
- Validates on blur and on submit; respects HTML5 semantics with `noValidate` so React owns the UX.
- Honeypot field added (the API route already checks for one — the form was never emitting it).
- Removed inline `styled-jsx` (was a SSR FOUC risk) — moved all field styles to Tailwind.
- Success state now offers "Send another message" path.
- Submit button properly disables with the `disabled` prop and shows "Sending..." state.
- `inputMode` hints for `email` and `tel` improve mobile keyboards.

### `/api/contact` route
- Already had honeypot logic, sanitisation, length validation, and clear integration stubs for Resend and Slack. Kept as-is.

---

## 3. Components

### `Button`
- Now supports `disabled` prop with proper `aria-disabled`, `pointer-events: none` via `.btn[disabled]` global rule, and hover-translate suppression.
- `aria-label` passthrough for icon-only contexts.
- Type union expanded to include `'reset'`.

### `Section` + `SectionHeader`
- Added missing `'md'` size variant (was being passed as a prop in `app/contact/page.tsx` and `app/faqs/page.tsx` but Section's union didn't include it — a TypeScript error waiting to happen).
- `SectionHeader` description now uses explicit `text-bone-300` instead of relying on the global `<p>` color rule (which has been removed — see below).
- Optional `as: 'section' | 'div'` to allow non-section landmarks where needed.

### `FaqAccordion`
- Single-open behaviour by default (was state-managed but not consistently single-open). New `allowMultiple` prop opts into multi-open.
- Proper `aria-controls`/`aria-labelledby` linkage via `useId()`.
- Animation now uses grid-rows + opacity transition that respects `motion-reduce`.
- Hover state lifts to whole row, not just text.
- Subtle border/background change when open.

### `Header`
- `aria-current="page"` on active nav links plus a subtle underline marker.
- ESC key closes the mobile drawer.
- Body scroll-lock cleanup on unmount (was leaking a small bit of state).
- Drawer uses opacity + `pointer-events` transition (no mount/unmount flash on first open).
- Mobile drawer now includes a secondary "Send a message" CTA below the booking button.
- Path matching tightened (`isActive` helper handles `/` correctly).

### `Footer`
- Removed the floating duplicate CTA (see Critical fixes).
- Added socials row with proper `aria-label` per link.
- All link colors and hover states unified to match site tokens.
- Mobile layout: 2 columns at `sm`, 4 at `lg` — no more cramped 4-column mobile.

### `Logo`
- Fixed `aria-hidden` to have explicit value `"true"` (was bare attribute).

---

## 4. Section components — full sweep

Every homepage section was reviewed for:
- HTML entities in attributes
- Consistent padding scale (`p-6` mobile → `p-7 sm:p-8 md:p-10`)
- `aria-hidden="true"` on decorative icons and SVG glow elements
- Consistent border tokens (`border-white/5` for subtle dividers, not the older `border-ink-800`)
- Heading hierarchy

Specifically:
- **`Problem`** — removed two unnecessary `dangerouslySetInnerHTML` calls; consistent card padding.
- **`Benefits`** — `flex h-full flex-col` for equal-height cards; Unicode dashes.
- **`Features`** — border tokens cleaned; mobile padding scale.
- **`WhyLosing`** — removed `dangerouslySetInnerHTML`; explicit `aria-hidden` on icons; padding scale.
- **`WorkflowSection`** — Unicode-safe template strings; child heading demoted from `h4` to `h3`.
- **`Founder`** — `<blockquote>` instead of styled `<div>`; placeholder name became `<p>` (was `<h3>` competing with section `h2`).
- **`FaqSection`** — left column sticky on desktop; arrow microinteraction unified.
- **`FinalCta`** — typed `Item` helper with `LucideIcon`; mobile button widths.
- **`WorkflowVisual`** — `useReducedMotion()` properly disables stagger animations; step titles are `<p>` not headings (they're labels, not document headings — avoids `h1 → h3` skip inside the Hero where there's no intervening h2).

---

## 5. Page-level changes

### `app/page.tsx` (Home)
- Explicit `buildMetadata()` call.
- Shared `stripSmartQuotes` helper for FAQ schema text.

### `app/services/page.tsx`
- Per-card CTA labels are now explicit (was a `.split(' ')[0]` hack producing "ai-assisted", "automated" etc).
- Solved the "two banded stripes adjacent" issue by conditionally banding the workflow recap based on services count parity.
- Replaced unicode `✓` characters with proper `<Check>` icons for cleaner rendering.
- Absolute breadcrumb URLs (was relative — invalid for structured data).
- Consistent hero spacing.

### `app/blog/page.tsx`
- `?category=...` filter chips now actually filter the list (was a dead link before).
- `aria-current="page"` on active chip.
- Featured cards use `flex h-full flex-col` for equal heights regardless of content length.
- Mobile chip strip scrolls horizontally with no visible scrollbar.
- Empty state for filtered categories with no posts.

### `app/blog/[slug]/page.tsx`
- Absolute breadcrumb schema URLs.
- Markdown renderer now `escapeHtml()`s before applying allowlisted inline formatting — post bodies can never inject HTML.
- Added support for numbered lists and inline `code` formatting.
- Related-posts fallback: tops up from recent posts in other categories when fewer than 3 same-category siblings exist.

### `app/faqs/page.tsx`
- Mobile/tablet: new sticky horizontal-scroll category chip strip (the desktop sidebar was hidden on smaller screens with no replacement before).
- `scroll-mt` on category anchors so they don't hide under the sticky header.
- Schema cleanup uses Unicode-aware regex.

### `app/contact/page.tsx`
- Uses the new `BookingEmbed` component.
- Form column is sticky on desktop with proper `scroll-mt`.
- Replaced the duplicate `ShieldCheck` icon (used twice in trust items) with `Wrench`.
- Removed unused `Phone` import.

### `app/privacy/page.tsx` (new)
- AU Privacy Act 1988-aware stub. Notes that real legal review is required before launch.

### `app/terms/page.tsx` (new)
- Reasonable AU-governed stub. Notes that real legal review is required.

---

## 6. SEO

### `lib/seo.ts` — rewritten
- Now honours `NEXT_PUBLIC_SITE_URL` for preview deploys with a sensible fallback.
- `article` type properly nests `publishedTime`, `modifiedTime`, `authors` in OpenGraph.
- `keywords` passthrough.
- `noIndex: true` also sets `nocache: true`.
- `googleBot` gets `max-video-preview: -1`.
- `metadataBase` set for all pages (defensive).
- Canonical URL is always emitted.

### `lib/schema.tsx`
- `articleSchema` accepts optional `modifiedAt` — was using `publishedAt` for both `datePublished` and `dateModified`, which is misleading to crawlers.

### `app/layout.tsx`
- Skip link uses the `.skip-link` class from `globals.css` (cleaner markup).

---

## 7. Accessibility

- Global `:focus-visible` outline added in `globals.css` (visible to keyboard users, invisible to mouse users).
- `aria-hidden="true"` added consistently to all decorative icons and SVG glows.
- `aria-label`s on icon-only links (e.g. footer socials).
- `aria-current="page"` on active nav and category chips.
- `aria-controls`/`aria-labelledby` linkage on FAQ accordion.
- Form labels properly linked to inputs via `htmlFor`/`id`.
- `useReducedMotion()` honored on the workflow visual.
- Heading hierarchy cleaned: no more `h1 → h3` skips; the workflow step labels demoted from headings to paragraphs.

---

## 8. CSS / design tokens

### `app/globals.css` — significant refactor
- **Removed the global `p { @apply text-bone-200/85 }` rule.** It was cascading into paragraphs inside cards, forms, and buttons, causing color drift. Replaced with a scoped `.prose-tradie` rule for long-form content only.
- Added `scroll-padding-top: calc(var(--header-h) + 1rem)` so in-page anchors don't hide under the sticky header.
- Added `.skip-link` utility class.
- Added `.btn[disabled]` / `.btn:disabled` rule to suppress hover translate when disabled.
- Updated `.btn-ghost` border to `border-white/10` for consistency.
- `.prose-tradie` now defines proper styles for `p`, `a`, `strong`, `h2`, `h3`, `ul`, `ol` inside long-form content.
- `prefers-reduced-motion` also disables `scroll-behavior: smooth`.

---

## 9. Infrastructure

### `next.config.js`
- Added HSTS header (Vercel-safe behind TLS termination).
- Excluded `/studio` path from `X-Frame-Options` so Sanity Studio works correctly.
- Added `interest-cohort=()` to Permissions-Policy.
- Long-lived `Cache-Control` headers for static asset paths (`woff2`, `webp`, `avif`, `svg`, etc).
- Added typo redirects: `/contacts` → `/contact`, `/blogs` → `/blog`.

---

## 10. Remaining recommendations

These were not done in this pass and need attention before launch:

1. **`pnpm typecheck && pnpm build`** — wide enough surface that a real compile is the only true verification. Most likely failure surface is `searchParams` typing in `app/blog/page.tsx` if you're on Next 15 (params became async).
2. **Real Cal.com URL** in `lib/site.config.ts`. The `BookingEmbed` currently detects the placeholder and shows the fallback card; replace and the live calendar will render.
3. **Resend wiring**: `pnpm add resend`, uncomment the Resend block in `app/api/contact/route.ts`, set `RESEND_API_KEY`.
4. **OG images** (`/public/README.md` lists what's needed).
5. **Founder photo** — replace the gradient placeholder in `components/sections/Founder.tsx`.
6. **Legal review** of `/privacy` and `/terms`.
7. **Real founder name** — replace `[Founder Name]` placeholder in `components/sections/Founder.tsx`.
8. **Lighthouse pass post-deploy** — steps taken to help LCP/CLS/INP, but real numbers need a real deploy.
9. **Sanity project setup** — create at sanity.io/manage, set env vars, populate via `/studio`.
10. **Google Search Console + Bing Webmaster** — submit `https://tradiesystemsco.com.au/sitemap.xml` after launch.

---

## File inventory

60 files. New since previous handoff: `BookingEmbed.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `CHANGELOG.md`.
