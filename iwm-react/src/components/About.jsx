import TiltCard from './TiltCard'

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-copy reveal">
          <div className="eyebrow">About IWM</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            More Than<br />
            Just Marketing.
          </h2>
          <p className="about-lead">
            At Influencer Weds Marketing, great influencer marketing starts with meaningful connections. IWM brings brands and creators together through thoughtful collaborations, creative storytelling, and coordinated campaigns.
          </p>
          <p className="about-subtext" style={{ fontSize: '13.5px', opacity: 0.7, lineHeight: 1.65, marginTop: '12px' }}>
            We champion creator individuality and authentic audience trust—transforming one-off brand promotions into sustained cultural conversations and high-performing digital campaigns. Founded in 2023.
          </p>

          <div className="about-values">
            <div className="about-val-item">
              <span className="about-val-num">01</span>
              <div>
                <span className="about-val-text">Authenticity & Creator Trust</span>
                <p style={{ fontSize: '11.5px', opacity: 0.5, margin: '2px 0 0' }}>Real voices speaking genuine experiences, zero synthetic disconnect.</p>
              </div>
            </div>
            <div className="about-val-item">
              <span className="about-val-num">02</span>
              <div>
                <span className="about-val-text">Meaningful Relationships</span>
                <p style={{ fontSize: '11.5px', opacity: 0.5, margin: '2px 0 0' }}>Nurturing long-term creator respect and brand partnerships.</p>
              </div>
            </div>
            <div className="about-val-item">
              <span className="about-val-num">03</span>
              <div>
                <span className="about-val-text">Creative Execution & Agility</span>
                <p style={{ fontSize: '11.5px', opacity: 0.5, margin: '2px 0 0' }}>Flawless coordination from creative brief to final analytics report.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <a href="#founder" className="btn-light">
              Meet the Founder <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>

        <div className="about-collage-wrap reveal">
          <TiltCard maxTilt={8} scale={1.01} className="about-tilt-wrapper">
            <div className="about-collage" id="collage">
              <img
                className="main-portrait reveal-img in"
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop"
                alt="IWM Creator Storytelling in action"
              />
              <div className="mini-card" style={{ left: '6%', top: '4%', transform: 'rotate(-7deg)' }}>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" alt="Editorial Creator" />
              </div>
              <div className="mini-card" style={{ left: '0%', top: '46%', transform: 'rotate(5deg)', width: '150px' }}>
                <img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop" alt="Studio Session" />
              </div>
              <div className="mini-card" style={{ right: '6%', top: '10%', transform: 'rotate(8deg)' }}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Brand Collaboration" />
              </div>
              <div className="mini-card" style={{ right: '1%', bottom: '6%', transform: 'rotate(-6deg)', width: '150px' }}>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" alt="Natural Storytelling" />
              </div>
            </div>
          </TiltCard>
        </div>

        <div className="about-stats reveal">
          <div className="about-stat-box">
            <b className="gold-text">40+</b>
            <span>Exclusive Creators</span>
          </div>
          <div className="about-stat-box">
            <b>30+</b>
            <span>Brand Campaigns</span>
          </div>
          <div className="about-stat-box">
            <b className="gold-text">2.8M+</b>
            <span>Campaign Views</span>
          </div>
          <div className="v-scroll">
            SCROLL <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
