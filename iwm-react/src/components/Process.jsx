export default function Process() {
  const steps = [
   {t:'Understand',d:'Brand requirements, campaign goals and audience definition.',img:'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop'},
   {t:'Strategize',d:'Audience, creator and content strategy aligned to objectives.',img:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop'},
   {t:'Curate',d:'Relevant creators selected based on content quality and audience fit.',img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop'},
   {t:'Execute',d:'Briefing, coordination, content delivery and campaign management.',img:'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=400&auto=format&fit=crop'},
   {t:'Track',d:'Performance monitoring, reporting and optimisation.',img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop'},
  ]

  return (
    <section id="process">
      <div className="proc-head reveal">
        <div><div className="eyebrow">Our Process</div><h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>A Clear Process.<br/>Powerful Results.</h2></div>
        <p>Transparent and results-driven - from the first brief to the final campaign report.</p>
      </div>
      <div className="proc-row">
        <div id="procFill" style={{width:'84%'}}></div>
        {steps.map((s, i) => (
          <div key={i} className={`pstep reveal-3d delay-${(i%3)+1}`}>
            <div className="circ"><img src={s.img} alt={s.t} /></div>
            <b className="num">0{i+1}</b>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
