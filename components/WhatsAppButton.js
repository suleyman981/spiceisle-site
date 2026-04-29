
import site from '@/data/site.json'
export default function WhatsAppButton({ label='WhatsApp us', message='' }){
  const num = (site.whatsapp || '').replace(/[^\d]/g,'')
  const text = encodeURIComponent(message || 'Hi! I have a question.')
  const href = `https://wa.me/${num}?text=${text}`
  return <a className="btn no-underline" href={href} target="_blank" rel="noreferrer">{label}</a>
}
