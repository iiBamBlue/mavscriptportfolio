/** @format */
import React from 'react';
import { useAmbientAudio } from './AmbientAudioProvider';
import './navbar.css';

function NavBar() {
  const { playing, toggleAudio } = useAmbientAudio();
  return (
    <nav className="navbar">
      <div className="navbar-logo">MavScript</div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="/skills">Skills</a>
        </li>
        <li className="navbar-item">
          <a href="/whoisblue">Who is Blue?</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className="ambient-audio-toggle" onClick={toggleAudio} style={{ marginLeft: 16 }}>
        {playing ? '🔊 Pause Ambient' : '🎧 Play Ambient'}
      </button>
    </nav>
  );
}

export default NavBar;
