import { useState } from 'react';
import './App.css';
import Basket from './Components/Basket';
import Header from './Components/Header';
import Main from './Components/Main';
import Mainsub from './Components/Mainsub';
import data from './data';

function App() {
const {products} = data;
const [cartItems, setCartItems]=useState([]);
const [disable, setDisable] =useState(false);


const onAddProduct = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else if (exist.qty ===0) {
    setCartItems(() => {setDisable(true)} )
  } else  {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      ))
  }
  
 // if qty==0
  //setDisable(false)
};

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Mainsub />
      <Main onAdd={onAddProduct} products={products} />
      </div>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </div>
  );
}

export default App;
