import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    let thankYou 
    if (orderPlaced) {

        thankYou = <img src={happyImage}></img>
    }

    const handlePlaceOrder = () => {
        // console.log('Placed Order');
        setOrderPlaced(true);
        processOrder();
        setCart([]);
    }


    const removeProduct = (productKey) => {
        console.log("Product Removed", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        removeFromDatabaseCart(productKey)
        setCart(newCart)
}

    

    useEffect( () => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            console.log(key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);
        
        console.log(savedCart);
        console.log(productKeys);
        console.log(cartProducts);
    }, [])
    return (
        <div className="twin-container">
            <div className="product-container">
                    <h1>Cart Iteams : {cart.length} </h1>
                    {
                        cart.map(pd => <ReviewIteam 
                            removeProduct ={removeProduct}
                            key={pd.key} product={pd}>
                            </ReviewIteam>)
                    }
                    {
                        thankYou 
                    }
            </div>
            <div className="cart-container">
                    <Cart
                     cart={cart}
                     >
                         <button onClick={handlePlaceOrder} className="main-button">Placr Order</button>
                     </Cart>
            </div>

        </div>
    );
};

export default Review;