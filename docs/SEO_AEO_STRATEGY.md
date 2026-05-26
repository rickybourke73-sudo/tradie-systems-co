# SEO & AEO Strategy

This document is the playbook for Tradie Systems Co's organic search and AI-engine visibility. It is written to be operational — every item should map to something we can ship, measure, or maintain.

---

## 1. Positioning for search

We do **not** rank for "AI automation agency" or "chatbot for tradies". Those are crowded, generic, and misaligned.

We rank for **the painful problem we solve**:

- "quote follow up" / "quote follow-up"
- "follow up after quote"
- "quote follow up email"
- "quote follow up text"
- "quote conversion"
- "tradie quote follow up"
- "why customers ghost quotes"
- "automated quote follow up"
- "tradie lead management"
- "follow up with customers after quote"
- "lead follow up systems"

The site's information architecture, headings, internal links and entity vocabulary all reinforce this.

---

## 2. Topical authority — semantic clusters

Three pillar clusters. Every blog post supports exactly one pillar.

### Cluster 1 — Quote follow-up (primary)
**Pillar page:** `/blog/quote-follow-up-system-for-tradies`
**Cluster posts:**
- follow-up-after-quote-template
- why-customers-ghost-quotes
- sms-vs-email-follow-up
- quote-follow-up-frequency
- best-time-to-follow-up
- follow-up-too-pushy
- speed-to-lead-tradies
- first-30-days-follow-up

### Cluster 2 — Lead recovery & management
**Pillar:** tradie-lead-management
**Cluster:**
- reactivating-cold-quotes
- lost-leads-tradies-revenue
- tradie-no-show-reduction
- tradie-objection-handling

### Cluster 3 — Quote conversion & systems
**Pillar:** quote-conversion-rate-tradies
**Cluster:**
- quote-response-rate
- tradie-crm-vs-follow-up-system
- quoting-software-not-enough
- fencing-business-follow-up
- electrician-lead-follow-up
- plumber-quote-conversion
- landscaper-customer-follow-up

Each pillar links to every cluster post; each cluster post links back to its pillar and laterally to 2–3 sibling posts. This creates a defensible topical mesh that Google's helpful-content systems and LLM retrieval both respect.

---

## 3. On-page formula (every blog post)

1. **H1** — exact-match or near-match to primary query.
2. **Lead paragraph** (40–60 words) — direct answer to the query in plain English. This is the snippet candidate. **Front-load the answer.**
3. **TL;DR / quick answer block** (3–5 bullets). AEO-friendly.
4. **H2 sections** answering related "people also ask" queries.
5. **At least one comparison table or numbered list.** Both Google rich results and LLMs love structured data.
6. **A worked example** — real numbers, real wording, named trades.
7. **Internal links** — minimum 3 to pillar/sibling posts, 1 to a service page, 1 to /contact.
8. **CTA card mid-article and at the foot.**
9. **FAQ block** (3–5 Qs) with `FAQPage` schema. These rank for long-tail queries.

---

## 4. AEO — optimizing for AI retrieval

LLMs (ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews) cite content that is:

- **Direct.** Lead with the answer in 1–2 sentences. Don't bury it.
- **Structured.** H2/H3 hierarchies, bullets, tables, definition lists.
- **Entity-rich.** Use the real product/term/industry names ("ServiceM8", "Tradify", "simPRO", "Jobber", "AroFlo") — entity recognition is what gets you cited.
- **Self-contained.** Each section should make sense out of context. Don't write "as we saw above"; restate.
- **Quotable.** Write definitive 1-sentence statements an LLM can lift. Example: *"Most quotes don't get followed up after the first email; that's where 30–50% of revenue leaks out."*

We embed all of this in the blog template. Pages also expose:

- `Article` schema with `headline`, `datePublished`, `author`, `publisher`
- `FAQPage` schema where Q&A is present
- `BreadcrumbList` on inner pages
- Canonical URLs

---

## 5. Site-wide schema

Implemented in `lib/schema.tsx`:

| Schema | Where it's emitted |
| --- | --- |
| `Organization` | Root layout |
| `ProfessionalService` (LocalBusiness subtype) | Root layout |
| `WebSite` (with SearchAction) | Root layout |
| `BreadcrumbList` | All inner pages |
| `FAQPage` | Homepage FAQ block + /faqs page |
| `Article` | Each blog post |
| `Service` | Each service block on /services |

LocalBusiness is set to `areaServed: Australia` because the service is delivered remotely Australia-wide. We do not fake a single physical location.

---

## 6. Internal linking rules

- Every page links to **/contact** at least once.
- Every blog post links to its **pillar** and at least **two siblings**.
- Every service block links to **at least one supporting blog post**.
- Footer carries the canonical site map of important pages.
- Anchor text uses keyword variations, not "click here".

---

## 7. Technical SEO baseline

- Next.js App Router → SSR/SSG by default; fast TTFB.
- Per-page `metadata` via `buildMetadata()` (title, description, OG, Twitter).
- Dynamic sitemap.xml at `/sitemap.xml`.
- robots.txt at `/robots.txt` blocks `/api`, `/studio`.
- All images use `next/image` with explicit dimensions.
- Fonts loaded via `next/font` (no FOIT, no external request to fonts.googleapis.com).
- Core Web Vitals targets: LCP < 2.0s, CLS < 0.05, INP < 200ms.
- Mobile-first responsive on every viewport.
- Accessible: skip-to-content, semantic landmarks, focus states, reduced-motion respected.

---

## 8. Off-site & authority

The on-site mesh only takes us so far. Plan:

1. **Founder content on LinkedIn** — 3 short posts/week, link to blog pillars monthly.
2. **Tradie-adjacent backlinks** — guest posts on industry blogs (HIA, Master Builders, electrical/plumbing publications).
3. **Tool integration directories** — listings on Cal.com directory, Zapier app directory, ServiceM8 partners (when applicable).
4. **Podcasts** — small-business and trades podcasts. Pitch the founder story.
5. **Citations** — Google Business Profile (service-area business), Yellow Pages AU, True Local, Hotfrog.

---

## 9. Measurement

Track in GA4 + Search Console weekly:

- Impressions and average position for each cluster's primary keyword.
- Click-through rate per pillar.
- Conversions: `generate_lead` (form submit), `book_call_click` (CTA click).
- Top entry pages per channel.

Microsoft Clarity for session recordings, scroll depth, dead clicks on every key page.

Quarterly: prune or refresh any post in position 8–20 with new examples, updated stats, more internal links.

---

## 10. What we don't do

- Keyword stuffing. We pick one primary intent per page and serve it well.
- AI-generated filler. Every post is edited and grounded in real-world tradie scenarios.
- Doorway pages. Industry pages (e.g. /industries/fencing) are full standalone landers, not thin clones.
- Buying backlinks.
- Trying to rank for "AI" or "automation" — that's not the wedge.
