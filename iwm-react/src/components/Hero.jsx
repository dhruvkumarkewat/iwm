import HeroCanvas from './HeroCanvas'
import TiltCard from './TiltCard'
import heroRealPhoto from '../assets/real_photos/nykaaland-stage-spotlight-team.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero-editorial">
      <HeroCanvas />
      
      {/* Cinematic ambient background with real event photography */}
      <div className="hero-bg">
        <img
          id="heroImg"
          src={heroRealPhoto}
          alt="IWM on-ground at Nykaaland Festival Stage"
          className="hero-cinematic-bg-img"
          loading="eager"
        />
        <div className="hero-bg-darkener"></div>
      </div>

      <div className="hero-inner">
        {/* Left Column: Luxury Editorial Copy (Section B) */}
        <div className="hero-copy reveal in">
          <div className="hero-badge">
            <span className="dot gold-dot"></span> CENTRAL INDIA’S 1ST INFLUENCER AGENCY
          </div>
          <h1 className="hero-editorial-h1">
            Creating Moments.<br />
            <em>Building Brand Experiences.</em>
          </h1>
          <p className="hero-editorial-sub">
            We bring brands and people together through thoughtful experiences, creative storytelling, and exceptional execution.
          </p>

          <div className="hero-ctas">
            <a href="#nykaaland" className="btn-light">
              Explore Our Work <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#about" className="btn-pill" style={{ borderColor: 'rgba(255,255,255,.35)' }}>
              Discover IWM
            </a>
          </div>

          {/* Verified Agency Milestones */}
          <div className="hero-stats-strip">
            <div className="hero-stat-item">
              <b>3 Years</b>
              <span>Proven Leadership</span>
            </div>
            <div className="hero-stat-sep">/</div>
            <div className="hero-stat-item">
              <b>100+</b>
              <span>Campaigns Delivered</span>
            </div>
            <div className="hero-stat-sep">/</div>
            <div className="hero-stat-item">
              <b>500+</b>
              <span>Creators Managed</span>
            </div>
          </div>

          <div className="scroll-cue">
            <span className="mouse"><i></i></span> Scroll to explore the chronicle
          </div>
        </div>

        {/* Right Column: Interactive 3D Real Photograph Showcase */}
        <div className="hero-visual-wrapper">
          <TiltCard
            className="hero-tilt-cluster"
            maxTilt={9}
            perspective={1200}
            scale={1.02}
          >
            <div className="hero-visual" id="heroVisual">
              {/* Main focal real photograph card */}
              <div className="f-main-card">
                <img
                  src={heroRealPhoto}
                  alt="IWM at Nykaaland stage with 3 Years of Impact"
                  className="f-main-img"
                  loading="eager"
                />
                <div className="f-main-overlay">
                  <span className="f-tag">REAL EVENT EXPERIENCE</span>
                  <b>Nykaaland 2026 Showcase</b>
                  <p>Where digital influence meets physical festival scale</p>
                </div>
              </div>

              {/* Floating badges with real verified details */}
              <div className="float f-card" style={{ top: '6%', left: '-8%' }}>
                <span style={{ fontSize: '10px', letterSpacing: '.12em', opacity: 0.6, textTransform: 'uppercase' }}>Milestone</span>
                <b>Central India to National Brands</b>
              </div>

              <div className="float f-mini" style={{ bottom: '8%', right: '-6%' }}>
                <span style={{ fontSize: '10.5px', opacity: 0.7 }}>Best Campaign CPV</span>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--gold)' }}>₹0.08</div>
                <div className="bars">
                  <span style={{ height: '40%' }}></span>
                  <span style={{ height: '65%' }}></span>
                  <span style={{ height: '50%' }}></span>
                  <span style={{ height: '90%' }}></span>
                  <span style={{ height: '100%' }}></span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
