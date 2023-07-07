import './FooterPage.scss'
import { MdCall, MdLocationOn, MdTimer } from 'react-icons/md';
export default function FooterPage() {
  return (
    <div className='footerpage'>
      <div className="wrapper">
        <div className="items">
            <h2>Address <MdLocationOn/></h2>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022 - US</p>
        </div>
        <div className="items">
            <h2>Reservations <MdCall/></h2>
            <p>Phone: +1 5589 55488 55</p>
            <p>NEmail: info@example.com</p>
        </div>
        <div className="items">
            <h2>Opening Hours <MdTimer/></h2>
            <p>Mon-Sat: 6AM - 23PM</p>
            <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  )
}
