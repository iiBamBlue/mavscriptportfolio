/** @format */

import React from 'react';
import './src/pages/styles/contacts.css';

function Contacts() {
  return (
    <section className="contacts-section">
      <h1 className="contacts-title">Contact</h1>
      <p className="contacts-description">
        Feel free to reach out for collaborations or just to say hi!
      </p>
      <form className="contacts-form">
        <input className="contacts-input" type="text" placeholder="Your Name" />
        <input className="contacts-input" type="email" placeholder="Your Email" />
        <textarea className="contacts-textarea" placeholder="Your Message" />
        <button className="contacts-button" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contacts;
