import React from "react"
import NavBar from "../Components/navBar"
import Footer from "../Components/footer"
import Section1 from "../Components/section1"
import Section2 from "../Components/section2"
import Section3 from "../Components/section3"
import Section4 from "../Components/section4"
import Section5 from "../Components/section5"
import '../index.css'
import data from "./data"

const Home = () => {
 
    const section4 = data.map((item) => {
     return (
       <Section4 
               image = {item.img}
               detail = {item.detail}
        />
     )
    })    
   return (
     <div>
       <NavBar />
       <Section1 />
       <Section2 />
       <Section3 />
        <div className = 'offer'>
          <h3 className='what'>What We Offer</h3>
          <h1>Our Services</h1>
       </div>
       <div className = "section44">
           {section4}
       </div> 
       <Section5 />
       <Footer />        
     </div>
   )
 }

export default Home
