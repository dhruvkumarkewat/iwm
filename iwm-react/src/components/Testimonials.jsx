import { useState, useEffect } from 'react'

const testiData = [
  {text:"We are extremely impressed with the quality of creators IWM onboarded. Their understanding of our content requirements and ad goals was spot on. We're continuing monthly campaigns based on their performance.",src:"Marketing Team, Naturali"},
  {text:"The IWM team selected creators who really understood the product and our brand voice. Loved the campaign quality and results.",src:"Marketing Lead, AXIS-Y"},
  {text:"I've worked with quite a few brands and agencies, and most of the time follow-up after a campaign can feel pressured. But working with IWM has been completely different. What I really appreciate is how smooth everything feels: clear communication, no unnecessary pressure and an overall positive way of working.",src:"Creator Feedback"},
  {text:"I would genuinely like to highlight the incredible work Charu and Deepika have been doing. Charu always comes through with timely suggestions, creative content ideas and constant support. Love the way IWM is working as my partner in the content journey.",src:"Creator Feedback"},
  {text:"Love working with your agency. The whole process was so smooth and easygoing. You are doing great work by making brand collaboration so accessible for small creators.",src:"Creator Feedback"}
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => {
        const maxI = testiData.length - 2; // Assuming 2 per view on desktop
        return prev >= maxI ? 0 : prev + 1;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setIdx(prev => { const m = testiData.length-2; return prev >= m ? 0 : prev + 1; });
  const handlePrev = () => setIdx(prev => { const m = testiData.length-2; return prev <= 0 ? m : prev - 1; });

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
          <button className="testi-btn" onClick={handlePrev}><i className="className-solid fa-arrow-left"></i></button>
          <button className="testi-btn" onClick={handleNext}><i className="className-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  )
}
