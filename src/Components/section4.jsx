import React from "react";
import '../index.css'

const Section4 = (props) => {
    const {image, detail} = props
    return(
        <div className="section4-container">
            <div>
                <img src= {image} alt="service-image" />
            </div>
              <p className="detail">{detail}</p> 
        </div>
       
    )
}
export default Section4