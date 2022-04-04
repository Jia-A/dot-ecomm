import "../../public-css/navbar.css";
import "./product.css";
import "../../public-css/root.css";


const Products = () => {
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
                <button class="btn secondary-btn"><a href="../login/login.html" class="link-style link-color">Login</a></button>
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
    <div class="page-container">
        <aside class="filters">
            <div class="filter-head">
                <h3 class="filter-heading">Filters</h3>
                <button class="button read-btn right">Clear all</button>
            </div>
            <div>
                <h4 class="filter-heading">Price</h4>
                <div class="range-cont">
                    <span class="sm-txt range-num">200</span>
                    <span class="sm-txt range-num">600</span>
                    <span class="sm-txt range-num">1000</span>
                </div>
                <input type="range" class="price-range" min="200" max="1000"/>
            </div>
            <div>
               <h4 class="filter-heading">Category</h4> 
               <label for="thriller">
                   <input type="checkbox" id="thriller" name="thriller" value="thrilling"/>
                   Thriller
               </label>
               <label for="rom-com">
                    <input type="checkbox" id="rom-com" name="rom-com" value="RomCom"/>
                    Rom-com
                </label>
                <label for="fanstasy">
                    <input type="checkbox" id="fantasy" name="fantasy" value="imagination"/>
                    Fantasy
                </label>
                <label for="sad">
                    <input type="checkbox" id="sad" name="sad" value="depressing"/>
                    Sad
                </label>
            </div>
            <div>
                <h4 class="filter-heading">Ratings</h4>
                <label for="1star">
                    <input type="radio" id="1star" name="rating" value="1"/>
                    1 star & above
                </label>
                <label for="2star">
                    <input type="radio" id="2star" name="rating" value="2"/>
                    2 star & above
                </label>
                <label for="3star">
                    <input type="radio" id="3star" name="rating" value="3"/>
                    3 star & above
                </label>
                <label for="4star">
                    <input type="radio" id="4star" name="rating" value="4"/>
                    4 star & above
                </label>
            </div>
            <div>
                <h4 class="filter-heading">Sort by</h4>
                <label for="l-to-h">
                    <input type="radio" id="l-to-h" name="sorting" value="low"/>
                    Price : Low to High
                </label>
                <label for="h-to-l">
                    <input type="radio" id="h-to-l" name="sorting" value="high"/>
                    Price : High to Low
                </label>
            </div>
        </aside>
        <div class="product-container flex-prop">
            <h2 class="product-head">Showing All Products</h2>
            <div class="product-cards-container">
                <article class="complete-card">
                    <img src="./images/turtles-all.jpg" alt="" class="card-image"/>
                    <div class="main-info-cont">
                        <h3 class="info-head">Turtles all the way down</h3>
                        <p class="sm-txt">John Green</p>
                    </div>
                    <div class="sub-info-cont">
                        <p class="sub-info">Rs. 500</p>
                    </div>
                    <div class="footer">
                        <button class="btn primary-btn">Add to cart</button>
                        <button class="btn primary-btn-border">Wishlist</button>
                    </div>
                </article>
                <article class="complete-card">
                    <img src="./images/kite-run.jpg" alt="" class="card-image"/>
                    <div class="main-info-cont">
                        <h3 class="info-head">The Kite Runner</h3>
                        <p class="sm-txt">Khaled Hosseini</p>
                    </div>
                    <div class="sub-info-cont">
                        <p class="sub-info">Rs. 500</p>
                    </div>
                    <div class="footer">
                        <button class="btn primary-btn">Add to cart</button>
                        <button class="btn primary-btn-border">Wishlist</button>
                    </div>
                </article>
                <article class="complete-card">
                    <img src="./images/into-water.jpg" alt="" class="card-image"/>
                    <div class="main-info-cont">
                        <h3 class="info-head">Into the water</h3>
                        <p class="sm-txt">Paula Hawkins</p>
                    </div>
                    <div class="sub-info-cont">
                        <p class="sub-info">Rs. 500</p>
                    </div>
                    <div class="footer">
                        <button class="btn primary-btn">Add to cart</button>
                        <button class="btn primary-btn-border">Wishlist</button>
                    </div>
                </article>
                 <article class="complete-card">
                    <img src="./images/slammed.jpg" alt="" class="card-image"/>
                    <div class="main-info-cont">
                        <h3 class="info-head">Slammed</h3>
                        <p class="sm-txt">Colleen Hoover</p>
                    </div>
                    <div class="sub-info-cont">
                        <p class="sub-info">Rs. 500</p>
                    </div>
                    <div class="footer">
                        <button class="btn primary-btn">Add to cart</button>
                        <button class="btn primary-btn-border">Wishlist</button>
                    </div>
                </article>
                 <article class="complete-card">
                    <img src="./images/kafka.jpg" alt="" class="card-image"/>
                    <div class="main-info-cont">
                        <h3 class="info-head">Kafka on the shore</h3>
                        <p class="sm-txt">Haruki Murakami</p>
                    </div>
                    <div class="sub-info-cont">
                        <p class="sub-info">Rs. 500</p>
                    </div>
                    <div class="footer">
                        <button class="btn primary-btn">Add to cart</button>
                        <button class="btn primary-btn-border">Wishlist</button>
                    </div>
                </article>
                 <article class="complete-card">
                    <img src="./images/ove.jpg" alt="" class="card-image"/>
                    <div class="main-info-cont">
                        <h3 class="info-head">A man called Ove</h3>
                        <p class="sm-txt">Fredrik Backman</p>
                    </div>
                    <div class="sub-info-cont">
                        <p class="sub-info">Rs. 500</p>
                    </div>
                    <div class="footer">
                        <button class="btn primary-btn">Add to cart</button>
                        <button class="btn primary-btn-border">Wishlist</button>
                    </div>
                </article>
            </div>
        </div>
    </div>
    </div>
  );
};

export { Products };

