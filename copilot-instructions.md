<!-- @format -->

---

# 🧭 `copilot-instructions.md`

```markdown
## Copilot Instructions for MavScript.Blu

## Purpose

This file outlines how GitHub Copilot can assist in expanding or maintaining the MavScript.Blu portfolio. There are 2 options in some fields: apply option one unless otherwise specified.

This project is designed to reflect Darien’s unique blend of technical mastery and servant leadership. When contributing or extending this portfolio, keep these principles in mind:

- Prioritize clarity and empathy in design.
- Use ambient visuals to evoke calm and curiosity.
- Highlight resilience, adaptability, and team empowerment.
- Keep code modular and accessible.
```

---

```markdown
# Design Option One

## 🎨 Design Style

### Theme: Clean, technical, and confident

    - Primary: Deep blue or slate gray (trustworthy, professional)
    - Accent: Azure or electric teal (nod to cloud/tech)
    - Background: Light gray or off-white for readability

### Fonts:

    - Header: Montserrat or Poppins (modern, bold)
    - Body: Roboto or Open Sans (clean, readable)

### Layout:

    - Responsive grid (mobile-friendly)
    - Sticky nav bar with smooth scroll
    - Cards or tiles for projects with hover effects
```

---

```markdown
# 🌙 Portfolio Vibe Integration: “Midnight Bonfire Meets Coastal Tech”

## Design Option Two

### 🧠 Core Aesthetic Themes

- Night-active, sun-drenched sleeper ☀️🌒
- Cozy tech with coastal planner-core
- No blackout energy—just open windows, houseplants, and warm breezes
- Powered by moonlight. Recharged in sunspots. Coded in espresso and sea foam.

## 🎨 Visual Design Updates

### 🌈 Color Palette

| Element | Color | Description |
| Background | Soft slate gray / mist blue | Calm, night-cozy |
| Accent | Seafoam green / mint teal | Coastal clarity |
| Highlight | Warm amber / sunbeam yellow | Daylight recharge energy |
| Text | Off-white / sand beige | Gentle contrast, easy on the eyes |

### 🌿 Fonts

- Headers: Playfair Display or Cormorant Garamond (serif, poetic)
- Body: Inter or Open Sans (clean, modern)

## 🌌 Interactive Elements

### 🔦 Hover Effects

- Buttons glow like moonlight on water
- Cards ripple gently on hover (Framer Motion)

### 🖼️ Background Imagery

- Subtle animated gradients (mint → slate → amber)
- Optional SVGs: houseplants, open windows, tide pools

## 🧠 Additions

- “Who is Blue” Page: A poetic character bio with scroll-triggered animations
- Ambient Mode Toggle: Switch between “Sunspot” and “Moonlight” themes
- Lo-fi Sound Toggle: Background audio option (mint tea + lo-fi beats)
```

---

## 🏗️ Tech Stack Suggestions

You can build it with:

# Option 1: Static Site (Fast & Simple)

- Framework: Astro or Next.js
- Styling: Tailwind CSS (clean utility-first styling)
- Hosting: GitHub Pages, Vercel, or Netlify

# Option 2: Interactive Site (More Dynamic)

- Framework: React with Vite (fast development and build times)
- CMS (optional): Sanity or Contentful for blog/posts
- Extras: Add animations with Framer Motion or GSAP

---

## Suggestions for Copilot

- Add new project cards dynamically from a JSON file with hover effects.
- Animate scroll transitions between sections
- Animate page transitions for smoother UX.
- Create a blog engine with Markdown rendering
- Add ambient theme toggles (Sunspot vs Moonlight)
- Build a contact form with validation
- Integrate Express backend for form submissions
- Connect MongoDB for storing visitor messages or blog posts
- Improve accessibility by adding ARIA labels and roles
- Enhance SEO with meta tags and structured data
- Update documentation for clarity and completeness

````

// ## Prompts to Try

// Create a new React component for a blog post card
// Animate a button with Framer Motion on hover
// Add a toggle for switching between two Tailwind themes
// Build a REST API endpoint in Express for contact form
// Create a MongoDB model for storing visitor messages
// Implement form validation and error handling
// Add user authentication (e.g., JWT, OAuth)
// Create a user profile page with editable information
// Implement a dark mode toggle
// Add a lo-fi sound toggle
// Create a landing page with ambient music toggle
// Implement a scroll-to-top button
// - Add a "Back to Top" link in the footer
// Create a loading spinner for async actions
// Implement a service worker for offline support
// Add push notifications for new content
// Create a sitemap for better SEO
// Implement lazy loading for images
// Optimize images and assets for faster loading

---

## Suggestions for Copilot

# File Structure Update

```src/
├── App.jsx
├── main.jsx
├── index.css      • → page indexing
├── styles.css     • → global styles
├── pages/
│ ├── Landing.jsx     • → ambient music + entry
│ ├── About.jsx       • → origin story: manufacturing → Software Engineer
│ ├── about.css       • → styles for about page
│ ├── Projects.jsx    • → Showcase technical work // syntax with soul
│ ├── projects.css    • → styles for projects page
│ ├── Skills.jsx      • → Highlight tools, languages, and platforms you use // coastal clarity
│ ├── skills.css      • → styles for skills page
│ ├── Contact.jsx     • → open windows (email, LinkedIn, GitHub)
│ ├── contact.css     • → styles for contact page
│ ├── WhoIsBlue.jsx   • → ambient character bio
│ └── whoisblue.css   • → styles for Who Is Blue page
├── components/
│ ├── Navbar.jsx      • → dark mode + routing
│ ├── navbar.css      • → styles for navbar
│ ├── Home.jsx        • → poetic welcome
│ ├── home.css        • → styles for home page
│ ├── Footer.jsx      • → soft sign-off
│ └── footer.css      • → styles for footer
├── validation/
│ ├── index.js      • → validation logic
│ ├── NotFound.jsx    • → animated 404
│ └── schemas.js    • → validation schemas
````

```

```
