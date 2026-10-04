import { useState } from 'react'

const testiData = [
  {text:"I've worked with quite a few brands and agencies, and most of the time follow-up after a campaign can feel pressured. But working with IWM has been completely different. Tuba has always been so approachable, responsive and understanding with all my queries. Deepika has continued the same energy - calm, respectful and never pushy. What I really appreciate is how smooth everything feels: clear communication, no unnecessary pressure and an overall positive way of working.",src:"Creator Feedback"},
  {text:"I would like to sincerely appreciate the excellent work in creation and maintenance of the content calendar and overall coordination. Over three months of working with the team, they have consistently shown dedication, strong organisation and clear communication. They regularly share follow-ups, bring quality content ideas and maintain a smooth workflow. Their hard work truly contributes to the growth of my content.",src:"Creator Feedback"},
  {text:"I would genuinely like to highlight the incredible work Charu and Deepika have been doing. Charu always comes through with timely suggestions, creative content ideas and constant support. Deepika consistently brings in great collaboration opportunities and connects me with valuable deals. Love the way IWM is working as my partner in the content journey.",src:"Creator Feedback"},
  {text:"Love working with your agency. The whole process was so smooth and easygoing. You are doing great work by making brand collaboration so accessible for small creators.",src:"Creator Feedback"}
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  return (
    <section id="testimonials">
      <div className="testi-head reveal">
        <div className="eyebrow">Creator Stories</div>
        <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>Words From the<br/>People We Work With.</h2>
      </div>
      <div className="testi-slider-wrap reveal-3d delay-1">
        <div className="testi-track-outer" style={{overflow:'hidden'}}>
          <div className="testi-track" style={{transform:`translateX(calc(-${idx * 50}% - ${idx * 12}px))`}}>
            {testiData.map((t, i) => (
              <div key={i} className="tcard">
                <div className="tcard-ql">"</div>
                <p>{t.text}</p>
                <div className="tcard-source">
                  <div className="tcard-avatar">C</div>
                  <div className="tcard-name">{t.src}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-controls">
          <button className="testi-btn" onClick={() => setIdx(Math.max(0, idx - 1))}><i className="fa-solid fa-arrow-left"></i></button>
          <button className="testi-btn" onClick={() => setIdx(Math.min(testiData.length - 2, idx + 1))}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  )
}
