import { Route, Routes } from "react-router-dom";
import { Homepage } from "./dot-components/Homepage/homepage";
import { Products } from "./dot-components/Product-listing/product";
import { Cart } from "./dot-components/Cart/cart";
import { Wishlist } from "./dot-components/Wishlist/wishlist";
import { Login } from "./dot-components/Login/login";
import { Signup } from "./dot-components/Signup/signup";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = { <Homepage/> } />
      <Route path = "/products" element = { <Products/> } />
      <Route path = "/wishlist" element = { <Wishlist/> } />
      <Route path = "/cart" element = { <Cart/> } />
      <Route path = "/login" element = { <Login/> } />
      <Route path = "/signup" element = { <Signup/> } />
      </Routes>
    </div>
  );
}

export default App;
