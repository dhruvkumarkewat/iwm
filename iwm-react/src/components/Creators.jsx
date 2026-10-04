import { useState } from 'react'

const creatorsData = [
 {n:'Skincare Creator',c:'skincare',img:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400&auto=format&fit=crop'},
 {n:'Beauty Creator',c:'beauty',img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop'},
 {n:'Lifestyle Creator',c:'lifestyle',img:'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=700&auto=format&fit=crop'},
 {n:'Haircare Creator',c:'haircare',img:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400&auto=format&fit=crop'},
 {n:'Wellness Creator',c:'wellness',img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop'},
]
const filters = ['all', 'beauty', 'skincare', 'lifestyle', 'haircare', 'wellness']

export default function Creators() {
  const [filter, setFilter] = useState('all')

  const list = filter === 'all' ? creatorsData : creatorsData.filter(c => c.c === filter)
  const displayList = list.length ? list : creatorsData
  const pos = ['left2', 'left1', 'center', 'right1', 'right2']

  return (
    <section id="creators">
      <div className="cre-grid">
        <div className="reveal">
          <div className="eyebrow">Our Creators</div>
          <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>The Right Creator<br/>for Your Brand.</h2>
          <p style={{fontSize:'13px',opacity:.6,lineHeight:1.7,marginTop:'14px'}}>We work with creators across beauty, skincare, lifestyle, haircare and wellness. Every creator is selected for content quality, audience trust and brand alignment.</p>
          <div className="cre-ecosystem">
            <div className="cre-ecosystem-num">40+</div>
            <div className="cre-ecosystem-label">EXCLUSIVE<br/>INFLUENCERS</div>
          </div>
        </div>
        <div className="reveal">
          <div className="filters">
            {filters.map(f => (
              <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)} style={{textTransform:'capitalize'}}>{f}</button>
            ))}
          </div>
          <div className="coverflow">
            {displayList.slice(0,5).map((c, i) => (
              <div key={i} className={`crf ${pos[i] || ''}`}>
                <img src={c.img} alt={c.n} />
                <div className="crf-info"><b>{c.n}</b><span style={{textTransform:'capitalize'}}>{c.c}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
