export default function HorizontalMarquee({
  children,
  speed = '35s',
  direction = 'normal', // 'normal' (left) | 'reverse' (right)
  pauseOnHover = false,
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
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        ...style
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marqueeScroll ${speed} linear infinite`,
          animationDirection: direction,
          willChange: 'transform'
        }}
      >
        <div className="marquee-content" style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingRight: '24px' }}>
          {children}
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingRight: '24px' }}>
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}
