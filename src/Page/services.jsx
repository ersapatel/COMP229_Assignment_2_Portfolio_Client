/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-23
 * File: services.jsx
 */

import './services.css';

export default function Services() {
    return (
    <section className="services-section">
      <h1 className="services-title">Services</h1>
      <p className="services-intro">
        I help teams plan, build, and modernize software—focusing on performance, reliability,
        and outcomes that move the business forward.
      </p>

      <div className="services-grid">
        {/* Web Development */}
        <article className="service-card">
          <h2 className="service-title">Web Development</h2>
          <p className="service-blurb">
            Build fast, accessible, and maintainable web apps with modern tooling and best practices.
          </p>
          <ul className="service-points inline">
            <li>React / Angular / TypeScript</li>
            <li>Design systems & components</li>
            <li>Performance & accessibility</li>
            <li>Testing (Jest/Cypress)</li>
            <li>SEO & analytics ready</li>
          </ul>
        </article>

        {/* Mobile App Development */}
        <article className="service-card">
          <h2 className="service-title">Mobile App Development</h2>
          <p className="service-blurb">
            Ship mobile experiences that feel native and stay easy to evolve across platforms.
          </p>
          <ul className="service-points inline">
            <li>React Native (iOS/Android)</li>
            <li>PWA & offline-first</li>
            <li>Secure auth & APIs</li>
            <li>App store readiness</li>
            <li>Crash/usage monitoring</li>
          </ul>
        </article>

        {/* Migration Service */}
        <article className="service-card">
          <h2 className="service-title">Migration Service</h2>
          <p className="service-blurb">
            Move from legacy stacks to modern platforms without surprises—planned, tested, and documented.
          </p>
          <ul className="service-points inline">
            <li>Framework upgrades</li>
            <li>Monolith → modular</li>
            <li>Cloud re-platforming</li>
            <li>Data & schema moves</li>
            <li>Cutover & rollback plans</li>
          </ul>
        </article>

        {/* Content Management */}
        <article className="service-card">
          <h2 className="service-title">Content Management</h2>
          <p className="service-blurb">
            Set up a content flow that’s simple for authors and powerful for products.
          </p>
          <ul className="service-points inline">
            <li>Headless CMS (Contentful/Strapi)</li>
            <li>Structured content models</li>
            <li>Author workflows & roles</li>
            <li>Preview & publishing</li>
            <li>Localization & SEO</li>
          </ul>
        </article>

        {/* IT Project Management */}
        <article className="service-card">
          <h2 className="service-title">IT Project Management</h2>
          <p className="service-blurb">
            Keep delivery predictable with clear scope, cadence, and communication.
          </p>
          <ul className="service-points inline">
            <li>Agile/Scrum ceremonies</li>
            <li>Roadmaps & milestones</li>
            <li>Risk & dependency tracking</li>
            <li>Jira / Azure DevOps</li>
            <li>Stakeholder reporting</li>
          </ul>
        </article>
      </div>
    </section>
    );
}