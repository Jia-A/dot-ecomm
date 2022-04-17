import "../../public-css/root.css";
import "./wishlist.css"
import { useWishlist } from "../../Context/wishlistContext";
import { useCart } from "../../Context/cartContext";
import { Navbar } from "../Navbar/navbar";

const Wishlist =() => {
const { wishState, wishDispatch } = useWishlist();
const { cartState, cartDispatch } = useCart();
return (
<div className="App">
    <Navbar />
    <div class="wishlist-container flex-prop align-justify-center">
        <h3 class="wishlist-head">Your Wishlist</h3>
        <div class="wishlist-cards align-justify-center">
            {wishState.wish.map((item) =>
            <article class="complete-card">
                <img src={item.image} alt={item.title} class="card-image" />
                <div class="main-info-cont">
                    <h3 class="info-head">{item.title}</h3>
                    <p class="sm-txt">{item.author}</p>
                    <p className="sub-info">{item.ratings}<span><i class="fas fa-star"></i></span></p>
                    <p class="sub-info">Rs. {item.price}</p>
                </div>
                <div class="footer">
                    {cartState.cart.find((product) => product._id===item._id) ?
                    <button class="btn primary-btn" onClick={ ()=> cartDispatch({type : "Increase_quantity", payload :
                        item})}>Increase quantity</button> :
                    <button class="btn primary-btn" onClick={ ()=> cartDispatch({type : "Add_to_cart", payload :
                        item})}>Move to cart</button> }
                    <button class="button read-btn" onClick={ ()=> wishDispatch({type : "Remove_from_wishlist", payload
                        : item})}>Remove <i class="fas fa-heart wish-icon"></i></button>
                </div>
            </article>
            )}


        </div>
    </div>
</div>
);
};

export {Wishlist};