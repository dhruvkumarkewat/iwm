import { useState } from 'react'

const svcData = [
 {t:'Influencer Management',d:'Creator selection, relationship management, coordination and campaign execution.',img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'},
 {t:'Campaign Strategy',d:'Creator matching, content strategy, campaign planning and authentic storytelling.',img:'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop'},
 {t:'Brand Partnerships',d:'Brand requirement understanding, deal acquisition, negotiation and coordination.',img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop'},
 {t:'Campaign Execution',d:'Calendars, trackers, deliverables, payment coordination and seamless execution.',img:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400&auto=format&fit=crop'},
 {t:'Performance and Reporting',d:'Campaign tracking, analytics, optimisation and transparent reporting.',img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop'}
]

export default function Services() {
  const [idx, setIdx] = useState(2)

  const handleNext = () => setIdx(i => (i + 1) % svcData.length)
  const handlePrev = () => setIdx(i => (i - 1 + svcData.length) % svcData.length)

  return (
    <section id="services">
      <div className="reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>Our Services</div>
        <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>End-to-End Influencer Marketing</h2>
      </div>
      <div className="svc-wrap">
        <button className="svc-arrow" id="svcPrev" onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
        <button className="svc-arrow" id="svcNext" onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
        <div className="svc-track-outer">
          <div className="svc-track" style={{transform:`translateX(calc(50vw - 124px - ${idx * 248}px))`}}>
            {svcData.map((s, i) => (
              <div key={i} className={`svc ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)}>
                <img src={s.img} alt={s.t} />
                <div className="svc-body">
                  <i>SERVICE 0{i+1}</i>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
                <div className="svc-num">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
