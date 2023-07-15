import './BodyContact.scss'
import {Button }from 'antd'
export default function BodyContact() {
  return (
    <div className="bodycontact">
      <div className="wrappercontact">
        <div className='toptxt'>
            <h2>
            Buy the supplement that will help your training, ‌development and
            progress.
            </h2>
            <p>Contact specialists with many years of experience in the industry.</p>
        </div>
        <div className="contact">
          <div className="contactus">
            <h2>Contact Us</h2>
            <div className='contacttxt'>
              <p>Do you have any questions</p>
              <span>info@yourcompany.com</span>
            </div>
            <div className='contacttxt'>
              <p>Do you have any questions</p>
              <span>info@yourcompany.com</span>
            </div>
            <div className='contacttxt'>
              <p>Do you have any questions</p>
              <span>info@yourcompany.com</span>
            </div>
          </div>
          <div className="contactinput">
            <div className="inputform">
              <label>Name</label>
              <input placeholder='Name'></input>
            </div>
            <div className="inputform">
              <label>Email</label>
              <input placeholder='Email'></input>
            </div>
            <div className="message">
              <label>Message</label>
              <textarea placeholder='Message' style={{width:'100%'}}></textarea>
            </div>
              <Button type='primary'style={{width:'95%',color:"white",background:"#669933"}}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
