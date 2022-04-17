import "../../public-css/navbar.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../Context/wishlistContext";
import { useCart } from "../../Context/cartContext";

const Navbar = () =>{
const { wishState } = useWishlist();
const { cartState } = useCart();
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

            <div class="box">
                <input type="text" placeholder="Search" class="search-box input" />
            </div>
            <div class="nav-btn">
                <Link to="/login" className="link-style link-color">
                <button className="btn secondary-btn">Login</button>
                </Link>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><i class="far fa-user icon"></i></button>
                </div>
                <div class="btn-badge">
                    <Link to="/wishlist" className="link-style">
                    <button class="btn icon-only-btn"><i class="far fa-heart icon"></i></button>
                    </Link>
                    <div class="real-badge">{wishState.wish.length}</div>
                </div>

                <div class="btn-badge">
                    <Link to="/cart" className="link-style">
                    <button class="btn icon-only-btn"><i class="far fa-shopping-cart icon"></i></button>
                    </Link>
                    <div class="real-badge">{cartState.cart.length}</div>
                </div>
            </div>
        </nav>
    </div>
</div>
);

}

export { Navbar };