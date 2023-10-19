import React from 'react'
import '../index.css'
import mypic1 from '../assets/images/myPic2.jpeg'

const Section1 = () => {
    return (
        <>
          <div className='section1-container'>
            <div className='looking'>
                <h1 className='looking-for'>Looking for your next role?</h1>
                <h1 className='looking-for1'>We've got you covered</h1>
                <h4 className='comitted'>We are committed to being the bridge between you and your career goals</h4>
                <h4 className='find'>Find a Job</h4>
            </div>
            <div className='image-container'>
                <img src= {mypic1} alt="" className='pic1'/>
                
            </div>
          </div>
          
        </>
    )
}

export default Section1