# Hero Image Update — Snowy Mountain Ridge

## Summary
Replace the current hero background image on the homepage with a royalty-free snowy mountain ridge photo and update the alt text accordingly.

## Current State
- **File:** `content/index.plain.html`
- **Current image:** `media_137e525a8479336997a84917d2ad521f873e4df22.jpg` (wild mountain landscape at dawn)
- **Current alt text:** "Wild mountain landscape at dawn"
- **Block:** Hero block in dark section (first section on the homepage)

## Planned Changes

### 1. Select Image
- [ ] Use an Unsplash royalty-free snowy mountain ridge image (e.g., from Unsplash's landscape collection)
- Example candidate: `https://images.unsplash.com/photo-1519681393784-d120267933ba` (snowy mountain ridge at night with stars) — a well-known, high-quality landscape shot

### 2. Update `content/index.plain.html`
- [ ] Replace all four `srcset`/`src` references in the hero `<picture>` element (lines 7–10) with the new image URL
- [ ] Update `alt` text to describe the new image (e.g., "Snowy mountain ridge under a starlit sky")
- [ ] Keep `width` and `height` attributes reasonable for the new image aspect ratio

### 3. Verify
- [ ] Preview the homepage to confirm the new hero image renders correctly
- [ ] Ensure the text overlay remains legible against the new image
- [ ] Run `npm run lint` to confirm no issues

## Checklist
- [ ] Choose final stock image URL
- [ ] Edit hero `<picture>` in `content/index.plain.html`
- [ ] Update alt text
- [ ] Preview and verify rendering
- [ ] Lint check

---

*Execution requires exiting plan mode.*
