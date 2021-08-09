import './App.css';
import Basket from './Components/Basket';
import Header from './Components/Header';
import Main from './Components/Main';
import data from './data';

function App() {
const {products} = data;

  return (
    <div className="App">
      <Header></Header>
      <Main products={products}></Main>
      <Basket></Basket>
    </div>
  );
}

export default App;
