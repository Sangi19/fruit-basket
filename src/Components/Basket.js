import React, { useState } from 'react';

export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;
    let [value, setValue] = useState('');
    const itemsPrice =cartItems.reduce((a,c) => a + c.price * c.qty , 0);

    let onChangeHandler = (e) => {
        setValue(e.target.value);
      };

    const num= value/100;
    const num1=itemsPrice*num;
    const discountTotal= itemsPrice-num1;
 
    const totalPrice=discountTotal
        
    const saved= itemsPrice-totalPrice;

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
                    <div className="col-1 text-right">INR {itemsPrice.toFixed(2)}</div>
                </div>

                <div className="row ">
                        <div className="col-1 ">The discount is {value} %</div>                
                         <input className="h3" type="number" placeholder="Enter the discount %" value={value} onChange={onChangeHandler} />  
                </div>

                <div className="row">
                    <div className="col-2">You have saved</div>
                    <div className="col-1 text-right">INR {saved}</div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <strong>Total Price </strong>
                    </div>
                    <div className="col-1 text-right">
                        <strong>INR {discountTotal.toFixed(2)}</strong>
                    </div>
                </div>
                <hr />
            </> 
            )}
        </div>
    );
}