# Mantra Resort | Luxury Web Experience

A high-end, responsive, multi-page website designed for **Mantra Resort**. This project is built using semantic HTML5, custom modular CSS styling (no frameworks), and clean vanilla JavaScript for interactive modules (such as room filtering, scroll headers, and reservation forms).

---

## Key Features
- **Cinematic Hero Video Banner**: A full-width background video player with smooth fallback poster images.
- **Dynamic Room Grid**: A responsive grid system featuring Deluxe Rooms, Presidential Suites, Honeymoon Suites, and Signature      accommodations with micro-interactions.
- **Interactive Booking System**: A modal reservation form pre-filled based on the user's chosen accommodation.
- **Filterable Room Browser**: Dynamic JS filter category buttons (All, Deluxe, Suites, Signature).
- **Client Testimonial Reviews Grid**: A 3-column guest review layout with star ratings and headshot avatars.
- **Glassmorphic Newsletter Banner**: Center-aligned newsletter banner with thin gold borders and blurred backdrops.
- **Boutique Amenities Grid**: Alternate icon card grid style showing hotel services using modern flat-vector symbols.
- **Responsive Layout**: Designed to scale flawlessly down to tablet (968px) and mobile viewport widths (600px / 480px).

---

##  File Structure
```text
mantra-resort/
├── index.html         # Homepage (Hero, About, Amenities, Reviews, Gallery, Newsletter)
├── rooms.html         # Room Browser page with JavaScript filters & booking modal
├── about.html         # About Us page showing story, stats, boutique cards, & reviews
├── blog.html          # Travel & Gastronomy Journal with search & recent posts widgets
├── contact.html       # Inquiry form page with custom field focus and map placeholder
├── README.md          # Project guide (this file)
│
├── styles/            # Modular CSS files
│   ├── header.css     # Navigation bar transitions, animations, and hover underlines
│   ├── main.css       # Core layout typography, color variables, index grid, & footers
│   ├── rooms.css      # Pricing badges, modal overlays, and check-in input designs
│   ├── about.css      # Core value blocks, statistics grid, and author cards
│   ├── blog.css       # Blog feed column grids and sidebar newsletter widgets
│   └── contact.css    # Inquiry form layouts and map placeholder frames
│
└── images/            # Resort photo assets & customer headshots
    ├── hero.jpg       # Infinity pool sunset overview
    ├── about1.jpg     # Resort entrance lobby facade
    ├── about2.jpg     # Luxury bedroom villa suite
    ├── dining.webp    # Candlelit seaside dining setup
    ├── spa.jpg        # Zen treatment massage room
    ├── beach.webp     # Private tropical white sand cove
    ├── gym.jpg        # Modern garden-view fitness center
    ├── parking.jpg    # Valet entrance at dusk
    ├── 1.png          # Deluxe room bedroom
    ├── 2.jpeg         # Presidential suite balcony hot tub
    ├── 3.png          # Honeymoon suite deck plunge pool
    ├── 4.png          # Signature room custom boutique design
    ├── avatar1.jpg    # Reviewer avatar: Sophia
    ├── avatar2.jpg    # Reviewer avatar: David
    └── avatar3.jpg    # Reviewer avatar: Emma
```

## Styling Guideline
- **Primary Accent**: `#dca73a` (Luxury Gold)
- **Background Dark**: `#121212` (Obsidian Charcoal)
- **Background Light**: `#faf7f2` (Warm Soft Cream)
- **Headings Font**: `'Playfair Display', serif` (Elegance & heritage headings)
- **Body UI Font**: `'Inter', sans-serif` (Clean, legible sans-serif for UI elements)

---

## How to Run Locally
1. **Double-click `index.html`** to open the site directly in any modern web browser.
2. For the best performance (to resolve any local video player source restrictions), run a local server inside the root folder:
   - **Using Python**: `python -m http.server 8000` (then open `http://localhost:8000`)
   - **Using Live Server (VS Code)**: Right-click `index.html` and click **Open with Live Server**.
