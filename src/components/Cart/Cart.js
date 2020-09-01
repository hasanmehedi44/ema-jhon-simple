import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price , 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     console.log(product);
    //     total = total + product.price;
    // }

    let shipping = 0;
    if ( total > 35 ) {
        shipping = 0;
    } else if ( total > 15) {
        shipping = 5;
    } else if ( total > 0) {
        shipping = 10;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    let tax = (total / 10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2)



    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Iteams Ordered : {cart.length} </h5>
            <h5>Product Price : {formatNumber(total)} </h5>
            <h5><small>Shipping Cost : {shipping} </small></h5>
            <h5><small>Tax : {tax} </small></h5>
            <h5>Total price : {grandTotal}  </h5>
           
            <Link to="/review">
             <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;