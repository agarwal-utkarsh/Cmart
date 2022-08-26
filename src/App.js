
import './App.css';
import Product from './components/Product';
import ProductState from './context/ProductState';

function App() {
  return (
    <ProductState>
      <div className='App'>
        <h1>Cmart</h1>
        <Product />
      </div>
    </ProductState>
  );
}

export default App;
