import "./cart.css"
import "../../public-css/root.css";
import { Navbar } from "../Navbar/navbar";
import { useProduct } from "../../Context/productContext";
import { useAuth } from "../../Context/authContext";

const Cart = () => {

const { token } = useAuth();
const { productState, productDispatch, getWishlist, removeFromCart, removeFromWishlist } = useProduct();
const { cart, wishlist } = productState;

const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.quantity), 0 );
const discountPrice = (10*totalPrice)/100;
const finalPrice = totalPrice-discountPrice;

return (
<div className="App">
    <Navbar />
    <h3 class="cart-head">Your cart <span class="cart-quant">({cart.length})</span></h3>
    <div class="cart-container">
    
        <main class="cart-cards-container align-justify-center">
            
            {cart.map((item) =>
            <article class="complete-card">
            <img src={item.image} alt="product-image" class="card-image" />
            {wishlist.find((wishProduct) => wishProduct.id===item.id) ?                           
                            <span className="like-btn"><i class="fas fa-heart wish-icon" onClick={ ()=> removeFromWishlist(token, item._id)}></i></span>
                             : <span className="not-like-btn"><i class="far fa-heart not-wish" onClick={ ()=>
                            getWishlist(token, item)}></i></span>
                        }
                        <div className="sub-info cart-rate">{item.ratings}<span><i class="fas fa-star"></i></span></div>
            <div class="main-info-cont">
                <h3 class="info-head">{item.title}</h3>
                <p class="sm-txt">{item.author}</p>
                <p className="sub-info">Rs.{item.price}</p>
                
            </div>
            <div class="quantity-cont align-justify-center">
                            <p class=" quantity-head">Quantity :</p>
                            <button class="quantity-btn inc" onClick={()=> productDispatch({type : "INCREASE_QUANTITY",
                                payload : item})}><i class="fal fa-plus"></i></button>
                            <div class="product-quantity">{item.quantity}</div>
                            <button class="quantity-btn dec" onClick={()=> productDispatch({type : "DECREASE_QUANTITY",
                                payload : item})}><i class="fal fa-minus"></i></button>
                        </div>
            <div class="flex-prop align-justify-center">
                            <button class="btn secondary-btn rem-btn" onClick={()=>removeFromCart(token, item._id)}>Remove from Cart</button>

                        </div>
        </article>
            
            )}
        </main>
        <div class="bill">
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


