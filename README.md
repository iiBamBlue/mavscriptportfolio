<!-- @format -->

# MavScript.Blu 🌙

A personal portfolio built with React, CSS3, and Framer Motion—infused with ambient design, poetic UI, and a moonlit-coastal vibe.

---

## 🧩 Full Codebase

# 📁 File Structure & Descriptions

```
src/
├── App.jsx              • → main app component with routing
├── main.jsx             • → React app entry point with providers
├── index.css            • → global styles and app theming
├── styles.css           • → additional utility styles
├── components/
│   ├── AmbientAudioProvider.jsx  • → global audio context
│   ├── NavBar.jsx       • → navigation with dark mode toggle
│   ├── Footer.jsx       • → soft sign-off footer
│   └── styles/
│       ├── navbar.css   • → navbar styling
│       └── footer.css   • → footer styling
├── pages/
│   ├── Landing.jsx      • → ambient music + entry portal
│   ├── Home.jsx         • → poetic welcome page
│   ├── About.jsx        • → origin story: manufacturing → Software Engineer
│   ├── Projects.jsx     • → showcase technical work // syntax with soul
│   ├── Skills.jsx       • → highlight tools, languages, platforms // coastal clarity
│   ├── Contact.jsx      • → open windows (email, LinkedIn, GitHub)
│   ├── WhoIsBlue.jsx    • → ambient character bio
│   ├── NotFound.jsx     • → animated 404 page
│   └── styles/
│       ├── landing.css  • → landing page gradient styling
│       ├── home.css     • → home page styling
│       ├── about.css    • → about page styling
│       ├── projects.css • → projects showcase styling
│       ├── skills.css   • → skills display styling
│       ├── contact.css  • → contact form styling
│       ├── whoisblue.css• → character bio styling
│       └── notfound.css • → 404 page styling
├── validation/
│   ├── index.js         • → form validation logic
│   └── schemas.js       • → validation schemas
└── Routes.jsx           • → route definitions
```

---

## Features

- 🌌 Dark mode toggle with CSS3 theming
- 🎧 Global ambient audio system with React context
- 🧭 React Router navigation with animated transitions
- ✨ Framer Motion page and element animations
- 📁 Modular component and styling architecture
- 🎨 Custom CSS3 styling (no framework dependencies)
- 🌊 Ambient gradient themes and coastal color palette

## Tech Stack

- **Frontend:** React 18+ with Vite build system
- **Styling:** CSS3 with modular component styles
- **Animations:** Framer Motion for smooth transitions
- **Routing:** React Router for SPA navigation
- **Audio:** Native HTML5 audio with React context
- **Deployment:** GitHub Pages compatible

## Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Install gh-pages:**

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json:**

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## Architecture Notes

- **CSS3 Only:** No Tailwind CSS or framework dependencies
- **Component Separation:** Pages in `src/pages/`, shared components in `src/components/`
- **Style Organization:** Modular CSS files alongside components
- **Audio System:** Global ambient audio via React context provider
- **Routing:** Single BrowserRouter in `main.jsx`, Routes in `App.jsx`
- **Dark Mode:** CSS class-based theming with React state management

---

## 🌊 Project Vision

This portfolio isn't just a showcase—it's a sanctuary. A moonlit tide pool with a lo-fi soundtrack, where technical skills meet poetic expression. Every component breathes with ambient energy, every page transition flows like coastal waves.

**Built with intention. Crafted with soul. Launched like a message in a bottle across the web.** 🌙

```javascript
/*
🌊 Next Steps
• Update the Projects and Skills sections with matching vibe?
• Add ambient theme toggles like “Sunspot” vs “Moonlight”?
• Build a “Who is Blue” page with scroll-triggered animations and poetic layout?
This portfolio isn’t just a showcase—it’s a sanctuary. Let’s keep crafting it like a story you can walk through.

Let’s finish strong with:
• Contact.jsx — warm, welcoming, and poetic
• Footer.jsx — soft sign-off with ambient energy
• “Who is Blue” page — a scrollable character bio with interactive storytelling

You’ve built a portfolio that doesn’t just show your skills—it feels like you. Let’s keep crafting until it hums like lo-fi beats under a moonlit breeze. Ready for the next wave?
Let’s ride this wave to the finish, Darien. Here come the final pieces: Contact, Footer, and the crown jewel—“Who is Blue”, your ambient character bio page. Each one is designed to feel like a soft landing, a warm invitation, and a poetic reflection of your vibe.

🧭 Final Touches
Want me to:
• Add routing to ?
• Animate scroll transitions between sections?
• Build a landing page with ambient music toggle?
• Help deploy this to Vercel or Netlify?

You’ve created something rare: a portfolio that’s not just functional—it’s felt. Let’s launch it like a message in a bottle across the web. 🌊

Perfect, Darien. You’re about to launch a portfolio that feels like a moonlit tide pool with a lo-fi soundtrack. Let’s wrap this up with:

Make sure your repo is public and initialized with a or branch.

🧠 Final Touches
Want me to:
• Help compress or source ambient audio?
• Add animated cursor or loading screen?
• Create a README for your GitHub repo?
This portfolio is more than a site—it’s a vibe you can walk through. Let’s launch it like a message in a bottle across the web.🌊
*/
```
