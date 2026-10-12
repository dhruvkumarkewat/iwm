import { useState } from 'react'
import HorizontalMarquee from './HorizontalMarquee'
import TiltCard from './TiltCard'

const svcDataRow1 = [
  {
    num: '01',
    category: 'TALENT & STRATEGY',
    t: 'Influencer Management',
    d: 'Strategic creator selection, long-term talent management, relationship nurturing and end-to-end campaign coordination.',
    points: [
      'Curated creator discovery & roster access',
      'Briefing alignment & creative freedom balance',
      'Contracting, deliverables and timeline management'
    ],
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop'
  },
  {
    num: '02',
    category: 'INTEGRATED MEDIA',
    t: 'Brand Campaigns',
    d: 'Full-spectrum campaign architecture connecting brand narratives with credible creator voices across platforms.',
    points: [
      '360-degree brand campaign strategy',
      'Targeted product launches & awareness pushes',
      'High-impact multi-creator activations'
    ],
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '03',
    category: 'VIRAL & CULTURE',
    t: 'Meme Marketing',
    d: 'High-velocity cultural relevance and viral format conceptualization that sparks authentic social conversation.',
    points: [
      'Pop-culture trend integration & meme curation',
      'Platform-native humorous brand adaptation',
      'Organic conversational reach & community amplification'
    ],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '04',
    category: 'EDITORIAL NARRATIVE',
    t: 'Content Strategy',
    d: 'Tailored storytelling frameworks ensuring content resonates organically without feeling like scripted advertising.',
    points: [
      'Platform-specific creative blueprints (Reels, Shorts)',
      'Authentic experience-led narrative scripts',
      'Format diversification for beauty, fashion & lifestyle'
    ],
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop'
  }
]

const svcDataRow2 = [
  {
    num: '05',
    category: 'CHANNEL STEWARDSHIP',
    t: 'Social Media Management',
    d: 'Holistic social channel oversight, content calendars, community engagement, and brand identity stewardship.',
    points: [
      'Content calendar planning & publishing',
      'Audience interaction and community care',
      'Consistent brand aesthetic across Instagram & YouTube'
    ],
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '06',
    category: 'ECOSYSTEM NETWORK',
    t: 'Creator Partnerships',
    d: 'Fostering deep mutual respect between brands and creators for genuine, multi-phase collaborative relationships.',
    points: [
      'Brand-creator matchmaking aligned to values',
      'Seamless logistical coordination & support',
      'Sustained ambassadorships over one-off promotions'
    ],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    num: '07',
    category: 'DATA & BENCHMARKS',
    t: 'Performance & Reporting',
    d: 'Transparent, data-backed metrics tracking views, CPV, engagement rates, and tangible audience response.',
    points: [
      'Comprehensive post-campaign analytics reports',
      'CPV & engagement benchmark verification',
      'Data-informed optimization for repeat activations'
    ],
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop'
  },
  {
    num: '08',
    category: 'EXPERIENTIAL ON-GROUND',
    t: 'Experiential Activations',
    d: 'On-ground festival integration, brand pavilions, tactile product lounges, and synchronized live creator rollouts.',
    points: [
      'Live festival creator squads (Nykaaland, beauty & lifestyle)',
      'Experiential booth curation & brand lounge styling',
      'Real-time on-ground content capture & syndication'
    ],
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop'
  }
]

const allServices = [...svcDataRow1, ...svcDataRow2]

export default function Services() {
  const [activeModal, setActiveModal] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)

  const handlePillClick = (service) => {
    setActiveModal(service)
  }

  const renderServiceCard = (service) => (
    <TiltCard
      key={service.t}
      maxTilt={6}
      scale={1.02}
      className="svc-stream-card"
      onClick={() => setActiveModal(service)}
    >
      <div className="svc-stream-card-inner">
        <div className="svc-card-img-wrap">
          <img src={service.img} alt={service.t} loading="lazy" />
          <div className="svc-card-img-overlay"></div>
          <span className="svc-card-num-tag">{service.num}</span>
          <span className="svc-card-cat-badge">{service.category}</span>
        </div>

        <div className="svc-card-content">
          <h4 className="svc-card-title">{service.t}</h4>
          <p className="svc-card-desc">{service.d}</p>

          <div className="svc-card-deliverables-preview">
            <span className="svc-deliv-tag">
              <i className="fa-solid fa-check gold-text"></i> {service.points[0]}
            </span>
          </div>

          <div className="svc-card-footer">
            <button
              type="button"
              className="svc-explore-btn"
              onClick={(e) => {
                e.stopPropagation()
                setActiveModal(service)
              }}
            >
              Explore Scope <i className="fa-solid fa-arrow-right"></i>
            </button>
            <span className="svc-modal-hint">Click card to view deliverables</span>
          </div>
        </div>
      </div>
    </TiltCard>
  )

  return (
    <section id="services" className="services-section-refined">
      {/* Section Header */}
      <div className="services-head-block reveal">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="dot gold-dot"></span> SECTION 07 / CAPABILITIES
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
          End-to-End Influencer Solutions
        </h2>
        <p className="services-head-desc">
          From authentic creator management to high-engagement brand campaigns, meme marketing, and live festival activations—we curate the entire lifecycle.
        </p>

        {/* Category Pills for quick lookup */}
        <div className="svc-category-pills">
          {allServices.map((s) => (
            <button
              key={s.t}
              type="button"
              className="svc-pill-btn"
              onClick={() => handlePillClick(s)}
            >
              <span>{s.num}</span> {s.t}
            </button>
          ))}
        </div>

        <div className="svc-stream-status-row">
          <span className="pulse-dot"></span>
          <span>Dual Continuous Horizontal Streams · 100% Automatic · Click Any Card for Deliverables</span>
        </div>
      </div>

      {/* Stream 1: Forward Movement (Normal / Left) */}
      <div className="svc-stream-strip stream-strip-1">
        <div className="svc-stream-strip-label">
          <span className="gold-text">✦ STREAM 01</span> · STRATEGY, MEDIA &amp; VIRAL MARKETING
        </div>
        <HorizontalMarquee speed="30s" direction="normal" pauseOnHover={false}>
          {svcDataRow1.map(renderServiceCard)}
        </HorizontalMarquee>
      </div>

      {/* Stream 2: Reverse Movement (Right / Reverse) - DO JAGAH HORIZONTAL MOVE */}
      <div className="svc-stream-strip stream-strip-2">
        <div className="svc-stream-strip-label">
          <span className="gold-text">✦ STREAM 02</span> · STEWARDSHIP, ANALYTICS &amp; EXPERIENTIAL
        </div>
        <HorizontalMarquee speed="34s" direction="reverse" pauseOnHover={false}>
          {svcDataRow2.map(renderServiceCard)}
        </HorizontalMarquee>
      </div>

      {/* Bottom Conversion Prompt */}
      <div className="svc-bottom-cta-banner reveal">
        <div className="svc-cta-content">
          <div className="svc-cta-badge">
            <span className="sparkle">✦</span> BESPOKE ACTIVATIONS FOR BRANDS &amp; AGENCIES
          </div>
          <h3 className="svc-cta-heading">
            Need a tailored mix of capabilities for your next launch?
          </h3>
          <p className="svc-cta-text">
            We architect end-to-end deliverables designed around your precise CPV, reach, and conversion targets.
          </p>
        </div>
        <a href="#contact" className="btn-light">
          Request Custom Proposal <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      {/* Scope Detail Modal */}
      {activeModal && (
        <div className="svc-modal-overlay" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true">
          <div className="svc-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="svc-modal-close" onClick={() => setActiveModal(null)} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="svc-modal-header">
              <span className="eyebrow">
                <span className="dot gold-dot"></span> CAPABILITY {activeModal.num} · {activeModal.category}
              </span>
              <h3>{activeModal.t}</h3>
              <p>{activeModal.d}</p>
            </div>
            <div className="svc-modal-points">
              <h5>Key Deliverables &amp; Execution Roadmap</h5>
              <ul>
                {activeModal.points.map((p, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-circle-check gold-text"></i>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="svc-modal-footer">
              <a href="#contact" className="btn-dark" onClick={() => setActiveModal(null)}>
                Inquire About This Capability <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
