import React from "react";
import '../index.css'
import mypic1 from '../assets/images/mypic1.jpg'
// import pic1 from '../assets/images/pic1.PNG'


const Section2 = () => {
    return(
    <div className="about-container">
        <div className="pic-container">
            <img src = "../src/assets/images/pic3.PNG" alt="" className="section2-pic" />
        </div>
        <div className="ace">
            <h2 className= 'seam'>ACCE Seamlessly And Efficently Connects Employers And Talents</h2>
            <p className="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea impedit expedita neque enim architecto? Consectetur dolorum repellat a officia, nihil fuga ea odit doloremque natus illum temporibus vel, rerum neque?</p>
             <h4 className="take"> Take Your First Step</h4>
        </div>
    </div>
    )
}


export default Section2