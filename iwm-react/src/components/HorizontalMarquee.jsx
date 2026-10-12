export default function HorizontalMarquee({
  children,
  speed = '35s',
  direction = 'normal', // 'normal' (left) | 'reverse' (right)
  pauseOnHover = true,
  className = '',
  style = {}
}) {
  return (
    <div
      className={`marquee-container ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}
      style={{
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        ...style
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marqueeScroll ${speed} linear infinite`,
          animationDirection: direction
        }}
      >
        <div className="marquee-content" style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingRight: '24px' }}>
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingRight: '24px' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
