# Usability Testing Webpages — Claude Code Build Prompt

## Project Overview

Build **3 standalone HTML webpages** that are redesigned/improved versions of real-world sites, intended for **usability testing and evaluation** by classmates. Each page must include a **Disqus comments section** at the bottom so testers can leave structured feedback inline.

These are **frontend-only** prototypes (no backend required). All interactions should be simulated with realistic UI — forms, buttons, filters, and flows should feel real even if they don't submit data.

---

## Project Structure

```
usability-test/
├── index.html                  ← Landing page linking to all 3 prototypes
├── singapore-airlines.html     ← Page 1: Singapore Airlines booking flow UI
├── netflix-sg.html             ← Page 2: Netflix Singapore browse homepage
├── amazon-sg.html              ← Page 3: Amazon Singapore homepage
├── shared/
│   ├── styles.css              ← Shared utility styles (optional)
│   └── disqus-config.js        ← Shared Disqus embed config
└── README.md                   ← Setup instructions
```

---

## Shared Requirements (All Pages)

### Disqus Integration
Every page must include a Disqus comments embed at the bottom, preceded by a clear section header:

```html
<!-- At the bottom of every page, before </body> -->
<section id="feedback-section" style="max-width: 900px; margin: 60px auto; padding: 0 24px;">
  <h2>Leave Your Usability Feedback</h2>
  <p>You are testing: <strong>[Page Name]</strong>. Use the comments below to share your experience, pain points, and suggestions.</p>
  <div id="disqus_thread"></div>
</section>

<script>
  var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = '[unique-page-id]'; // e.g. 'singapore-airlines-prototype'
  };
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://YOUR-DISQUS-SHORTNAME.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
</script>
```

> **Note:** Replace `YOUR-DISQUS-SHORTNAME` with your actual Disqus shortname once set up at disqus.com. Each page should have a unique `page.identifier`.

### General Standards
- Pure HTML/CSS/JS only — no build tools, no frameworks
- Fully responsive (mobile + desktop)
- Google Fonts allowed (load via CDN)
- All navigation links can be `href="#"` (no routing needed)
- Realistic placeholder content (real categories, real copy tone)
- Smooth hover states, transitions, micro-interactions
- Sticky navigation headers where appropriate

---

## Page 1: Singapore Airlines (`singapore-airlines.html`)

### Reference
Original: [https://www.singaporeair.com](https://www.singaporeair.com)

### What to Recreate
The **flight booking flow** — homepage with booking widget and destination discovery.

### Key UI Components to Build
1. **Top nav bar** — SIA logo, nav links (Book, Manage, Experience, KrisFlyer), language selector, login button
2. **Hero booking widget** — One-way/Return/Multi-city toggle, origin + destination fields, departure/return date picker, passenger count selector, cabin class dropdown (Economy, Premium Economy, Business, First), Search Flights button
3. **Destination inspiration cards** — 6 cards below the hero, each with: destination city, country, price from SGD, travel mood tag (e.g. "Beach", "City Break", "Culture")
4. **Miles & promotions banner** — KrisFlyer miles promotion strip with CTA
5. **Footer** — Link columns (About SIA, Help, Legal), social icons, Singapore flag

### Improvements to Implement
- Cleaner booking widget with better field labelling and grouping
- Clearer date picker UX — show both departure and return on one calendar
- Reduced hero clutter — let the destination photography breathe
- Cabin class descriptions on hover/expand
- Better mobile stacking of booking widget fields

### Aesthetic Direction
Premium, aspirational airline. Deep navy (`#000080` SIA blue), gold accents (`#C9A84C`), white. Sophisticated serif display font (e.g. Playfair Display) paired with clean sans-serif body. Cinematic hero imagery placeholders using CSS gradient overlays.

---

## Page 2: Netflix Singapore (`netflix-sg.html`)

### Reference
Original: [https://www.netflix.com](https://www.netflix.com)

### What to Recreate
The **Netflix Singapore browse homepage** — logged-in state with content rows.

### Key UI Components to Build
1. **Sticky dark nav** — Netflix logo, Browse dropdown, New & Popular, My List, search icon, notifications bell, profile avatar with dropdown
2. **Hero featured show banner** — Full-width cinematic banner for a featured title (use a realistic show name), show title in bold, short description, Play button, More Info button, maturity rating badge
3. **Content rows** — 4 horizontally scrollable rows with left/right arrow controls:
   - "Continue Watching" — 5 cards with progress bar overlays
   - "Trending in Singapore" — 6 cards with ranking number overlay
   - "Because You Watched..." — 5 cards
   - "Top Picks for You" — 6 cards
4. **Card hover state** — On hover: card scales up, shows title, match percentage, genre tags, Add to List button, Play button
5. **Genre browse row** — Horizontal scrollable genre pill filters at the top (Action, Comedy, Drama, K-Drama, Anime, Documentary)

### Improvements to Implement
- Better keyboard/focus navigation — visible focus states throughout
- Cleaner hover states — less jarring scale, smoother transitions
- Clearer content row labelling and browsability
- Less aggressive autoplay signalling on hover
- Improved mobile layout — larger touch targets on cards

### Aesthetic Direction
Cinematic dark mode. Pure black (`#141414`) background, Netflix red (`#E50914`) used sparingly for key CTAs only. High contrast white text. Bold condensed display font (e.g. Bebas Neue or Anton) for titles, clean sans-serif for body.

---

## Page 3: Amazon Singapore (`amazon-sg.html`)

### Reference
Original: [https://www.amazon.sg](https://www.amazon.sg)

### What to Recreate
The **Amazon SG homepage** — header, hero banner, product carousels, category grid.

### Key UI Components to Build
1. **Header** — Logo, delivery location selector, search bar with category dropdown, account menu, cart icon with badge
2. **Secondary nav** — "All" hamburger menu, category links (Electronics, Fashion, Home, Groceries, Books, Deals)
3. **Hero banner** — Auto-rotating carousel (3 slides, realistic lifestyle imagery placeholders using CSS gradients + text overlays)
4. **Product carousels** — At least 2 rows:
   - "Deals of the Day" — 5 product cards (image placeholder, title, price in SGD, star rating, "Add to Cart")
   - "Local Brands We Love" — 4 Singapore brand product cards
5. **Category grid** — 8 category tiles with icon/image placeholders and labels
6. **Footer** — Back to top button, link columns (Get to Know Us, Connect with Us, etc.), Singapore flag + language selector

### Improvements to Implement
- Less visual noise — reduce banner clutter
- Better search bar prominence and clarity
- Cleaner product cards with consistent spacing
- Improved mobile responsiveness of carousels (horizontal scroll with snap)
- Clearer delivery and Prime callouts

### Aesthetic Direction
Familiar e-commerce feel but cleaner. Warm white background, Amazon orange (`#FF9900`) used intentionally and sparingly. Tighter grid. Trustworthy, efficient, local-feeling.

---

## Landing Page (`index.html`)

Build a clean **index page** that:
- Explains the purpose: "Usability Testing Prototypes — [Your Name/Class]"
- Has 3 cards linking to each prototype with a brief description and "Open Prototype →" button
- Includes a note: "After exploring each page, please scroll to the bottom to leave your feedback via the comments section."

---

## README.md

Generate a `README.md` with:
1. Project purpose
2. How to run locally (open HTML files in browser — no server needed)
3. How to set up Disqus (create account → get shortname → replace placeholder in all 3 HTML files)
4. File structure explanation
5. Note about what's simulated vs. what would need a backend in production

---

## Final Checks Before Delivering

- [ ] All 3 pages load standalone with no console errors
- [ ] Disqus embed placeholder is present and correctly structured on all 3 pages
- [ ] Each page has a unique `disqus_config` identifier
- [ ] Navigation between pages works via the index
- [ ] No Lorem Ipsum — use realistic Singapore-appropriate content
- [ ] Responsive at 375px (mobile) and 1280px (desktop)
- [ ] Hover states and basic interactions work without JS errors
