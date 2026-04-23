# Usability Testing Prototypes

Three standalone, high-fidelity HTML prototypes for usability research. No frameworks, no build step — open any file directly in a browser.

## Files

```
dummy_website/
├── index.html                   Landing page linking all three prototypes
├── singapore-airlines.html      Singapore Airlines booking flow
├── netflix-sg.html              Netflix Singapore browse homepage (logged-in)
├── amazon-sg.html               Amazon Singapore homepage
├── shared/
│   └── disqus-config.js         Shared lazy-loading Disqus embed
└── README.md                    This file
```

## Running locally

No build step needed. Open any file in a modern browser:

```bash
# Option 1: Python local server (recommended — avoids CORS on shared/ assets)
cd dummy_website
python3 -m http.server 8080
# Then open http://localhost:8080

# Option 2: Node http-server
npx http-server . -p 8080
# Then open http://localhost:8080

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

> **Note:** You can also double-click any `.html` file directly — all assets use relative paths. The Disqus embed requires an internet connection and a valid shortname (see setup below).

## Disqus setup

1. Create a free account at [disqus.com](https://disqus.com).
2. Create a new site and note your **shortname**.
3. Open `shared/disqus-config.js` and replace the placeholder:

```js
// Line 30 in disqus-config.js
var SHORTNAME = 'YOUR-DISQUS-SHORTNAME';
//               ↑ replace this
```

Each page already has a unique `page.identifier`:

| Page | Identifier |
|---|---|
| `singapore-airlines.html` | `singapore-airlines-booking` |
| `netflix-sg.html` | `netflix-sg-homepage` |
| `amazon-sg.html` | `amazon-sg-homepage` |

## Browser support

Tested on current versions of Chrome, Firefox, Safari, and Edge. Responsive at 375 px (mobile) and 1280 px (desktop).

## Prototype details

### Singapore Airlines (`singapore-airlines.html`)

**Interactions:**
- Return / One Way / Multi-City tabs toggle the return date field
- Swap button animates and exchanges origin ↔ destination values
- Cabin class dropdown updates the displayed label
- Date picker opens as a focusable modal overlay with two months; days can be selected and highlighted as a range; Escape closes it
- Passenger selector panel opens inline, with +/− buttons for Adults / Children / Infants
- Destination cards scroll focus, respond to Enter key, and populate the destination field on click
- Search button shows a spinner animation for 2 s
- Hamburger nav works on mobile

**Aesthetic:** Deep navy (`#00205b`) + gold (`#c9a84c`); Playfair Display headings, Inter body.

---

### Netflix Singapore (`netflix-sg.html`)

**Interactions:**
- Nav becomes opaque `rgba(20,20,20,0.98)` on scroll
- Search bar expands/collapses with keyboard focus; Escape closes it
- Hero Play and More Info buttons are fully interactive
- Four content rows: Continue Watching (wider cards + progress bars), Trending in Singapore, Because You Watched, Top Picks for You
- Show cards scale up on hover with an overlay panel (play, add, like, more-info buttons with focus states)
- Arrow buttons scroll each row by ~85% of the visible width; touch-swipe also works
- All content is generated from JavaScript data arrays (no external images needed)

**Aesthetic:** Pure black/dark mode; Netflix red (`#e50914`) used sparingly; Bebas Neue headings.

---

### Amazon Singapore (`amazon-sg.html`)

**Interactions:**
- Search bar highlights with orange focus ring on focus-within
- Header location, account, and cart links have visible orange focus borders
- Hero banner auto-advances every 5 s, pauses on hover; arrow buttons and dot indicators navigate manually; touch swipe supported
- Add to Cart button changes to green "✓ Added" with a 1.8 s timeout, and increments the cart badge
- Product scroll rows reveal arrow buttons on hover; arrows scroll 80% of the row width
- Category grid tiles lift on hover
- Footer "Back to top" smoothly scrolls the page

**Aesthetic:** Warm white (`#f3f3f3`) background; Amazon orange (`#ff9900`) for interactive elements; clean Inter sans-serif throughout.

## Notes for test facilitators

- All prototypes are **read-only** — no data is persisted or transmitted.
- Console errors: none on load (Google Fonts CDN requests require internet; Disqus embed requires a valid shortname).
- To test offline: remove the Google Fonts `<link>` tags; the pages fall back to system sans-serif / serif fonts gracefully.
- Each Disqus `page.identifier` is unique so comment threads are kept separate per prototype.
