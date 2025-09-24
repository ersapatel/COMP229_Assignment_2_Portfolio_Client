/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-23
 * File: about-me.jsx
 */

import "./about-me.css";
import me from "../assets/me.jpg";
import resumePdf from "../assets/Resume.pdf";

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-grid">
        
        <div className="about-copy">
          
          <h1 className="about-name">Swapnil Patel</h1>

          
          <p className="about-lede">
            I build fast, maintainable web apps with React and modern JavaScript, pairing clear component
            architecture with great UX. My toolkit includes TypeScript, Angular, Node/Express, and a11y/performance
            best practices, supported by automated testing and pipelines. I thrive at turning product ideas into
            scalable features, from design-system components to data-rich dashboards, delivering measurable
            improvements in speed, reliability, and usability.
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
