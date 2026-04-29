
export default function About(){
  return (<section className="section"><div className="container" style={{maxWidth:800}}>
    <h1 className="h1" style={{marginBottom:'1rem'}}>About SpiceIsle Discoveries</h1>
    <p style={{marginBottom:'1rem'}}>We are a locally owned, sustainable tour company offering hand‑crafted day trips and activities across Zanzibar. Our team of expert guides lead small groups with care, culture and safety in mind.</p>
    <ul style={{display:'grid',gap:'1.25rem',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',margin:'2rem 0'}}>
      <li className="card" style={{padding:'1rem'}}><div style={{height:112,background:'#f3f4f6',borderRadius:8,marginBottom:12}} /><strong>Local expertise</strong><p style={{fontSize:14,color:'#6b7280'}}>Born and raised here — we know the hidden gems.</p></li>
      <li className="card" style={{padding:'1rem'}}><div style={{height:112,background:'#f3f4f6',borderRadius:8,marginBottom:12}} /><strong>Fair & transparent</strong><p style={{fontSize:14,color:'#6b7280'}}>No hidden charges. Clear inclusions on every tour.</p></li>
      <li className="card" style={{padding:'1rem'}}><div style={{height:112,background:'#f3f4f6',borderRadius:8,marginBottom:12}} /><strong>Responsible travel</strong><p style={{fontSize:14,color:'#6b7280'}}>We respect local culture and nature.</p></li>
    </ul>
  </div></section>)
}
