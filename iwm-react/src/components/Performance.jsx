import TiltCard from './TiltCard'

export default function Performance() {
  return (
    <section id="performance">
      <div className="perf-grid">
        {/* Left Column: Data narrative & metrics */}
        <div className="reveal">
          <div className="eyebrow">Measurable Impact</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Data That Drives Decisions.
          </h2>
          <p style={{ fontSize: '13.5px', opacity: 0.72, lineHeight: 1.7, marginTop: '8px' }}>
            We track, analyse, and optimise every campaign—delivering transparent, audited results from initial creator launch to the comprehensive final performance report.
          </p>

          <div className="camp-metrics-grid">
            <div className="camp-metric-box">
              <span className="val gold-text">1.51M+</span>
              <span className="lbl">Naturali</span>
              <span className="sub">Reported Views</span>
            </div>
            <div className="camp-metric-box">
              <span className="val">1.03M+</span>
              <span className="lbl">Pilgrim</span>
              <span className="sub">Reported Views</span>
            </div>
            <div className="camp-metric-box">
              <span className="val">313K+</span>
              <span className="lbl">AXIS-Y</span>
              <span className="sub">Reported Views</span>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href="#campaigns" className="btn-light">
              View Detailed Case Studies <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Center: Interactive Glassmorphism Visual Card with 3D Tilt */}
        <div className="perf-mid reveal">
          <TiltCard maxTilt={8} scale={1.02} style={{ height: '100%', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop"
              style={{
                position: 'absolute',
                inset: '20px 30px',
                width: 'calc(100% - 60px)',
                height: 'calc(100% - 40px)',
                objectFit: 'cover',
                borderRadius: '20px',
                opacity: 0.45
              }}
              alt="Performance analytics visual"
            />
            <div className="glass g1">
              <small style={{ opacity: 0.65, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Total Campaign Reach
              </small>
              <b className="big">2.8M+</b>
              <span className="up">Documented Campaign Views</span>
            </div>
            <div className="glass g2">
              <small style={{ opacity: 0.65, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Best CPV Benchmark
              </small>
              <b style={{ fontSize: '26px', fontFamily: 'var(--serif)', color: 'var(--gold)' }}>
                ₹0.08
              </b>
              <span className="up" style={{ color: '#10b981' }}>High efficiency achieved</span>
            </div>
            <div className="glass g3">
              <small style={{ opacity: 0.65, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Active Creators
              </small>
              <b className="big">410</b>
              <span className="up">Naturali Scale Campaign</span>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Social handle & benchmark bar preview */}
        <div className="reveal">
          <div className="soc-row">
            <i className="fa-brands fa-instagram gold-text"></i>
            <span style={{ fontSize: '12.5px', opacity: 0.8, letterSpacing: '.04em' }}>
              @influencerwedsmarketing.in
            </span>
          </div>

          <div className="perf-right" style={{ marginTop: '14px', display: 'block' }}>
            <div className="perf-chart-card">
              <div className="perf-chart-header">
                <span className="eyebrow" style={{ fontSize: '9.5px' }}>AUDIENCE ENGAGEMENT</span>
                <b>Campaign Efficiency Spread</b>
              </div>
              <div className="perf-bars-group">
                <div className="perf-bar-row">
                  <span>Naturali (Scale)</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '92%' }}></div></div>
                  <b>₹0.08 CPV</b>
                </div>
                <div className="perf-bar-row">
                  <span>Pilgrim (Product)</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '74%' }}></div></div>
                  <b>₹0.19 CPV</b>
                </div>
                <div className="perf-bar-row">
                  <span>AXIS-Y (Awareness)</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: '56%' }}></div></div>
                  <b>₹0.56 CPV</b>
                </div>
              </div>
            </div>
          </div>

          <div className="perf-guarantee-note">
            <i className="fa-solid fa-shield-halved gold-text"></i>
            <small>All figures derived directly from documented client portfolio reports.</small>
          </div>
        </div>
      </div>
    </section>
  )
}
