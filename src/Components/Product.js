import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    // const isClicked = false;
    const [disable, setDisable] = React.useState(false);

    return ( 
        <div>
            <h3>{product.name}</h3>
            <h3>INR.{product.price}</h3>
            <div>
                <h3>
                <button disabled={disable} onClick={() => {setDisable(true);  onAdd(product)}}>Add</button>
                </h3>
            </div>

        </div>
    )
}
