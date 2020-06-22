import React from 'react';
import BodyData from './BodyData';


const Body = () => {
   
    return(
       <div className="row">
           <div className="col-2">
           <BodyData item="Purse"/>
           <image/>
           </div>
           
           <div className="col-2">
           <BodyData item="Purse"/>
           </div>

           <div className="col-2">
           <BodyData item="Purse"/>
           </div>

           <div className="col-2">
           <BodyData item="Purse"/>
           </div> 
       </div>
    );

}

export default Body;
