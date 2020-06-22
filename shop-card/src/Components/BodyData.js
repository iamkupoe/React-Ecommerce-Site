import React from 'react'


const BodyData = ({item, image}) =>{

    return(
        <div class="card">
        <img src="images/ladies1.jpg" class="card-img-top" alt="Purse"/>
        <div class="card-body" style={{textAlign:'center'}}>
          <h5 class="card-title">{item}</h5>
          <a href="#" class="btn btn-primary">Cart</a>
        </div>
      </div>
    );
}

export default BodyData;