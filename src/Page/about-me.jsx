/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-24
 * File: about-me.jsx
 */

import React, { useEffect, useState } from 'react';
import { api } from "../lib/api";
import "./about-me.css";
import me from "../assets/me.jpg";
import resumePdf from "../assets/Resume.pdf";

export default function AboutMe() {
  const [about, setAboutData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await api("/api/about");
        setAboutData(data);
      } catch (e) {
        console.error("Error fetching about data:", e);
      }
    })();
  }, []);

  return (
    <section className="about-section">
      <div className="about-grid">
        
        <div className="about-copy">
          <h1 className="about-name">{about.name}</h1>
          <p className="about-lede">
            {about.details}
          </p>
          <div className="about-actions">
            <a className="btn" href={resumePdf} download type="application/pdf">
              Download Resume (PDF)
            </a>
          </div>
        </div>
        <aside className="about-media" aria-label="Profile photo">
          <div className="avatar-frame">
            <img src={me} alt="[Your Name] portrait" className="avatar-img" />
          </div>
        </aside>
      </div>
    </section>
  );
}
