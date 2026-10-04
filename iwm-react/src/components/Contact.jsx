import { useState } from 'react'

export default function Contact() {
  const [mode, setMode] = useState('brand')

  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="reveal">
          <div className="brand"><b style={{fontSize:'24px'}}>IWM</b></div>
          <div className="eyebrow" style={{marginTop:'10px'}}>Let's Connect</div>
          <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>Let's Create<br/>Something Great.</h2>
          <p style={{fontSize:'12.5px',opacity:.6,lineHeight:1.7}}>Whether you are a brand looking for the right creators or a creator ready for new opportunities - we would love to hear from you.</p>
          <div className="cta-row">
            <button className="btn-dark" onClick={() => setMode('brand')} style={{background: mode==='brand'?'#111':'transparent', color:mode==='brand'?'#fff':'#111'}}>For Brands <i className="fa-solid fa-arrow-right"></i></button>
            <button className="btn-pill" onClick={() => setMode('creator')} style={{borderColor:'#111', color:mode==='creator'?'#fff':'#111'}}>For Creators <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div id="contactInfo" style={{marginTop:'20px',fontSize:'12.5px',opacity:.68,lineHeight:2.3}}>
            <a href="mailto:Influencerwedsmarketing@gmail.com" style={{display:'flex',alignItems:'center',gap:'9px'}}><i className="fa-solid fa-envelope"></i> Influencerwedsmarketing@gmail.com</a>
            <a href="tel:+918770721703" style={{display:'flex',alignItems:'center',gap:'9px'}}><i className="fa-solid fa-phone"></i> +91 87707 21703</a>
            <a href="https://instagram.com/influencerwedsmarketing.in" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:'9px'}}><i className="fa-brands fa-instagram"></i> @influencerwedsmarketing.in</a>
          </div>
        </div>
        <div className="mid-img reveal"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" alt="Creative collaboration" /></div>
        <div className="form-card reveal">
          <div className="toggle-tabs">
            <button className={mode === 'brand' ? 'on' : ''} onClick={() => setMode('brand')}>Brand</button>
            <button className={mode === 'creator' ? 'on' : ''} onClick={() => setMode('creator')}>Creator</button>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <label>Your Name *</label><input placeholder="Your name" />
            <label>Email Address *</label><input type="email" placeholder="you@company.com" />
            <label>Select Service</label>
            <select>
              {mode === 'brand' ? (
                <><option>Influencer Marketing</option><option>Campaign Strategy</option><option>Brand Partnerships</option></>
              ) : (
                <><option>Join as Creator</option><option>Brand Collaborations</option></>
              )}
            </select>
            <label>Message *</label><textarea rows="3" placeholder="Tell us about your goals..."></textarea>
            <button type="submit">Send Message <i className="fa-solid fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </section>
  )
}
