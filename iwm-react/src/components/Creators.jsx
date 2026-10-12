import { useState, useEffect } from 'react'
import TiltCard from './TiltCard'
import HorizontalMarquee from './HorizontalMarquee'

const creatorsData = [
  { id: 0, n: 'Aarohi Sen', c: 'skincare', role: 'Skincare Specialist', followers: '120K+', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop' },
  { id: 1, n: 'Meera Kapoor', c: 'beauty', role: 'Editorial Beauty', followers: '250K+', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop' },
  { id: 2, n: 'Tara Verma', c: 'lifestyle', role: 'Modern Lifestyle', followers: '180K+', img: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=700&auto=format&fit=crop' },
  { id: 3, n: 'Rhea Shah', c: 'haircare', role: 'Haircare & Routine', followers: '95K+', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop' },
  { id: 4, n: 'Ananya Roy', c: 'wellness', role: 'Holistic Wellness', followers: '140K+', img: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=500&auto=format&fit=crop' },
  { id: 5, n: 'Kavya Joshi', c: 'beauty', role: 'Clean Glamour', followers: '310K+', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop' },
  { id: 6, n: 'Isha Nair', c: 'skincare', role: 'Derm & Formulation', followers: '165K+', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop' },
  { id: 7, n: 'Sanya Malhotra', c: 'lifestyle', role: 'Travel & Aesthetics', followers: '220K+', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop' }
]

const filters = ['all', 'beauty', 'skincare', 'lifestyle', 'haircare', 'wellness']

export default function Creators() {
  const [filter, setFilter] = useState('all')
  const [idx, setIdx] = useState(2)
  const [isPaused, setIsPaused] = useState(false)

  const list = filter === 'all' ? creatorsData : creatorsData.filter(c => c.c === filter)
  const baseList = list.length ? list : creatorsData
  const displayList = []
  for (let i = 0; i < 5; i++) displayList.push(baseList[i % baseList.length])

  // Continuous auto-cycle for the 3D coverflow
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIdx(prev => (prev + 1) % 5)
    }, 3200)
    return () => clearInterval(timer)
  }, [isPaused])

  const handleClick = (i) => {
    if (i !== idx) setIdx(i)
  }

  const handlePrev = () => {
    setIdx(prev => (prev === 0 ? 4 : prev - 1))
  }

  const handleNext = () => {
    setIdx(prev => (prev + 1) % 5)
  }

  const getCardClass = (i) => {
    let diff = i - idx
    if (diff < -2) diff += 5
    if (diff > 2) diff -= 5

    if (diff === -2) return 'crf left2'
    if (diff === -1) return 'crf left1'
    if (diff === 0) return 'crf center'
    if (diff === 1) return 'crf right1'
    if (diff === 2) return 'crf right2'
    return 'crf'
  }

  return (
    <section
      id="creators"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="cre-grid">
        {/* Left Column Description */}
        <div className="reveal">
          <div className="eyebrow">Our Creators</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            The Right Creator<br />
            for Your Brand.
          </h2>
          <p style={{ fontSize: '13px', opacity: 0.72, lineHeight: 1.7, marginTop: '14px' }}>
            We work with creators across beauty, skincare, lifestyle, haircare, and wellness. Every creator is selected for content quality, audience trust, and brand alignment.
          </p>

          <div className="cre-ecosystem">
            <div className="cre-ecosystem-num gold-text">40+</div>
            <div className="cre-ecosystem-label">
              EXCLUSIVE<br />
              INFLUENCERS
            </div>
          </div>

          <div className="cre-auto-status">
            <span className="pulse-dot"></span>
            <span>Live Creator Network • Auto-synchronized</span>
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href="#contact" className="btn-light">
              Join Our Creator Roster <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Coverflow */}
        <div className="reveal">
          <div className="filters">
            {filters.map(f => (
              <button
                key={f}
                className={filter === f ? 'on' : ''}
                onClick={() => {
                  setFilter(f)
                  setIdx(2)
                }}
                style={{ textTransform: 'capitalize' }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="coverflow">
            {displayList.map((c, i) => {
              const cardClass = getCardClass(i)
              const isCenter = cardClass.includes('center')
              return (
                <div
                  key={`${c.n}-${i}`}
                  className={cardClass}
                  onClick={() => handleClick(i)}
                >
                  {isCenter ? (
                    <TiltCard maxTilt={10} scale={1.03} style={{ height: '100%', width: '100%' }}>
                      <img src={c.img} alt={c.n} />
                      <div className="crf-info">
                        <b>{c.n}</b>
                        <span style={{ textTransform: 'capitalize' }}>
                          {c.c} • {c.followers}
                        </span>
                      </div>
                    </TiltCard>
                  ) : (
                    <>
                      <img src={c.img} alt={c.n} />
                      <div className="crf-info">
                        <b>{c.n}</b>
                        <span style={{ textTransform: 'capitalize' }}>{c.c}</span>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          <div className="crf-nav-row">
            <button className="crf-btn" onClick={handlePrev} aria-label="Previous creator">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <span className="crf-counter">0{idx + 1} / 05</span>
            <button className="crf-btn" onClick={handleNext} aria-label="Next creator">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Automatic Continuous Horizontal Scrolling Creator Ribbon */}
      <div className="creators-auto-stream-wrap reveal-3d delay-1">
        <div className="creators-stream-head">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>
            AUTOMATIC CREATOR SPOTLIGHT REEL
          </span>
          <small style={{ fontSize: '11px', opacity: 0.65 }}>
            <i className="fa-solid fa-circle-play"></i> Continuous Horizontal Stream · 100% Automatic
          </small>
        </div>

        <HorizontalMarquee speed="28s" pauseOnHover={false}>
          {creatorsData.map((creator) => (
            <div
              key={creator.n}
              className="creator-stream-card"
              onClick={() => {
                const matchIndex = displayList.findIndex(d => d.c === creator.c)
                if (matchIndex !== -1) setIdx(matchIndex)
              }}
              title={`Click to view ${creator.n}`}
            >
              <div className="stream-avatar-wrap">
                <img src={creator.img} alt={creator.n} />
                <span className="stream-live-badge">Live</span>
              </div>
              <div className="stream-card-info">
                <b>{creator.n}</b>
                <span className="stream-category">{creator.c}</span>
                <small className="gold-text">{creator.followers}</small>
              </div>
            </div>
          ))}
        </HorizontalMarquee>
      </div>
    </section>
  )
}
