import './Product.scss'

export default function Product() {
  return (
        <div className="boximg">
            <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/1080/tn-product1-3-2052940365.webp" alt="" />
            <div className='discount'>
                    <p>9.5%</p>
                    <span className='discont'>Discount</span>
            </div>
            <div>
              <h2 style={{textAlign:'center'}}>Protein Pack</h2>
              <div className='txt'>
                <p>$220.00</p>
                <span>$199.00</span>
              </div>
            </div>
        </div>
  )
}
