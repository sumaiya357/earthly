import React from 'react';
import Banner from '../Banner/Banner';

import './Shop.css'
const Shop = () => {
    return (
        <div className='shop-container'>
            <div className='productss-container mt-5'>
                <Banner></Banner>
            </div>
            <div className='cart-container ms-3'>
                <h5>this is order summary</h5>
            </div>
        </div>
    );
};

export default Shop;