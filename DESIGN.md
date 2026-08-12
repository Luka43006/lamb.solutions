---
name: Lamb Solutions
description: AI automation agency landing page — dark editorial precision with a warm bronze signal
colors:
  ink: "#0a0a09"
  ink-soft: "#121110"
  paper: "#f7f4ec"
  paper-dim: "#ece7d9"
  bronze: "#b8935e"
  muted: "#a8a49a"
  rust: "#e0684a"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 11vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.875rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px – 22px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "13.5px – 16.5px"
    fontWeight: 400
    lineHeight: 1.6
  numeral:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    fontStyle: "italic"
  quote:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "28px – 56px"
    fontWeight: 400
    fontStyle: "italic"
    lineHeight: 1.1
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  sm: "2px"
  pill: "9999px"
  card: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "40px"
  section-y: "96px"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.bronze}"
  card:
    backgroundColor: "rgba(255,255,255,0.02)"
    rounded: "{rounded.card}"
---

# Design System: Lamb Solutions

## Overview

**Creative North Star: "The Quiet Control Room"**

Lamb Solutions lives in near-total darkness lit by a single warm signal — the color of an indicator light left on overnight while the automation keeps working. The system pairs an almost-black ink field with one restrained bronze accent and just enough editorial serif italic to prove a human, not a template generator, wrote the words. Nothing shouts. Precision reads as confidence: thin borders instead of shadows, generous negative space instead of decoration, one signature live-data widget instead of stock illustration.

The aesthetic rejects both extremes an AI agency could default to — the neon-gradient "future tech" cliché, and the flat blue-and-white SaaS-template look. Lamb Solutions is closer to a well-run night shift at a precision workshop than a Silicon Valley pitch deck: dark, controlled, warm at the edges, and quietly certain of itself.

**Key Characteristics:**
- Near-black ink field, one warm bronze accent, restrained by design — bronze appears as a signal, not a wash
- Fraunces italic as the system's single voice of emphasis, always paired against plain Geist sans, never load-bearing alone
- Depth from opacity layering and hairline borders, not shadows — the one true shadow in the system is reserved for the hero's signature widget
- Asymmetric grids (7:5, 5:4, 4:3 splits) instead of centered symmetry — gives every section a directional read
- Uppercase tracked labels function as the system's punctuation, appearing beside every section head

## Colors

The palette is monochrome-dark with a single warm accent; it never diversifies into a multi-hue system.

### Primary
- **Bronze Signal** (`#b8935e`): the system's only accent color. Used for the eyebrow labels beside every section heading, hover states on primary buttons and links, focus rings, active/running status text, and as a soft radial glow (`rgba(184,147,94,0.14–0.16)`, via the `--bronze-rgb` token) behind the hero and contact sections. Its rarity is the point — bronze marks "pay attention here," never fills a surface.

### Neutral
- **Ink** (`#0a0a09`): the base field. Every section sits on this near-black; there is no lighter "page background" anywhere in the system.
- **Ink Soft** (`#121110`): one step up from Ink, used for the Process section's band background and the interior surface of the AutomationConsole panel — signals "a distinct compartment," not a new page.
- **Paper** (`#f7f4ec`): primary text and the fill color of primary buttons. A warm off-white, never pure `#fff` — keeps the whole system in one warm temperature family.
- **Paper Dim** (`#ece7d9`): reserved, lightly used; a dimmer warm white for secondary paper-toned surfaces.
- **Muted** (`#a8a49a`): secondary/supporting text — descriptions, captions, footer copy. Warm gray, never cool gray, so it reads as a quieter version of Paper rather than a different material.
- **Rust** (`#e0684a`): the system's only non-neutral, non-bronze color. Reserved exclusively for error/validation states (form field errors). A warm terracotta chosen to sit inside the same warm-dark family as bronze rather than reading as a jarring, generic red.

### Named Rules
**The One Signal Rule.** Bronze is the system's only accent. When a second accent color is needed (e.g. form errors), it must still read as warm and dark-compatible — never introduce a cool or saturated color that breaks the ink/bronze/paper temperature family.

## Typography

**Display Font:** Fraunces (variable, italic used for emphasis), with Georgia/serif fallback
**Body Font:** Geist Sans, with system-ui fallback

**Character:** A confident geometric sans carries almost everything — labels, body copy, UI — while Fraunces italic appears only as a single accent phrase inside headlines and as the voice of quotes/case-study numerals. The pairing reads as "operator's manual with one handwritten annotation in the margin."

### Hierarchy
- **Display** (medium 500, `clamp(2.5rem, 11vw, 4rem)`, line-height 1.02, tracking -0.03em): the Hero h1 only. Always two lines: a plain-Geist line followed by a Fraunces-italic accent line.
- **Headline** (medium 500, 38–46px desktop / 32–38px mobile, line-height 1.1, tracking -0.02em): every section's h2. Frequently splits one phrase across a plain run and a Fraunces-italic run within the same heading.
- **Title** (medium 500, 16–22px): card and component titles (capability names, process step names).
- **Body** (regular 400, 13.5–16.5px, line-height ~1.6–1.7): descriptive copy, always in Muted when secondary to a heading, in Paper when primary (form labels' answers, nav).
- **Label** (medium 500, 11–13px, tracking 0.08em–0.2em, uppercase): section eyebrows, stat captions, form field labels, nav links. The system's most consistent typographic signature — nearly every section opens with one.
- **Quote/Numeral** (Fraunces, often italic, 20–56px): case-study headline, testimonial quote, process step numerals (I/II/III/IV), stat values. Fraunces is reserved for content that is being *said* or *counted*, not for structural UI chrome.

### Named Rules
**The Single Accent Line Rule.** Fraunces italic never carries an entire heading or paragraph alone — it always appears as one phrase or clause inside a Geist-set sentence, so the serif reads as inflection, not as a competing voice.

## Layout

Container: `max-w-[1400px]`, horizontal padding `px-6` mobile / `px-12` desktop (Testimonial narrows further to `max-w-3xl` since it's a single centered quote). Vertical rhythm is generous and consistent: sections run `py-20` to `py-36`, with the Hero the tallest (`pt-28 pb-16` mobile, `pt-56 pb-36` desktop) to clear the fixed nav and establish scale immediately.

The system avoids centered, symmetric layouts in favor of asymmetric splits that give each section a directional weight: the Hero runs 1.25fr/0.75fr (text-heavy left, widget right), the Capabilities grid runs a 12-column layout with a dominant 7-column lead card, the Case Study runs 1.3fr/0.7fr (narrative left, stat rail right), and the Contact section runs 0.8fr/1fr (pitch left, form right). On mobile every split collapses to a single stacked column — the asymmetry is a desktop-only signature, not a structural requirement.

### Named Rules
**The Directional Split Rule.** A section with two content types (narrative + data, pitch + form, text + widget) splits asymmetrically rather than stacking two equal columns. A 50/50 split reads as indecisive in this system.

## Elevation & Depth

The system is flat by default. Separation between surfaces comes from two devices only: hairline borders at low opacity (`border-white/8` for major section dividers, `border-white/10` for card/component edges) and background-tint layering (`bg-white/[0.02]` for a resting card surface, `bg-white/[0.03]` for a slightly more prominent one, both on the Ink field). No component uses a conventional drop shadow for everyday elevation.

### Shadow Vocabulary
- **Signature Glow** (`box-shadow: 0 40px 120px -40px rgba(0,0,0,0.9)`): reserved exclusively for the AutomationConsole panel — the one element in the system allowed a true, soft, deeply-blurred shadow, marking it as the hero's centerpiece object rather than a flat panel among equals.

### Named Rules
**The Flat-Except-One Rule.** Everyday elevation is hairline-border-plus-opacity-tint. A real shadow is spent once, on the system's single signature object, so it stays meaningful instead of becoming decoration.

## Shapes

Two radii cover the entire system: **pill** (`rounded-full`, 9999px) for every interactive control — buttons, badges, icon frames, status pills, numeral badges — and **card** (`rounded-2xl`, 16px) for every content container — cards, panels, the contact form shell. Nothing uses a small/sharp radius; nothing is fully square except the favicon/logo mark's own circular ring (also a pill). Borders are always hairline (1px) at low white opacity, never a heavier or colored stroke except the bronze-tinted `border-bronze/40` used on the Process step numerals.

## Components

### Buttons
- **Shape:** pill (`rounded-full`)
- **Primary:** Paper background, Ink text, `px-6 py-3.5`, medium weight 14px label
- **Hover:** background shifts to Bronze, subtle `scale-[1.03]` lift — the only component in the system that scales on hover
- **Ghost/link:** no background; Paper/80% text with an arrow glyph that translates on hover, or Muted text that shifts to Bronze

### Cards
- **Corner style:** `rounded-2xl` (16px)
- **Background:** `bg-white/[0.02]` resting, `bg-white/[0.03]` for slightly elevated cards; the Capabilities lead card additionally uses a bronze-tinted gradient (`from-bronze/[0.08] via-white/[0.02] to-transparent`) to mark it as the primary card in its group
- **Border:** hairline `border-white/8` to `border-white/10`, or `border-bronze/20` on the one bronze-tinted card
- **Internal padding:** generous, `p-6` to `p-10` depending on card size

### Inputs / Fields
- **Style:** no box — a bottom-border-only field (`border-b border-white/15`) on a transparent background; label sits above in Label-scale uppercase tracked text
- **Focus:** a bronze underline animates in from center (`scale-x-0` → `scale-x-100`) beneath the field, paired with a `focus-visible` outline ring in bronze/70 for keyboard accessibility
- **Error:** Rust-colored inline text beneath the field, `aria-invalid` + `aria-describedby` wired to the field

### Navigation
- **Style:** fixed to viewport top, transparent at rest, gains an `ink/80` + `backdrop-blur-md` surface and a hairline bottom border once the page scrolls past 16px
- **Typography:** Label-scale uppercase tracked links, Muted at rest, Paper on hover
- **Mobile:** collapses nav links into a hamburger-triggered drawer; the primary CTA button stays visible in the header bar at every breakpoint (not hidden inside the drawer)

### Automation Console (signature component)
The system's one bespoke, non-generic component: a simulated live operations panel (ticket-triage steps with Done/Running/Queued status, a pulsing "Live" indicator, a hand-drawn sparkline, a running hours-saved counter) inside a rounded-2xl Ink Soft panel with the system's only true shadow and a slow, continuous vertical float (respecting `prefers-reduced-motion`). It exists to make the abstract idea of "automation" visually concrete — every other component in the system is a supporting frame around this one signature object.

## Do's and Don'ts

### Do:
- **Do** keep bronze to labels, hover states, glows, and single accent moments — never a fill color for a large surface.
- **Do** pair every Fraunces-italic phrase with plain Geist sans in the same sentence or heading; italic alone reads off-system.
- **Do** use the uppercase tracked Label style for every section eyebrow, form label, nav link, and stat caption — it is the system's connective tissue.
- **Do** default new sections to an asymmetric split (7:5, 5:4, 4:3, etc.) when they pair two content types, and only stack to a single column on mobile.
- **Do** build elevation from hairline borders and opacity-tinted surfaces first; reach for a real shadow only for a genuine signature object.

### Don't:
- **Don't** introduce a second accent hue outside bronze and the reserved error-only rust — a new saturated color breaks the one-signal system immediately.
- **Don't** use a sharp or small corner radius anywhere; the system has exactly two radii (pill, 16px card).
- **Don't** add a conventional drop shadow to an ordinary card or button — it reads as off-system outside the one reserved signature-shadow use.
- **Don't** run motion unconditionally; every animated element (marquee, pulse, floats, reveals) must respect `prefers-reduced-motion`.
- **Don't** center a two-content-type section symmetrically — the system's directional-split identity depends on asymmetry.
