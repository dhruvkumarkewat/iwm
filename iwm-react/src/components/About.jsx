import TiltCard from './TiltCard'
import iwmTurns3Editorial from '../assets/real_photos/iwm-turns-3-newspapers-cake.jpg'

export default function About() {
  return (
    <section id="about" className="about-editorial-section">
      <div className="about-grid">
        {/* Left Column: Brand Credibility & Narrative (Section C) */}
        <div className="about-copy reveal">
          <div className="eyebrow">
            <span className="dot gold-dot"></span> SECTION 02 / INTRODUCTION
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Where Creative Vision Meets<br />
            <em>Real-World Experience.</em>
          </h2>
          <p className="about-lead">
            At Influencer Weds Marketing, great influencer marketing begins with genuine human connection. Founded in Bhopal as Central India’s first dedicated creator agency, IWM bridges brands with relevant creators through thoughtful collaborations, authentic storytelling, and coordinated campaigns.
          </p>
          <p className="about-subtext" style={{ fontSize: '13.5px', opacity: 0.72, lineHeight: 1.7, marginTop: '14px' }}>
            From high-visibility digital launches to on-ground experiential events like Nykaaland, we champion creator individuality and genuine audience trust. Our approach moves beyond transactional placements into sustained cultural conversations and measurable business outcomes.
          </p>

          <div className="about-values">
            <div className="about-val-item">
              <span className="about-val-num">01</span>
              <div>
                <span className="about-val-text">Strategic Creator Alignment</span>
                <p style={{ fontSize: '12px', opacity: 0.6, margin: '3px 0 0' }}>Data-driven matching based on authentic voice, niche relevance, and audience affinity.</p>
              </div>
            </div>
            <div className="about-val-item">
              <span className="about-val-num">02</span>
              <div>
                <span className="about-val-text">Experiential &amp; Event Integration</span>
                <p style={{ fontSize: '12px', opacity: 0.6, margin: '3px 0 0' }}>Uniting online digital narratives with on-ground activations, brand lounges, and live festival experiences.</p>
              </div>
            </div>
            <div className="about-val-item">
              <span className="about-val-num">03</span>
              <div>
                <span className="about-val-text">Built on Trust, Powered by People</span>
                <p style={{ fontSize: '12px', opacity: 0.6, margin: '3px 0 0' }}>Three continuous years of client retention, transparent reporting, and founder-led execution.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <a href="#nykaaland" className="btn-light">
              View Nykaaland Case Study <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#founder" className="btn-pill" style={{ borderColor: 'var(--line-w)', color: '#fff' }}>
              Meet the Founder
            </a>
          </div>

          {/* Heritage Credibility Stats Grid */}
          <div className="about-heritage-stats-grid">
            <div className="about-h-stat">
              <span className="h-stat-num gold-text">#1</span>
              <span className="h-stat-lbl">Central India’s 1st Influencer Agency</span>
            </div>
            <div className="about-h-stat">
              <span className="h-stat-num gold-text">3+</span>
              <span className="h-stat-lbl">Years of Verified Curation</span>
            </div>
            <div className="about-h-stat">
              <span className="h-stat-num gold-text">100+</span>
              <span className="h-stat-lbl">Campaign Deliverables</span>
            </div>
            <div className="about-h-stat">
              <span className="h-stat-num gold-text">40+</span>
              <span className="h-stat-lbl">Exclusive Creators Roster</span>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Editorial Flatlay Photograph */}
        <div className="about-collage-wrap reveal">
          <TiltCard maxTilt={6} scale={1.01} className="about-tilt-wrapper">
            <div className="about-editorial-photo-card">
              <div className="editorial-photo-frame">
                <img
                  className="editorial-main-img"
                  src={iwmTurns3Editorial}
                  alt="IWM Turns 3 Editorial Newspaper Flatlay — Built on Trust, Powered by People"
                  loading="lazy"
                />
                <div className="editorial-photo-vignette"></div>
              </div>
              
              <div className="editorial-photo-caption">
                <div className="caption-badge">
                  <span className="dot gold-dot"></span> ARCHIVE · 3 YEARS MILESTONE
                </div>
                <b>Central India’s 1st Influencer Marketing Agency</b>
                <p>Documenting 3 years of continuous growth, creator trust, and national brand collaborations.</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
