/** @format */
import React from 'react';
import './styles/notfound.css';

function NotFound() {
  return (
    <section className="notfound-section">
      <h1 className="notfound-title">404 - Page Not Found</h1>
      <p className="notfound-description">Sorry, the page you are looking for does not exist.</p>
      <a className="notfound-link" href="/">
        Return Home
      </a>
    </section>
  );
}

export default NotFound;

/* 🔥 What This Adds
- Fade + scale entrance for the whole section
- Bounce animation on the “404” header
- Delayed fade-in for the message
- Hover scale on the button

🧠 Bonus Ideas
Want to go further?
- Add a floating astronaut or rocket SVG with motion paths
- Use Lottie for animated illustrations
- Trigger confetti or particle effects on button click
Let me know your vibe—quirky, cosmic, minimalist—and I’ll tailor the animation style to match.
*/
