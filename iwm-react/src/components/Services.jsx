

const svcData = [
 {t:'Influencer Management',d:'Creator selection, relationship management, coordination and campaign execution.',img:'/images/05_services_influencer.png'},
 {t:'Campaign Strategy',d:'Creator matching, content strategy, campaign planning and authentic storytelling.',img:'/images/06_services_creator.png'},
 {t:'Brand Partnerships',d:'Brand requirement understanding, deal acquisition, negotiation and coordination.',img:'/images/07_services_brand_campaign.png'},
 {t:'Campaign Execution',d:'Calendars, trackers, deliverables, payment coordination and seamless execution.',img:'/images/09_services_campaign_execution.png'},
 {t:'Performance and Reporting',d:'Campaign tracking, analytics, optimisation and transparent reporting.',img:'/images/11_services_analytics.png'}
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
