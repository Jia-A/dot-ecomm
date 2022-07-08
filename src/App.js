import { Route, Routes } from "react-router-dom";
import { Homepage } from "./dot-components/Homepage/homepage";
import { Products } from "./dot-components/Product-listing/product";
import { Cart } from "./dot-components/Cart/cart";
import { Wishlist } from "./dot-components/Wishlist/wishlist";
import { Login } from "./dot-components/Login/login";
import { Signup } from "./dot-components/Signup/signup";
import { PrivateRoute } from "./dot-components/private";
import { useTheme } from './Context/themeContext';
import { Toaster } from 'react-hot-toast';
import "./App.css";



function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Toaster/>
      <Routes>
        {/* Open Routes */}
      <Route path = "/" element = { <Homepage/> } />
      <Route path = "/products" element = { <Products/> } /> 
      <Route path = "/login" element = { <Login/> } />
      <Route path = "/signup" element = { <Signup/> } />


        {/* Private Routes */}
      <Route element = { <PrivateRoute/>}>
        <Route path = "/wishlist" element = { <Wishlist/> } />
        <Route path = "/cart" element = { <Cart/> } />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
