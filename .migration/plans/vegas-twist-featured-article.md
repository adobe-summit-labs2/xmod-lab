# Vegas Twist for Featured Article

## Overview
Give the featured-article block on the homepage a fun Las Vegas theme by updating the text content — the category tag, headline, description, and link text — while preserving the existing block structure, image references, and HTML markup.

## Current Content (Featured Article block, lines 32–55)
- **Tag line:** `Gear Guide · Hiking`
- **Headline:** `Sub-10 lb: What to Cut, What to Keep`
- **Description:** An honest guide to ultralight backpacking — where the weight actually lives, what to cut, what to keep, and when to ignore all of it.
- **Link text:** `Read the Story` (links to `/blog/ultralight-backpacking`)

## Planned Changes
Update text content in `content/index.plain.html` within the featured-article block only:

| Field | Current | Vegas Twist |
|-------|---------|-------------|
| Tag | `Gear Guide · Hiking` | `High Roller · Vegas` |
| Headline | `Sub-10 lb: What to Cut, What to Keep` | `All In: What to Bet, What to Fold` |
| Description | An honest guide to ultralight backpacking... | An honest guide to Las Vegas adventure — where the real thrills hide, what to splurge on, what to skip, and when to let it ride. |
| Link text | `Read the Story` | `Roll the Dice` |

## Scope
- **Only** editing the featured-article block text (lines 43–47)
- **No changes** to images, block structure, section metadata, CSS, or JS
- **No changes** to the link href (keeps existing `/blog/ultralight-backpacking`)

## Checklist
- [ ] Edit the tag line from `Gear Guide · Hiking` to `High Roller · Vegas`
- [ ] Edit the heading from `Sub-10 lb: What to Cut, What to Keep` to `All In: What to Bet, What to Fold`
- [ ] Update the heading `id` attribute to match the new text
- [ ] Edit the description paragraph to the Vegas-themed version
- [ ] Edit the link text from `Read the Story` to `Roll the Dice`
- [ ] Verify the preview renders correctly

---

## Regarding "Migrate a site to AEM"

To kick off a full site migration, I need to know which website you'd like to migrate. Please provide the URL(s) of the pages you want to bring into AEM Edge Delivery Services, and I'll create a dedicated migration plan using the site migration workflow.

> **Note:** The Vegas twist edits above are ready for execution — exit Plan mode to proceed. The site migration request will be handled as a separate workflow once URLs are provided.
