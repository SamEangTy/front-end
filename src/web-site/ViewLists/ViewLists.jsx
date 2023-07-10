import { Button } from 'antd'
import './ViewLists.scss'
import Product from '../Product/Product'
export default function ViewLists() {
  return (
    <div className='viewlists'>
      <div className="wrapper">
        <div className="boximgs">
            <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/1080/tn-product1-3-2052940365.webp" alt="" />
            <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/1080/tn-product1-3-2052940365.webp" alt="" />
            <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/1080/tn-product1-3-2052940365.webp" alt="" />
            <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/1080/tn-product1-3-2052940365.webp" alt="" />
        </div>
        {/* <div className="boximg">
            <img src="https://templates.microweber.com/protein-store/userfiles/cache/thumbnails/1080/tn-product1-3-2052940365.webp" alt="" />
            <div className='discount'>
                    <p>9.5%</p>
                    <span className='discont'>Discount</span>
                </div>
        </div> */}
        <Product/>
        <div className="text">
            <h2>Protein Pack</h2>
            <hr style={{margin:"10px 0"}}/>
            <div className='wrapperdetail'>
                    <div className='detail'>
                        <span className='discont'>$ 220.00</span>
                        <p>$ 199.00</p>
                    </div>
                    <div className="viewdetail">
                        <p>In Stock(0)</p>
                    </div>
            </div>
                  <p style={{margin:"20px 0"}}>SKU - protein-pack</p>
                  <p style={{marginBottom:"20px "}}>Provides macronutrient-rich content within a shake.</p>
                  <p style={{marginBottom:"20px "}}>It is made from real, high-quality, high-quality products such as coffee, sweet coffee and premium body protein. Carnivore Lean Meal is the perfect intermediate or large spawn, which will help you to build a clean muscular cat and give it a drink.</p>
                  <h4 style={{marginBottom:"5px "}}>One dose lasts</h4>
                  <p>340 calories</p>
                  <p>40 g protein</p>
                  <p>40 g of carbohydrate</p>
                  <p style={{marginBottom:"20px "}}>At the same time it has 0 g of fat, 0 g of sugar, no lactose and cholesterol.</p>
                  <h4 style={{marginBottom:"5px "}}>Why choose</h4>
                  <p>Quick and easy replacement for meal</p>
                  <p>Rich in protein and carbohydrates</p>
                  <p>The perfect choice for people with intolerance to lactose</p>
                  <p>Approves recovery</p>
                  <p style={{marginBottom:"20px "}}>A well-known brand with a proven name on the market</p>
                  <h4 style={{marginBottom:"5px "}}>Мethod of reception</h4>
                  <p>Mix 2 tablespoons of 63.6 g with about 250 ml of cold water, as a substitute for some of the larger or smaller intermediate dishes.</p>
            <div className='txtbottom'>
              <p style={{fontWeight:"bold"}}>Price: $199.00</p>
              <Button className='btn'>Add to cart</Button>
            </div>
        </div>
      </div>
      <div className="relatePro">
         <h1 style={{margin:"50px 0"}}>Related products</h1>
        <Product/>
      </div>
    </div>
  )
}
