export default function Brands() {
  return (
    <section id="brands">
      <div className="brands-top reveal">
        <div><div className="eyebrow">Trusted by Brands</div><h2 style={{fontFamily:'var(--serif)',fontWeight:400}}>Brands That<br/>Choose IWM.</h2></div>
        <div className="logo-grid">
          <div><span style={{fontFamily:'var(--serif)',fontSize:'22px',fontWeight:500,letterSpacing:'.02em'}}>AXIS-Y</span></div>
          <div><span style={{fontFamily:'var(--sans)',fontWeight:800,letterSpacing:'.14em',fontSize:'14px'}}>PILGRIM</span></div>
          <div><span style={{fontFamily:'var(--sans)',fontWeight:600,letterSpacing:'.1em',fontSize:'14px'}}>NATURALI</span></div>
        </div>
      </div>
      <div className="brands-bottom reveal">
        <div className="bcard dark">
          <div className="over">
            <p style={{fontFamily:'var(--serif)',fontSize:'17px',fontStyle:'italic',lineHeight:1.55}}>"We are extremely impressed with the quality of creators IWM onboarded."</p>
            <small style={{opacity:.52,fontSize:'11px',display:'block',marginTop:'10px'}}>- Marketing Team, Naturali</small>
            <div style={{marginTop:'12px',display:'flex',gap:'6px'}}>
              <i className="fa-solid fa-star" style={{color:'var(--gold)'}}></i><i className="fa-solid fa-star" style={{color:'var(--gold)'}}></i><i className="fa-solid fa-star" style={{color:'var(--gold)'}}></i><i className="fa-solid fa-star" style={{color:'var(--gold)'}}></i><i className="fa-solid fa-star" style={{color:'var(--gold)'}}></i>
            </div>
          </div>
        </div>
        <div className="bcard">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop" alt="" style={{opacity:.85}} />
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" alt="" style={{left:'50%',width:'50%',opacity:.85}} />
        </div>
        <div className="bcard dark" style={{textAlign:'center'}}>
          <div className="over">
            <b style={{fontFamily:'var(--serif)',fontSize:'34px'}}>410</b><br/>
            <span style={{fontSize:'11px',opacity:.55}}>Creators Activated</span><br/>
            <small style={{fontSize:'10px',opacity:.4}}>Naturali Campaign</small>
          </div>
        </div>
      </div>
    </section>
  )
}
