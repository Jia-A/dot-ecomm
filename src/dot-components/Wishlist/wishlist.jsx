import "../../public-css/root.css";
import "./wishlist.css"
import { Navbar } from "../Navbar/navbar";
import { useAuth } from "../../Context/authContext";
import { useProduct } from "../../Context/productContext";
import { Link } from "react-router-dom"

const Wishlist =() => {
const { token } = useAuth();

const { productState, productDispatch, getCart, removeFromWishlist} = useProduct();
const { cart, wishlist } = productState;
return (
<div className="App">
    <Navbar />
    <div class="wishlist-container flex-prop align-justify-center">
        <h3 class="wishlist-head">Your Wishlist</h3>
        <div class="wishlist-cards align-justify-center">
            {wishlist.map((item) =>
            <article class="complete-card">
                <img src={item.image} alt={item.title} class="card-image" />
                <span className="like-btn"><i class="fas fa-heart wish-icon" onClick={ ()=> removeFromWishlist(token, item._id)}></i></span>
                <div className="sub-info rate">{item.ratings}<span><i class="fas fa-star"></i></span></div>
                <div class="main-info-cont">
                    <h3 class="info-head">{item.title}</h3>
                    <p class="sm-txt">{item.author}</p>
                    <p class="sub-info">Rs. {item.price}</p>
                </div>
                <div class="footer">
                    {cart.find((product) => product._id===item._id) ?
                    (
                        <Link to="/cart">
                        <button class="btn primary-btn" >Go to cart</button>
                        </Link> )
                    
                    :
                    <button class="btn primary-btn" onClick={ ()=> getCart(token, item)}>Move to cart</button> }
                </div>
            </article>
            )}


        </div>
    </div>
</div>
);
};

export {Wishlist};