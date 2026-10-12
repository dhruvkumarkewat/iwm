export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        {/* Brand Column */}
        <div>
          <div className="brand">
            <b style={{ fontSize: '26px' }}>IWM</b>
            <small style={{ fontSize: '9px', letterSpacing: '.22em' }}>INFLUENCER WEDS MARKETING</small>
          </div>
          <div className="foot-brand-line">
            People. Possibilities. Meaningful Collaborations.
          </div>
          <p style={{ fontSize: '12px', opacity: 0.65, marginTop: '12px', lineHeight: 1.65 }}>
            We connect brands with creators through authentic storytelling, measurable campaigns, and lasting partnerships. Founded 2023.
          </p>
          <div className="socials">
            <a
              href="https://instagram.com/influencerwedsmarketing.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IWM on Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h5>Explore</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About IWM</a></li>
            <li><a href="#founder">The Founder</a></li>
            <li><a href="#nykaaland">Nykaaland Experience</a></li>
            <li><a href="#services">Our Capabilities</a></li>
            <li><a href="#campaigns">Selected Work</a></li>
            <li><a href="#creators">Creator Roster</a></li>
            <li><a href="#process">Our Approach</a></li>
            <li><a href="#testimonials">Client & Creator Stories</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h5>Services</h5>
          <ul>
            <li><a href="#services">Influencer Management</a></li>
            <li><a href="#services">Brand Campaigns</a></li>
            <li><a href="#services">Meme Marketing</a></li>
            <li><a href="#services">Content Strategy</a></li>
            <li><a href="#services">Social Media Management</a></li>
            <li><a href="#services">Creator Partnerships</a></li>
            <li><a href="#services">Performance & Reporting</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h5>Get in Touch</h5>
          <p style={{ fontSize: '12px', opacity: 0.68 }}>
            Ready to design your next breakthrough campaign?
          </p>
          <div style={{ marginTop: '14px', fontSize: '12.5px', opacity: 0.75, lineHeight: 2.2 }}>
            <a href="mailto:Influencerwedsmarketing@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-envelope gold-text"></i> Influencerwedsmarketing@gmail.com
            </a>
            <a href="tel:+918770721703" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-phone gold-text"></i> +91 87707 21703
            </a>
            <a href="https://instagram.com/influencerwedsmarketing.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-brands fa-instagram gold-text"></i> @influencerwedsmarketing.in
            </a>
          </div>

          <div className="foot-women-badge">
            <span className="sparkle">✦</span> WOMEN-LED. PEOPLE-FIRST.
          </div>
        </div>
      </div>

      <div className="copy">
        <span>© 2025 IWM — Influencer Weds Marketing. All rights reserved.</span>
        <span>People. Possibilities. Meaningful Collaborations.</span>
      </div>
    </footer>
  )
}
