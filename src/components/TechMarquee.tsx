import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/portfolio';

export function TechMarquee() {
  return (
    <section className="marquee-section" aria-label="Core engineering technologies">
      <div className="marquee-viewport">
        <div className="marquee-track marquee-track-left">
          <div className="marquee-group">
            {MARQUEE_ROW_1.map((item) => (
              <span key={`r1a-${item}`} className="marquee-pill">
                <span className="marquee-dot" aria-hidden="true" />
                <span>{item}</span>
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {MARQUEE_ROW_1.map((item) => (
              <span key={`r1b-${item}`} className="marquee-pill">
                <span className="marquee-dot" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-track marquee-track-right">
          <div className="marquee-group">
            {MARQUEE_ROW_2.map((item) => (
              <span key={`r2a-${item}`} className="marquee-pill marquee-pill-cyan">
                <span className="marquee-dot marquee-dot-cyan" aria-hidden="true" />
                <span>{item}</span>
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {MARQUEE_ROW_2.map((item) => (
              <span key={`r2b-${item}`} className="marquee-pill marquee-pill-cyan">
                <span className="marquee-dot marquee-dot-cyan" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
