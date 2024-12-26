import React from 'react';
import '../css-files/Navbar.css';
import logo from '../assets/images/logo192.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div className="logo-box">
            <img className="logo" src={logo} alt="DeutschLernen Logo" />
            <span className="logo-text">DeutschLernen</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#niveau">Niveau</a>
          </li>
          <li>
            <Link to="/lectures">Lektionen</Link>
          </li>
          <li>
            <Link to="/wordlist">Wörter List</Link>
          </li>
          <li>
            <Link to="/recommendations">Empfehlungen</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
        </ul>
        <section className="signing-section">
          <Link to="/login">
            <button id="login">Log In</button>
          </Link>
          <Link to="/signup">
            <button id="signup">Sign Up</button>
          </Link>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
