import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return ( 
        <div>
            <h3>{product.name}</h3>
            <h3>INR.{product.price}</h3>
            <div>
                <h3>
                <button onClick={onAdd}>Add</button>
                </h3>
            </div>

        </div>
    )
}
