# Design Token Extraction Plan — WKND Adventures

## Overview

Extract and document the complete design token system from the WKND Adventures site (https://wknd-adventures.com/), covering colors, typography, spacing, and component-level tokens. The project already has a well-defined set of tokens in `styles/styles.css` — this plan will verify them against the live source site and identify any gaps or mismatches.

---

## Current State

The project already has design tokens defined as CSS custom properties in `styles/styles.css`:
- **11 color tokens** (background, text, accent, borders, etc.)
- **3 font families** (Instrument Sans for body, Syncopate for headings/buttons)
- **12 font size tokens** (mobile + desktop responsive overrides at 768px)
- **10 spacing tokens** (gaps, padding, container widths)
- **Button tokens** (font, padding, border-radius, shadow, transitions)
- **Component tokens** (card hover, tag pills, text links, glass cards, brand, footer)
- **Dark section overlay tokens** (text-on-dark, text-on-dark-muted)
- **Font files** self-hosted: Syncopate (400, 700) and Instrument Sans (variable 400–700)

## Approach

Use the `excat:excat-complete-design-expert` skill to perform a comprehensive extraction from the original site and cross-reference with the existing tokens. This will:
1. Scrape the original site's computed styles
2. Extract color palette, typography scale, and spacing system
3. Compare extracted values against current `styles/styles.css` tokens
4. Identify any missing or mismatched tokens
5. Produce a structured token report

---

## Checklist

- [ ] **Invoke design expert skill** — Run `excat:excat-complete-design-expert` targeting https://wknd-adventures.com/ to extract tokens from the live site
- [ ] **Extract color palette** — Capture all unique colors used across backgrounds, text, borders, accents, and interactive states
- [ ] **Extract typography scale** — Document font families, weights, sizes (mobile + desktop), line heights, letter spacing, and text transforms
- [ ] **Extract spacing system** — Document margins, paddings, gaps, container widths, and section spacing
- [ ] **Extract component tokens** — Buttons (sizes, radii, shadows), cards (hover states, borders), tags/pills, links
- [ ] **Extract section style tokens** — Dark, accent, secondary section backgrounds and text colors
- [ ] **Cross-reference with existing tokens** — Compare extracted values against current `styles/styles.css` custom properties
- [ ] **Identify gaps** — List any tokens present on the source site but missing from the project
- [ ] **Identify mismatches** — Flag any token values that differ between source and project
- [ ] **Produce token report** — Structured summary of all design tokens with current vs. extracted values

---

## Execution Note

This plan is ready for execution. Switch to **Execute mode** to proceed — the primary action is invoking the `excat:excat-complete-design-expert` skill, which orchestrates the full extraction workflow including site scraping, token analysis, and comparison against the existing CSS custom properties.
