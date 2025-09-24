/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-23
 * File: home.jsx
 */

import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <section className="home-wrap">
      <div className="bg-ornament" aria-hidden />

      {/* HERO */}
      <div className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Hello there</p>
          <h1 className="hero-title">
            I’m <span className="underline">Swapnil</span>.
          </h1>
          <p className="hero-lede">
            I design and build web & mobile software that feels fast, clear, and dependable.
            My day-to-day toolkit includes <strong>React</strong>, <strong>TypeScript</strong>, and
            <strong> Node</strong>. I enjoy turning fuzzy ideas into working products—balancing clean
            architecture with a user-first mindset. Take a look around, and if something resonates,
            let’s talk.
          </p>

          <div className="hero-actions">
            <NavLink to="/projects" className="btn">Browse Projects</NavLink>
            <NavLink to="/contact" className="btn btn-outline">Get in Touch</NavLink>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="home-links">
        <NavLink to="/about" className="link-card">
          <h3>About</h3>
          <p>Who I am, how I work, and what I value when building software.</p>
        </NavLink>

        <NavLink to="/services" className="link-card">
          <h3>Services</h3>
          <p>Web/mobile delivery, migrations, content systems, and project leadership.</p>
        </NavLink>

        <NavLink to="/projects" className="link-card">
          <h3>Projects</h3>
          <p>Snapshots of shipped features and the outcomes they achieved.</p>
        </NavLink>
      </div>

      {/* MISSION */}
      <section className="home-mission">
        <h2>My Mission</h2>
        <p>
          Build software that’s easy to use and easy to maintain. I focus on accessibility,
          performance, and clear engineering practices so people get a smooth experience and teams
          can evolve the product confidently.
        </p>
      </section>
    </section>
  );
}
