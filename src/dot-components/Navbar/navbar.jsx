import "../../public-css/navbar.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/productContext";
import { useAuth } from "../../Context/authContext";
import { useTheme } from "../../Context/themeContext";

const Navbar = () =>{
const { productState } = useProduct();
const { token, logoutHandler } = useAuth();
const { theme, setTheme } = useTheme();

const { wishlist, cart } = productState;
return (
<div className="App">
    <div class="nav-con">
        <nav class="nav-bar">
            <div>
                <Link to="/" className="link-style link-color-primary">
                <h2 class="website-name">D<img src="./images/dot.png" class="dot-img" />T Store</h2>
                </Link>
                <p class="sm-txt"><i>Everything ends with a dot.</i></p>
            </div>

            <div class="nav-btn">
                <div class="btn-badge">
                    <Link to="/wishlist" className="link-style">
                    <button class="btn icon-only-btn"><i class="far fa-heart icon"></i></button>
                    </Link>
                    <div class="real-badge">{wishlist.length}</div>
                </div>

                <div class="btn-badge">
                    <Link to="/cart" className="link-style">
                    <button class="btn icon-only-btn"><i class="far fa-shopping-cart icon"></i></button>
                    </Link>
                    <div class="real-badge">{cart.length}</div>
                </div>
                { theme === "light" ? 
                (  <button className="btn icon-only-btn" onClick={()=> setTheme("dark")}><i class="fas fa-moon"></i></button> ) : 
                (  <button className="btn icon-only-btn" onClick={()=> setTheme("light")}><i class="fas fa-sun"></i></button> 
                ) }
                { token ? ( 
                 <button className="btn icon-only-btn" onClick={()=>logoutHandler()}><i className="fas fa-sign-out-alt icon"></i></button>
                ) : (
                    <Link to="/login" className="link-style link-color">
                        <button className="btn icon-only-btn"><i className="fas fa-sign-in-alt icon"></i></button>
                    </Link>
                ) }
                
            </div>
        </nav>
    </div>
</div>
);

}

export { Navbar };