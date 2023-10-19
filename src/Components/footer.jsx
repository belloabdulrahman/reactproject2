import React from "react";
 import '../index.css'
 import {SiFacebook} from 'react-icons/si'
 import {TfiTwitter, TfiInstagram} from 'react-icons/tfi'
 import {FiLinkedin} from 'react-icons/fi'

 const Footer = () => {
    return(
<footer>
    <div className="main-footer">
        <div className="footer-container">
            <div>
                <img src="../src/assets/images/logo.PNG" alt="logo" className="logo2" />
            </div>
            <div className="footer-service">
                <h3>Navigations</h3>
                <div className="footer-service1">
                    <h3>Home</h3>
                    <h3>Services</h3>
                    <h3>About</h3>
                    <h3>Contact-Us</h3>
                </div>
            </div>
            <div className="social-container">
                <h3>Social Links</h3>
             <div className="social-container1">
               <FiLinkedin  size= "2em"/>
               <TfiTwitter  size= "2em"/>
               <SiFacebook  size= "2em"/>
               <TfiInstagram  size= "2em"/>
             </div>
            </div>
            
        </div>
        <hr  color="blue" width="97%"/>
        <p className="workforce"> @Acee Workforce Solutions</p>
  </div> 
</footer>
    )
 }

 export default Footer