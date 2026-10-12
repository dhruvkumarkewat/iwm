import TiltCard from './TiltCard'

export default function Founder() {
  return (
    <section id="founder">
      <div className="founder-container">
        <div className="founder-grid">
          {/* Left Column: Portrait & Identity Card */}
          <div className="founder-visual reveal">
            <TiltCard maxTilt={10} perspective={1100} className="founder-tilt-card">
              <div className="founder-card-inner">
                <div className="founder-portrait-frame">
                  {/* Curated editorial portrait presentation with elegant fallback and monogram badge */}
                  <div className="founder-portrait-bg">
                    <div className="founder-monogram-circle">
                      <span className="founder-initials">SSP</span>
                    </div>
                    <div className="founder-portrait-overlay"></div>
                  </div>
                  
                  <div className="founder-badge-pill">
                    <span className="dot gold-dot"></span>
                    FOUNDER & CEO
                  </div>
                </div>

                <div className="founder-card-meta">
                  <div className="founder-name-group">
                    <h3 className="founder-name">Sanskriti Shukla Pathak</h3>
                    <div className="founder-role">Founder & CEO, Influencer Weds Marketing</div>
                  </div>
                  <div className="founder-signature-accent">
                    <span>Sanskriti S. Pathak</span>
                  </div>
                </div>
              </div>
            </TiltCard>
            
            {/* Ambient quote badge */}
            <div className="founder-quote-badge reveal-3d delay-1">
              <i className="fa-solid fa-quote-left"></i>
              <p>Great influencer marketing begins with genuine human connection, not transaction.</p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Vision */}
          <div className="founder-copy reveal">
            <div className="eyebrow">The Person Behind IWM</div>
            <h2 className="founder-headline">
              Turning Creative Vision<br />
              <em>into Lasting Impact.</em>
            </h2>

            <div className="founder-statement">
              <p className="statement-lead">
                Sanskriti believes influencer marketing is about people, possibilities, relationships, and bringing ideas to life.
              </p>
              <p className="statement-body">
                Her vision is to connect creators and brands through meaningful collaborations, recognise individual creator identities, and turn ideas into well-executed campaigns.
              </p>
              <p className="statement-body">
                Under her leadership, IWM operates with a boutique commitment to quality over sheer volume—ensuring every creator partnership is curated with intention, cultural resonance, and meticulous campaign tracking.
              </p>
            </div>

            {/* Core Leadership Pillars */}
            <div className="founder-pillars">
              <div className="founder-pillar-item">
                <div className="pillar-num">01</div>
                <div>
                  <h4>People & Relationships First</h4>
                  <p>Building genuine, respectful relationships that creators and brand teams cherish.</p>
                </div>
              </div>
              <div className="founder-pillar-item">
                <div className="pillar-num">02</div>
                <div>
                  <h4>Creator Individuality</h4>
                  <p>Celebrating unique creator voices instead of forcing cookie-cutter promotional scripts.</p>
                </div>
              </div>
              <div className="founder-pillar-item">
                <div className="pillar-num">03</div>
                <div>
                  <h4>Thoughtful Execution</h4>
                  <p>Transforming innovative creative strategies into measurable, benchmarked campaigns.</p>
                </div>
              </div>
            </div>

            <div className="founder-cta-row">
              <a href="#contact" className="btn-light">
                Connect with Sanskriti & IWM <i className="fa-solid fa-arrow-right"></i>
              </a>
              <span className="founder-loc">
                <i className="fa-solid fa-location-dot"></i> Based in India <span>|</span> Pan-India Execution
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
