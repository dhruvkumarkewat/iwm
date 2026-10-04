export default function Performance() {
  return (
    <section id="performance">
      <div className="perf-grid">
        <div className="reveal">
          <div className="eyebrow">Campaign Impact</div>
          <h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>Data That Drives Decisions.</h2>
          <p style={{fontSize:'13px',opacity:.6,lineHeight:1.7}}>We track, analyse and optimise every campaign - delivering transparent results from launch to final report.</p>
          <div className="camp-metrics-grid">
            <div className="camp-metric-box"><span className="val">1.51M+</span><span className="lbl">Naturali</span><span className="sub">Views</span></div>
            <div className="camp-metric-box"><span className="val">1.03M+</span><span className="lbl">Pilgrim</span><span className="sub">Views</span></div>
            <div className="camp-metric-box"><span className="val">313K+</span><span className="lbl">AXIS-Y</span><span className="sub">Views</span></div>
          </div>
        </div>
        <div className="perf-mid reveal">
          <img src="/images/26_performance_main_woman.png" style={{position:'absolute',inset:'40px 60px',width:'calc(100% - 120px)',height:'calc(100% - 80px)',objectFit:'cover',borderRadius:'20px',opacity:.5}} alt="" />
          <div className="glass g1"><small style={{opacity:.6,fontSize:'11px'}}>Total Views</small><b className="big">2.8M+</b><span className="up">All campaigns</span></div>
          <div className="glass g2"><small style={{opacity:.6,fontSize:'11px'}}>Best CPV Achieved</small><b style={{fontSize:'28px',fontFamily:'var(--serif)'}}>Rs.0.08</b></div>
          <div className="glass g3"><small style={{opacity:.6,fontSize:'11px'}}>Creators Live</small><b className="big">410</b><span className="up">Naturali</span></div>
        </div>
        <div className="reveal">
          <div className="soc-row"><i className="fa-brands fa-instagram"></i> <span style={{fontSize:'12px',opacity:.6}}>@influencerwedsmarketing.in</span></div>
          <div className="perf-right" style={{marginTop:'12px', display:'block'}}>
            <img src="/images/27_performance_social_cards.png" alt="" style={{width:'100%', height:'auto'}} />
          </div>
        </div>
      </div>
    </section>
  )
}
