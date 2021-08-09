import React from 'react';
import Product from './Product';

export default function Main (props) {
    const {products} = props;
    return (
        <main className="block col-1">
            <h2> Items</h2>
            <div className="row">
                
                {products ? products.map(product => (
                    <Product key={product.id} product={product} ></Product>       

                )) : "no task"
                }
                </div>
        </main>
    );
}