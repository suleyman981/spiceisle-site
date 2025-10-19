
export default function Contact(){
  return (<section className="section"><div className="container" style={{maxWidth:680}}>
    <h1 className="h1" style={{marginBottom:'1rem'}}>Contact</h1>
    <ul style={{marginBottom:'1.5rem'}}>
      <li>Phone/WhatsApp: <a href="tel:+255621748880">+255 621 748 880</a></li>
      <li>Email: <a href="mailto:toursandsafaris255@gmail.com">toursandsafaris255@gmail.com</a></li>
      <li>Instagram: <a href="https://instagram.com/spiceisle_discoveries" target="_blank" rel="noreferrer">@spiceisle_discoveries</a></li>
      <li>TikTok: <a href="https://tiktok.com/@spiceisle_discoveries" target="_blank" rel="noreferrer">@spiceisle_discoveries</a></li>
    </ul>
    <form className="space-y-4">
      <div><label style={{fontSize:14,fontWeight:600}}>Name</label><input style={{marginTop:4,width:'100%',border:'1px solid #ddd',borderRadius:6,padding:8}}/></div>
      <div><label style={{fontSize:14,fontWeight:600}}>Email</label><input type="email" style={{marginTop:4,width:'100%',border:'1px solid #ddd',borderRadius:6,padding:8}}/></div>
      <div><label style={{fontSize:14,fontWeight:600}}>Message</label><textarea rows="5" style={{marginTop:4,width:'100%',border:'1px solid #ddd',borderRadius:6,padding:8}}/></div>
      <button type="button" className="btn">Send</button>
    </form>
  </div></section>)
}
