import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [light, setLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      // simplified logic
      setLight(y > 500 && y < 1500)
    }
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header id="header" className={`${scrolled ? 'scrolled' : ''} ${light ? 'light' : ''}`}>
        <div className="brand"><b>IWM</b><small>INFLUENCER WEDS MARKETING</small></div>
        <nav className="desk" id="deskNav">
          <a href="#about">About</a><a href="#services">Services</a><a href="#campaigns">Work</a>
          <a href="#creators">Creators</a><a href="#process">Process</a><a href="#testimonials">Stories</a>
        </nav>
        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
          <a href="#contact" className="btn-pill">Let's Talk <i className="fa-solid fa-arrow-right" style={{fontSize:'11px'}}></i></a>
          <button id="hamb" aria-label="Open menu" onClick={() => setMenuOpen(true)}><i className="fa-solid fa-bars"></i></button>
        </div>
      </header>

      <div id="mobileMenu" role="dialog" className={menuOpen ? 'open' : ''}>
        <button id="closeMenu" style={{alignSelf:'flex-end',background:'none',border:'1px solid #fff',color:'#fff',borderRadius:'50%',width:'44px',height:'44px'}} onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#campaigns" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#creators" onClick={() => setMenuOpen(false)}>Creators</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Stories</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Let's Talk</a>
      </div>
    </>
  )
}
