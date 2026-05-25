# 🏋️‍♂️ Rahul Chauhan Fitness - Portfolio

A premium, custom-built multi-page frontend website designed for an elite personal trainer and body transformation coach based in the UK. 

The main goal was to build a clean, high-contrast, dark-theme portfolio that looks premium on desktop and handles video and client inquiries seamlessly.

🔗 **Live Link:** [rahulchauhanfitness.netlify.app](https://rahulchauhanfitness.netlify.app)

---

## The Build

* **Vanilla Stack:** Raw HTML5, custom CSS variables, and modern Flexbox/Grid layouts. No heavy frameworks, keeping page load speeds near instant.
* **Video Automation:** Used a vanilla JavaScript `IntersectionObserver` to automatically auto-play and loop gym background reels only when they are visible on screen, protecting mobile battery life and data.
* **Native Forms via Netlify:** Integrated asynchronous form processing using Netlify's backend form tracking. Submissions trigger a sleek custom success modal layout without annoying page redirects.
* **Mobile Clean Up:** Fully optimized using fluid typography layouts and targeted mobile media queries to ensure navigation links, grids, and pricing tables stack beautifully on small touchscreens.

---

## A Note on Architecture & Security

Since this is a fully static client-side codebase hosted on Netlify, form data ingestion is handled natively by the hosting edge infrastructure. No database strings, private third-party form handler keys, or email tokens are exposed anywhere in the frontend JavaScript source code.

---

## Running It Locally

1. Clone it:
   ```bash
   git clone [https://github.com/Jattinkumar/rahul-chauhan-fitness.git](https://github.com/Jattinkumar/rahul-chauhan-fitness.git)

2. UI preview:
   (image-1.png)