import TiltCard from './TiltCard'
import founderPortraitOfficial from '../assets/real_photos/founder-portrait-official.jpg'
import founderFieldPortrait from '../assets/real_photos/founder-field-portrait.jpg'

export default function Founder() {
  return (
    <section id="founder" className="founder-section-refined">
      <div className="founder-container">
        <div className="founder-grid">
          {/* Left Column: Official Executive Founder Portrait Card */}
          <div className="founder-visual reveal">
            <TiltCard maxTilt={8} perspective={1200} className="founder-tilt-card">
              <div className="founder-card-inner">
                <div className="founder-portrait-frame">
                  {/* Official high-resolution portrait photograph of Sanskriti Shukla Pathak */}
                  <img
                    src={founderPortraitOfficial}
                    alt="Sanskriti Shukla Pathak — Founder & CEO of Influencer Weds Marketing"
                    className="founder-real-photo"
                    loading="lazy"
                  />
                  <div className="founder-portrait-vignette"></div>
                  
                  <div className="founder-badge-pill">
                    <span className="dot gold-dot"></span>
                    FOUNDER &amp; CEO
                  </div>
                </div>

                <div className="founder-card-meta">
                  <div className="founder-name-group">
                    <h3 className="founder-name">Sanskriti Shukla Pathak</h3>
                    <div className="founder-role">Founder &amp; CEO, Influencer Weds Marketing</div>
                  </div>
                  <div className="founder-signature-accent">
                    <span>Sanskriti S. Pathak</span>
                  </div>
                </div>
              </div>
            </TiltCard>
            
            {/* Ambient Secondary Snapshot Badge */}
            <div className="founder-snapshot-strip reveal-3d delay-1">
              <div className="snapshot-mini-frame">
                <img
                  src={founderFieldPortrait}
                  alt="Sanskriti Shukla Pathak on-ground"
                  className="snapshot-mini-img"
                  loading="lazy"
                />
              </div>
              <div className="snapshot-quote">
                <i className="fa-solid fa-quote-left"></i>
                <p>&ldquo;Great experiences begin with a clear vision, thoughtful collaboration, and an uncompromising eye for detail.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Vision */}
          <div className="founder-copy reveal">
            <div className="eyebrow">
              <span className="dot gold-dot"></span> SECTION 06 / LEADERSHIP
            </div>
            <h2 className="founder-headline">
              Meet the Vision<br />
              <em>Behind IWM.</em>
            </h2>

            <div className="founder-statement">
              <p className="statement-lead">
                Great experiences begin with a clear vision, thoughtful collaboration, and an uncompromising eye for detail. At IWM, our approach is built around bringing ideas to life and creating meaningful connections between brands and people.
              </p>
              <p className="statement-body">
                Under Sanskriti’s direction, IWM pioneered structured creator marketing in Central India before expanding nationwide. She champions creator individuality and genuine brand relationships—ensuring every campaign delivers authentic emotional resonance rather than transactional noise.
              </p>
            </div>

            {/* Core Leadership Pillars */}
            <div className="founder-pillars">
              <div className="pillar-item">
                <div className="pillar-num">01</div>
                <div className="pillar-text">
                  <b>Authentic Alignment</b>
                  <span>Connecting brands only with creators whose voice naturally aligns with the message.</span>
                </div>
              </div>
              <div className="pillar-item">
                <div className="pillar-num">02</div>
                <div className="pillar-text">
                  <b>Real-World Experience</b>
                  <span>Bridging digital reach with on-ground event presence and memorable experiential touchpoints.</span>
                </div>
              </div>
              <div className="pillar-item">
                <div className="pillar-num">03</div>
                <div className="pillar-text">
                  <b>Uncompromising Quality</b>
                  <span>Every deliverable, timeline, and collaboration held to an editorial, world-class standard.</span>
                </div>
              </div>
            </div>

            {/* Action CTA & direct contact link */}
            <div className="founder-actions">
              <a href="#contact" className="btn-dark">
                Start a Conversation with IWM <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#process" className="btn-pill" style={{ borderColor: 'var(--line-w)', color: '#fff' }}>
                Explore Our Approach <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px', marginLeft: '6px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
