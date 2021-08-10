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

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Mainsub />
      <Main onAdd={onAdd} products={products} />
      </div>
      <Basket onAdd={onAdd} cartItems={cartItems} />
    </div>
  );
}

export default App;
