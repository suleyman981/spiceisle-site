
import tours from '@/data/tours.json'
import TourCard from '@/components/TourCard'
export default function Tours(){
  return (<section className="section"><div className="container">
    <h1 className="h1" style={{marginBottom:'1.25rem'}}>Tours & Activities</h1>
    <div style={{display:'grid',gap:'2rem',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>{tours.map(t=> <TourCard key={t.slug} tour={t}/>)}</div>
  </div></section>)
}
