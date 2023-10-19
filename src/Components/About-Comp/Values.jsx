import React from "react";
import '../About-Comp/AS2.css'

   const Values = (props) => {
       const{name, detail} = props
    return(
        <div className="roles">
             <h5>{name}</h5>
             <p>{detail}</p>
        </div>
    )
   }


   export default Values