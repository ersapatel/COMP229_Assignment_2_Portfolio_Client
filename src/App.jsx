/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-23
 * File: App.jsx
 */

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import spLogo from './assets/sp-logo.svg';

import Home from "./Page/home";
import AboutMe from "./Page/about-me";
import Projects from "./Page/projects";
import Services from "./Page/services";
import Contact from "./Page/contact";

function Navbar() {
  const base = "nav-link";
  const linkClass = ({ isActive }) => (isActive ? `${base} active` : base);

  return (
    <header className="site-header" role="banner">
      <nav className="nav-inner" role="navigation" aria-label="Main">
        <NavLink to="/" className="brand" aria-label="Home">
           <img className="logo-img" src={spLogo} alt="SP" />
        </NavLink>

        {/* Right: desktop menu */}
        <ul className="menu">
          <li><NavLink end to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
