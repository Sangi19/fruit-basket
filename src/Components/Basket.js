import React from 'react';

export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;
    const totalPrice =cartItems.reduce((a,c) => a + c.price * c.qty , 0);

    return (
        <div className="block col-1">
            <h2>Fruit Basket</h2>
            <hr></hr>

            <div> {cartItems === 0 && <div> Fruit basket is empty </div>} </div> 
            <div className="row">
                <div className="col-2"> Fruit</div>
                <div className="col-2">Price</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Total</div>
                <hr></hr>
            </div>
            <hr></hr>

            {cartItems.map((item) => (
               <div key={item.id} className="row"> 
                    <div className="col-2"> {item.name} </div>
                    <div className="col-2"> {item.price} </div>
                    <div className="btn row">
                        <button onClick={() => onAdd(item)} className="btn.add">
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className="btn.remove">
                            -
                        </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x INR {item.price.toFixed(2)}
                    </div>
               </div> 
            ))}

            {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">INR {totalPrice.toFixed(2)}</div>
                </div>
           
                <hr />
            </> 
            )}
        </div>
    );
}