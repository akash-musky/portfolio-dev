import { useEffect, useState } from "react";
import SEO from "./SEO";
import { caseStudies, career, projects, skillGroups } from "../content/profile";

function Icon({ name, size = 20 }: { name: "arrow" | "sun" | "moon" | "menu" | "close"; size?: number }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
      </>
    ),
    moon: <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function SystemDiagram() {
  return (
    <div
      className="system-card"
      role="img"
      aria-label="Illustration of a backend architecture connecting APIs, services, data, and intelligence"
    >
      <div className="system-topline">
        <span>
          <i className="status-dot" /> THE ENGINEERING MINDSET
        </span>
        <span>AK / 01</span>
      </div>
      <div className="system-canvas">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <svg className="system-lines" viewBox="0 0 500 350" aria-hidden="true">
          <path d="M90 85H250V175M410 85H250M90 265H250V175M410 265H250" />
          <circle r="4">
            <animateMotion dur="5s" repeatCount="indefinite" path="M90 85H250V175H250V265H410" />
          </circle>
          <circle r="4">
            <animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite" path="M410 85H250V175H250V265H90" />
          </circle>
        </svg>
        <div className="system-node node-api">
          <span className="node-symbol">↔</span>
          <strong>APIs</strong>
          <small>Connect seamlessly</small>
        </div>
        <div className="system-node node-data">
          <span className="node-symbol">▤</span>
          <strong>Data</strong>
          <small>Move with purpose</small>
        </div>
        <div className="system-core">
          <span>
            ak<span className="orange">.</span>
          </span>
          <small>ENGINEERED TO WORK</small>
        </div>
        <div className="system-node node-services">
          <span className="node-symbol">⌘</span>
          <strong>Services</strong>
          <small>Build for reliability</small>
        </div>
        <div className="system-node node-ai">
          <span className="node-symbol">✳</span>
          <strong>Intelligence</strong>
          <small>Automate the complex</small>
        </div>
      </div>
      <div className="system-bottom">
        <span>
          <span className="orange">●</span> BACKEND × APPLIED AI
        </span>
        <span>BUILT WITH INTENT</span>
      </div>
    </div>
  );
}

function WorkVisual({ kind }: { kind: string }) {
  if (kind === "performance")
    return (
      <div className="work-visual performance-visual" aria-hidden="true">
        <div className="visual-caption">03 / PERFORMANCE ENGINEERING</div>
        <div className="performance-number">
          60–70<span>×</span>
        </div>
        <p className="performance-caption">API performance improvements</p>
        <div className="data-route">
          <span>Vehicle data</span>
          <i>→</i>
          <span>Kafka</span>
          <i>→</i>
          <span>Platform APIs</span>
        </div>
        <div className="performance-bars">
          {[18, 28, 23, 40, 35, 52, 60, 55, 72, 85, 90, 110].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </div>
        <span className="visual-footnote">ILLUSTRATIVE DATA FLOW · NOT A BENCHMARK CHART</span>
      </div>
    );
  if (kind === "finance")
    return (
      <div className="work-visual finance-visual" aria-hidden="true">
        <div className="visual-caption">04 / FINANCIAL WORKFLOWS</div>
        <div className="finance-sheet">
          <div className="finance-sheet-header">
            <span>EMI</span>
            <span>
              From calculation
              <br />
              to clarity.
            </span>
          </div>
          <div className="finance-row">
            <span>01</span>
            <b>Model the repayment</b>
            <span>↗</span>
          </div>
          <div className="finance-row">
            <span>02</span>
            <b>Break it down monthly</b>
            <span>↗</span>
          </div>
          <div className="finance-row">
            <span>03</span>
            <b>Serve it efficiently</b>
            <span>↗</span>
          </div>
        </div>
        <span className="visual-footnote">CONCEPTUAL WORKFLOW</span>
      </div>
    );
  if (kind === "ai")
    return (
      <div className="work-visual ai-visual" aria-hidden="true">
        <div className="visual-caption">01 / SMARTFORMS</div>
        <div className="voice-input">
          <span className="voice-icon">✳</span>
          <div>
            <small>NATURAL LANGUAGE → STRUCTURED DATA</small>
            <p>Speak it. Structure it. Done.</p>
          </div>
          <div className="waveform">
            {[12, 24, 17, 32, 21, 13, 26].map((h, i) => (
              <i key={i} style={{ height: h }} />
            ))}
          </div>
        </div>
        <div className="flow-connector" />
        <div className="mini-form">
          <div>
            <span>Billing party</span>
            <b>
              Entity resolved <span>✓</span>
            </b>
          </div>
          <div>
            <span>Created by</span>
            <b>
              Field mapped <span>✓</span>
            </b>
          </div>
          <div>
            <span>Suggested values</span>
            <b>
              Ranked by frequency <span>✓</span>
            </b>
          </div>
        </div>
        <span className="visual-footnote">CONCEPTUAL WORKFLOW</span>
      </div>
    );
  return (
    <div className="work-visual signature-visual" aria-hidden="true">
      <div className="visual-caption">02 / DOCUMENT AUTOMATION</div>
      <div className="document-preview">
        <div className="document-heading">
          <span>PO</span>
          <span>
            Purchase order
            <br />
            <small>Signature workflow</small>
          </span>
          <span className="document-check">✓</span>
        </div>
        <div className="document-rule" />
        <div className="document-rule short" />
        <div className="signature">Akash</div>
        <div className="document-baseline" />
        <span className="document-label">PREPARE → SEND → SIGN</span>
      </div>
      <div className="automation-label label-one">
        <i className="status-dot" /> Automated reminders
      </div>
      <div className="automation-label label-two">↻ Secure token management</div>
      <span className="visual-footnote">CONCEPTUAL WORKFLOW</span>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("akash-theme");
      const value = saved === "dark";
      setDark(value);
      document.documentElement.dataset.theme = value ? "dark" : "light";
    } catch {}
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document
      .querySelectorAll(".section-top, .work-card, .career-entry, .skill-group, .about-copy")
      .forEach(element => revealObserver.observe(element));
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("akash-theme", next ? "dark" : "light");
    } catch {}
  };
  const navItems = [
    ["work", "Selected work"],
    ["experience", "Experience"],
    ["about", "About"],
  ];
  return (
    <>
      <SEO />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="wordmark" href="#home" aria-label="Akash Kumar, home">
            akash<span>.</span>
            <span className="wordmark-suffix"> / senior engineer</span>
          </a>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} id="main-navigation" aria-label="Main navigation">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="#expertise" className="nav-contact" onClick={() => setMenuOpen(false)}>
              My toolkit <Icon name="arrow" size={15} />
            </a>
          </nav>
          <div className="nav-controls">
            <button
              className="icon-button theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            >
              <Icon name={dark ? "sun" : "moon"} size={19} />
            </button>
            <button
              className="icon-button menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <i className="status-dot" /> SENIOR SOFTWARE ENGINEER · BACKEND & APPLIED AI
            </div>
            <h1>
              Complex systems.
              <br />
              Simple experiences.
              <br />
              <span className="serif">Thoughtfully built.</span>
            </h1>
            <p className="hero-intro">
              I’m <strong>Akash Kumar</strong> — a senior software engineer turning complex problems into reliable
              backends, seamless integrations, and practical AI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Icon name="arrow" size={17} />
              </a>
              <a className="button button-secondary" href="#experience">
                Explore experience <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="mini-monogram">ak.</span>
              <span>
                Currently building at <strong>Fleetx</strong>
                <br />
                <span className="muted">Previously Celigo & Optum</span>
              </span>
            </div>
          </div>
          <SystemDiagram />
          <div className="hero-bottom">
            <span>RELIABLE BY DESIGN. CURIOUS BY DEFAULT.</span>
            <a href="#impact">
              A little further down <span>↓</span>
            </a>
          </div>
        </section>
        <section className="impact-section" id="impact" aria-label="Career highlights">
          <div className="container impact-grid">
            <div className="impact-heading">
              <span className="eyebrow">LESS BUZZ. MORE IMPACT.</span>
              <p>
                Engineering that
                <br />
                makes a difference.
              </p>
            </div>
            <div className="impact-item">
              <strong>
                60–70<span>×</span>
              </strong>
              <p>API performance improvements</p>
              <small>Across features at Fleetx</small>
            </div>
            <div className="impact-item">
              <strong>
                250<span>+</span>
              </strong>
              <p>Software bugs resolved</p>
              <small>Platform reliability at Celigo</small>
            </div>
            <div className="impact-item">
              <strong>
                1<span>st</span>
              </strong>
              <p>GenAI Hackathon 2025</p>
              <small>Team Rocket · Fleetx</small>
            </div>
          </div>
        </section>
        <section className="section container" id="work">
          <div className="section-top">
            <div>
              <span className="eyebrow section-number">01 / SELECTED WORK</span>
              <h2>
                Built to solve
                <br />
                <span className="serif">real problems.</span>
              </h2>
            </div>
            <p className="section-intro">
              A closer look at the systems I’ve built — from AI-assisted workflows to end-to-end automation.
            </p>
          </div>
          <div className="featured-grid">
            {caseStudies.map(work => (
              <article className="work-card" key={work.title}>
                <WorkVisual kind={work.kind} />
                <div className="work-body">
                  <div className="work-meta">
                    <span>{work.category}</span>
                    {work.award && <span className="award-badge">↗ Hackathon winner</span>}
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-ownership">{work.ownership}</div>
                  <div className="work-outcome">
                    <span aria-hidden="true">↗</span>
                    <p>{work.outcome}</p>
                  </div>
                  <div className="tags">
                    {work.stack.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <details className="case-details">
                    <summary>
                      Explore the engineering <span>+</span>
                    </summary>
                    <div className="case-content">
                      <h4>The challenge</h4>
                      <p>{work.challenge}</p>
                      <h4>My contribution</h4>
                      <ul>
                        {work.contributions.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <h4>The result</h4>
                      <p>{work.result}</p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <div className="side-projects-heading">
            <h3>Outside the day job</h3>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <a
                className="project-card"
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-card-top">
                  <span>0{i + 1}</span>
                  <Icon name="arrow" />
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className="project-stack">{project.stack}</span>
                <span className="project-link">
                  {project.demo ? "Open project" : "View source"} <span>↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="container experience-layout">
            <div className="experience-heading">
              <span className="eyebrow section-number">02 / THE JOURNEY</span>
              <h2>
                Experience.
                <br />
                <span className="serif">With purpose.</span>
              </h2>
              <p>Building across logistics, enterprise integration, and healthcare.</p>
            </div>
            <div className="timeline">
              {career.map((job, i) => (
                <article className="career-entry" key={job.company}>
                  <div className={`company-icon company-${i}`}>{job.monogram}</div>
                  <div className="career-content">
                    <div className="career-meta">
                      <span>{job.dates}</span>
                      {i === 0 && <span className="current-badge">CURRENT</span>}
                    </div>
                    <h3>{job.company}</h3>
                    <p className="career-role">{job.role}</p>
                    <ul>
                      {job.points.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="career-tech">{job.stack}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section container" id="expertise">
          <div className="section-top">
            <div>
              <span className="eyebrow section-number">03 / THE TOOLKIT</span>
              <h2>
                The right tools.
                <br />
                <span className="serif">The right foundations.</span>
              </h2>
            </div>
            <p className="section-intro">
              From service design to production debugging, a toolkit shaped by hands-on engineering.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-index">0{i + 1} /</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tags">
                  {group.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="container about-layout">
            <div className="about-art" aria-hidden="true">
              <span className="about-art-label">THE PERSON BEHIND THE CODE</span>
              <div className="monogram-art">
                ak<span>.</span>
              </div>
              <div className="about-art-footer">
                <span>ALWAYS A STUDENT.</span>
                <span>↗</span>
              </div>
            </div>
            <div className="about-copy">
              <span className="eyebrow section-number">04 / A LITTLE ABOUT ME</span>
              <h2>
                Engineer by trade.
                <br />
                <span className="serif">Problem solver at heart.</span>
              </h2>
              <p>
                I’m Akash, a senior software engineer focused on backend systems. I enjoy the work behind the interface:
                making data flow, turning manual processes into reliable systems, and finding out why something isn’t
                working.
              </p>
              <p>
                My experience spans Java and Spring Boot at Fleetx, Node.js and integration systems at Celigo, and
                machine learning for healthcare at Optum. Lately, I’ve been exploring where generative AI can make
                everyday software more useful.
              </p>
              <div className="about-interests">
                <span>Beyond the stack</span>
                <p>
                  Data structures & algorithms <span> / </span> Reliability engineering <span> / </span> Continuous
                  learning
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="wordmark" href="#home">
            akash<span>.</span>
          </a>
          <span className="footer-note">Thoughtfully built. Always evolving.</span>
          <div className="footer-links">
            <a href="#work">
              Selected work <Icon name="arrow" size={14} />
            </a>
            <a href="#experience">
              Experience <Icon name="arrow" size={14} />
            </a>
            <a href="#expertise">
              Expertise <Icon name="arrow" size={14} />
            </a>
          </div>
          <a className="back-top" href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}
