
import Link from 'next/link'
export default function TourCard({ tour }) {
  const table = tour.pricing?.sharing || tour.pricing?.standard || tour.pricing?.private || {}
  const values = Object.values(table).map(Number).filter(Boolean)
  const minPrice = values.length ? Math.min(...values) : 0
  return (
    <div className="card" style={{display:'flex',flexDirection:'column'}}>
      <div className="aspect-video" style={{background:'#f3f4f6'}}></div>
      <div style={{padding:'1.25rem',display:'flex',flexDirection:'column',flex:1}}>
        <h3 className="h3" style={{marginBottom:'.25rem'}}>{tour.title}</h3>
        <p style={{color:'#4b5563',marginBottom:'1rem'}}>{tour.summary}</p>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span style={{fontWeight:700}}>{minPrice ? `$${minPrice} pp` : ''}</span>
          <Link className="btn-alt no-underline" href={`/tours/${tour.slug}`}>View</Link>
        </div>
      </div>
    </div>
  )
}
