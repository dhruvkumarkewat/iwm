

const svcData = [
 {t:'Influencer Management',d:'Creator selection, relationship management, coordination and campaign execution.',img:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop'},
 {t:'Campaign Strategy',d:'Creator matching, content strategy, campaign planning and authentic storytelling.',img:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop'},
 {t:'Brand Partnerships',d:'Brand requirement understanding, deal acquisition, negotiation and coordination.',img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'},
 {t:'Campaign Execution',d:'Calendars, trackers, deliverables, payment coordination and seamless execution.',img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'},
 {t:'Performance and Reporting',d:'Campaign tracking, analytics, optimisation and transparent reporting.',img:'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop'}
]

export default function Services() {
  return (
    <section id="services">
      <div className="reveal">
        <div className="eyebrow" style={{justifyContent:'center'}}>Our Services</div>
        <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>End-to-End Influencer Marketing</h2>
      </div>
      <div className="svc-wrap">
        <div className="svc-track-outer">
          <div className="svc-track">
            {svcData.map((s, i) => (
              <div key={i} className="svc">
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
