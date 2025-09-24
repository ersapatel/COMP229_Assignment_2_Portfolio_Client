/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-24
 * File: projects.jsx
 */

import React, { useEffect, useState } from 'react';
import "./projects.css";

import projEcom from "../assets/ecommerce.png";
import projHealth from "../assets/appointment-scheduler.png";
import projLogistics from "../assets/transport.png";

const imageMap = {
  ecommerce: projEcom,
  scheduler: projHealth,
  transport: projLogistics,
};

export default function Projects() {
  const [projects, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await fetch("http://localhost:4242/api/projects");
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };
    fetchProjectsData();
  }, []);
  
  return (
    <section className="projects-section">
      <h1 className="projects-title">{projects.title}</h1>
      <p className="projects-intro">
        {projects.subHeading}  
      </p>

      <div className="projects-grid">
        {(projects?.items ?? []).map((p) => (
          <article className="project-card" key={p.name}>
            <figure className="project-media">
              <img src={imageMap[p.imageName]} loading="lazy" alt={`${p.name} preview`} />
            </figure>

            <h2 className="project-name">{p.name}</h2>
            <p className="project-summary">{p.about}</p>

            <ul className="project-meta inline">
              <li>{p.role}</li>
              <li>Stack: {p.roleStack}</li>
              <li>Timeline: {p.timeline}</li>
            </ul>

            <hr className="project-divider" />

            <ul className="project-highlights">
              {p.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
