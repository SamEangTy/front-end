import './AboutPage.scss'
import { CiTwitter } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import { MdSoap } from "react-icons/md";
import { Button } from 'antd';
export default function AboutPage() {
  return (
    <div className='aboutpage'>
      <h2>About Our Delivery</h2>
      <div className='wrapper'>
        <div className='icon'>
            <CiTwitter fontSize={60}/>
            <CgGym fontSize={60}/>
            <MdSoap fontSize={60}/>
        </div>
        <div className="text">
            <p>Pick up the goods from our warehouse for free, or use courier service on the territory of the city and <span style={{marginLeft:"50px",marginTop:5}}>its environs for $35. Mail delivery is available throughout USA. Fast and simple delivery.</span></p>
            <p style={{textAlign:"center"}}>Return of products.</p>
            <p style={{textAlign:"center"}}> Contact us to learn more about delivery.</p>
        </div>
        <div className="motivation">
            <div className="text" style={{marginRight:50}}>
               <h2>Motivation is the first step to success</h2>
               <p>Setting the goal is the first step on the road to success, regardless of how difficult the circumstances are. Human will is stronger than anything in this world. Learning is not only a means to get a job. Learning is much more than that – it strengthens our self-confidence and enhances our awareness and culture.</p>
            </div>
            <div className="imgbox">
               <img src="https://templates.microweber.com/protein-store/userfiles/media/127.0.0.1/weight-loss-diet-concept-two-sexy-instructor-top-looking-.jpg" alt="" />
            </div>
        </div>
        <div className="motivation">
            <div className="imgbox">
               <img src="https://templates.microweber.com/protein-store/userfiles/media/127.0.0.1/drink-watrer.jpg" alt="" />
            </div>
            <div className="text" style={{marginLeft:80}}>
               <h2>Drink water</h2>
               <p>The human body comprises around 60% water. It's commonly recommended that you drink eight 8-ounce (237-mL) glasses of water per day (the 8×8 rule). Although there's little science behind this specific rule, staying hydrated is important. Here are 7 evidence-based health benefits of drinking plenty of water.</p>
            </div>
        </div>
        <div className="contact">
            <div className="text">
                <h2>Join 215,000 Fellow Marketers</h2>
                <p>Get expert marketing tips straight to your inbox, and become a better marketer. Subscribe to the</p>
                <p style={{textAlign:'center'}}>Marketing Blog below.</p>
            </div>
            <div className='email'>
                <label>Email</label>
                <input type="text" placeholder='Email'/>
                <Button style={{background:'#669933',color:'white'}}>Send</Button>
            </div>
        </div>
      </div>
    </div>
  )
}
