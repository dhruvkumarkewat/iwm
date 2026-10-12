import { useState, useEffect } from 'react'

const svcData = [
  {
    t: 'Influencer Management',
    d: 'Strategic creator selection, long-term talent management, relationship nurturing and end-to-end campaign coordination.',
    points: ['Curated creator discovery & roster access', 'Briefing alignment & creative freedom balance', 'Contracting, deliverables and timeline management'],
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop'
  },
  {
    t: 'Brand Campaigns',
    d: 'Full-spectrum campaign architecture connecting brand narratives with credible creator voices across platforms.',
    points: ['360-degree brand campaign strategy', 'Targeted product launches & awareness pushes', 'High-impact multi-creator activations'],
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'
  },
  {
    t: 'Meme Marketing',
    d: 'High-velocity cultural relevance and viral format conceptualization that sparks authentic social conversation.',
    points: ['Pop-culture trend integration & meme curation', 'Platform-native humorous brand adaptation', 'Organic conversational reach & community amplification'],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    t: 'Content Strategy',
    d: 'Tailored storytelling frameworks ensuring content resonates organically without feeling like scripted advertising.',
    points: ['Platform-specific creative blueprints (Reels, Shorts)', 'Authentic experience-led narrative scripts', 'Format diversification for beauty, fashion & lifestyle'],
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    t: 'Social Media Management',
    d: 'Holistic social channel oversight, content calendars, community engagement, and brand identity stewardship.',
    points: ['Content calendar planning & publishing', 'Audience interaction and community care', 'Consistent brand aesthetic across Instagram & YouTube'],
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    t: 'Creator Partnerships & Coordination',
    d: 'Fostering deep mutual respect between brands and creators for genuine, multi-phase collaborative relationships.',
    points: ['Brand-creator matchmaking aligned to values', 'Seamless logistical coordination & support', 'Sustained ambassadorships over one-off promotions'],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    t: 'Performance & Reporting',
    d: 'Transparent, data-backed metrics tracking views, CPV, engagement rates, and tangible audience response.',
    points: ['Comprehensive post-campaign analytics reports', 'CPV & engagement benchmark verification', 'Data-informed optimization for repeat activations'],
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop'
  }
]

export default function Services() {
  const [idx, setIdx] = useState(0)
  const [activeModal, setActiveModal] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % svcData.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isPaused])

  const handleClick = (i) => {
    setIdx(i)
  }

  const handlePrev = () => {
    setIdx((prev) => (prev === 0 ? svcData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIdx((prev) => (prev + 1) % svcData.length)
  }

  const getCardClass = (i) => {
    let diff = i - idx
    const total = svcData.length
    if (diff < -Math.floor(total / 2)) diff += total
    if (diff > Math.floor(total / 2)) diff -= total

    if (diff === -2) return 'svc-3d s-left2'
    if (diff === -1) return 'svc-3d s-left1'
    if (diff === 0) return 'svc-3d s-center'
    if (diff === 1) return 'svc-3d s-right1'
    if (diff === 2) return 'svc-3d s-right2'
    return 'svc-3d s-hidden'
  }

  const activeService = svcData[idx]

  return (
    <section
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="reveal">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          Our Capabilities
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
          End-to-End Influencer Solutions
        </h2>
        <p style={{ maxWidth: '640px', margin: '-18px auto 32px', fontSize: '13.5px', opacity: 0.7, lineHeight: 1.6 }}>
          From authentic creator management to high-engagement brand campaigns and meme culture integration—we curate the entire lifecycle.
        </p>
      </div>

      {/* Service category pills */}
      <div className="svc-category-pills reveal">
        {svcData.map((s, i) => (
          <button
            key={s.t}
            className={`svc-pill-btn ${idx === i ? 'on' : ''}`}
            onClick={() => handleClick(i)}
          >
            {s.t}
          </button>
        ))}
      </div>

      <div className="svc-wrap reveal-3d delay-1">
        <div className="svc-track-outer">
          <div className="svc-coverflow">
            {svcData.map((s, i) => (
              <div
                key={s.t}
                className={getCardClass(i)}
                onClick={() => handleClick(i)}
              >
                <img src={s.img} alt={s.t} />
                <div className="svc-body">
                  <i style={{ fontSize: '10px', letterSpacing: '.2em', opacity: 0.6, fontStyle: 'normal' }}>
                    SERVICE 0{i + 1}
                  </i>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                  <button
                    className="svc-more-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveModal(s)
                    }}
                  >
                    Explore Scope <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className="svc-num">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel controls */}
        <div className="svc-controls">
          <button className="svc-nav-btn" onClick={handlePrev} aria-label="Previous service">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="svc-indicator">
            <span>0{idx + 1}</span> / <span>0{svcData.length}</span> — <b>{activeService.t}</b>
          </div>
          <button className="svc-nav-btn" onClick={handleNext} aria-label="Next service">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Scope Detail Modal */}
      {activeModal && (
        <div className="svc-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="svc-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="svc-modal-close" onClick={() => setActiveModal(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="svc-modal-header">
              <span className="eyebrow">Service Scope</span>
              <h3>{activeModal.t}</h3>
              <p>{activeModal.d}</p>
            </div>
            <div className="svc-modal-points">
              <h5>Key Deliverables & Execution</h5>
              <ul>
                {activeModal.points.map((p, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-check gold-text"></i> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="svc-modal-footer">
              <a href="#contact" className="btn-dark" onClick={() => setActiveModal(null)}>
                Inquire About This Service <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
