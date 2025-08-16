<!-- @format -->

# Copilot Quickstart for MavScript.Blu

## Essential Architecture & Workflow

- **SPA Root:** App mounts at `div#root` in `index.html` via `src/main.jsx`.
- **Routing:** All navigation is handled by React Router (`<Routes>` in `App.jsx` and `Routes.jsx`).
- **Pages:** Each page (e.g., `Home.jsx`, `About.jsx`, `Projects.jsx`, `Skills.jsx`, `Contact.jsx`, `WhoIsBlue.jsx`, `NotFound.jsx`) lives in `src/pages/` and has a matching CSS file in `src/pages/styles/` or alongside the component.
- **Components:** Shared UI (NavBar, Footer, Landing, etc.) are in `src/pages/components/` with their own CSS.
- **Styling:** Standard CSS3 is used throughout, with modular CSS files for each page and component. No Tailwind CSS is used.
- **Animation:** Framer Motion is used for page and element transitions (see `motion.section` in most pages).
- **Dark Mode:** Controlled via a state toggle in `App.jsx` and implemented with CSS classes and logic, not Tailwind's `dark:` classes.
- **Ambient Features:** The landing page (`Landing.jsx`) includes an ambient audio toggle and animated entry.

## Developer Workflows

- **Install:** `npm install`
- **Dev Server:** `npm run dev` (Vite-powered, hot reload)
- **Build:** `npm run build` (outputs to `dist/`)
- **Preview:** `npm run preview` (serves built site locally)
- **Lint (optional):** You do not need to run ESLint locally; code can be linted online as needed.
- **Deploy:**
  1. `npm run build`
  2. `npm install --save-dev gh-pages`
  3. Add `predeploy` and `deploy` scripts to `package.json`:
  - `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`
  4. `npm run deploy` (deploys to GitHub Pages)

## Key Conventions & Patterns

- **Component Naming:** PascalCase for React components; lower-case for CSS class names.
- **CSS Organization:** Each page/component has its own CSS file, typically in the same folder or in `styles/`.
- **Routing:** Use `<Link>` for internal navigation, not `<a href>`, except in NavBar for top-level links.
- **Animation:** Use Framer Motion for all animated transitions (see `motion.section` and `motion.div`).
- **Dark Mode:** Use the `darkMode` state in `App.jsx` and apply dark mode styles via CSS classes and logic.
- **Ambient Audio:** Ambient audio should be available throughout the project, not just on the landing page. Implement a global audio controller or context as needed.
- **Validation:** Placeholder files exist in `src/validation/` for future form validation logic.

## Integration Points

- **External:**
  - Framer Motion for animation
  - React Router for navigation
  - GitHub Pages for deployment
- **No backend:** All data is static or client-side only.

## Examples

- **Animated Section:** See `src/pages/Home.jsx` for Framer Motion usage.
- **Dark Mode Toggle:** See `App.jsx` for state and CSS class logic.
- **Ambient Audio:** See `Landing.jsx` for audio toggle logic.
- **Project Cards:** See `Projects.jsx` for mapping and animating project data.

---

# Appendix: Design Philosophy, Prompts, and Options

## Design Principles

- Prioritize clarity and empathy in design.
- Use ambient visuals to evoke calm and curiosity.
- Highlight resilience, adaptability, and team empowerment.
- Keep code modular and accessible.

## Aesthetic Options

### Option 1: Clean, Technical, Confident

- Deep blue/slate gray primary, azure/electric teal accent, light gray background
- Montserrat/Poppins headers, Roboto/Open Sans body
- Responsive grid, sticky nav, project cards with hover

### Option 2: “Midnight Bonfire Meets Coastal Tech”

- Night-cozy palette, seafoam/mint accents, warm amber highlights
- Playfair/Cormorant headers, Inter/Open Sans body
- Animated gradients, SVGs, ambient toggles, poetic bio page

## Prompts & Suggestions for Copilot

- Add new project cards dynamically from a JSON file with hover effects
- Animate scroll transitions between sections
- Animate page transitions for smoother UX
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
// Add a toggle for switching between two CSS3 themes
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
├── styles/
│ ├── ambient.css     • → styles for ambient audio
│ ├── button.css      • → styles for buttons
│ ├── form.css        • → styles for forms
│ └── typography.css  • → styles for typography
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
```

---
For more details, see `README.md` and the `src/pages/` and `src/pages/components/` directories.
````
