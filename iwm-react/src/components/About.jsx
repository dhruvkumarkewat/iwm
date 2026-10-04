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
          <img className="main-portrait" src="/images/02_about_main_woman.png" alt="Creator at work" />
          <div className="mini-card" style={{left:'8%',top:'6%',transform:'rotate(-8deg)'}}><img src="/images/03_about_left_card_creator.png" alt="" /></div>
          <div className="mini-card" style={{left:'2%',top:'44%',transform:'rotate(6deg)',width:'150px'}}><img src="/images/04_about_right_card_creator.png" alt="" /></div>
          <div className="mini-card" style={{right:'8%',top:'12%',transform:'rotate(8deg)'}}><img src="/images/03_about_left_card_creator.png" alt="" /></div>
          <div className="mini-card" style={{right:'2%',bottom:'8%',transform:'rotate(-6deg)',width:'150px'}}><img src="/images/04_about_right_card_creator.png" alt="" /></div>
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
