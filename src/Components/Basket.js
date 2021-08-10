import React from 'react';

export default function Basket (props) {
    const {cartItems} = props;
    return (
        <div className="block col-1">
            <h2>Fruit Basket</h2>
           {cartItems === 0 && <div> Fruit basket is empty  </div>} 
           
        </div>
    );
}