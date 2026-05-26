# Blog Strategy

Goal: rank for every meaningful query an Australian tradie types when their quotes aren't converting, and turn that traffic into booked strategy calls.

---

## Pillar–cluster model

We use a hub-and-spoke model. Each pillar is a long, definitive guide. Each spoke is a tactical post that answers a specific sub-query and links back to its pillar.

### Pillar 1 — Quote follow-up (primary wedge)

**Hub:** [The complete quote follow-up system for tradies](/blog/quote-follow-up-system-for-tradies)

**Spokes:**

| Slug | Primary intent |
| --- | --- |
| follow-up-after-quote-template | "follow up email/sms after quote" — copy-paste templates |
| why-customers-ghost-quotes | "why don't customers respond to my quote" |
| sms-vs-email-follow-up | comparison query |
| quote-follow-up-frequency | "how often should I follow up on a quote" |
| best-time-to-follow-up | "when to follow up after sending a quote" |
| follow-up-too-pushy | objection: "I don't want to annoy them" |
| speed-to-lead-tradies | "how fast should I respond to a lead" |
| first-30-days-follow-up | onboarding/sequence design |

### Pillar 2 — Lead recovery & management

**Hub:** [Tradie lead management](/blog/tradie-lead-management)

**Spokes:**
- reactivating-cold-quotes — "what to say to old quotes"
- lost-leads-tradies-revenue — calculating the cost of not following up
- tradie-no-show-reduction — pre-job reminders
- tradie-objection-handling — what to say when they push back on price

### Pillar 3 — Quote conversion & systems

**Hub:** [Quote conversion rate for tradies — what's good, what's broken](/blog/quote-conversion-rate-tradies)

**Spokes:**
- quote-response-rate — what % of quotes should get a reply
- tradie-crm-vs-follow-up-system — positioning
- quoting-software-not-enough — why ServiceM8/Tradify alone don't fix this
- fencing-business-follow-up — industry vertical
- electrician-lead-follow-up — industry vertical
- plumber-quote-conversion — industry vertical
- landscaper-customer-follow-up — industry vertical

---

## Internal linking map

Every spoke links to:
1. Its **pillar** (pillar link in the intro or first H2)
2. **Two sibling spokes** in the same cluster (anchor text = the sibling's primary keyword)
3. **One service** on `/services` (relevant block)
4. **One CTA** to `/contact` mid-article

Every pillar links to:
1. **All of its spokes** (table of contents at top)
2. **The other two pillars** at the foot ("Read next")
3. **Services** + **Contact**

This produces a tight mesh: ~5 internal links per spoke, ~12 per pillar.

---

## Publishing cadence

| Phase | Cadence | Total |
| --- | --- | --- |
| Launch (months 1–2) | All 3 pillars + 8 highest-priority spokes | 11 posts |
| Build (months 3–6) | 2 spokes/week | ~32 posts |
| Sustain (month 7+) | 1 spoke/week + 1 pillar refresh/month | — |

The 20 posts seeded in `content/posts.ts` cover the launch + early build phase.

---

## Post template (write to this every time)

```
1. H1 with primary keyword (or close variant)
2. Direct-answer paragraph (40–60 words) — front-loaded, snippet-grade
3. TL;DR bullets
4. Body in H2/H3 sections answering related queries
5. At least one of: numbered list, comparison table, worked example
6. Internal CTA card halfway through
7. FAQ block (3–5 Qs)
8. Closing CTA → strategy call
```

The dynamic blog page renders all of this consistently for every post.

---

## Voice rules

- Write like the founder is talking to another tradie at a worksite.
- Australian English: "follow-up", "organise", "specialise", "tradies", "ute".
- No jargon: avoid "leverage", "synergy", "AI-powered", "optimise your conversion funnel".
- Use real product names: ServiceM8, Tradify, simPRO, AroFlo, Jobber.
- Use real numbers: "30–50% of quotes", "<5 minutes", "7+ touchpoints".
- Speak to the moment of pain: the quote sent at 9pm that never got a reply.

See `COPY_GUIDE.md` for the full voice spec.

---

## Refresh policy

Every post older than 9 months gets reviewed. We update:
- Stats (link to current sources)
- Tool names (the SaaS landscape moves)
- Internal links (add new siblings)
- CTA copy
- Add 1–2 new sections answering new "people also ask" queries

Refresh > republish. We update `_updatedAt` and let Google re-crawl naturally.

---

## What we never do

- Aggregate "Top 10 best CRMs for tradies in 2026" listicles. Soulless and we're not affiliates.
- AI-generated posts with no human pass.
- Targeting keywords we can't answer with a real opinion.
- Duplicate content across industry verticals — each industry post must have unique examples and language.
