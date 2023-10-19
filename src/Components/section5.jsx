import React from "react";
import '../index.css'
import {BiMailSend} from 'react-icons/bi'


const Section5 = () => {
    return(
        <div className="section5-container">
            <div className="touch-container">
               <h1>Get In Touch With Us</h1>
               <p>We look forward to hearing from you. Feel free to drop us a message or mail.</p>
               <div className="phone-container">
                 <div >
                    <img src="../src/assets/images/phone.PNG" alt="" />
                 </div>
                   <div className="phone-detail">
                      <h2>Phone Number</h2>
                      <h3 className="phone-number">+447780517153</h3>
                   </div>
               </div>
               <div className="email-container">
                 <div>
                    <img src="../src/assets/images/email.PNG" alt="" />
                 </div>
                    <div className="email-detail">
                       <h2>Email Address</h2>
                       <h3 className="em">belloabdulrahman444.com</h3>
                    </div> 
               </div>
               <div className="address-container">
                 <div>
                    <img src="../src/assets/images/address.PNG" alt="" />
                 </div>
                    <div className="address-detail">
                       <h2>Office Address</h2>
                       <h3 className="add">G15 6NZ, 3/2 69 Keal Avenue, Glasgow, UK.</h3>
                    </div>
               </div>
            </div>
            <div className="form-container">
                 <input 
                      type="text" 
                      name="" id="" 
                      placeholder="Name"
                      />
                  <input 
                      type="email" 
                      name="" 
                      id="" 
                      placeholder="Email Address"
                      /> 
                   <input 
                      type="phone-number"
                      name="" 
                      id="" 
                      placeholder="Mobile Number"
                      />
                     <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="20"
                        placeholder="Message"
                        >
                            
                        </textarea> 
                        <button className="btn"><BiMailSend  size = '1em' />Send Message</button>   
            </div>
        </div>  
    )
}

export default Section5