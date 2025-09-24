/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-23
 * File: projects.jsx
 */

import "./projects.css";

import projEcom from "../assets/ecommerce.png";
import projHealth from "../assets/appointment-scheduler.png";
import projLogistics from "../assets/transport.png";

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-intro">
        A selection of recent work—focused on outcomes and tech choices, without naming specific companies.
      </p>

      <div className="projects-grid">
        {/* 1) Retail E-commerce Platform */}
        <article className="project-card">
          <figure className="project-media">
            <img src={projEcom} loading="lazy" />
          </figure>
          <h2 className="project-name">Retail E-commerce Platform</h2>
          <p className="project-summary">
            Rebuilt a high-traffic storefront and admin portal for scalability and speed.
            Introduced design system components, improved Core Web Vitals, and streamlined checkout.
          </p>
          <ul className="project-meta inline">
            <li>Role: Frontend Engineer</li>
            <li>Stack: React, TypeScript, Node</li>
            <li>Timeline: 2024</li>
          </ul>
          <hr className="project-divider" />
          <ul className="project-highlights">
            <li>+25% faster page loads; Lighthouse 95+ on key flows</li>
            <li>Reusable component library & accessible patterns</li>
            <li>Payment & tax integrations with automated tests</li>
          </ul>
        </article>

        {/* 2) Healthcare Appointment App */}
        <article className="project-card">
          <figure className="project-media">
            <img src={projHealth} loading="lazy" />
          </figure>
          <h2 className="project-name">Healthcare Appointment App</h2>
          <p className="project-summary">
            Built a secure booking experience with virtual-visit support, reminders, and role-based access.
          </p>
          <ul className="project-meta inline">
            <li>Role: Full-stack Dev</li>
            <li>Stack: React, Node, PostgreSQL</li>
            <li>Timeline: 2023</li>
          </ul>
          <hr className="project-divider" />
          <ul className="project-highlights">
            <li>Provider/patient views with availability & triage</li>
            <li>Audit trails and configurable retention policies</li>
            <li>CI/CD with automated integration tests</li>
          </ul>
        </article>

        {/* 3) Logistics Tracking Portal */}
        <article className="project-card">
          <figure className="project-media">
            <img src={projLogistics} loading="lazy" />
          </figure>
          <h2 className="project-name">Logistics Tracking Portal</h2>
          <p className="project-summary">
            Implemented a real-time shipment tracker with maps, alerts, and operational dashboards.
          </p>
          <ul className="project-meta inline">
            <li>Role: Frontend Dev</li>
            <li>Stack: Angular, RxJS, Map SDK</li>
            <li>Timeline: 2022</li>
          </ul>
          <hr className="project-divider" />
          <ul className="project-highlights">
            <li>Streaming updates with back-pressure friendly observables</li>
            <li>Granular permissions for vendors/ops/admins</li>
            <li>Exportable reports & SLA monitoring</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
