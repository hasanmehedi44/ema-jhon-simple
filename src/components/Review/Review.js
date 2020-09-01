import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewIteam from '../ReviewIteam/ReviewIteam';

const Review = () => {
    const [cart, setCart] = useState([]);

    

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
        <div>
            <h1>Cart Iteams : {cart.length} </h1>
            {
                cart.map(pd => <ReviewIteam key={pd.key} product={pd}></ReviewIteam>)
            }
        </div>
    );
};

export default Review;