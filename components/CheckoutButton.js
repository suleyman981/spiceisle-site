
import { useState } from 'react'
export default function CheckoutButton({ lineItem }) {
  const [loading, setLoading] = useState(false)
  const go = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ lineItem }) })
      const data = await res.json()
      if (data.url) window.location.href = data.url; else alert(data.error || 'Checkout unavailable')
    } catch(e) { alert('Something went wrong.') } finally { setLoading(false) }
  }
  return <button className="btn" onClick={go} disabled={loading}>{loading ? 'Redirecting…' : 'Pay securely'}</button>
}
