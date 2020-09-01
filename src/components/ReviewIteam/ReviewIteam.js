import React from 'react';

const ReviewIteam = (props) => {
    console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewIteamStyle = {
        borderBottom : "1px solid library",
        marginBottom : "5px",
        paddingBottom : "5px",
        marginLeft : "200px"

    }



    return (
        <div style={reviewIteamStyle} >
           <h4> {name} </h4> 
           <h4>Quantity: {quantity}</h4>
           <p><small>$ {price} </small></p>
           <button 
                  onClick={() => props.removeProduct(key)}  
                  className="main-button">
               Remove</button>
        </div>
    );
};

export default ReviewIteam;