export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-copy reveal">
          <div className="eyebrow">About IWM</div>
          <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>More Than<br/>Just Marketing.</h2>
          <p>IWM is a team of creatives, strategists and digital experts helping brands connect with audiences through creator-led storytelling, influencer partnerships and content innovation. Founded in 2023.</p>
          <div className="about-values">
            <div className="about-val-item"><span className="about-val-num">01</span><span className="about-val-text">Authenticity</span></div>
            <div className="about-val-item"><span className="about-val-num">02</span><span className="about-val-text">Agility</span></div>
            <div className="about-val-item"><span className="about-val-num">03</span><span className="about-val-text">Results-Driven Creativity</span></div>
          </div>
        </div>
        <div className="about-collage reveal" id="collage">
          <img className="main-portrait" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop" alt="Creator at work" />
          <div className="mini-card" style={{left:'8%',top:'6%',transform:'rotate(-8deg)'}}><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" alt="" /></div>
          <div className="mini-card" style={{left:'2%',top:'44%',transform:'rotate(6deg)',width:'150px'}}><img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop" alt="" /></div>
          <div className="mini-card" style={{right:'8%',top:'12%',transform:'rotate(8deg)'}}><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" alt="" /></div>
          <div className="mini-card" style={{right:'2%',bottom:'8%',transform:'rotate(-6deg)',width:'150px'}}><img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop" alt="" /></div>
        </div>
        <div className="about-stats reveal">
          <div><b>40+</b><span>Exclusive Creators</span></div>
          <div><b>30+</b><span>Brand Campaigns</span></div>
          <div><b>2.8M+</b><span>Campaign Views</span></div>
          <div className="v-scroll">SCROLL <i className="fa-solid fa-arrow-down"></i></div>
        </div>
      </div>
    </section>
  )
}
