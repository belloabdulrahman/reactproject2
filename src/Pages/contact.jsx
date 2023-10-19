import React from "react";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import Section5 from "../Components/section5";

const Contact = () =>{
    return (
        <div>
            <NavBar />
            <div>
                <iframe width="100%" height="500" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=3/2%2069%20KEAL%20AVENUE%20Glasgow+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
               </iframe> <a href='https://maps-generator.com/'></a>
           </div>
            <Section5 />
            <Footer />
        </div>
    )
}

export default Contact




