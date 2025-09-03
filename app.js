// Main App Module
import { initClock } from './clock.js';
import { initTheme } from './theme.js';
import { initMenu } from './menu.js';
import { initNotes } from './notes.js';
import { initQuote } from './quote.js';
import { initMood } from './mood.js';

document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTheme();
  initMenu();
  initNotes();
  initQuote();
  initMood();

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Background image changer
  const bgBtn = document.getElementById('bgBtn');
  if (bgBtn) {
    bgBtn.addEventListener('click', () => {
      // Rotate through 4 subtle abstract backgrounds (no external fetch; using gradients by toggling a class)
      document.body.classList.toggle('light'); // also gives a visual change
    });
  }

  // Contact form validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = /** @type {HTMLInputElement} */(document.getElementById('name'));
      const email = /** @type {HTMLInputElement} */(document.getElementById('email'));
      const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message'));
      const msg = document.getElementById('formMsg');

      try {
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
          throw new Error('Please fill in all fields.');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          throw new Error('Please enter a valid email address.');
        }
        msg.textContent = 'Thanks, your message has been sent (demo)!';
      } catch (err) {
        msg.textContent = err.message;
      }
    });
  }
});
