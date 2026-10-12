import { useState } from 'react'
import TiltCard from './TiltCard'
import nykaalandFoundationPavilion from '../assets/real_photos/nykaaland-foundation-pavilion.jpg'

export default function Contact() {
  const [mode, setMode] = useState('brand') // 'brand' | 'creator'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    handleOrBrand: '',
    serviceOrNiche: 'Influencer Management',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your name and a valid email address.')
      return
    }
    setIsSubmitting(true)

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          handleOrBrand: '',
          serviceOrNiche: mode === 'brand' ? 'Influencer Management' : 'Beauty & Skincare',
          message: ''
        })
      }, 5000)
    }, 700)
  }

  return (
    <section id="contact">
      <div className="contact-grid">
        {/* Left Column: Direct Agency Channels */}
        <div className="reveal">
          <div className="brand">
            <b style={{ fontSize: '26px' }}>IWM</b>
            <small style={{ fontSize: '9px', letterSpacing: '.2em' }}>INFLUENCER WEDS MARKETING</small>
          </div>
          <div className="eyebrow" style={{ marginTop: '16px' }}>
            <span className="dot gold-dot"></span> SECTION 09 / COLLABORATION
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Have an Experience<br />
            <em>in Mind?</em>
          </h2>
          <p style={{ fontSize: '13.5px', opacity: 0.75, lineHeight: 1.7, marginTop: '10px' }}>
            Let’s turn your next idea into something worth remembering. Whether you’re a brand seeking impactful campaign execution or a creator exploring meaningful partnerships, we invite you to start a conversation.
          </p>

          {/* Quick Dual CTA Selector */}
          <div className="cta-row">
            <button
              type="button"
              className={mode === 'brand' ? 'btn-dark' : 'btn-pill'}
              onClick={() => {
                setMode('brand')
                setFormData(prev => ({ ...prev, serviceOrNiche: 'Influencer Management' }))
              }}
              style={{
                background: mode === 'brand' ? '#111' : 'transparent',
                color: mode === 'brand' ? '#fff' : '#111',
                borderColor: '#111'
              }}
            >
              I'M A BRAND <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button
              type="button"
              className={mode === 'creator' ? 'btn-dark' : 'btn-pill'}
              onClick={() => {
                setMode('creator')
                setFormData(prev => ({ ...prev, serviceOrNiche: 'Beauty & Skincare' }))
              }}
              style={{
                background: mode === 'creator' ? '#111' : 'transparent',
                color: mode === 'creator' ? '#fff' : '#111',
                borderColor: '#111'
              }}
            >
              I'M A CREATOR <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* Official Supplied Agency Channels */}
          <div id="contactInfo" style={{ marginTop: '26px', fontSize: '13px', opacity: 0.8, lineHeight: 2.2 }}>
            <div style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.18em', opacity: 0.6, marginBottom: '4px' }}>
              Direct Channels
            </div>
            <a href="mailto:Influencerwedsmarketing@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa-solid fa-envelope gold-text"></i> Influencerwedsmarketing@gmail.com
            </a>
            <a href="tel:+918770721703" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa-solid fa-phone gold-text"></i> +91 87707 21703
            </a>
            <a href="https://instagram.com/influencerwedsmarketing.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa-brands fa-instagram gold-text"></i> @influencerwedsmarketing.in
            </a>
          </div>

          <div className="contact-timeline-note">
            <span className="dot"></span> Proposals drafted within 3 working days • Rapid onboarding
          </div>
        </div>

        {/* Center: Curated Editorial Photography with 3D Tilt */}
        <div className="mid-img reveal-img">
          <TiltCard maxTilt={8} scale={1.02} style={{ height: '100%' }}>
            <img
              src={nykaalandFoundationPavilion}
              alt="IWM experiential curation in field"
              loading="lazy"
            />
            <div className="mid-img-caption">
              <b>Experiential Presence</b>
              <span>On-ground creative execution</span>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Tailored Inquiry Form */}
        <div className="form-card reveal">
          <div className="toggle-tabs">
            <button
              type="button"
              className={mode === 'brand' ? 'on' : ''}
              onClick={() => {
                setMode('brand')
                setFormData(prev => ({ ...prev, serviceOrNiche: 'Influencer Management' }))
              }}
            >
              Brand Inquiry
            </button>
            <button
              type="button"
              className={mode === 'creator' ? 'on' : ''}
              onClick={() => {
                setMode('creator')
                setFormData(prev => ({ ...prev, serviceOrNiche: 'Beauty & Skincare' }))
              }}
            >
              Creator Roster
            </button>
          </div>

          {submitted ? (
            <div className="form-success-box">
              <i className="fa-solid fa-circle-check" style={{ fontSize: '36px', color: '#16a34a', marginBottom: '12px' }}></i>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '24px', margin: '0 0 8px' }}>Thank You for Reaching Out</h4>
              <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.6 }}>
                Your message has been received. An IWM campaign strategist will review your details and get in touch shortly.
              </p>
              <button
                type="button"
                className="btn-dark"
                style={{ marginTop: '16px' }}
                onClick={() => setSubmitted(false)}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="formName">
                {mode === 'brand' ? 'Contact Name / Brand Representative *' : 'Creator Name *'}
              </label>
              <input
                id="formName"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={mode === 'brand' ? 'e.g., Sarah Jenkins' : 'e.g., Ananya Roy'}
                required
              />

              <label htmlFor="formEmail">Email Address *</label>
              <input
                id="formEmail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@domain.com"
                required
              />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="formPhone">Phone Number</label>
                  <input
                    id="formPhone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91..."
                  />
                </div>
                <div>
                  <label htmlFor="formHandle">
                    {mode === 'brand' ? 'Company / Brand' : 'Instagram / Handle'}
                  </label>
                  <input
                    id="formHandle"
                    name="handleOrBrand"
                    value={formData.handleOrBrand}
                    onChange={handleInputChange}
                    placeholder={mode === 'brand' ? 'Brand name' : '@handle'}
                  />
                </div>
              </div>

              <label htmlFor="formService">
                {mode === 'brand' ? 'Primary Service Needed' : 'Creator Niche'}
              </label>
              <select
                id="formService"
                name="serviceOrNiche"
                value={formData.serviceOrNiche}
                onChange={handleInputChange}
              >
                {mode === 'brand' ? (
                  <>
                    <option value="Influencer Management">Influencer Management</option>
                    <option value="Brand Campaigns">Brand Campaigns</option>
                    <option value="Meme Marketing">Meme Marketing</option>
                    <option value="Content Strategy">Content Strategy</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Performance & Reporting">Performance & Reporting</option>
                  </>
                ) : (
                  <>
                    <option value="Beauty & Skincare">Beauty & Skincare</option>
                    <option value="Lifestyle & Fashion">Lifestyle & Fashion</option>
                    <option value="Haircare & Wellness">Haircare & Wellness</option>
                    <option value="Meme, Comedy & Culture">Meme, Comedy & Culture</option>
                    <option value="General Brand Collaboration">General Brand Collaboration</option>
                  </>
                )}
              </select>

              <label htmlFor="formMsg">
                {mode === 'brand' ? 'Campaign Objectives & Details *' : 'Tell Us About Your Content & Channels *'}
              </label>
              <textarea
                id="formMsg"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={
                  mode === 'brand'
                    ? 'Outline your target launch window, audience goals, or creative vision...'
                    : 'Share your key platforms, current follower reach, and favorite content themes...'
                }
              />

              {errorMsg && (
                <p className="form-error-text">
                  <i className="fa-solid fa-triangle-exclamation"></i> {errorMsg}
                </p>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Processing... <i className="fa-solid fa-spinner fa-spin"></i></>
                ) : (
                  <>Send Message <i className="fa-solid fa-arrow-right"></i></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
