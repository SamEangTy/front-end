import './HomePage.scss'
import {MdLocationOn } from "react-icons/md";
export default function HomPage() {
  return (
    <div className='homepage'>
      <div className='wrapper'> 
           <h1>‌No Pain. No Gain.</h1>
           <p>For more than 20 years we have been making sure that you are full</p>
           <span>of energy, healthy and beautiful.</span>
      </div>
      <p className='location'><MdLocationOn style={{color:"#669933"}}/> California, USA</p>
    </div>
  )
}
