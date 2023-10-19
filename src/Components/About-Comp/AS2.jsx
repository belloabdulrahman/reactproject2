import React from "react";
import '../About-Comp/AS2.css'
import Values from "./Values";
import visions from './visions'


const As2 = () => {

     const values = visions.map(item =>{
        return(
                <Values  
                         name = {item.name}
                         detail = {item.detail}
                 />
        )})

    return(
        <div className="as2-container">
            <div className="inner-as2">
                <h1 className="vision">Our Vision</h1>
                <br />
                <p>Our vision is to be the most trusted and respected recruitment
                 company in the industry, known for our commitment to excellence, integrity,
                 and personalized service. We aim to be the go-to resource for job seekers 
                 and employers alike, helping them achieve their goals and drive their businesses forward.
                <br /> 
                 Through innovation, collaboration, and a relentless focus on customer satisfaction,
                 we will continue to lead the way in the recruitment industry and make a positive 
                 impact on the lives ofthe people we serve</p> 
                 <br />
                 <h1>Our Mission</h1>
                 <br /> 
                 <p>
                  At ACEE RECRUITMENT, our mission is to empower talented individuals to achieve their
                  full potential by connecting them with employers who value their skills and expertise.
                  We are committed to delivering personalized recruitment solutions that meet the unique   
                  needs of each job seeker and employer we work with, and to providing exceptional 
                  customer service that exceeds expectations.
                 </p>
                 <img src="../src/assets/images/about-logo2.PNG" alt=" abt-image" className="abt-image" />
                 <div>
                 <h1>Our Values</h1>
                 <br /> 
                 <div className="sevices-container">
                    <div className="roles1">
                       {values} 
                    </div>
                 </div>
                 </div>
            </div>
                  
        </div>   
    )
}

export default As2