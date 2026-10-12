import { useState, useEffect } from 'react'
import TiltCard from './TiltCard'

const csData = [
  {
    brand: 'IWM x AXIS-Y',
    brandShort: 'AXIS-Y',
    campaignTitle: 'Vegan Collagen Eye Serum Campaign',
    idx: '01',
    statusBadge: 'Reported Campaign Results',
    contextNote: 'Historical reported results from IWM portfolio documentation',
    obj: 'Brand awareness across India for the Vegan Collagen Eye Serum.',
    platform: 'Instagram',
    creatorsCount: '11',
    totalViews: '313,075',
    totalViewsFormatted: '313,075',
    cpv: '₹0.56',
    likes: '2,699',
    comments: '423',
    shares: '699',
    deliverables: '11 Instagram Reels and 11 Stories with CTA.',
    strategy: [
      'Selected skincare and beauty creators across India',
      'Prioritised authentic product usage and application texture',
      'Focused on formulation benefits, texture, and visible effects',
      'Used creator storytelling to foster direct audience trust'
    ],
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    outcome: 'Generated 313,075 views with 2,699 likes, 423 comments, and 699 shares across 11 creator activations at ₹0.56 CPV.',
    quote: {
      text: 'The IWM team selected creators who really understood the product and our brand voice. Loved the campaign quality and results.',
      src: 'Marketing Lead, AXIS-Y'
    }
  },
  {
    brand: 'IWM x Pilgrim',
    brandShort: 'Pilgrim',
    campaignTitle: 'Influencer Brand Awareness & Education Campaign',
    idx: '02',
    statusBadge: 'Reported Campaign Results',
    contextNote: 'Historical reported results from IWM portfolio documentation',
    obj: 'Product education and high-reach brand awareness campaign.',
    platform: 'Instagram',
    creatorsCount: '5',
    totalViews: '1,032,737',
    totalViewsFormatted: '1,032,737',
    cpv: '₹0.19',
    likes: '12,703',
    comments: '395',
    shares: '577',
    deliverables: 'Instagram Reels and Stories across 5 creators.',
    strategy: [
      'Creators matched based on specific content style and skin concerns',
      'Prioritised high audience relevance and genuine product fit',
      'Focused on education through creator narratives and routine demos',
      'Built trust through honest, experience-led organic content'
    ],
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
    outcome: 'Surpassed 1 Million views (1,032,737 total) with 12,703 likes, 577 shares, and 395 comments at ₹0.19 CPV.',
    quote: null
  },
  {
    brand: 'IWM x Naturali',
    brandShort: 'Naturali',
    campaignTitle: 'Multi-Category Influencer Scale Campaign',
    idx: '03',
    statusBadge: 'Reported Portfolio Data (Start: 1 Apr 2025)',
    contextNote: 'Historical reported metrics from portfolio (Campaign initiated 1 April 2025; planned 500 creators, 410 live at reporting)',
    obj: 'Promote sunscreen, haircare, and body-care through authentic creator content suitable for advertising.',
    platform: 'Instagram',
    creatorsCount: '410 live (500 planned)',
    totalViews: '1,510,675',
    totalViewsFormatted: '1,510,675',
    cpv: '₹0.08',
    likes: 'Reported in aggregate',
    comments: 'Active community feedback',
    shares: 'Multi-format sharing',
    deliverables: 'Instagram Reel, Story, and Reel reshare per creator (410 activated).',
    strategy: [
      'Sunscreen texture, lightweight finish and everyday wear storytelling',
      'Scalp care, anti-dandruff and anti-hair-fall demonstration videos',
      'Body scrub demonstrations and ingredient education',
      'Natural lifestyle integration aligned strictly to brand values'
    ],
    img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=800&auto=format&fit=crop',
    outcome: 'Delivered 1,510,675 verified views at an exceptional ₹0.08 Cost Per View across 410 active creators.',
    quote: {
      text: "We are extremely impressed with the quality of creators IWM onboarded. Their understanding of our content requirements and ad goals was spot on. We're continuing monthly campaigns based on their performance.",
      src: 'Marketing Team, Naturali'
    }
  }
]

export default function Campaigns() {
  const [idx, setIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cs = csData[idx]

  // Automatic storytelling progression
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % csData.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section
      id="campaigns"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="camp-head reveal">
        <div>
          <div className="eyebrow" style={{ color: '#111' }}>
            Selected Work & Case Studies
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Real Stories.<br />
            <em>Real Results.</em>
          </h2>
        </div>
        <div>
          <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: 1.6, marginBottom: '16px' }}>
            Each campaign is grounded in authentic creator voices, rigorous brand matchmaking, and documented performance benchmarks.
          </p>
          <div className="cs-tabs-row">
            <div className="cs-tabs">
              {csData.map((d, i) => (
                <button
                  key={d.brandShort}
                  className={idx === i ? 'on' : ''}
                  onClick={() => setIdx(i)}
                >
                  {d.brandShort}
                </button>
              ))}
            </div>
            <span className="cs-auto-badge">
              <span className="pulse-dot"></span> Auto-Storyline
            </span>
          </div>
        </div>
      </div>

      <div className="cs-display reveal">
        <div className="cs-layout">
          {/* Left info column */}
          <div className="cs-left">
            <div>
              <div className="cs-header-strip">
                <span className="cs-index">Case Study {cs.idx}</span>
                <span className="cs-status-tag">{cs.statusBadge}</span>
              </div>
              <h3 className="cs-brand-name">{cs.brand}</h3>
              <div className="cs-campaign-title">{cs.campaignTitle}</div>

              <div className="cs-objective-box">
                <span className="cs-label-sub">OBJECTIVE</span>
                <p className="cs-objective">{cs.obj}</p>
              </div>

              <div className="cs-strategy">
                <h5>Strategic Approach</h5>
                <ul>
                  {cs.strategy.map((s, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-arrow-right-long gold-text" style={{ fontSize: '11px', marginRight: '6px' }}></i>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs-deliverables-box">
                <span className="cs-label-sub">DELIVERABLES</span>
                <p className="cs-deliverables">{cs.deliverables}</p>
              </div>

              <div className="cs-context-note">
                <i className="fa-solid fa-circle-info"></i>
                <small>{cs.contextNote}</small>
              </div>
            </div>

            {cs.quote && (
              <div className="cs-quote">
                <p>"{cs.quote.text}"</p>
                <cite>— {cs.quote.src}</cite>
              </div>
            )}
          </div>

          {/* Right visual and metrics column */}
          <div className="cs-right">
            <TiltCard maxTilt={8} scale={1.01} className="cs-tilt-img-wrap">
              <div className="cs-image">
                <img src={cs.img} alt={cs.brand} key={cs.brand} className="cs-crossfade-img" />
                <div className="cs-img-badge">
                  <span>{cs.platform}</span>
                </div>
              </div>
            </TiltCard>

            {/* Primary Metrics Grid */}
            <div className="cs-metrics">
              <div className="cs-metric">
                <span className="cs-metric-val">{cs.totalViewsFormatted}</span>
                <span className="cs-metric-label">Total Views</span>
              </div>
              <div className="cs-metric">
                <span className="cs-metric-val">{cs.creatorsCount}</span>
                <span className="cs-metric-label">Creators</span>
              </div>
              <div className="cs-metric highlight-metric">
                <span className="cs-metric-val">{cs.cpv}</span>
                <span className="cs-metric-label">Cost Per View (CPV)</span>
              </div>
            </div>

            {/* Secondary Granular Metrics */}
            <div className="cs-sub-metrics">
              <div className="cs-sub-item">
                <i className="fa-solid fa-heart"></i>
                <div>
                  <b>{cs.likes}</b>
                  <span>Likes</span>
                </div>
              </div>
              <div className="cs-sub-item">
                <i className="fa-solid fa-comment"></i>
                <div>
                  <b>{cs.comments}</b>
                  <span>Comments</span>
                </div>
              </div>
              <div className="cs-sub-item">
                <i className="fa-solid fa-share-nodes"></i>
                <div>
                  <b>{cs.shares}</b>
                  <span>Shares</span>
                </div>
              </div>
            </div>

            <div className="cs-outcome">
              <div className="cs-outcome-head">
                <i className="fa-solid fa-chart-line gold-text"></i>
                <span>Reported Outcome</span>
              </div>
              <p>{cs.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
