import { useState, useEffect, useRef } from 'react'
import TiltCard from './TiltCard'

const steps = [
  {
    num: '01',
    t: 'Understand',
    d: 'Understand the brand, its objectives, and the audience it wants to reach.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop'
  },
  {
    num: '02',
    t: 'Connect',
    d: 'Identify relevant creator partnerships and collaboration opportunities.',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=500&auto=format&fit=crop'
  },
  {
    num: '03',
    t: 'Create',
    d: 'Bring campaign ideas and content planning together.',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop'
  },
  {
    num: '04',
    t: 'Execute',
    d: 'Coordinate communication and campaign delivery.',
    img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=500&auto=format&fit=crop'
  },
  {
    num: '05',
    t: 'Build Relationships',
    d: 'Focus on meaningful relationships and future collaboration opportunities.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop'
  }
]

export default function Process() {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far down the section has scrolled through the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalDistance = rect.height + windowHeight
        const currentDistance = windowHeight - rect.top
        const progress = Math.min(100, Math.max(0, (currentDistance / totalDistance) * 130))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="process" ref={sectionRef}>
      <div className="proc-head reveal">
        <div>
          <div className="eyebrow">Our Approach</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            A Clear Process.<br />
            Powerful Results.
          </h2>
        </div>
        <div>
          <p style={{ maxWidth: '500px', fontSize: '13.5px', opacity: 0.72, lineHeight: 1.65 }}>
            IWM’s proposed collaboration framework—transparent, relationship-led, and execution-focused from the opening brief to ongoing growth.
          </p>
          <div className="proc-narrative-tag">
            <span className="dot gold-dot"></span>
            <span>Interactive Storyline • Scroll-synchronized</span>
          </div>
        </div>
      </div>

      <div className="proc-row">
        {/* Scroll-driven animated progress line */}
        <div
          id="procFill"
          style={{
            width: `${Math.min(100, Math.max(12, scrollProgress))}%`,
            transition: 'width 0.25s ease-out'
          }}
        ></div>

        {steps.map((s, i) => {
          const stepThreshold = (i / (steps.length - 1)) * 90
          const isPassed = scrollProgress >= stepThreshold
          return (
            <div
              key={s.num}
              className={`pstep reveal-3d delay-${(i % 3) + 1} ${isPassed ? 'step-active' : ''}`}
            >
              <TiltCard maxTilt={14} perspective={800} scale={1.05} className="pstep-tilt">
                <div className={`circ ${isPassed ? 'circ-illuminated' : ''}`}>
                  <img src={s.img} alt={s.t} />
                  <span className="circ-badge">{s.num}</span>
                </div>
              </TiltCard>
              <b className={`num ${isPassed ? 'gold-text' : ''}`}>{s.num}</b>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
