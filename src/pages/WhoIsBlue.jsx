/** @format */
import React from 'react';
import './styles/whoisblue.css';
import { motion } from 'framer-motion';

function WhoIsBlue() {
  return (
    <section className="whoisblue-section">
      <h1 className="whoisblue-title">Who is Blue?</h1>
      <p className="whoisblue-description">
        Blue is a creative developer passionate about blending design and code to craft unique
        digital experiences. With a background in both art and technology, Blue brings a poetic
        touch to every project.
      </p>
      <ul className="whoisblue-list">
        <li className="whoisblue-item">UI/UX Design</li>
        <li className="whoisblue-item">Frontend Development</li>
        <li className="whoisblue-item">Motion Graphics</li>
        <li className="whoisblue-item">Creative Coding</li>
      </ul>
    </section>
  );
}

export default WhoIsBlue;
