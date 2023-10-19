import React from "react";
import '../Jobs-Comp/job1.css'


const Job1 = () => {
    return(
        <div className="job-container">
            <div className="find-job">
                <h1>Find Your Dream Job</h1>
                <p className="explore">Explore the latest job opportunities in your area.</p>
            </div>
            <input type="text"
             name="job-search" 
             id="job-search"
             className="job-search"
             placeholder="Search for jobs..." />
        </div>
    )
    }



    export default Job1