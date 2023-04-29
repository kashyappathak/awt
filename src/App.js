import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./Cart";
// import Itemcard from './Itemcard';
import {CartProvider} from"react-use-cart"



function App() {
  return (
    <>
     <CartProvider>
      <Home/>
      {/* <Itemcard/> */}
      <Cart/>
     </CartProvider>
    </>
  
  );
}

export default App;
