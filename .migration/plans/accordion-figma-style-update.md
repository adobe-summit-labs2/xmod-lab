Now I have the Figma design and the current code. Let me analyze the differences.

From the Figma screenshot I can see two states (light and dark/accent variant):

**Light variant (left side — collapsed & expanded):**
- Rounded pill border items (similar to current)
- Collapsed: white/light background, dark text, orange `+` icon on the right
- Expanded: the summary bar has an **orange/accent background** with **white text** and a white `×` icon
- The answer body sits below with a light cream background

**Dark/accent variant (right side):**
- Same structure but the collapsed state has an **orange/accent filled background** with white text
- Expanded state is similar with orange summary and cream body

The key difference from current implementation: **when open, the summary should have a solid orange/accent background with white text and a white × icon**.# FAQ Accordion Figma Styling Plan

## Summary

Restyle the FAQ accordion block (`faq-list`) to match the Figma design. The Figma shows two visual states — the key change from the current implementation is that **when expanded, the summary bar gets a solid accent-colored (orange) background with white text and a white close icon**.

## Figma Design Analysis

From the Figma screenshot, the accordion has these characteristics:

| Element | Collapsed State | Expanded (Open) State |
|---|---|---|
| **Summary bar** | Light bg (`#f0ece4` cream), dark text, rounded pill border, orange `+` icon | **Solid orange (`--accent-color`) background**, **white text**, white `×` icon, rounded top corners |
| **Border** | 1px border with rounded corners (current ≈ correct) | Orange border on the full item |
| **Answer body** | N/A | Light cream/white background, subtle top border, dark body text |
| **Plus/Close icon** | Orange `+` on right side | White `×` (rotated `+`) on right side |
| **Hover** | Warm cream background | N/A |

## Current vs Target Diff

### What stays the same
- Overall structure (`<details>`/`<summary>` pattern) — no JS changes needed
- Rounded 16px border-radius pills
- Plus icon rotating to × on open
- Animated open/close (JS)
- Answer body padding and typography

### What needs to change (CSS only)

1. **`details[open]` border** — change to `var(--faq-accent-color)` (orange) border
2. **`details[open] summary` background** — change from cream (`--faq-hover-bg`) to solid `var(--faq-accent-color)` (orange)
3. **`details[open] summary` text color** — change from dark to `#fff` (white)
4. **`details[open] summary p` color** — ensure white text on children
5. **`details[open] summary::after` color** — change from orange to `#fff` (white × icon)
6. **`details[open] .faq-list-item-body` border-top** — remove or change to subtle, since the orange summary already visually separates
7. **Collapsed summary background** — add subtle cream background (currently transparent, Figma shows cream fill)

## Files to Modify

- **`/workspace/blocks/faq-list/faq-list.css`** — CSS-only changes (no JS or HTML changes needed)

## Checklist

- [ ] Update `details[open]` to have an orange border color
- [ ] Change `details[open] summary` background from cream to solid orange (`var(--faq-accent-color)`)
- [ ] Set `details[open] summary` text and paragraph color to white
- [ ] Change `details[open] summary::after` (× icon) color from orange to white
- [ ] Add subtle cream background to collapsed summary state
- [ ] Verify answer body styling matches Figma (cream/white bg, border-top)
- [ ] Run linter on the updated CSS
- [ ] Preview the page and verify collapsed + expanded states visually match Figma

## Implementation Notes

- All changes are scoped to `.faq-list` selectors — no global impact
- No JS or HTML changes required — this is purely a CSS update
- The existing `--faq-accent-color` custom property already maps to `var(--accent-color)` which is the orange used in Figma
- **Execution requires switching to Execute mode**
