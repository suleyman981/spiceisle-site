
import Link from 'next/link'
import TourCard from '@/components/TourCard'
import tours from '@/data/tours.json'
import site from '@/data/site.json'
import WhatsAppButton from '@/components/WhatsAppButton'
export default function Home(){
  return (<div>
    <section className="section">
      <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'2.5rem',alignItems:'center'}}>
        <div>
          <h1 className="h1" style={{marginBottom:'1rem'}}>{site.brandName} — Zanzibar tours, tailored to you</h1>
          <p style={{fontSize:'1.125rem',color:'#374151',marginBottom:'1.5rem'}}>From Stone Town heritage walks to Mnemba snorkelling and Safari Blue dhows — book unforgettable experiences with a trusted local operator.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link href="/tours" className="btn no-underline">Browse tours</Link>
            <Link href="/contact" className="btn-alt no-underline">Talk to us</Link>
            <WhatsAppButton label="WhatsApp us" message="Hi! I’d like help choosing a Zanzibar tour." />
          </div>
        </div>
        <div className="hero">
          <div className="hero-content" style={{padding:'2rem'}}>
            <div className="badge" style={{background:'rgba(255,255,255,.2)',color:'#fff',marginBottom:12}}>Local experts</div>
            <h2 className="h2" style={{marginBottom:8}}>Explore islands, reefs & spice farms</h2>
            <p style={{maxWidth:'45ch'}}>Tell us your dates and style — we’ll match you with the right experiences.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{background:'#f9fafb'}}>
      <div className="container">
        <h2 className="h2" style={{marginBottom:'1.25rem'}}>Popular right now</h2>
        <div style={{display:'grid',gap:'2rem',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>{tours.slice(0,6).map(t=> <TourCard key={t.slug} tour={t}/>)}</div>
      </div>
    </section>
  </div>)
}
