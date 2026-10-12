import { useState, useEffect, useRef } from 'react'
import TiltCard from './TiltCard'

const philosophySteps = [
  {
    num: '01',
    title: 'Understand the Vision',
    subtitle: 'Brand Objectives & Cultural Niche',
    desc: 'We immerse ourselves in the brand’s core philosophy, target audience demographics, and precise commercial goals before approaching a single creator.',
    tag: 'Discovery & Context'
  },
  {
    num: '02',
    title: 'Shape the Experience',
    subtitle: 'Creator Matching & Creative Narrative',
    desc: 'Aligning creators whose authentic storytelling naturally mirrors the brand voice. We co-craft angles that feel native, organic, and culturally relevant.',
    tag: 'Curation & Narrative'
  },
  {
    num: '03',
    title: 'Bring It to Life',
    subtitle: 'Flawless On-Ground & Digital Execution',
    desc: 'From high-energy on-ground activations like Nykaaland to synchronized multi-tier digital rollouts, every asset is executed with editorial precision.',
    tag: 'Production & Rollout'
  },
  {
    num: '04',
    title: 'Refine Every Detail',
    subtitle: 'Measurable Impact & Lasting Bonds',
    desc: 'Deep post-campaign analytics—tracking view through rates, engagement quality, CPV benchmarks, and nurturing long-term creator and brand partnerships.',
    tag: 'Analytics & Growth'
  }
]

export default function Process() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
        const stepHeight = rect.height / 4
        const scrolledInto = windowHeight * 0.5 - rect.top
        const idx = Math.min(3, Math.max(0, Math.floor(scrolledInto / stepHeight)))
        setActiveStep(idx)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="process" ref={sectionRef} className="philosophy-section">
      <div className="process-header">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="dot gold-dot"></span> SECTION 06 / PHILOSOPHY &amp; APPROACH
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
          How Ideas Turn into<br />
          <em>Measurable Reality.</em>
        </h2>
        <p className="process-subhead">
          A disciplined, four-phase creative methodology honed across 100+ digital and experiential campaigns.
        </p>
      </div>

      <div className="philosophy-grid">
        {philosophySteps.map((step, index) => (
          <div
            key={step.num}
            className={`philosophy-card ${activeStep === index ? 'active-step' : ''}`}
            onMouseEnter={() => setActiveStep(index)}
          >
            <TiltCard maxTilt={6} perspective={1100} scale={1.01} className="philosophy-tilt-card">
              <div className="philosophy-card-inner">
                <div className="philosophy-top-row">
                  <span className="philosophy-num">{step.num}</span>
                  <span className="philosophy-tag">{step.tag}</span>
                </div>
                <h3 className="philosophy-title">{step.title}</h3>
                <h4 className="philosophy-subtitle">{step.subtitle}</h4>
                <p className="philosophy-desc">{step.desc}</p>
                <div className="philosophy-line"></div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  )
}
