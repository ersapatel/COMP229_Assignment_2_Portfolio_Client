/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-24
 * File: home.jsx
 */

import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { api } from "../lib/api";
import "./home.css";

export default function Home() {
  const [home, setHomeData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await api("/api/home");
        setHomeData(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const links = home?.homelink ?? home?.homelinks ?? [];

  return (
    <section className="home-wrap">
      <div className="bg-ornament" aria-hidden />

      {/* HERO */}
      <div className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">{home.greeting}</p>
          <h1 className="hero-title">
            I’m <span className="underline">{home.name}</span>.
          </h1>
          <p className="hero-lede">
            I design and build web & mobile software that feels fast, clear, and dependable.
            My day-to-day toolkit includes <strong>React</strong>, <strong>TypeScript</strong>, and
            <strong> Node</strong>. I enjoy turning fuzzy ideas into working products—balancing clean
            architecture with a user-first mindset. Take a look around, and if something resonates,
            let’s talk.
          </p>

          <div className="hero-actions">
            <NavLink to="/projects" className="btn">{home.browse}</NavLink>
            <NavLink to="/contact" className="btn btn-outline">{home.inTouch}</NavLink>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="home-links">
        {links.map(({ to, item, details }, i) => (
          <NavLink to={to} className="link-card" key={to || i}>
            <h3>{item}</h3>
            <p>{details}</p>
          </NavLink>
        ))}
      </div>

      {/* MISSION */}
      <section className="home-mission">
        <h2>{home.missionName}</h2>
        <p>
          {home.missionDetails}
        </p>
      </section>
    </section>
  );
}
