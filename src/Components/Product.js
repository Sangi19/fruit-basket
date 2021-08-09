import React from 'react'

export default function Product(props) {
    const {product} = props;
    return (
        <div>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button >Add to basket</button>
            </div>

        </div>
    )
}
