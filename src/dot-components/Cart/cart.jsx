import "./cart.css"
import "../../public-css/root.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext"
import { useWishlist } from "../../Context/wishlistContext";
import { Navbar } from "../Navbar/navbar";

const Cart = () => {

const { cartState, cartDispatch } = useCart();
const { wishState, wishDispatch } = useWishlist();

const totalPrice = cartState.cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.quantity), 0 );
const discountPrice = (10*totalPrice)/100;
const finalPrice = totalPrice-discountPrice;

return (
<div className="App">
    <Navbar />
    <div class="cart-container margin-30">
        <main class="cart-cards-container flex-prop align-justify-center">
            <h3 class="cart-head">Your cart <span class="cart-quant">({cartState.cart.length})</span></h3>
            {cartState.cart.map((item) =>
            <article class="complete-card cart-card">
                <div class="horizontal-content">
                    <img src={item.image} class="card-image hori-img" />
                    <div class="main-info-cont align-justify-center">
                        <h3 class="info-head">{item.title}</h3>
                        <p class="sm-txt new-ar">{item.author}</p>
                        <p class="sub-info">Rs.{item.price}</p>
                        <p className="sub-info">{item.ratings}<span><i class="fas fa-star"></i></span></p>
                        <div class="quantity-cont align-justify-center">
                            <p class=" quantity-head">Quantity :</p>
                            <button class="quantity-btn inc" onClick={()=> cartDispatch({type : "Increase_quantity",
                                payload : item})}><i class="fal fa-plus"></i></button>
                            <div class="product-quantity">{item.quantity}</div>
                            <button class="quantity-btn dec" onClick={()=> cartDispatch({type : "Decrease_quantity",
                                payload : item})}><i class="fal fa-minus"></i></button>
                        </div>
                        <div class="flex-prop">
                            <button class="btn secondary-btn rem-btn" onClick={()=>cartDispatch({type :
                                "Remove_from_cart", payload : item})}>Remove from Cart</button>
                            {wishState.wish.find((product) => product._id === item._id) ?
                            <Link to="/wishlist">
                            <button class="button read-btn">Go to Wishlist</button>
                            </Link> :
                            <button class="button read-btn" onClick={()=>wishDispatch({type : "Add_to_wishlist", payload
                                : item})}>Add to wishlist</button>
                            }

                        </div>
                    </div>
                </div>

            </article>
            )}
        </main>
        <div class="bill flex-prop">
            <div class="flex-prop">
                <h3 class="price-head">Price Details</h3>
                <hr />
                <div class="price bill-cont">
                    <h5>Price : </h5>
                    <p>Rs. {totalPrice}</p>
                </div>
                <div class="discount-am bill-cont">
                    <h5>10% Discount : </h5>
                    <p>Rs. {discountPrice}</p>
                </div>
                <div class="total-am bill-cont">
                    <h4>Total Amount : </h4>
                    <p>Rs. {finalPrice}</p>
                </div>
                <hr />
                <div class="saved-am bill-cont">
                    <p>You saved: </p>
                    <p>Rs. {discountPrice}</p>
                </div>
                <button class="btn primary-btn rem-btn">Place Order</button>
            </div>
        </div>
    </div>
</div>

);
};

export { Cart };