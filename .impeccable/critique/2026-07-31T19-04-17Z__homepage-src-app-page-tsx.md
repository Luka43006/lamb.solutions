---
target: homepage (src/app/page.tsx)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-07-31T19-04-17Z
slug: homepage-src-app-page-tsx
---
Method: dual-agent (A: general-purpose subagent, design review · B: general-purpose subagent, detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Form's "Message received" state displays with no data ever transmitted, and the swap has no `aria-live` region |
| 2 | Match System / Real World | 4/4 | Ops language (approvals, reconciliation, invoice matching, PO validation) reads authentically operational |
| 3 | User Control and Freedom | 3/4 | Clean mobile menu; but once submitted the form is destroyed with no edit/resend path, no back-to-top on a long scroll |
| 4 | Consistency and Standards | 3/4 | Visual system is consistent; but "Four disciplines" headline vs. 5 rendered capability cards is a direct content contradiction |
| 5 | Error Prevention | 2/4 | Only native HTML5 `required`/`type=email`; no field-level guidance beyond labels |
| 6 | Recognition Rather Than Recall | 4/4 | Nav labels mirror section anchors 1:1; no memory burden |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode landing page — no power-user/shortcut expectations apply |
| 8 | Aesthetic and Minimalist Design | 3/4 | High-craft overall; docked for the tacked-on 5th capability row breaking grid rhythm |
| 9 | Error Recovery | 1/4 | Zero custom error messaging; relies entirely on default browser validation bubbles that visually clash with the art-directed dark page |
| 10 | Help and Documentation | n/a | No help system expected on a marketing page |
| **Total** | | **22/32** | **Acceptable (69%)** |

## Design Specificity Verdict

**Mixed — the hero is genuinely product-specific; everything downstream is high-craft but swappable agency template.** The `AutomationConsole` widget (live ticket-triage panel with Done/Running/Queued states, a "Saved this week: 14.2 hrs" counter, a sparkline) is a real, specific artifact that could only belong to an automation company — the page's strongest evidence of authored intent. The five bespoke SVG icons in `Capabilities` are also custom, not stock. But `Process` ("Discover → Design → Build → Operate," "an engagement in four acts") is the generic four-step consulting pattern used by design studios, dev shops, and marketing agencies interchangeably. `CaseStudy` and `Testimonial` are the standard dark-agency "big serif pull-quote + stat rail" pattern. The ink/bronze/Fraunces-italic aesthetic itself currently reads as a recognizable "premium agency" template signature. An interior-design studio or fractional-CFO firm could reskin most of this page with different copy and nothing would feel structurally wrong.

**Deterministic scan**: `detect.mjs --json` against all 12 markup files in `src/` returned exit code 0 — **zero findings**. The in-browser injected detector agreed: `[impeccable] No anti-patterns found.` The automated detector targets structural anti-patterns (generic layout tells, boilerplate signatures) and correctly found none here — this is a well-executed template, not a sloppy one. It does **not** catch functional defects (a form that silently fails to submit), content contradictions (a headline claiming "four" against five rendered cards), or motion-accessibility gaps — all of which the design review caught. No false positives to report since nothing was flagged.

**Visual overlays**: Browser injection succeeded (mutation preflight passed, `detect.js` loaded with a `200`, console confirmed clean twice). Since the detector found nothing, there are no overlay markers to view in a **[Human]** tab. Screenshots were captured directly instead — desktop (1280×800) and mobile (375×812) — covering hero through footer.

## Overall Impression

This is a well-crafted shell with a real trust problem underneath it. The typography, color restraint, and the `AutomationConsole` widget show genuine design authorship — this isn't a lazy template dump. But the single most important interaction on the page (the contact form, the entire point of a pre-revenue agency's landing page) fabricates success without ever transmitting data, and a countable, easily-noticed copy/content mismatch ("Four disciplines" over five cards) sits in the second fold. The biggest opportunity: fix the two things a first-time visitor and a real lead would actually hit — the form and the count — before investing further in polish anyone else won't see.

## What's Working

1. **`AutomationConsole`** — a specific, well-observed UI (ticket status states, live pulse indicator, sparkline, a running hours-saved counter) that makes "automation" tangible instead of illustrating it with generic hero art. The page's best asset, and worth leading with more aggressively (see Persona Red Flags — mobile currently buries it).
2. **Copy voice** — "no deck required" and "we'll tell you honestly whether automation is the right move before we talk about anything else" do real positioning work through tone, which matters for a company that can't yet lean on a track record.
3. **Typographic restraint** — Fraunces-italic against Geist sans is used sparingly (headline seconds, section accents, stat numerals) rather than everywhere, giving the page editorial confidence instead of the over- or under-use common in agency templates.

## Priority Issues

**[P0] Contact form does not send data anywhere.**
**Why it matters**: This is the site's sole conversion path for a pre-revenue company. `ContactCta.tsx`'s `handleSubmit` (lines 9-12) only calls `e.preventDefault()` and `setSubmitted(true)` — no `fetch`, no `action`, no API route exists anywhere in the project (confirmed by both assessments; zero outbound network requests after a live submit test). Every visitor who fills this out is told "Message received... we'll be in touch within one business day" while the message goes nowhere.
**Fix**: Wire the form to a real endpoint (Next.js API route + email service, or a form backend like Formspree), and make the success state conditional on an actual successful response rather than just `preventDefault()`.
**Suggested command**: `/impeccable harden`

**[P1] Capabilities headline contradicts its own content.**
**Why it matters**: "Four disciplines, one system" (`Capabilities.tsx`) sits above five rendered cards (Workflow Automation, AI Agents, Custom Software, Systems Integration, and Data & Analytics Pipelines as a bolted-on full-width row). This is a countable, low-effort-to-catch inconsistency, and it lands with exactly the detail-oriented, ops-minded audience this page is trying to persuade.
**Fix**: Either change the headline to "Five disciplines" (or drop the numeral entirely), or fold Data & Analytics into one of the four existing cards.
**Suggested command**: `/impeccable clarify`

**[P1] Form fields have no visible focus indicator or authored error state.**
**Why it matters**: All four inputs use `focus:outline-none`, replaced only by a 1px animated underline, with zero authored invalid-state styling anywhere. At the highest-stakes interaction on the page, keyboard and low-vision users get the weakest affordances on the site, and anyone who fails validation gets an unstyled native browser popup that visually clashes with the dark, art-directed page.
**Fix**: Add a visible focus ring (e.g. `focus-visible:ring-2 ring-bronze`) and author inline error text with `aria-invalid` styling per field.
**Suggested command**: `/impeccable audit`

**[P2] Motion runs unconditionally with no user control.** The `TrustStrip` marquee loops infinitely (34s) with no pause-on-hover and no stop control (a WCAG 2.2.2 concern), its `text-muted/70` computes to ~4.36:1 contrast against the ink background — just under the 4.5:1 AA threshold — and there is zero `prefers-reduced-motion` handling anywhere in the codebase (confirmed via grep), so the infinite hero float, the "Live" pulse dot, and every scroll-triggered reveal run unconditionally for vestibular-sensitive visitors.
**Fix**: Add `hover:[animation-play-state:paused]` to the marquee, raise its text to `text-muted/85`+, and gate Framer Motion transitions behind `useReducedMotion()` plus a `@media (prefers-reduced-motion: no-preference)` wrapper for the CSS keyframes.
**Suggested command**: `/impeccable audit`

**[P2] Mobile experience buries the CTA and the strongest visual asset.** At 375px the primary "Book a Call" pill is hidden entirely (`sm:inline-flex` requires ≥640px) — reachable only after opening the hamburger menu — and that hamburger button itself measures 36×36px, below the ~44×44px minimum touch target. Separately, `AutomationConsole` (the page's single most differentiating visual) stacks below the full hero text block and both CTAs on mobile, so a fast-scrolling visitor may never see it. Assessment B also recorded an incidental layout defect: at mobile scroll position ~1400px, the "CAPABILITIES" section eyebrow visually overlaps the sticky navbar logo text.
**Fix**: Surface a persistent CTA affordance on mobile without requiring the menu, enlarge the hamburger target, reconsider stacking order so the console widget isn't fully demoted, and fix the sticky-nav/eyebrow overlap at that scroll position.
**Suggested command**: `/impeccable adapt`

## Persona Red Flags

**Jordan (First-Timer)**: Reads "Four disciplines, one system" then visually counts five capability cards on the same screen — an immediate, easily-noticed inconsistency on a page trying to establish credibility with an audience that evaluates vendors on rigor. The `AutomationConsole` widget also has no caption clarifying it's illustrative — a first-timer could reasonably read it as "this is a SaaS dashboard we'd log into," which conflicts with Lamb Solutions being a bespoke-build services agency, not a packaged product.

**Riley (Stress Tester)**: Submits the contact form and — checking the network tab, as any stress tester would — finds zero outbound requests behind the "Message received" confirmation (the P0 above). Tabs through the four form inputs via keyboard and gets only a 1px underline flicker for focus, no visible ring. Clicks "Privacy Policy" in the footer before trusting the form with a work email and hits a dead `href="#"` anchor — no policy exists anywhere in the codebase.

**Casey (Mobile User)**: The primary "Book a Call" CTA pill is invisible at 375px until the hamburger menu is opened first — an extra tap most mobile visitors won't take. The hamburger toggle itself is undersized at 36×36px. The page's strongest differentiator, `AutomationConsole`, is stacked below the hero text and both CTAs in mobile scroll order, so it may go entirely unseen by someone scrolling fast on a phone.

## Minor Observations

- "Book a Call" as CTA copy implies a scheduling/calendar flow, but it only anchor-scrolls to the same on-page inquiry form — no Calendly-style booking exists.
- The entire site's "evidence" is one anecdote (31.6 hrs saved, -94% errors, 3-week deploy) recycled across three places — `TrustStrip`, `CaseStudy`, and `Testimonial` — all quietly reference the same numbers. Not a fabrication issue (confirmed placeholder per `PRODUCT.md`), but worth flagging as thin evidence architecture for whoever fills in real numbers later.
- Footer links (LinkedIn, X, Privacy Policy, Terms, and the in-page Capabilities/Process/Work/Contact repeats) all point to `href="#"` — dead but clickable-looking.
- `Testimonial` has no avatar, company logo, or visual anchor beyond a thin rule — appropriate restraint given placeholder status, but reads slightly bare for a "confident, editorial" brand once real evidence lands.

## Questions to Consider

1. If the contact form silently drops every submission today, how many real inquiries has this pre-revenue company already lost without knowing it?
2. The headline promises "four disciplines" and the grid shows five — was this always meant to be five, and if so, why does the copy still say four?
3. The page's single strongest, most specific asset (the live automation console) is demoted below the fold on mobile — where most first-touch traffic for a company with no brand recognition will actually land. What is it doing at the *bottom* of the hero instead of leading it on small screens?
