import { useState, useEffect, useCallback } from 'react'
import TiltCard from './TiltCard'
import HorizontalMarquee from './HorizontalMarquee'

import nykaalandStageSpotlightTeam from '../assets/real_photos/nykaaland-stage-spotlight-team.jpg'
import nykaalandHoodiesConcert from '../assets/real_photos/nykaaland-hoodies-stage-concert.jpg'
import nykaalandBalloon from '../assets/real_photos/nykaaland-balloon-installation.jpg'
import nykaalandFoundation from '../assets/real_photos/nykaaland-foundation-pavilion.jpg'
import nykaalandDolceGabbana from '../assets/real_photos/nykaaland-dolce-gabbana-pavilion.jpg'
import nykaalandArmaniRabanne from '../assets/real_photos/nykaaland-armani-rabanne-lounge.jpg'
import nykaalandFloralFence from '../assets/real_photos/nykaaland-floral-fence.jpg'
import nykaalandMirrorCarousel from '../assets/real_photos/nykaaland-mirror-carousel.jpg'
import nykaalandTeamElfGoodies from '../assets/real_photos/nykaaland-team-elf-goodies.jpg'
import iwmAnniversaryStageGold3 from '../assets/real_photos/iwm-anniversary-stage-gold3.jpg'
import iwmTurns3NewspapersCake from '../assets/real_photos/iwm-turns-3-newspapers-cake.jpg'
import founderOutdoorGrace from '../assets/real_photos/founder-outdoor-grace.jpg'

export const nykaalandChronicle = [
  {
    id: 'spotlight-stage',
    src: nykaalandStageSpotlightTeam,
    title: 'The Spotlight Main Stage — Powered by H&M',
    category: 'Stage & Keynote',
    aspect: 'wide',
    caption: 'IWM core leadership on the festival lawn before the grand LED concert stage, showcasing experiential creator integration at scale.',
    date: 'Nykaaland Festival · Main Arena'
  },
  {
    id: 'hoodies-concert',
    src: nykaalandHoodiesConcert,
    title: 'Team Presence & Agency Unity',
    category: 'Agency Culture',
    aspect: 'tall',
    caption: 'Four team members in custom IWM hoodies raising their hands before the stadium-scale concert truss and festival crowd.',
    date: 'The Spotlight Stage'
  },
  {
    id: 'balloon-sculpture',
    src: nykaalandBalloon,
    title: 'Nykaaland Hot Air Balloon Installation',
    category: 'Experiential Landmark',
    aspect: 'portrait',
    caption: 'The iconic pastel pink and mint Nykaaland balloon sculpture, surrounded by thousands of beauty and fashion enthusiasts.',
    date: 'Central Festival Grounds'
  },
  {
    id: 'mirror-art',
    src: nykaalandMirrorCarousel,
    title: '“The Work of Art is You!” Interactive Mirror',
    category: 'Interactive Installation',
    aspect: 'portrait',
    caption: 'Experiential mirror setup reflecting the carnival carousel, festival atmosphere, and organic creator content generation.',
    date: 'Carnival Pavilion'
  },
  {
    id: 'foundation-pavilion',
    src: nykaalandFoundation,
    title: '“The Foundation” Pavilion & Floral Art',
    category: 'Experiential Space',
    aspect: 'portrait',
    caption: 'Team members at the entrance of The Foundation pavilion featuring oversized botanical floral sculptures and brand décor.',
    date: 'Pavilion Entrance'
  },
  {
    id: 'dolce-gabbana',
    src: nykaalandDolceGabbana,
    title: 'Dolce & Gabbana Luxury Brand Lounge',
    category: 'Luxury Brand Pavilion',
    aspect: 'tall',
    caption: 'Experiencing luxury beauty activations at the bronze Dolce & Gabbana showcase under atmospheric purple ambient lighting.',
    date: 'Luxury Beauty Zone'
  },
  {
    id: 'armani-rabanne',
    src: nykaalandArmaniRabanne,
    title: 'Rabanne Club & Armani Beauty Activation',
    category: 'Brand Pavilions',
    aspect: 'tall',
    caption: 'Inside the neon-lit international beauty pavilions, connecting creator talent with prestige global fragrances and makeup lines.',
    date: 'Prestige Pavilion'
  },
  {
    id: 'floral-fence',
    src: nykaalandFloralFence,
    title: 'Pastel Floral Fence & Natural Daylight Studio',
    category: 'Creative Installation',
    aspect: 'portrait',
    caption: 'High-fashion editorial posing against oversized floral art and white picket installations in crisp natural sunlight.',
    date: 'Outdoor Creative Garden'
  },
  {
    id: 'elf-goodies',
    src: nykaalandTeamElfGoodies,
    title: 'Brand Engagements — e.l.f. & Bath & Body Works',
    category: 'On-Ground Team',
    aspect: 'standard',
    caption: 'Team members exploring brand goodie bags and interactive product trial stations across premier partner booths.',
    date: 'Brand Experience Area'
  },
  {
    id: 'gold-3-anniversary',
    src: iwmAnniversaryStageGold3,
    title: 'IWM Turns 3 — Milestone at the Main Stage',
    category: 'Agency Milestone',
    aspect: 'tall',
    caption: 'Celebrating three years of dreams, growth, and real impact with the golden anniversary landmark against the festival stage.',
    date: 'Festival Grounds'
  },
  {
    id: 'turns-3-newspapers',
    src: iwmTurns3NewspapersCake,
    title: 'Central India’s 1st Influencer Marketing Agency',
    category: 'Editorial Milestone',
    aspect: 'square',
    caption: 'The official anniversary flatlay documenting IWM’s pioneering journey from Bhopal across India’s creator economy.',
    date: 'Editorial Archive'
  },
  {
    id: 'founder-outdoor',
    src: founderOutdoorGrace,
    title: 'Creative Direction & Leadership in the Field',
    category: 'Founder Spotlight',
    aspect: 'tall',
    caption: 'Hands-on creative leadership ensuring every collaborative touchpoint is executed with genuine care and editorial elegance.',
    date: 'Field Portrait'
  }
]

export default function Nykaaland() {
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const openLightbox = (index) => {
    setActiveImageIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null)
    document.body.style.overflow = ''
  }, [])

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation()
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : nykaalandChronicle.length - 1))
  }, [])

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation()
    setActiveImageIndex((prev) => (prev < nykaalandChronicle.length - 1 ? prev + 1 : 0))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex, closeLightbox, prevImage, nextImage])

  return (
    <section id="nykaaland" className="nykaaland-section">
      {/* Editorial Header (Section D) */}
      <div className="nykaaland-header-container">
        <div className="nykaaland-header-grid reveal">
          <div className="nykaaland-header-left">
            <div className="eyebrow">
              <span className="dot gold-dot"></span> FEATURED EXPERIENCE / 01
            </div>
            <h2 className="nykaaland-main-title">
              Nykaaland
            </h2>
            <p className="nykaaland-subtitle">
              A World of Beauty, Creativity &amp; Shared Experiences.
            </p>
          </div>

          <div className="nykaaland-header-right">
            <p className="nykaaland-lead-text">
              Real-world experiential marketing transforms digital attention into tactile memories. Through on-ground presence, creative installations, and creator engagements at Nykaaland, IWM captures the authentic pulse of India&apos;s biggest beauty and lifestyle festival.
            </p>
            <div className="nykaaland-highlights">
              <div className="nykaaland-hl-item">
                <b>Experiential</b>
                <span>On-Ground Storytelling</span>
              </div>
              <div className="nykaaland-hl-sep">/</div>
              <div className="nykaaland-hl-item">
                <b>Global Brands</b>
                <span>Dolce &amp; Gabbana, Rabanne, Armani</span>
              </div>
              <div className="nykaaland-hl-sep">/</div>
              <div className="nykaaland-hl-item">
                <b>Authentic</b>
                <span>Zero Synthetic Noise</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Editorial Split Showcase */}
      <div className="nykaaland-featured-showcase">
        {/* Dominant Hero Image Feature */}
        <div className="nykaaland-hero-banner reveal">
          <TiltCard maxTilt={5} perspective={1400} className="nykaaland-tilt-banner">
            <div className="nykaaland-banner-inner" onClick={() => openLightbox(0)}>
              <img
                src={nykaalandStageSpotlightTeam}
                alt="IWM team before the Spotlight Main Stage at Nykaaland"
                className="nykaaland-banner-img"
                loading="eager"
              />
              <div className="nykaaland-banner-overlay">
                <div className="nykaaland-banner-tag">
                  <span className="dot gold-dot"></span> THE SPOTLIGHT · MAIN FESTIVAL STAGE
                </div>
                <h3 className="nykaaland-banner-headline">
                  Nykaaland Powered by H&amp;M — Beauty&apos;s Biggest Playground
                </h3>
                <p className="nykaaland-banner-desc">
                  Standing against the grand concert stage of Nykaaland, representing IWM’s hands-on experiential footprint and creator management in action.
                </p>
                <div className="nykaaland-banner-cta">
                  <span>View in High Resolution</span>
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Asymmetrical 3-Column Editorial Moments */}
        <div className="nykaaland-moments-grid-three">
          <div className="nykaaland-moment-card reveal" onClick={() => openLightbox(2)}>
            <div className="moment-img-frame">
              <img
                src={nykaalandBalloon}
                alt="Nykaaland hot air balloon sculpture"
                className="moment-img"
                loading="lazy"
              />
              <div className="moment-badge">LANDMARK INSTALLATION</div>
            </div>
            <div className="moment-info">
              <span className="moment-category">Experiential Art</span>
              <h4 className="moment-title">Giant Hot Air Balloon</h4>
              <p className="moment-text">
                The whimsical pastel centerpiece of Nykaaland, celebrating beauty, imagination, and shared culture.
              </p>
            </div>
          </div>

          <div className="nykaaland-moment-card reveal delay-1" onClick={() => openLightbox(3)}>
            <div className="moment-img-frame">
              <img
                src={nykaalandMirrorCarousel}
                alt="The Work of Art is You installation"
                className="moment-img"
                loading="lazy"
              />
              <div className="moment-badge">CREATIVE INSTALLATION</div>
            </div>
            <div className="moment-info">
              <span className="moment-category">Interactive Mirror</span>
              <h4 className="moment-title">&ldquo;The Work of Art is You!&rdquo;</h4>
              <p className="moment-text">
                Interactive mirror reflections overlooking the carnival carousel, blending attendee joy and brand storytelling.
              </p>
            </div>
          </div>

          <div className="nykaaland-moment-card reveal delay-2" onClick={() => openLightbox(4)}>
            <div className="moment-img-frame">
              <img
                src={nykaalandDolceGabbana}
                alt="Dolce and Gabbana luxury brand counter"
                className="moment-img"
                loading="lazy"
              />
              <div className="moment-badge">LUXURY PAVILION</div>
            </div>
            <div className="moment-info">
              <span className="moment-category">Prestige Brands</span>
              <h4 className="moment-title">Dolce &amp; Gabbana Lounge</h4>
              <p className="moment-text">
                Exclusive brand experiences, high-fashion styling, and prestige product touchpoints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Automatic Continuous Horizontal Experiential Stream */}
      <div className="nykaaland-horizontal-stream-section reveal-3d delay-1">
        <div className="stream-header-strip">
          <div className="stream-header-left">
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>
              <span className="dot gold-dot"></span> LIVE EXPERIENTIAL FILMSTRIP
            </span>
            <h3 className="stream-headline">
              Real On-Ground Moments &amp; Brand Pavilions
            </h3>
          </div>
          <div className="stream-live-indicator">
            <span className="pulse-dot"></span>
            <span>Continuous Horizontal Stream · 100% Automatic · Click Any Photo to Expand</span>
          </div>
        </div>

        <HorizontalMarquee speed="42s" pauseOnHover={false}>
          {nykaalandChronicle.map((item, index) => (
            <div
              key={`stream-${item.id}-${index}`}
              className="nykaaland-stream-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              title={`Click to view ${item.title}`}
            >
              <div className="stream-img-box">
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="stream-card-overlay">
                  <span className="stream-card-tag">{item.category}</span>
                  <b className="stream-card-title">{item.title}</b>
                  <small className="stream-card-date">{item.date}</small>
                </div>
                <div className="stream-card-zoom-badge">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          ))}
        </HorizontalMarquee>
      </div>

      {/* Section G: Full Curated Nykaaland Photo Gallery */}
      <div className="nykaaland-gallery-section" id="nykaaland-gallery">
        <div className="gallery-header-row reveal">
          <div>
            <div className="eyebrow">
              <span className="dot gold-dot"></span> SECTION 04 / VISUAL ARCHIVE
            </div>
            <h3 className="gallery-section-title">
              The Nykaaland Chronicle
            </h3>
            <p className="gallery-section-desc">
              Explore the complete photographic record of real-world brand activations, on-ground team presence, and atmospheric moments. Click any photograph to open the high-fidelity inspection modal.
            </p>
          </div>
          <div className="gallery-count-badge">
            <b>{nykaalandChronicle.length}</b> Photographs Documented
          </div>
        </div>

        {/* Responsive Editorial Masonry Grid */}
        <div className="nykaaland-masonry-grid">
          {nykaalandChronicle.map((item, index) => (
            <div
              key={item.id}
              className={`masonry-item item-${item.aspect} reveal`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(index) }}
            >
              <div className="masonry-img-container">
                <img
                  src={item.src}
                  alt={item.title}
                  className="masonry-img"
                  loading="lazy"
                />
                <div className="masonry-hover-overlay">
                  <div className="masonry-hover-top">
                    <span className="masonry-cat-tag">{item.category}</span>
                    <span className="masonry-zoom-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </span>
                  </div>
                  <div className="masonry-hover-bottom">
                    <h5 className="masonry-title">{item.title}</h5>
                    <p className="masonry-caption">{item.caption}</p>
                    <span className="masonry-meta">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Keyboard, Touch & Full Accessible Controls) */}
      {activeImageIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Modal"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-topbar">
              <div className="lightbox-indicator">
                <span className="lightbox-current">
                  {String(activeImageIndex + 1).padStart(2, '0')}
                </span>
                <span className="lightbox-sep">/</span>
                <span className="lightbox-total">
                  {String(nykaalandChronicle.length).padStart(2, '0')}
                </span>
              </div>
              <div className="lightbox-title-top">
                {nykaalandChronicle[activeImageIndex].title}
              </div>
              <button
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close image modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="lightbox-stage">
              <button
                className="lightbox-nav-btn prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <div className="lightbox-img-wrapper">
                <img
                  src={nykaalandChronicle[activeImageIndex].src}
                  alt={nykaalandChronicle[activeImageIndex].title}
                  className="lightbox-main-img"
                />
              </div>

              <button
                className="lightbox-nav-btn next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="lightbox-footer">
              <div className="lightbox-meta-row">
                <span className="lightbox-tag">
                  {nykaalandChronicle[activeImageIndex].category}
                </span>
                <span className="lightbox-date">
                  {nykaalandChronicle[activeImageIndex].date}
                </span>
              </div>
              <p className="lightbox-desc">
                {nykaalandChronicle[activeImageIndex].caption}
              </p>
              <div className="lightbox-keyboard-hint">
                <span>Use keyboard <kbd>←</kbd> <kbd>→</kbd> to navigate, <kbd>ESC</kbd> to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
