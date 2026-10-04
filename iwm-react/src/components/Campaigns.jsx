import { useState } from 'react'

const csData = [
  {brand:'IWM x AXIS-Y',idx:'01',obj:'Brand Awareness - Pan India. Vegan Collagen Eye Serum.',strategy:['Selected skincare and beauty creators across India','Prioritised authentic product usage and demonstration','Focused on texture, application and visible effects','Used creator storytelling to build audience trust'],img:'/images/12_campaign_main_woman.png',metrics:[{v:'313K+',l:'Views'},{v:'11',l:'Creators'},{v:'Rs.0.56',l:'CPV'}],deliverables:'11 Instagram Reels and 11 Stories with CTA.',outcome:'2,699 Likes, 423 Comments, 699 Shares across 11 creator posts.',quote:{text:'The IWM team selected creators who really understood the product and our brand voice. Loved the campaign quality and results.',src:'Marketing Lead, AXIS-Y'}},
  {brand:'IWM x Pilgrim',idx:'02',obj:'Product education and brand awareness campaign.',strategy:['Creators matched based on content style and skin concerns','Prioritised audience relevance and genuine product fit','Focused on product education through creator narratives','Built trust through honest, experience-led content'],img:'/images/13_campaign_card_woman.png',metrics:[{v:'1.03M+',l:'Views'},{v:'5',l:'Creators'},{v:'Rs.0.19',l:'CPV'}],deliverables:'Instagram Reels and Stories across 5 creators.',outcome:'12,703 Likes, 395 Comments, 577 Shares. High engagement through product-first storytelling.',quote:{text:'',src:''}},
  {brand:'IWM x Naturali',idx:'03',obj:'Promote sunscreen, haircare and body-care through authentic creator content suitable for advertising.',strategy:['Sunscreen texture, finish and everyday wear content','Scalp care, anti-dandruff and anti-hair-fall storytelling','Body scrub demonstrations and ingredient education','Natural lifestyle content aligned to brand values'],img:'/images/14_campaign_card_hat_woman.png',metrics:[{v:'1.51M+',l:'Views'},{v:'410',l:'Creators'},{v:'Rs.0.08',l:'CPV'}],deliverables:'410 Reels, 410 Stories, 410 Reel Reshares. Campaign launched April 1, 2025.',outcome:'Campaign expanded from 200 to 500 planned creators due to performance. Naturali continued monthly activations with IWM.',quote:{text:"We are extremely impressed with the quality of creators IWM onboarded. Their understanding of our content requirements and ad goals was spot on. We're continuing monthly campaigns based on their performance.",src:'Marketing Team, Naturali'}}
]

export default function Campaigns() {
  const [idx, setIdx] = useState(0)
  const cs = csData[idx]

  return (
    <section id="campaigns">
      <div className="camp-head reveal">
        <div>
          <div className="eyebrow" style={{color:'#111'}}>Selected Work</div>
          <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>Real Stories.<br/><em>Real Results.</em></h2>
        </div>
        <div>
          <p style={{fontSize:'14px',opacity:.7,lineHeight:1.6,marginBottom:'22px'}}>Each campaign is built on creator authenticity, audience alignment and measurable outcomes.</p>
          <div className="cs-tabs">
            {csData.map((d, i) => (
              <button key={i} className={idx === i ? 'on' : ''} onClick={() => setIdx(i)}>{d.brand.split('x ')[1]}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="cs-display reveal">
        <div className="cs-layout">
          <div className="cs-left">
            <div>
              <div className="cs-index">Case Study {cs.idx}</div>
              <div className="cs-brand-name">{cs.brand}</div>
              <p className="cs-objective">{cs.obj}</p>
              <div className="cs-strategy">
                <h5>Strategy</h5>
                <ul>
                  {cs.strategy.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <p className="cs-deliverables">{cs.deliverables}</p>
            </div>
            {cs.quote.text && (
              <div className="cs-quote">
                <p>{cs.quote.text}</p>
                <cite>- {cs.quote.src}</cite>
              </div>
            )}
          </div>
          <div className="cs-right">
            <div className="cs-image"><img src={cs.img} alt={cs.brand} /></div>
            <div className="cs-metrics">
              {cs.metrics.map((m, i) => (
                <div key={i} className="cs-metric">
                  <span className="cs-metric-val">{m.v}</span>
                  <span className="cs-metric-label">{m.l}</span>
                </div>
              ))}
            </div>
            <div className="cs-outcome"><p>{cs.outcome}</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
