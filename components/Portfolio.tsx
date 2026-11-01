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

const systemModes = [
  {
    name: "Backend",
    label: "ENGINEER THE FOUNDATION",
    symbol: "{ }",
    nodes: ["Java", "Spring Boot", "MySQL", "Redis"],
    description: "Reliable APIs. Thoughtful data models. Performance where it matters.",
  },
  {
    name: "Integrations",
    label: "CONNECT THE MOVING PARTS",
    symbol: "↔",
    nodes: ["Kafka", "WebSocket", "Zoho APIs", "Node.js"],
    description: "Connecting services, moving real-time data, and automating the handoffs.",
  },
  {
    name: "Applied AI",
    label: "TURN INTELLIGENCE INTO UTILITY",
    symbol: "✳",
    nodes: ["Bedrock", "LLMs", "Vector DB", "Java 23"],
    description: "Bringing natural-language input into useful, everyday product workflows.",
  },
];

function SystemDiagram() {
  const [mode, setMode] = useState(0);
  const active = systemModes[mode];
  return (
    <div className="system-lab">
      <div className="lab-topline">
        <span>
          <i className="status-dot" /> SYSTEMS THINKING
        </span>
        <span>AK—001</span>
      </div>
      <div className="lab-scene" aria-hidden="true">
        <div className="scene-grid" />
        <svg className="orbital-map" viewBox="0 0 500 440" fill="none">
          <defs>
            <radialGradient id="sphere-glow">
              <stop stopColor="#b8fa5b" stopOpacity=".12" />
              <stop offset="1" stopColor="#b8fa5b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="250" cy="220" r="190" fill="url(#sphere-glow)" />
          <g className="sphere-grid" stroke="currentColor">
            <circle cx="250" cy="220" r="155" />
            <ellipse cx="250" cy="220" rx="105" ry="155" />
            <ellipse cx="250" cy="220" rx="45" ry="155" />
            <ellipse cx="250" cy="220" rx="155" ry="45" />
            <ellipse cx="250" cy="220" rx="155" ry="105" />
            <path d="M95 220h310M250 65v310" />
          </g>
          <ellipse className="orbit-path" cx="250" cy="220" rx="224" ry="95" transform="rotate(-30 250 220)" />
          <ellipse
            className="orbit-path orbit-secondary"
            cx="250"
            cy="220"
            rx="210"
            ry="105"
            transform="rotate(35 250 220)"
          />
          <g className="orbit-marker">
            <circle cx="65" cy="325" r="6" />
            <circle cx="434" cy="114" r="4" />
            <circle cx="415" cy="333" r="4" />
          </g>
        </svg>
        <div className="processor-stack">
          <div className="processor-layer layer-bottom" />
          <div className="processor-layer layer-middle" />
          <div className="processor-core">
            <span key={active.symbol}>{active.symbol}</span>
            <small>AK / ENGINEERING</small>
          </div>
        </div>
        <span className="orbit-node orbit-node-one">{active.nodes[0]}</span>
        <span className="orbit-node orbit-node-two">{active.nodes[1]}</span>
        <span className="orbit-node orbit-node-three">{active.nodes[2]}</span>
        <span className="orbit-node orbit-node-four">{active.nodes[3]}</span>
        <span className="scene-coordinate coordinate-left">X: 01 / Y: 04</span>
        <span className="scene-coordinate coordinate-right">CONCEPT MAP</span>
      </div>
      <div className="lab-controls" role="group" aria-label="Explore engineering focus">
        {systemModes.map((item, index) => (
          <button key={item.name} aria-pressed={mode === index} onClick={() => setMode(index)}>
            {item.name}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="lab-description" aria-live="polite">
        <span>{active.label}</span>
        <p>{active.description}</p>
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
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
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
            <span className="brand-symbol" aria-hidden="true">
              a<span>k</span>
            </span>
            <span className="brand-name">
              AKASH KUMAR<span>SOFTWARE ENGINEER</span>
            </span>
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
              <span className="eyebrow-index">01 —</span> SENIOR SOFTWARE ENGINEER
            </div>
            <h1>
              Engineering
              <br />
              <span className="outline-text">beyond the</span>
              <br />
              <span className="hero-accent">
                interface<span className="hero-period">.</span>
              </span>
            </h1>
            <p className="hero-intro">
              I’m <strong>Akash Kumar</strong>. I build the systems behind the experience — reliable backends, seamless
              integrations, and AI that makes itself useful.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Selected work <Icon name="arrow" size={17} />
              </a>
              <a className="button button-secondary" href="#experience">
                The experience <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="status-dot" />
              <span>
                Currently building at <strong>Fleetx</strong>
                <span className="hero-note-divider">/</span>
                <span className="muted">Ex Celigo & Optum</span>
              </span>
            </div>
          </div>
          <SystemDiagram />
          <div className="hero-bottom">
            <div className="hero-disciplines">
              <span>BACKEND SYSTEMS</span>
              <span>REAL-TIME INTEGRATIONS</span>
              <span>APPLIED AI</span>
            </div>
            <a href="#impact">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>
        </section>
        <section className="impact-section" id="impact" aria-label="Career highlights">
          <div className="container impact-grid">
            <div className="impact-heading">
              <span className="eyebrow">THE WORK, IN NUMBERS</span>
              <p>
                Built with intent.
                <br />
                <span>Measured in impact.</span>
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
              <span className="eyebrow section-number">02 / SELECTED WORK</span>
              <h2>
                Complex problems.
                <br />
                <span className="muted-heading">Considered solutions.</span>
              </h2>
            </div>
            <p className="section-intro">
              A closer look at the systems I’ve built — from AI-assisted workflows to end-to-end automation.
            </p>
          </div>
          <div className="featured-grid">
            {caseStudies.map((work, index) => (
              <article className={`work-card work-card-${work.kind}`} key={work.title}>
                <div className="work-index" aria-hidden="true">
                  0{index + 1}
                  <span> / PROJECT</span>
                </div>
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
                      Read the case study <span>↗</span>
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
            <div>
              <span className="eyebrow">THE PLAYGROUND</span>
              <h3>Curiosity ships, too.</h3>
            </div>
            <p>Personal projects. Real learning.</p>
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
              <span className="eyebrow section-number">03 / THE JOURNEY</span>
              <h2>
                Good systems.
                <br />
                <span className="muted-heading">Great teams.</span>
              </h2>
              <p>Building across logistics, enterprise integration, and healthcare.</p>
            </div>
            <div className="timeline">
              {career.map((job, i) => (
                <details className="career-entry" key={job.company} open={i === 0}>
                  <summary>
                    <span className={`company-icon company-${i}`}>{job.monogram}</span>
                    <span className="career-heading">
                      <span className="career-meta">
                        {job.dates}
                        {i === 0 && <span className="current-badge">CURRENT</span>}
                      </span>
                      <span className="career-company">{job.company}</span>
                      <span className="career-role">{job.role}</span>
                    </span>
                    <span className="career-expand" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="career-content">
                    <ul>
                      {job.points.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="career-tech">{job.stack}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section container" id="expertise">
          <div className="section-top">
            <div>
              <span className="eyebrow section-number">04 / THE TOOLKIT</span>
              <h2>
                Built on strong
                <br />
                <span className="muted-heading">foundations.</span>
              </h2>
            </div>
            <p className="section-intro">
              From service design to production debugging, a toolkit shaped by hands-on engineering.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-topline">
                  <span className="skill-index">0{i + 1} /</span>
                  <span className="skill-symbol" aria-hidden="true">
                    {["{ }", "▤", "✳"][i]}
                  </span>
                </div>
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
              <div className="about-art-top">
                <span>THE HUMAN IN THE LOOP</span>
                <span>↗</span>
              </div>
              <div className="monogram-art">
                ak<span>.</span>
              </div>
              <div className="mindset-card">
                <span className="code-comment">// the way I work</span>
                <p>
                  <span>curiosity</span> → understanding
                  <br />
                  <span>ownership</span> → execution
                  <br />
                  <span>craft</span> → better systems
                </p>
              </div>
              <div className="about-art-footer">
                <span>ALWAYS BUILDING. ALWAYS LEARNING.</span>
                <span>01 / ∞</span>
              </div>
            </div>
            <div className="about-copy">
              <span className="eyebrow section-number">05 / BEHIND THE BUILD</span>
              <h2>
                A curious mind.
                <br />
                <span className="muted-heading">An engineer’s instinct.</span>
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
        <div className="container footer-statement">
          <span className="eyebrow">RELIABLE BY DESIGN. CURIOUS BY DEFAULT.</span>
          <p>
            Make it work.
            <br />
            <span>Make it matter.</span>
            <a href="#work" aria-label="Explore selected work">
              <Icon name="arrow" size={44} />
            </a>
          </p>
        </div>
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
