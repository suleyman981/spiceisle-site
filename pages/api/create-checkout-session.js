
import Stripe from 'stripe'
export default async function handler(req,res){
  if(req.method!=='POST'){res.setHeader('Allow','POST'); return res.status(405).json({error:'Method not allowed'})}
  const { lineItem } = req.body || {}
  if(!process.env.STRIPE_SECRET_KEY) return res.status(500).json({error:'Missing STRIPE_SECRET_KEY'})
  if(!lineItem?.unit_amount || !lineItem?.quantity || !lineItem?.name) return res.status(400).json({error:'Missing line item fields'})
  try{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-09-30.acacia' })
    const session = await stripe.checkout.sessions.create({
      mode:'payment',
      line_items:[{
        price_data:{ currency: process.env.CURRENCY || 'usd', product_data:{ name: lineItem.name, metadata:{ tier: lineItem.tier || 'standard' } }, unit_amount: lineItem.unit_amount },
        quantity: lineItem.quantity
      }],
      allow_promotion_codes:true,
      automatic_tax:{enabled:true},
      success_url:`${process.env.SITE_URL || 'http://localhost:3000'}/tours?success=true`,
      cancel_url:`${process.env.SITE_URL || 'http://localhost:3000'}/tours?canceled=true`
    })
    res.status(200).json({url: session.url})
  }catch(e){ console.error(e); res.status(400).json({error:e.message}) }
}
