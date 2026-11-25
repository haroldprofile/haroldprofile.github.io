import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Camera,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  FileText,
  Film,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Music,
  Sparkles,
  Terminal,
  X,
  Youtube,
} from 'lucide-react';
import { EnterpriseSystemCard } from './components/EnterpriseSystemCard';
import { ProfileAvatar } from './components/ProfileAvatar';
import { ProjectCard } from './components/ProjectCard';
import { TechMarquee } from './components/TechMarquee';
import { TerminalWidget } from './components/TerminalWidget';
import {
  AI_WORKFLOW,
  EDUCATION,
  ENTERPRISE_FILTERS,
  ENTERPRISE_SYSTEMS,
  EXPERIENCE,
  LIVE_SPOTLIGHT_PROJECT,
  NAV_ITEMS,
  PASSION_SHOWCASE,
  PROFILE,
  SKILL_CATEGORIES,
  SOCIALS,
  type EnterpriseCategory,
  type SocialLink,
} from './data/portfolio';
import { handleCardPointerMove } from './utils/spotlight';

const SECTION_IDS = ['projects', 'ai-stack', 'resume', 'passion', 'contact'];

function renderSocialIcon(id: SocialLink['id']) {
  switch (id) {
    case 'github':
      return <Github size={18} aria-hidden="true" />;
    case 'youtube':
      return <Youtube size={18} aria-hidden="true" />;
    case 'facebook':
      return <Globe size={18} aria-hidden="true" />;
    case 'instagram':
      return <Camera size={18} aria-hidden="true" />;
    case 'tiktok':
      return <Film size={18} aria-hidden="true" />;
  }
}

function renderAiIcon(id: string) {
  switch (id) {
    case 'claude':
      return <Sparkles size={20} aria-hidden="true" />;
    case 'antigravity':
      return <Bot size={20} aria-hidden="true" />;
    default:
      return <Cpu size={20} aria-hidden="true" />;
  }
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState<EnterpriseCategory>('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('projects');

  const filteredSystems = useMemo(() => {
    if (activeFilter === 'all') {
      return ENTERPRISE_SYSTEMS;
    }
    return ENTERPRISE_SYSTEMS.filter((system) => system.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const next = Math.min(1, Math.max(0, window.scrollY / docHeight));
      setScrollProgress(next);
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sectionElements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35] },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('.reveal');

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container nav-bar">
          <a href="#top" className="brand-link" aria-label={`${PROFILE.name} home`}>
            <span className="brand-mark">{PROFILE.monogram}</span>
            <span className="brand-text">
              {PROFILE.monogram} <span className="brand-slash">//</span> {PROFILE.handle}
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        <nav
          id="mobile-nav-drawer"
          className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-meta-row hero-enter">
                <span className="status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  <span>{PROFILE.status}</span>
                </span>
                <span className="location-pill">
                  <MapPin size={14} aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </span>
              </div>

              <p className="hero-eyebrow hero-enter hero-enter-delay-1">
                {PROFILE.name} — {PROFILE.role}
                <span className="cursor-blink" aria-hidden="true">_</span>
              </p>

              <h1 className="hero-title hero-enter hero-enter-delay-1">
                {PROFILE.headlinePrefix}{' '}
                <span className="kinetic-gradient">{PROFILE.headlineAccent}</span>{' '}
                {PROFILE.headlineSuffix}
              </h1>

              <p className="hero-summary hero-enter hero-enter-delay-2">{PROFILE.summary}</p>

              <div className="hero-metrics hero-enter hero-enter-delay-2" aria-label="Key engineering highlights">
                {PROFILE.metrics.map((metric) => (
                  <span key={metric} className="metric-pill">
                    {metric}
                  </span>
                ))}
              </div>

              <div className="hero-actions hero-enter hero-enter-delay-3">
                <a href="#projects" className="btn btn-primary">
                  <span>Explore Projects</span>
                  <ArrowRight size={16} className="icon-glide" aria-hidden="true" />
                </a>
                <a href="#resume" className="btn btn-secondary">
                  <FileText size={16} aria-hidden="true" />
                  <span>View Resume</span>
                </a>
              </div>
            </div>

            <div className="hero-aside">
              <div className="hero-enter hero-enter-delay-2">
                <ProfileAvatar
                  photoPath={PROFILE.photoPath}
                  photoAlt={PROFILE.photoAlt}
                  monogram={PROFILE.monogram}
                />
              </div>

              <TerminalWidget
                pdfMasterUrl={LIVE_SPOTLIGHT_PROJECT.liveUrl}
                copied={copied}
                onCopyEmail={handleCopyEmail}
              />
            </div>
          </div>
        </section>

        {/* Dual-Row Kinetic Tech-Stack Marquee */}
        <TechMarquee />

        {/* 01 // Featured Engineering */}
        <section id="projects" className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-index">
                <Terminal size={15} aria-hidden="true" />
                <span>01 // FEATURED_ENGINEERING</span>
              </div>
              <h2 className="section-title">Projects &amp; Production Systems</h2>
              <p className="section-subtitle">
                Public browser-local utility suite alongside five enterprise .NET and React platforms engineered for agriculture, compliance, quality management, and warehouse operations.
              </p>
            </div>

            {/* Live Clickable Spotlight */}
            <div className="spotlight-wrapper">
              <ProjectCard project={LIVE_SPOTLIGHT_PROJECT} spotlight />
            </div>

            {/* Filterable Enterprise Production Systems */}
            <div className="enterprise-header">
              <div>
                <h3 className="subsection-title">
                  <Layers size={18} color="#10B981" aria-hidden="true" />
                  <span>Enterprise Production Systems</span>
                </h3>
                <p className="subsection-subtitle">
                  Internal corporate platforms — click &ldquo;Architecture &amp; Modules&rdquo; on any system to inspect modules, API patterns, and deployment stack.
                </p>
              </div>

              <div className="filter-bar" role="group" aria-label="Filter enterprise systems by stack">
                {ENTERPRISE_FILTERS.map((filter) => {
                  const count =
                    filter.id === 'all'
                      ? ENTERPRISE_SYSTEMS.length
                      : ENTERPRISE_SYSTEMS.filter((s) => s.category === filter.id).length;
                  const isActive = activeFilter === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      className={`filter-pill ${isActive ? 'is-active' : ''}`}
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      <span>{filter.label}</span>
                      <span className="filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bento-2">
              {filteredSystems.map((system, index) => (
                <EnterpriseSystemCard key={system.id} system={system} staggerIndex={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 02 // AI-Native Workflow */}
        <section id="ai-stack" className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-index">
                <Sparkles size={15} aria-hidden="true" />
                <span>02 // AI_TOOLCHAIN</span>
              </div>
              <h2 className="section-title">AI-Augmented Engineering Workflow</h2>
              <p className="section-subtitle">
                Applying Claude AI, Antigravity, and Codex across architecture planning, CQRS scaffolding, TDD, code review, and automated debugging.
              </p>
            </div>

            <div className="bento-3">
              {AI_WORKFLOW.map((tool, index) => (
                <article
                  key={tool.id}
                  className="card card-emerald spotlight-card ai-card stagger-item"
                  style={{ '--stagger-index': index } as CSSProperties}
                  onPointerMove={handleCardPointerMove}
                >
                  <div className="ai-card-header">
                    <span className="icon-box">{renderAiIcon(tool.id)}</span>
                    <div>
                      <h3 className="ai-name">{tool.name}</h3>
                      <p className="ai-role">{tool.role}</p>
                    </div>
                  </div>
                  <p className="ai-summary">{tool.summary}</p>
                  <div className="tag-row" style={{ marginBottom: 0 }}>
                    {tool.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 // Interactive Resume */}
        <section id="resume" className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-index">
                <FileText size={15} aria-hidden="true" />
                <span>03 // RESUME</span>
              </div>
              <h2 className="section-title">Experience, Technical Stack &amp; Education</h2>
              <p className="section-subtitle">
                Career progression spanning enterprise full-stack .NET / React engineering, industrial plant automation, software engineering, and embedded research.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="resume-block">
              <h3 className="subsection-title">
                <Briefcase size={18} color="#10B981" aria-hidden="true" />
                <span>Work Experience</span>
              </h3>

              <div className="timeline">
                {EXPERIENCE.map((item, index) => (
                  <article
                    key={item.id}
                    className={`card card-emerald spotlight-card timeline-card stagger-item ${
                      item.current ? 'is-current' : ''
                    }`}
                    style={{ '--stagger-index': index } as CSSProperties}
                    onPointerMove={handleCardPointerMove}
                  >
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{item.role}</h4>
                        <p className="timeline-company">{item.company}</p>
                      </div>
                      <span className={`badge-pill ${item.current ? 'badge-emerald' : 'badge-neutral'}`}>
                        {item.period}
                      </span>
                    </div>

                    <p className="timeline-summary">{item.summary}</p>

                    <ul className="project-highlights" style={{ marginBottom: 16 }}>
                      {item.highlights.map((bullet) => (
                        <li key={bullet} className="project-highlight-item">
                          <CheckCircle2
                            size={16}
                            className="highlight-icon highlight-icon-emerald"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="tag-row" style={{ marginBottom: 0 }}>
                      {item.stack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div className="resume-block">
              <h3 className="subsection-title">
                <Code2 size={18} color="#10B981" aria-hidden="true" />
                <span>Technical Skills Matrix</span>
              </h3>

              <div className="bento-3">
                {SKILL_CATEGORIES.map((group, index) => (
                  <article
                    key={group.label}
                    className="card card-emerald spotlight-card skill-card stagger-item"
                    style={{ '--stagger-index': index } as CSSProperties}
                    onPointerMove={handleCardPointerMove}
                  >
                    <h4 className="skill-card-title">{group.label}</h4>
                    <div className="skill-pills">
                      {group.items.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <article
              className="card card-emerald spotlight-card education-card"
              onPointerMove={handleCardPointerMove}
            >
              <div className="education-left">
                <span className="icon-box">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="craft-eyebrow craft-eyebrow-emerald">EDUCATION</p>
                  <h3 className="craft-title">{EDUCATION.degree}</h3>
                  <p className="education-meta">
                    {EDUCATION.school} · <span className="mono">{EDUCATION.period}</span>
                  </p>
                </div>
              </div>

              <div className="education-right">
                <span className="skill-group-label" style={{ marginBottom: 6, display: 'block' }}>
                  Languages
                </span>
                <div className="skill-pills">
                  {EDUCATION.languages.map((lang) => (
                    <span key={lang} className="skill-pill">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 04 // Beyond Code (Saxophonist Hobby / Passion) */}
        <section id="passion" className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-index">
                <Music size={15} aria-hidden="true" />
                <span>04 // BEYOND_CODE</span>
              </div>
              <h2 className="section-title">Creative Outlet Outside Engineering</h2>
            </div>

            <article
              className="card card-gold spotlight-card passion-card"
              onPointerMove={handleCardPointerMove}
            >
              <div className="passion-content">
                <div className="craft-header">
                  <span className="icon-box icon-box-gold">
                    <Music size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="craft-eyebrow craft-eyebrow-gold">{PASSION_SHOWCASE.eyebrow}</p>
                    <h3 className="craft-title">{PASSION_SHOWCASE.title}</h3>
                  </div>
                </div>

                <p className="craft-summary" style={{ marginBottom: 16 }}>
                  {PASSION_SHOWCASE.summary}
                </p>

                <ul className="project-highlights" style={{ marginBottom: 0 }}>
                  {PASSION_SHOWCASE.highlights.map((item) => (
                    <li key={item} className="project-highlight-item">
                      <CheckCircle2
                        size={17}
                        className="highlight-icon highlight-icon-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="passion-actions">
                <a
                  href={PASSION_SHOWCASE.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <span>{PASSION_SHOWCASE.ctaLabel}</span>
                  <ExternalLink size={16} className="icon-glide" aria-hidden="true" />
                </a>

                <a
                  href={PASSION_SHOWCASE.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Code2 size={16} aria-hidden="true" />
                  <span>Source</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* 05 // Contact & Social Hub */}
        <section id="contact" className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-index">
                <Mail size={15} aria-hidden="true" />
                <span>05 // CONTACT</span>
              </div>
              <h2 className="section-title">Let&apos;s Connect</h2>
              <p className="section-subtitle">
                Reach out directly for Full Stack .NET / React engineering roles, technical architecture collaborations, or live music inquiries.
              </p>
            </div>

            <div
              className="card card-emerald spotlight-card contact-card"
              onPointerMove={handleCardPointerMove}
            >
              <div>
                <h3 className="craft-title">Direct Contact</h3>
                <p className="craft-summary" style={{ marginTop: 8, marginBottom: 0 }}>
                  Based in {PROFILE.location}. Fastest response via email or GitHub.
                </p>

                <div className="contact-email-box">
                  <span className="email-display">
                    <Mail size={16} color="#10B981" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </span>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCopyEmail}
                    aria-live="polite"
                  >
                    {copied ? (
                      <>
                        <Check size={16} color="#10B981" aria-hidden="true" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
                    <span>Send Email</span>
                    <ArrowRight size={16} className="icon-glide" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="social-grid" aria-label="Social profiles">
                {SOCIALS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span style={{ color: '#10B981', display: 'inline-flex', flexShrink: 0 }}>
                      {renderSocialIcon(social.id)}
                    </span>
                    <span className="social-meta">
                      <span className="social-name">{social.label}</span>
                      <span className="social-handle">{social.handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React 19, TypeScript &amp; Vite.
          </span>
          <span className="mono">{PROFILE.handle}.github.io</span>
        </div>
      </footer>
    </>
  );
}

export default App;
