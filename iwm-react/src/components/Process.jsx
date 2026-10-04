export default function Process() {
  const steps = [
   {t:'Understand',d:'Brand requirements, campaign goals and audience definition.',img:'/images/18_process_01.png'},
   {t:'Strategize',d:'Audience, creator and content strategy aligned to objectives.',img:'/images/19_process_02.png'},
   {t:'Curate',d:'Relevant creators selected based on content quality and audience fit.',img:'/images/20_process_03.png'},
   {t:'Execute',d:'Briefing, coordination, content delivery and campaign management.',img:'/images/21_process_04.png'},
   {t:'Track',d:'Performance monitoring, reporting and optimisation.',img:'/images/22_process_05.png'},
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
          <div key={i} className="pstep reveal in">
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
