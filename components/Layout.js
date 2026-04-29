
import Link from 'next/link'
import site from '@/data/site.json'
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <style jsx global>{`
        :root { --brand: ${site.primary}; --accent: ${site.accent}; --secondary: ${site.secondary}; }
      `}</style>
      <header style={{borderBottom:'1px solid #eee'}}>
        <div className="container" style={{padding:'1rem 0',display:'flex',gap:'1rem',alignItems:'center',justifyContent:'space-between'}}>
          <Link href="/" className="no-underline" style={{display:'flex',gap:12,alignItems:'center'}}>
            <img src="/images/logo.png" alt={site.brandName} style={{width:40,height:40,borderRadius:8,background:'#fff',objectFit:'contain'}} onError={(e)=>{e.currentTarget.style.display='none'}} />
            <div><div style={{fontWeight:900}}>{site.brandName}</div><div style={{fontSize:12,color:'#6b7280'}}>{site.tagline}</div></div>
          </Link>
          <nav style={{display:'flex',gap:24,fontSize:14,alignItems:'center'}}>
            <Link href="/tours">Tours & Activities</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/tours" className="btn no-underline">Book now</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <a className="fab" href={`https://wa.me/${(site.whatsapp||'').replace(/[^\d]/g,'')}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      <footer style={{borderTop:'1px solid #eee'}}>
        <div className="container" style={{padding:'2.5rem 0',display:'grid',gap:'2rem',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',fontSize:14}}>
          <div><h4 style={{fontWeight:700,marginBottom:12}}>{site.brandName}</h4><p>Registered tour operator in Zanzibar. Unique experiences across Stone Town, Mnemba, Jozani, Kendwa & beyond.</p></div>
          <div><h4 style={{fontWeight:700,marginBottom:12}}>Contact</h4><ul style={{listStyle:'none',padding:0,margin:0}}>
            <li><a href={`tel:${site.whatsapp}`}>{site.whatsapp}</a></li>
            <li><a href="mailto:toursandsafaris255@gmail.com">toursandsafaris255@gmail.com</a></li>
            <li><a href={site.socials?.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={site.socials?.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
          </ul></div>
          <div><h4 style={{fontWeight:700,marginBottom:12}}>Good to know</h4><ul style={{listStyle:'disc',paddingLeft:'1rem',margin:0}}>
            <li>Secure online payments (Stripe)</li>
            <li>No hidden charges</li>
            <li>Open year‑round</li>
          </ul></div>
        </div>
        <div style={{borderTop:'1px solid #eee'}}>
          <div className="container" style={{padding:'1rem 0',display:'flex',justifyContent:'space-between',fontSize:12,color:'#6b7280'}}>
            <p>© {new Date().getFullYear()} {site.brandName}</p>
            <div style={{display:'flex',gap:16}}>
              <a href={`https://wa.me/${(site.whatsapp||'').replace(/[^\d]/g,'')}`}>WhatsApp</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
