import "../../public-css/navbar.css";
import "./cart.css"
import "../../public-css/root.css";

const Cart = () => {
    return (
      <div className="App">
        <div class="nav-con">
        <nav class="nav-bar">
            <div>
                <h2 class="website-name"><a href="../../index.html" class="link-style link-color-primary"> D<img src="./images/dot.png" class="dot-img"/>T Store</a></h2>

                <p class="sm-txt"><i>Everything ends with a dot.</i></p>
            </div>
            
            <div class="box">
                <input type="text" placeholder="Search" class="search-box input"/>
            </div> 
            <div class="nav-btn">
                <button class="btn secondary-btn"><a href="../../index.html" class="link-style link-color">Logout</a></button>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><i class="far fa-user icon"></i></button>
                    <div class="real-badge">6</div>
                </div>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><a href="../wishlist/wishlist.html"><i class="far fa-heart icon"></i></a></button>
                    <div class="real-badge">4</div>
                </div>
                
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><a href="../cart/cart.html"><i class="far fa-shopping-cart icon"></i></a></button>
                    <div class="real-badge">1</div>
                </div>
            </div>
        </nav>
    </div>
    <div class="cart-container margin-30">
        <main class="cart-cards-container flex-prop align-justify-center">
            <h3 class="cart-head">Your cart <span class="cart-quant">(2)</span></h3>
            <article class="complete-card cart-card">
                <div class="horizontal-content">
                    <img src="./images/alaska.jpg" class="card-image hori-img"/>
                    <div class="main-info-cont align-justify-center">
                        <h3 class="info-head">Looking for Alaska</h3>
                        <p class="sm-txt new-ar">John Green</p>
                        <p class="sub-info">Rs. 450 <span class="discount sm-txt"> Rs. 500</span></p>
                        <p class="sm-txt discount-per">10% OFF</p>
                        <div class="quantity-cont align-justify-center">
                            <p class=" quantity-head">Quantity :</p>
                            <button class="quantity-btn inc"><i class="fal fa-plus"></i></button>
                            <div class="product-quantity">1</div>
                            <button class="quantity-btn dec"><i class="fal fa-minus"></i></button>
                        </div>
                        <div class="flex-prop">
                            <button class="btn secondary-btn rem-btn">Remove from Cart</button>
                            <button class="button read-btn">Add to wishlist</button>
                        </div>
                    </div>
                </div>
                
            </article>
            <article class="complete-card cart-card">
                <div class="horizontal-content">
                    <img src="./images/slow-fire.jpg"class="card-image hori-img"/>
                    <div class="main-info-cont align-justify-center">
                        <h3 class="info-head">A slow fire burning</h3>
                        <p class="sm-txt new-ar">Paula Hawkins</p>
                        <p class="sub-info">Rs. 400 <span class="discount sm-txt"> Rs. 500</span></p>
                        <p class="sm-txt discount-per">20% OFF</p>
                        <div class="quantity-cont align-justify-center">
                            <p class=" quantity-head">Quantity :</p>
                            <button class="quantity-btn inc"><i class="fal fa-plus"></i></button>
                            <div class="product-quantity">2</div>
                            <button class="quantity-btn dec"><i class="fal fa-minus"></i></button>
                        </div>
                        <div class="flex-prop">
                            <button class="btn secondary-btn rem-btn">Remove from Cart</button>
                            <button class="button read-btn">Add to wishlist</button>
                        </div>
                    </div>
                </div>
                
            </article>
        </main>
        <div class="bill flex-prop">
            <div class="flex-prop">
                <h3 class="price-head">Price Details</h3>
                <hr/>
                <div class="price bill-cont">
                    <h5>Price : </h5>
                    <p>Rs. 1500</p>
                </div>
                <div class="discount-am bill-cont">
                    <h5>Discount : </h5>
                    <p>Rs. 150</p>
                </div>
                <div class="delivery bill-cont">
                    <h5>Delivery Charges : </h5>
                    <p>Rs. 50</p>
                </div>
                <hr/>
                <div class="total-am bill-cont">
                    <h4>Total Amount : </h4>
                    <p>900</p>
                </div>
                <hr/>
                <div class="saved-am bill-cont">
                    <p>You saved: </p>
                    <p>Rs. 100</p>
                </div>
                <button class="btn primary-btn rem-btn">Place Order</button>
            </div>
        </div>
    </div>
      </div>

    );
};

export { Cart };