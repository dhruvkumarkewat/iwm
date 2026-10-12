import { useState, useEffect } from 'react'

const chapters = [
  { id: 'home', num: '01', title: 'THE HERO' },
  { id: 'about', num: '02', title: 'ABOUT IWM' },
  { id: 'founder', num: '03', title: 'THE FOUNDER' },
  { id: 'services', num: '04', title: 'CAPABILITIES' },
  { id: 'campaigns', num: '05', title: 'SELECTED WORK' },
  { id: 'creators', num: '06', title: 'CREATORS' },
  { id: 'team', num: '07', title: 'BRAIN TRUST' },
  { id: 'process', num: '08', title: 'OUR APPROACH' },
  { id: 'brands', num: '09', title: 'IMPACT & PROOF' },
  { id: 'contact', num: '10', title: 'COLLABORATE' }
]

export default function StorytellerHUD() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const percent = docHeight > 0 ? (currentScroll / docHeight) * 100 : 0
      setScrollPercent(percent)

      // Light detection (over paper sections)
      const campaignsEl = document.getElementById('campaigns')
      const contactEl = document.getElementById('contact')
      let lightMode = false
      if (campaignsEl) {
        const rect = campaignsEl.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) lightMode = true
      }
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) lightMode = true
      }
      setIsLight(lightMode)

      // Chapter detection
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveIdx(i)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextChapter = () => {
    const nextIdx = (activeIdx + 1) % chapters.length
    const targetEl = document.getElementById(chapters[nextIdx].id)
    targetEl?.scrollIntoView({ behavior: 'smooth' })
  }

  const current = chapters[activeIdx]

  return (
    <div
      className={`storyteller-hud ${isLight ? 'hud-light' : ''}`}
      onClick={nextChapter}
      title="Click to advance to next story chapter"
    >
      <div className="hud-progress-circle">
        <svg viewBox="0 0 36 36" className="hud-circle-svg">
          <path
            className="hud-circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="hud-circle-fill"
            strokeDasharray={`${scrollPercent}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="hud-num">{current.num}</span>
      </div>

      <div className="hud-text-block">
        <span className="hud-chapter-lbl">CHAPTER {current.num} / 10</span>
        <b className="hud-chapter-title">{current.title}</b>
      </div>

      <i className="fa-solid fa-arrow-down-long hud-arrow"></i>
    </div>
  )
}
