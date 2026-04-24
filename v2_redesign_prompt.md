# V2 Redesign Prompt — Usability Testing Prototypes

## Context

Three prototype pages have been evaluated by classmates via Disqus comments.
NLP cluster analysis on the feedback produced 4 validated pain-point themes.
Build improved V2 versions of each page incorporating the findings below.

The existing files are:
- `singapore-airlines.html` → produce `singapore-airlines-v2.html`
- `netflix-sg.html`         → produce `netflix-sg-v2.html`
- `amazon-sg.html`          → produce `amazon-sg-v2.html`

Do NOT modify the original 3 files. The originals stay live as the "before" version.

---

## General V2 Principles (apply to all 3 pages)

These apply across every redesign based on the cognitive science direction from the cluster analysis:

- **Fitts's Law** — Primary action button reachable within 2 taps. Large touch targets (min 44px).
- **Miller's Law** — Cap simultaneous choices on any screen to 5. Chunk aggressively.
- **Hick's Law** — Use progressive disclosure for secondary actions. Fewer visible options = faster decisions.
- **Nielsen Heuristics** — Every change must address at least one of: visibility of system status, user control & freedom, consistency & standards, error prevention, aesthetic & minimalist design.
- **WCAG 2.2 AA** — Accessible colour contrast throughout. Visible focus states on all interactive elements.
- Design empty, loading, and error states alongside the happy path.

---

## V2 Page 1: Singapore Airlines (`singapore-airlines-v2.html`)

### Pain Point (Cluster 0 — n=10 quotes)
**"Users do not have freedom and control in terms of the landing page as well as booking process."**

### Validated User Feedback
- Unable to change destination country after selection — no undo
- Unable to change the date selection once set
- Cannot choose multi-city in the first place
- No help documentation or FAQs for users
- Lack of user control and freedom — can't undo selection of country

### Specific Changes to Implement

**Booking widget:**
- Add a clear X/reset button on every filled field (origin, destination, dates) so users can undo any selection without refreshing
- Multi-city option must be fully functional in the toggle (One-way / Return / Multi-city) — add/remove flight legs with + and − buttons
- Date picker must prevent selecting a return date earlier than departure date — disable invalid dates visually, show inline error if attempted
- Swap button between origin/destination must animate directionally to match the field layout

**Help & documentation:**
- Add a persistent "?" help icon in the nav that opens a slide-up FAQ drawer (no modal) covering: how to search, baggage policy link, KrisFlyer miles info
- Inline microcopy on ambiguous fields e.g. "Infants must be under 2 years old"

**Freedom & control:**
- Add a "Clear all" button to reset the entire booking widget
- Breadcrumb or step indicator if the flow goes beyond 1 screen
- Back button on every step that returns the user to the previous state without data loss

**Error handling:**
- Non-modal inline error messages directly under the offending field
- Error messages written in plain English e.g. "Return date can't be before your departure date"

---

## V2 Page 2: Netflix Singapore (`netflix-sg-v2.html`)

### Pain Point (Cluster 1 — n=1 quote, expand with Cluster 3 findings)
**"Users do not have visibility of system status."**

### Validated User Feedback
- Thumbnail sizes are inconsistent across different sections
- "More Info" icon should use a standard (i) symbol instead of a dot
- "Top Picks for You" should appear above "Trending in Singapore" — order should reflect relevance to user, not editorial priority
- Emojis in thumbnails are appreciated — reinforce contextual recognition
- Recognition rather than recall: contextual tags like "#2 in Singapore today" are effective, keep and expand

### Specific Changes to Implement

**Visibility of system status:**
- Add skeleton loading states for all content rows — animated grey shimmer cards while content loads
- Progress bar on "Continue Watching" cards must be visible at all times, not just on hover
- Show a subtle "Loading next episode..." toast when playback transitions
- Buffering indicator on the fake video player modal

**Consistency:**
- Standardise thumbnail sizes within each row — all cards in a row must be the same dimensions
- Replace the dot icon on "More Info" with a standard (i) in a circle
- Consistent hover behaviour across all rows — same scale, same animation duration

**Information hierarchy:**
- Reorder content rows: (1) Continue Watching, (2) Top Picks for You, (3) Trending in Singapore, (4) Because You Watched
- Add a relevance label to Top Picks e.g. "Based on your recent watches"

**Recognition over recall:**
- Expand contextual tags on trending cards — show rank + category e.g. "#1 in K-Drama today"
- Genre pills at the top should visibly filter all rows simultaneously with a smooth fade transition, and show a count of results e.g. "K-Drama (12)"

---

## V2 Page 3: Amazon Singapore (`amazon-sg-v2.html`)

### Pain Point (Cluster 2 — n=5 quotes)
**"Too much clutter with inconsistent filters; aesthetic and minimalist design is lacking."**

### Validated User Feedback
- Too much spacing wasted in key areas, poor use of real estate
- Categories are repetitive — selectable from top search bar, left sidebar, AND "Shop by Category" section simultaneously
- Product information order should show delivery date before "Free Prime Delivery" label since Prime is not always available
- Filter and navigation patterns are inconsistent across the page
- Too many choices visible at once — overwhelming

### Specific Changes to Implement

**Declutter:**
- Remove one of the three redundant category entry points — keep top search bar with category dropdown + left sidebar only, remove the "Shop by Category" grid section
- Reduce hero banner to a single featured promotion — no auto-rotating carousel of 3 slides, replace with 1 clean hero + 2 smaller secondary promo tiles beside it
- Tighten spacing throughout — remove excessive padding between sections

**Consistency:**
- Unify all filter UI into one pattern — pill filters or dropdown, not a mix of both
- Product cards must have identical structure across all carousels: image, title (max 2 lines), price, rating, delivery date, Add to Cart
- Delivery date must appear before the Prime label on every card

**Minimalist design:**
- Reduce the number of visible categories in the nav to 5 (Miller's Law) — put the rest under an "All Categories" dropdown
- Limit Deals of the Day to 4 cards visible at once (not 5) — cleaner grid
- Remove countdown timers from product cards — replace with a simpler "Deal ends today" badge

**Buy Now button:**
- Add a "Buy Now" button to every product card, placed directly below the "Add to Cart" button
- Style as a secondary CTA — same width as "Add to Cart" but outlined/ghost style to visually differentiate
- Clicking shows a brief "Redirecting to checkout..." toast (visual only, no backend)

**Filter consistency:**
- Audit all filter UI on the page and standardise to one single pattern — pill filters only
- Remove all dropdowns and mixed filter styles
- All filter interactions must behave identically across every section of the page

**Progressive disclosure:**
- Product detail modal: show only price, rating, and Add to Cart on first view — reveal full specs via "See full details" expand
- Search autocomplete: show max 5 suggestions, group by category

---

## Shared V2 Requirements

- Each V2 file must be fully standalone — no dependencies on the original file
- Add a visible "V2 — Revised" banner or badge at the top of each page so testers immediately know they're on the improved version
- Add a "← View Original" link in the nav that links back to the V1 file
- Disqus embed at the bottom with updated identifiers:
  - `singapore-airlines-v2.html` → `this.page.identifier = 'singapore-airlines-v2'`
  - `netflix-sg-v2.html`         → `this.page.identifier = 'netflix-sg-v2'`
  - `amazon-sg-v2.html`          → `this.page.identifier = 'amazon-sg-v2'`
  - Shortname: `usability-testing-1`
  - Hardcode page URLs:
    - `https://usability-testing.pages.dev/singapore-airlines-v2`
    - `https://usability-testing.pages.dev/netflix-sg-v2`
    - `https://usability-testing.pages.dev/amazon-sg-v2`

---

## Update index.html

After building the 3 V2 files, update `index.html`:
- Replace the 3 placeholder "Not yet available" cards with live links to the V2 files
- Change dashed border to solid on the V2 cards
- Change button text from "Not yet available →" to "Open V2 →"
- Remove the disabled state from the V2 buttons

---

## Final Checks

- [ ] All 3 V2 pages load standalone with no console errors
- [ ] "← View Original" link works on each V2 page
- [ ] "V2 — Revised" badge visible on page load
- [ ] Disqus embed present with correct shortname and unique identifier
- [ ] Responsive at 375px and 1280px
- [ ] All V2 changes directly traceable to a specific piece of user feedback above
- [ ] index.html V2 cards are now live and clickable
- [ ] Do not truncate any file — build each completely before moving to the next
