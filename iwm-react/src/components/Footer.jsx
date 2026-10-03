export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <div className="brand"><b>IWM</b><small>INFLUENCER WEDS MARKETING</small></div>
          <p style={{fontSize:'12px',opacity:.6,marginTop:'12px',lineHeight:1.6}}>We connect brands with creators to build authentic stories and create lasting impact. Founded 2023.</p>
          <div className="socials">
            <a href="https://instagram.com/influencerwedsmarketing.in" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div><h5>Quick Links</h5><ul>
          <li><a href="#home">Home</a></li><li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li><li><a href="#campaigns">Work</a></li>
        </ul></div>
        <div><h5>Services</h5><ul>
          <li><a href="#services">Influencer Management</a></li>
          <li><a href="#services">Campaign Strategy</a></li>
          <li><a href="#services">Brand Partnerships</a></li>
        </ul></div>
        <div><h5>Get in Touch</h5>
          <p style={{fontSize:'12px',opacity:.6}}>Ready to start a campaign?</p>
          <div className="news-box"><input placeholder="Your email" type="email" /><button><i className="fa-solid fa-arrow-right"></i></button></div>
          <div style={{marginTop:'14px',fontSize:'12px',opacity:.58,lineHeight:2.1}}>
            <a href="mailto:Influencerwedsmarketing@gmail.com" style={{display:'block'}}>Influencerwedsmarketing@gmail.com</a>
            <a href="tel:+918770721703" style={{display:'block'}}>+91 87707 21703</a>
          </div>
        </div>
      </div>
      <div className="copy"><span>2025 IWM - Influencer Weds Marketing. All rights reserved.</span><span>Crafted with influence</span></div>
    </footer>
  )
}
