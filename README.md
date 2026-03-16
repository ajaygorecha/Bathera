# Bathera Bathware

Premium bathware and sanitaryware brand website — modern ceramic craftsmanship designed for luxury bathrooms.

## Live Site

Deployed on [Vercel](https://vercel.com). Clean URLs are enabled (`/about` instead of `/about.html`).

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, about, product categories, quality, export, contact |
| About | `about.html` | Brand story and company details |
| Products | `products.html` | Full product catalog |
| Contact | `contact.html` | Contact form and business info |

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom styles in `css/style.css`
- **JavaScript** — `js/main.js`
- **Bootstrap 5.3** — Grid and responsive utilities (CDN)
- **GSAP + ScrollTrigger** — Scroll-based animations (CDN)
- **Remix Icons** — Icon set (CDN)

## Project Structure

```
├── index.html
├── about.html
├── products.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── bathera-logo.svg
├── vercel.json
└── README.md
```

## Getting Started

No build step required. Open `index.html` in a browser or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .
```

## Deployment

The site is deployed on Vercel as a static project. Push to the `main` branch to trigger a deployment.

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Teal | `#1C969C` | Buttons, accents |
| Dark Navy | `#05091E` | Backgrounds |
| Accent Highlight | `#2FCCD2` | Hover states, highlights |
| Dark Surface | `#0E1325` | Section backgrounds |
| White | `#FFFFFF` | Primary text |
| Light Gray | `#E5E5E5` | Secondary text |

## License

All rights reserved. &copy; 2026 Bathera Bathware.

---

Designed & Developed by [Dezvo](https://dezvo.in)
