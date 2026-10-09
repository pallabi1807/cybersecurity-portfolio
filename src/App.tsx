import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  AtSign,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Pallabi Poria",
  initials: "PP",
  role: "Cybersecurity Enthusiast · SOC & GRC",
  email: "pallabiporia978@gmail.com",
  linkedin: "https://www.linkedin.com/in/pallabi-poria",
  github: "https://github.com/pallabi1807",
  resume: "",
};

const projects = [
  {
    id: "aegis",
    number: "01",
    category: "Security Operations · GRC",
    title: "AEGIS-SOC-GRC",
    subtitle: "Security operations meets governance.",
    description:
      "My flagship project: an evolving platform that brings security-event simulation, detection, alerts, incidents, risk, controls, remediation, evidence integrity, and compliance workflows together.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
    status: "Flagship project",
    github: "https://github.com/pallabi1807/AEGIS-SOC-GRC",
    demo: "",
    report: "https://github.com/pallabi1807/AEGIS-SOC-GRC/blob/main/docs/AEGIS-SOC-GRC%20Reports.pdf",
    featured: true,
  },
  {
    id: "splunk-auditd",
    number: "02",
    category: "SOC & Detection · Linux Security",
    title: "Linux Insider Threat Detection",
    subtitle: "Auditd telemetry with Splunk-powered investigation.",
    description:
      "A Mini SOC project focused on monitoring Linux activity with auditd and using Splunk to investigate suspicious behavior and potential insider-threat indicators.",
    stack: ["Linux", "auditd", "Splunk", "SIEM", "Log Analysis", "Threat Detection"],
    status: "Mini SOC project",
    github: "https://github.com/pallabi1807/-Linux-Insider-Threat-Detection-using-auditd-Splunk-Mini-SOC-Project-",
    demo: "",
    featured: false,
  },
];

const skillGroups = [
  {
    number: "01",
    title: "SOC & Detection",
    description: "Security monitoring, event analysis, alert triage, detection logic, and incident-response fundamentals.",
    skills: ["Splunk", "Sysmon", "Security Event Analysis", "Detection Rules"],
  },
  {
    number: "02",
    title: "GRC Fundamentals",
    description: "Connecting technical findings to risk, controls, remediation, evidence, and compliance.",
    skills: ["Risk Assessment", "Security Controls", "Evidence Management", "Compliance Mapping"],
  },
  {
    number: "03",
    title: "Security Tools",
    description: "Tools explored through coursework, labs, and controlled practice environments.",
    skills: ["Burp Suite", "Nmap", "WPScan", "Nikto", "Kali Linux"],
  },
  {
    number: "04",
    title: "Development & Systems",
    description: "Building and supporting practical applications, APIs, and lab environments.",
    skills: ["Python", "FastAPI", "React", "TypeScript", "SQL", "PostgreSQL", "Docker", "Linux"],
  },
];

const certifications = [
  { name: "Google Cybersecurity Certificate", provider: "Google / Coursera", note: "Course completion" },
  { name: "SOC Fundamentals", provider: "LetsDefend", note: "Security operations learning" },
  { name: "Mastercard Cybersecurity Job Simulation", provider: "Forage", note: "Job simulation" },
  { name: "Tata Group Cybersecurity Analyst Simulation", provider: "Forage", note: "Job simulation" },
  { name: "Splunk Bootcamp", provider: "Splunk training", note: "Training / certificate" },
];

const education = [
  {
    qualification: "Master of Computer Applications",
    institution: "Manipal University",
    detail: "Currently pursuing",
  },
  {
    qualification: "B.Sc. Computer Science",
    institution: "VPM B.N. Bandodkar College of Science",
    detail: "CGPA · 9.33 / 10",
  },
];


const architectureStages = [
  { title: "Scenario engine", label: "01 / SIMULATE", detail: "Runs controlled, repeatable scenarios that generate synthetic security activity without executing real attacks.", output: "Synthetic security telemetry" },
  { title: "Security telemetry", label: "02 / INGEST", detail: "Structures the generated activity as events that the backend can process and evaluate.", output: "Normalized event records" },
  { title: "Detection rules", label: "03 / DETECT", detail: "Evaluates event patterns against configured detection logic and records detection results.", output: "Detection results" },
  { title: "Alerts & incidents", label: "04 / INVESTIGATE", detail: "Turns detections into alerts and supports incident workflows for tracking and investigation.", output: "Trackable alerts and incidents" },
  { title: "Risk & controls", label: "05 / GOVERN", detail: "Connects security findings to risk records, controls, and remediation activities.", output: "Risk treatment workflow" },
  { title: "Evidence & compliance", label: "06 / VERIFY", detail: "Supports evidence records, SHA-256 artifact integrity checks, compliance tracking, and audit traceability.", output: "Evidence and audit trail" },
];

const projectFilters = ["All", "SOC & Detection", "GRC"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div className="site-shell">
      <div className="top-note">
        <span className="top-note-dot" />
        Open to entry-level cybersecurity opportunities
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Pallabi Poria, home">
          <span className="wordmark-mark">PP</span>
          <span className="wordmark-name">Pallabi Poria<span className="wordmark-period">.</span></span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {[
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Architecture", "#architecture"],
            ["Skills", "#skills"],
            ["Journey", "#journey"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-resume" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> CYBERSECURITY · SOC · GRC</p>
            <h1>Curiosity into<br /><em>capability.</em></h1>
            <p className="hero-intro">
              I'm Pallabi — a computer science graduate and MCA student building practical
              cybersecurity projects and exploring security operations, detection, and governance.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-light" href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={16} /> Explore GitHub
              </a>
            </div>
            <div className="hero-footnote">
              <span className="small-star">✳</span>
              Learning by building. Growing with every investigation.
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative security and personal monogram illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cross cross-one">+</div>
            <div className="art-cross cross-two">+</div>
            <div className="art-index">PORTFOLIO / 2026</div>
            <div className="art-monogram">P<span>P</span><i>.</i></div>
            <div className="art-bottom-rule" />
            <div className="art-caption">
              <span>01 / 04</span>
              <span>SECURITY WITH INTENTION</span>
            </div>
            <div className="art-stamp"><ShieldCheck size={18} /><span>Curious<br />by design</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-strip" id="about">
          <div className="section-wrap intro-grid">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <div>
              <h2>Technical curiosity.<br /><em>Thoughtful security.</em></h2>
              <p className="body-copy">
                My journey into cybersecurity is built on a computer science foundation, hands-on
                labs, and a desire to understand how security works in practice. I enjoy connecting
                technical investigation with the bigger picture: risk, people, controls, and trust.
              </p>
              <div className="intro-signature"><span>PP</span><span>Always learning, always building.</span></div>
            </div>
            <div className="about-aside">
              <div className="aside-icon"><Sparkles size={18} /></div>
              <p>My focus</p>
              <strong>SOC · Detection<br />GRC · Security projects</strong>
              <span>Early-career professional</span>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p>
              <h2>Built with purpose.<br /><em>Made to be explored.</em></h2>
            </div>
            <p className="heading-note">Two hands-on projects: an integrated SOC-GRC platform and a Linux insider-threat detection mini SOC.</p>
          </div>

          <div className="project-filters" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-button ${activeFilter === filter ? "active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects.filter((project) => {
              if (activeFilter === "All") return true;
              if (activeFilter === "SOC & Detection") return project.id === "aegis" || project.id === "splunk-auditd";
              if (activeFilter === "GRC") return project.category.toLowerCase().includes("grc");
              return false;
            }).map((project) => (
              <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.id}>
                <div className="project-card-top">
                  <span className="project-number">{project.number} <span>/ PROJECT</span></span>
                  <span className="project-status"><span />{project.status}</span>
                </div>
                <div className={`project-visual ${project.id}`}>
                  {project.id === "aegis" ? (
                    <div className="aegis-dashboard-frame">
                      <div className="aegis-image-toolbar">
                        <span className="aegis-toolbar-dots"><i /><i /><i /></span>
                        <span>AEGIS SOC-GRC · DASHBOARD PREVIEW</span>
                        <span className="aegis-live-indicator"><i /> PROJECT UI</span>
                      </div>
                      <img className="aegis-dashboard-image" src="/images/aegis-dashboard.png" alt="AEGIS-SOC-GRC dashboard screenshot showing security overview, open alerts, incidents, risks tracked, detection activity, and recent events" />
                      <div className="aegis-image-caption">
                        <ShieldCheck size={14} />
                        <span>Security operations · Risk governance · Workflow visibility</span>
                      </div>
                    </div>
                  ) : project.id === "splunk-auditd" ? (
                    <div className="splunk-preview" role="img" aria-label="Illustrative Linux auditd and Splunk security monitoring preview">
                      <div className="splunk-preview-top"><span className="splunk-dots"><i /><i /><i /></span><span>LINUX AUDITD · SPLUNK MINI SOC</span><span className="splunk-badge">DETECTION LAB</span></div>
                      <div className="splunk-preview-body">
                        <div className="splunk-preview-label">AUDIT EVENT STREAM</div>
                        <div className="splunk-event"><i /> <span>USER_LOGIN</span><b>audit.log</b></div>
                        <div className="splunk-event suspicious"><i /> <span>PRIVILEGE / FILE ACCESS</span><b>review</b></div>
                        <div className="splunk-event"><i /> <span>EXECVE ACTIVITY</span><b>audit.log</b></div>
                        <div className="splunk-query"><span>index=linux_audit</span><span>| stats count by event_type</span></div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
                    ) : (
                      <span className="link-placeholder">GitHub link to be added</span>
                    )}
                    {"report" in project && project.report ? (
                      <a href={project.report} target="_blank" rel="noreferrer">Project report <FileText size={14} /></a>
                    ) : null}
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>
                    ) : project.featured ? (
                      <span className="link-placeholder">Live demo optional</span>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="section-footnote"><span>✳</span> Explore the AEGIS architecture below; open each repository to review its implementation.</p>
        </section>

        <section className="architecture-section section-wrap" id="architecture">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> INSIDE THE FLAGSHIP</p>
              <h2>Explore the <em>workflow.</em></h2>
            </div>
            <p className="heading-note">Select a stage to see how AEGIS connects controlled security simulation with investigation and governance.</p>
          </div>
          <div className="architecture-explorer">
            <div className="architecture-steps" role="tablist" aria-label="AEGIS workflow stages">
              {architectureStages.map((stage, index) => (
                <button
                  className={`architecture-step ${activeStage === index ? "active" : ""}`}
                  key={stage.title}
                  type="button"
                  role="tab"
                  aria-selected={activeStage === index}
                  onClick={() => setActiveStage(index)}
                >
                  <span className="architecture-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="architecture-step-title">{stage.title}</span>
                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>
            <article className="architecture-detail" role="tabpanel">
              <span className="architecture-detail-label">{architectureStages[activeStage].label}</span>
              <h3>{architectureStages[activeStage].title}</h3>
              <p>{architectureStages[activeStage].detail}</p>
              <div className="architecture-output">
                <span>STAGE OUTPUT</span>
                <strong>{architectureStages[activeStage].output}</strong>
              </div>
              <div className="architecture-controls">
                <button type="button" className="filter-button" onClick={() => setActiveStage((activeStage + architectureStages.length - 1) % architectureStages.length)}>Previous stage</button>
                <button type="button" className="filter-button active" onClick={() => setActiveStage((activeStage + 1) % architectureStages.length)}>Next stage <ArrowUpRight size={13} /></button>
              </div>
            </article>
          </div>
          <p className="architecture-disclaimer"><ShieldCheck size={15} /> Scenario activity is synthetic and intended for controlled demonstration and testing.</p>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading skills-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> WHAT I'M WORKING WITH</p>
                <h2>Skills in progress.<br /><em>Foundations that matter.</em></h2>
              </div>
              <p className="heading-note">A practical toolkit, built through study, labs, and projects. I keep learning and expanding it.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.number}>
                  <div className="skill-card-head"><span>{group.number}</span><ArrowUpRight size={17} /></div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> THE LEARNING JOURNEY</p>
              <h2>Grounded in learning.<br /><em>Driven by practice.</em></h2>
            </div>
            <p className="heading-note">A snapshot of my education and learning milestones. Certificates should be linked only after the final details are verified.</p>
          </div>
          <div className="journey-grid">
            <div className="journey-column">
              <div className="journey-title"><GraduationCap size={18} /><h3>Education</h3></div>
              {education.map((item) => (
                <article className="journey-item" key={item.qualification}>
                  <span className="journey-dot" />
                  <p className="journey-detail">{item.detail}</p>
                  <h4>{item.qualification}</h4>
                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
            <div className="journey-column">
              <div className="journey-title"><BookOpen size={18} /><h3>Certifications & learning</h3></div>
              {certifications.map((item) => (
                <article className="cert-item" key={item.name}>
                  <div className="cert-check"><CheckCircle2 size={16} /></div>
                  <div><h4>{item.name}</h4><p>{item.provider} <span>· {item.note}</span></p></div>
                  <ArrowUpRight size={15} className="cert-arrow" />
                </article>
              ))}
              <p className="cert-note">Add certificate URLs and verify exact certificate titles before publishing.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-wrap">
            <div className="contact-overline"><span className="eyebrow-line" /> LET'S CONNECT</div>
            <h2>Every good journey<br />starts with <em>a conversation.</em></h2>
            <p>I'm looking for entry-level opportunities where I can contribute, keep learning, and grow in cybersecurity, SOC, or GRC.</p>
            <div className="contact-actions">
              <a
  className="button button-rose"
  href="#contact"
>
  <AtSign size={16} />
  Get in touch
  <ArrowUpRight size={15} />
</a>
              <button className="button button-outline-light" type="button" onClick={copyEmail}>
                {copiedEmail ? <CheckCircle2 size={16} /> : <AtSign size={16} />}
                {copiedEmail ? "Email copied" : "Copy email"}
              </button>
            </div>
            <div className="contact-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ArrowUpRight size={13} /></a>
            </div>
            <div className="contact-watermark">PP<span>.</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">{profile.initials}<span>.</span></a>
        <p>Designed with intention. Built while learning.</p>
        <a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a>
        <span className="footer-year">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </div>
  );
}

export default App;
