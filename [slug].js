
import { useRouter } from 'next/router'
import tours from '@/data/tours.json'
import { useMemo, useState } from 'react'
import CheckoutButton from '@/components/CheckoutButton'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function TourPage(){
  const { query } = useRouter()
  const tour = useMemo(()=> tours.find(t=> t.slug === query.slug) || {}, [query.slug])
  const [pax, setPax] = useState(2)
  const pricingKeys = Object.keys(tour.pricing || {})
  const [tier,setTier] = useState(pricingKeys[0])
  const perPerson = tour?.pricing?.[tier]?.[String(pax)] || 0
  const total = perPerson * pax
  const waText = `Hello! I’d like to book: ${tour.title} — Option: ${tier || 'standard'}, ${pax} pax. Total showing: $${total}. Are there slots on my dates?`

  return (<section className="section"><div className="container" style={{display:'grid',gap:'2.5rem',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))'}}>
    <div className="aspect-video" style={{background:'#f3f4f6',borderRadius:12}}/>
    <div>
      <h1 className="h1" style={{marginBottom:'.5rem'}}>{tour.title || 'Tour'}</h1>
      <p style={{color:'#374151',marginBottom:'1rem'}}>{tour.summary}</p>
      <div className="card" style={{padding:'1rem',marginBottom:'1.25rem',display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',alignItems:'end'}}>
        <div><label style={{fontSize:14,fontWeight:600}}>Party size</label>
          <input type="number" min="1" max="6" value={pax} onChange={e=>setPax(Math.max(1,Math.min(6,parseInt(e.target.value||'1',10))))} style={{marginTop:4,width:'100%',border:'1px solid #ddd',borderRadius:6,padding:8}}/></div>
        <div><label style={{fontSize:14,fontWeight:600}}>Option</label>
          <select style={{marginTop:4,width:'100%',border:'1px solid #ddd',borderRadius:6,padding:8}} value={tier} onChange={e=>setTier(e.target.value)}>
            {pricingKeys.map(k=> <option key={k} value={k}>{k.replaceAll('_',' ').replace(/\b\w/g,c=>c.toUpperCase())}</option>)}
          </select></div>
        <div style={{textAlign:'right'}}><div style={{fontSize:12,color:'#6b7280'}}>From</div><div style={{fontSize:28,fontWeight:700}}>${perPerson || 0} <span style={{fontSize:12,color:'#6b7280'}}>pp</span></div></div>
        <div style={{gridColumn:'1/-1',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <div style={{fontSize:14,color:'#4b5563'}}>Total: <strong>${total || 0}</strong></div>
          <div style={{display:'flex',gap:12}}>
            <CheckoutButton lineItem={{ name: tour.title, quantity: pax, unit_amount: Math.round((perPerson||0)*100), tier, currency: process.env.NEXT_PUBLIC_CURRENCY || 'usd' }}/>
            <WhatsAppButton label="Ask on WhatsApp" message={waText} />
          </div>
        </div>
      </div>
      <h3 className="h3" style={{marginBottom:'.5rem'}}>What’s included</h3>
      <ul style={{paddingLeft:'1.1rem',marginBottom:'1rem'}}>{(tour.inclusions||[]).map(x=> <li key={x}>{x}</li>)}</ul>
      {(tour.notes||[]).length ? (<><h3 className="h3" style={{marginBottom:'.5rem'}}>Good to know</h3><ul style={{paddingLeft:'1.1rem'}}>{tour.notes.map(x=> <li key={x}>{x}</li>)}</ul></>) : null}
    </div>
  </div></section>)
}
