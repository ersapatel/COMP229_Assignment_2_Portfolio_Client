/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-24
 * File: services.jsx
 */

import React, { useEffect, useState } from 'react';
import { api } from "../lib/api";
import './services.css';

export default function Services() {
  const [services, setServicesData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await api("/api/services");
        setServicesData(data);
      } catch (e) {
        console.error("Error fetching services data:", e);
      }
    })();
  }, []);
  
    return (
    <section className="services-section">
      <h1 className="services-title">{services.title}</h1>
      <p className="services-intro">
        {services.subHeading}
      </p>

      <div className="services-grid">
        {(services?.items ?? []).map((s) => (
          <article className="service-card" key={s.slug || s.id || s.title}>
            <h2 className="service-title">{s.title}</h2>
            <p className="service-blurb">{s.blurb}</p>

            <ul className="service-points inline">
              {(s.points ?? []).map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
    );
}