import { useState, useEffect } from 'react'

const testiData = [
  {
    text: "We are extremely impressed with the quality of creators IWM onboarded. Their understanding of our content requirements and ad goals was spot on. We're continuing monthly campaigns based on their performance.",
    src: "Marketing Team, Naturali",
    type: "Brand Partner",
    avatar: "N"
  },
  {
    text: "The IWM team selected creators who really understood the product and our brand voice. Loved the campaign quality and results.",
    src: "Marketing Lead, AXIS-Y",
    type: "Brand Partner",
    avatar: "A"
  },
  {
    text: "I've worked with quite a few brands and agencies, and most of the time follow-up after a campaign can feel pressured. But working with IWM has been completely different. What I really appreciate is how smooth everything feels: clear communication, no unnecessary pressure and an overall positive way of working.",
    src: "Creator Feedback",
    type: "Creator Community",
    avatar: "C"
  },
  {
    text: "I would genuinely like to highlight the incredible work Charu and Deepika have been doing. Charu always comes through with timely suggestions, creative content ideas and constant support. Love the way IWM is working as my partner in the content journey.",
    src: "Creator Feedback",
    type: "Creator Community",
    avatar: "C"
  },
  {
    text: "Love working with your agency. The whole process was so smooth and easygoing. You are doing great work by making brand collaboration so accessible for small creators.",
    src: "Creator Feedback",
    type: "Creator Community",
    avatar: "C"
  }
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIdx((prev) => (prev >= testiData.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  const handleNext = () => {
    setIdx((prev) => (prev >= testiData.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setIdx((prev) => (prev <= 0 ? testiData.length - 1 : prev - 1))
  }

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testi-head reveal">
        <div className="eyebrow">Creator & Partner Voices</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
          Words From the<br />
          People We Work With.
        </h2>
        <p style={{ maxWidth: '540px', fontSize: '13.5px', opacity: 0.7, lineHeight: 1.6, marginTop: '8px' }}>
          Documented feedback from brand partners and creators across our campaign ecosystem.
        </p>
      </div>

      <div className="testi-slider-wrap reveal-3d delay-1">
        <div className="testi-track-outer">
          <div
            className="testi-track"
            style={{
              transform: `translateX(-${idx * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
          >
            {testiData.map((t, i) => (
              <div key={i} className="tcard-slide">
                <div className="tcard">
                  <div className="tcard-top-bar">
                    <span className="tcard-tag">{t.type}</span>
                    <span className="tcard-ql">“</span>
                  </div>
                  <p className="tcard-quote-text">{t.text}</p>
                  <div className="tcard-source">
                    <div className="tcard-avatar">{t.avatar}</div>
                    <div>
                      <div className="tcard-name">{t.src}</div>
                      <div className="tcard-sub">Documented Collaboration</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testi-controls">
          <button className="testi-btn" onClick={handlePrev} aria-label="Previous testimonial">
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <div className="testi-dots">
            {testiData.map((_, i) => (
              <button
                key={i}
                className={`testi-dot ${idx === i ? 'active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button className="testi-btn" onClick={handleNext} aria-label="Next testimonial">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
