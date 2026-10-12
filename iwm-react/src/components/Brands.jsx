import HorizontalMarquee from './HorizontalMarquee'
import TiltCard from './TiltCard'

const brandLogos = [
  { name: 'AXIS-Y', style: { fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 600, letterSpacing: '.04em' } },
  { name: 'PILGRIM', style: { fontFamily: 'var(--sans)', fontWeight: 800, letterSpacing: '.18em', fontSize: '15px' } },
  { name: 'NATURALI', style: { fontFamily: 'var(--sans)', fontWeight: 700, letterSpacing: '.14em', fontSize: '15px' } },
  { name: 'NYKAA', style: { fontFamily: 'var(--sans)', fontWeight: 900, letterSpacing: '.22em', fontSize: '14px' } },
  { name: "L'ORÉAL", style: { fontFamily: 'var(--serif)', fontWeight: 700, letterSpacing: '.12em', fontSize: '18px' } },
  { name: 'MAYBELLINE', style: { fontFamily: 'var(--sans)', fontWeight: 800, letterSpacing: '.14em', fontSize: '14px' } },
  { name: 'boAt', style: { fontFamily: 'var(--sans)', fontWeight: 800, letterSpacing: '.06em', fontSize: '17px' } },
  { name: 'PUMA', style: { fontFamily: 'var(--sans)', fontWeight: 900, letterSpacing: '.16em', fontSize: '16px' } },
  { name: 'TATA', style: { fontFamily: 'var(--serif)', fontWeight: 600, letterSpacing: '.2em', fontSize: '18px' } },
  { name: 'SAMSUNG', style: { fontFamily: 'var(--sans)', fontWeight: 800, letterSpacing: '.16em', fontSize: '15px' } }
]

const campaignGalleryImages = [
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    brand: 'Naturali Campaign',
    tag: 'Creator Strategy',
    reach: '1.51M Views'
  },
  {
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    brand: 'AXIS-Y Launch',
    tag: 'Skincare Activation',
    reach: '313K Views'
  },
  {
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop',
    brand: 'Pilgrim Beauty',
    tag: 'Education Reels',
    reach: '1.03M Views'
  },
  {
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop',
    brand: 'Creator Studio',
    tag: 'Content Production',
    reach: 'High Virality'
  },
  {
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    brand: 'Brand Partnerships',
    tag: 'Multi-creator Wave',
    reach: 'Pan-India'
  },
  {
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    brand: 'Lifestyle Outreach',
    tag: 'Audience Trust',
    reach: 'High CPV Win'
  },
  {
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    brand: 'Creative Sync',
    tag: 'Brand Storytelling',
    reach: '30+ Campaigns'
  }
]

export default function Brands() {
  return (
    <section id="brands">
      {/* Top Header */}
      <div className="brands-top reveal">
        <div>
          <div className="eyebrow">Brand Collaborations</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Brands That<br />
            Choose IWM.
          </h2>
          <p style={{ fontSize: '13px', opacity: 0.7, marginTop: '8px', maxWidth: '440px' }}>
            Trusted by leading consumer and beauty brands for strategic matchmaking, high authenticity, and verified execution.
          </p>
        </div>

        {/* Continuous Horizontal Auto-Scrolling Logo Marquee */}
        <div className="brands-marquee-wrap">
          <div className="marquee-label-top">
            <span className="dot gold-dot"></span> CONTINUOUS BRAND NETWORK
          </div>
          <HorizontalMarquee speed="26s" pauseOnHover={true}>
            {brandLogos.map((brand, idx) => (
              <div key={`${brand.name}-${idx}`} className="brand-logo-pill">
                <span style={brand.style}>{brand.name}</span>
              </div>
            ))}
          </HorizontalMarquee>
        </div>
      </div>

      {/* Continuous Automatic Horizontal Scrolling Campaign Imagery Tape */}
      <div className="brands-image-marquee-strip reveal-3d delay-1">
        <div className="strip-title-row">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>
            CAMPAIGN FOOTAGE & PRODUCTION MOMENTS
          </span>
          <small className="strip-hint">
            <i className="fa-solid fa-arrows-left-right"></i> Auto-streaming • Hover to pause
          </small>
        </div>

        <HorizontalMarquee speed="40s" direction="normal" pauseOnHover={true}>
          {campaignGalleryImages.map((item, idx) => (
            <TiltCard
              key={`${item.brand}-${idx}`}
              maxTilt={8}
              scale={1.03}
              className="gallery-marquee-card"
            >
              <div className="gallery-marquee-img-wrap">
                <img src={item.img} alt={item.brand} loading="lazy" />
                <div className="gallery-marquee-overlay">
                  <span className="gallery-tag">{item.tag}</span>
                  <b>{item.brand}</b>
                  <small className="gold-text">{item.reach}</small>
                </div>
              </div>
            </TiltCard>
          ))}
        </HorizontalMarquee>
      </div>

      {/* Highlight metrics & partner testimonial row */}
      <div className="brands-bottom reveal">
        <div className="bcard dark">
          <div className="over">
            <span className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '8px' }}>PARTNER HIGHLIGHT</span>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '17px', fontStyle: 'italic', lineHeight: 1.55 }}>
              "We are extremely impressed with the quality of creators IWM onboarded."
            </p>
            <small style={{ opacity: 0.6, fontSize: '11px', display: 'block', marginTop: '10px' }}>
              — Marketing Team, Naturali
            </small>
            <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
              <i className="fa-solid fa-star" style={{ color: 'var(--gold)' }}></i>
              <i className="fa-solid fa-star" style={{ color: 'var(--gold)' }}></i>
              <i className="fa-solid fa-star" style={{ color: 'var(--gold)' }}></i>
              <i className="fa-solid fa-star" style={{ color: 'var(--gold)' }}></i>
              <i className="fa-solid fa-star" style={{ color: 'var(--gold)' }}></i>
            </div>
          </div>
        </div>

        <div className="bcard bcard-story">
          <div className="bcard-story-inner">
            <span className="eyebrow" style={{ color: '#fff', opacity: 0.7 }}>PROVEN CAPACITY</span>
            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '24px', margin: '8px 0 6px', color: '#fff' }}>
              From Seed Brief to Scaled Deployment
            </h4>
            <p style={{ fontSize: '12.5px', opacity: 0.75, lineHeight: 1.6, color: '#fff' }}>
              Handling 400+ simultaneous creator deliverables with real-time tracking, brand-safe quality checks, and unified performance dashboards.
            </p>
          </div>
        </div>

        <div className="bcard dark" style={{ textAlign: 'center' }}>
          <div className="over">
            <b style={{ fontFamily: 'var(--serif)', fontSize: '38px', color: 'var(--gold)' }}>410</b>
            <br />
            <span style={{ fontSize: '11.5px', opacity: 0.65, letterSpacing: '.06em' }}>Creators Activated</span>
            <br />
            <small style={{ fontSize: '10px', opacity: 0.45 }}>Naturali Scale Campaign</small>
          </div>
        </div>
      </div>
    </section>
  )
}
