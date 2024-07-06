import React from 'react';
import './Footer.css';
import link from '../../assets/link.png';
import insta from '../../assets/insta.png';
import github from '../../assets/github.svg';

const Footer = () => {
  return (
    <div id='Footer' className='footer'>
      <div className="footer-title">
        <h1>Get in touch</h1>
        <img 
          src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjI3JyBoZWlnaHQ9JzcyJyB2aWV3Qm94PScwIDAgMjI3IDcyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J00wIDYxLjEzOTVDMCA1NS4xOTk5IDUuMTY3MjkgNTAuNTgxNiAxMS4wNjk2IDUxLjI0NTlMMTg3LjAzOSA3MS4wNTJDMjA5LjU5NyA3My41OTEgMjI4LjcwMyA1NC41ODQ0IDIyNi4yODIgMzIuMDEzM0MyMjMuNzYgOC41MDI1NSAxOTkuMzc5IC02LjAwODQxIDE3Ny41MTEgMi45ODYzMUwxMy43NDMzIDcwLjM0NzFDNy4xOTA5OCA3My4wNDIyIDAgNjguMjI0NSAwIDYxLjEzOTVaJyBmaWxsPSd1cmwoI3BhaW50MF9saW5lYXJfMjE2MF8yMyknLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J3BhaW50MF9saW5lYXJfMjE2MF8yMycgeDE9Jzg1MS4zMTgnIHkxPSc0Ny41NTMnIHgyPSc3NTYuNzUxJyB5Mj0nMzM5LjQwMicgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnPjxzdG9wIHN0b3AtY29sb3I9JyNERjg5MDgnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNCNDE1RkYnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=" 
          alt="Mail Icon" 
        />
      </div>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I'm always thrilled to connect with fellow tech enthusiasts!
            If you're eager to geek out and discuss the latest trends, gadgets, or simply want to say hi, don't hesitate to reach out.
          </p>
          <p>
            Feel free to contact me anytime, and let's dive into the world of tech together!
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/atishhh_09/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/aatishsingh-kachhaway-257249226/" target="_blank" rel="noopener noreferrer">
              <img src={link} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Aatish09" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="say-hello">
          <a href="mailto:atishkachhaway@gmail.com">Say Hello</a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 Aatishsingh Kachhaway. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
