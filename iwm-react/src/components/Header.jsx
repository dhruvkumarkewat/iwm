import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [light, setLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'nykaaland', 'campaigns', 'founder', 'process', 'services', 'creators', 'contact']

    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)

      // Light header over light sections (#campaigns and #contact are paper background)
      const campaignsEl = document.getElementById('campaigns')
      const contactEl = document.getElementById('contact')
      let isOverLight = false

      if (campaignsEl) {
        const rect = campaignsEl.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom >= 80) isOverLight = true
      }
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom >= 80) isOverLight = true
      }
      setLight(isOverLight)

      // Active section detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header id="header" className={`${scrolled ? 'scrolled' : ''} ${light ? 'light' : ''}`}>
        <a href="#home" className="brand" aria-label="IWM Home">
          <b>IWM</b>
          <small>INFLUENCER WEDS MARKETING</small>
        </a>

        <nav className="desk" id="deskNav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#nykaaland" className={activeSection === 'nykaaland' ? 'active' : ''}>
            Nykaaland <span className="nav-feat-dot"></span>
          </a>
          <a href="#campaigns" className={activeSection === 'campaigns' ? 'active' : ''}>Our Work</a>
          <a href="#founder" className={activeSection === 'founder' ? 'active' : ''}>Founder</a>
          <a href="#process" className={activeSection === 'process' ? 'active' : ''}>Approach</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Capabilities</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="#contact" className="btn-pill btn-nav-cta">
            Start a Conversation <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
          </a>
          <button id="hamb" aria-label="Open navigation menu" onClick={() => setMenuOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div id="mobileMenu" role="dialog" aria-modal="true" className={menuOpen ? 'open' : ''}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
          <div className="brand" style={{ color: '#fff' }}>
            <b style={{ fontSize: '24px' }}>IWM</b>
          </div>
          <button
            id="closeMenu"
            aria-label="Close navigation menu"
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,.3)',
              color: '#fff',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#nykaaland" onClick={() => setMenuOpen(false)}>Nykaaland (Featured Experience)</a>
        <a href="#campaigns" onClick={() => setMenuOpen(false)}>Our Work</a>
        <a href="#founder" onClick={() => setMenuOpen(false)}>Founder</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>Our Approach</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Capabilities</a>
        <a href="#creators" onClick={() => setMenuOpen(false)}>Creator Network</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: 'var(--gold)', fontWeight: 600 }}>Start a Conversation</a>
      </div>
    </>
  )
}
