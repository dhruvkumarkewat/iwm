import { useEffect } from 'react'

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-bg"><img id="heroImg" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop" alt="Creator at work" /></div>
      <div className="hero-inner">
        <div className="hero-copy reveal in">
          <h1>Real<br/>Creators.<br/><em>Real Impact.</em></h1>
          <div className="hero-sub">Influencer Marketing <span>|</span> Creator Management <span>|</span> Brand Campaigns</div>
          <div className="hero-ctas">
            <a href="#contact" className="btn-light">Start a Project <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#campaigns" className="btn-pill" style={{borderColor:'rgba(255,255,255,.35)'}}>Explore Our Work</a>
          </div>
          <div className="scroll-cue"><span className="mouse"><i></i></span> Scroll to explore</div>
        </div>
        <div className="hero-visual" id="heroVisual">
          <div className="float f-ig"><i className="fa-brands fa-instagram"></i></div>
          <div className="float f-heart"><i className="fa-solid fa-heart"></i> <small style={{fontSize:'11px',color:'#111'}}>313K</small></div>
          <div className="float f-card"><span style={{fontSize:'11px',opacity:.6}}>Creators</span><b>build trust. We build brands.</b></div>
          <div className="float f-mini"><span style={{fontSize:'11px',opacity:.7}}>Best Campaign CPV</span><div style={{fontSize:'20px',fontWeight:800}}>Rs.0.08</div><div className="bars"><span style={{height:'40%'}}></span><span style={{height:'65%'}}></span><span style={{height:'50%'}}></span><span style={{height:'90%'}}></span><span style={{height:'100%'}}></span></div></div>
        </div>
      </div>
    </section>
  )
}
