import './MenuList.scss'
export default function MenuList() {
  return (
        <div className="itembox">
            <div className="imgbox">
                <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/850/tn-product1-3-2087419764.webp" alt="" />
                <div className='discount'>
                    <p>9.5%</p>
                    <span className='discont'>Discount</span>
                </div>
            </div>
            <div className="textbox">
                <h2>Protein Pack</h2>
                <div className='wrapperdetail'>
                    <div className='detail'>
                        <span className='discont'>$ 220.00</span>
                        <p>$ 199.00</p>
                    </div>
                    <div className="viewdetail">
                        <p>Views details</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
