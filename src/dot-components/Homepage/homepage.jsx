import "../../public-css/navbar.css";

import "./homepage.css";
import "../../public-css/root.css";


const Homepage = () => {
  return (
    <div className="App">
      <div class="nav-con">
        <nav class="nav-bar">
            <div>
                <h2 class="website-name"><a href="./index.html" class="link-style link-color-primary"> D<img src="./images/dot.png" class="dot-img"/>T Store</a></h2>

                <p class="sm-txt"><i>Everything ends with a dot.</i></p>
            </div>
            
            <div class="box">
                <input type="text" placeholder="Search" class="search-box input"/>
            </div> 
            <div class="nav-btn">
                <button class="btn secondary-btn"><a href="./site-pages/login/login.html" class="link-style link-color">Login</a></button>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><i class="far fa-user icon"></i></button>
                    <div class="real-badge">6</div>
                </div>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><a href="./site-pages/wishlist/wishlist.html" class="link-styel"><i class="far fa-heart icon"></i></a></button>
                    <div class="real-badge">4</div>
                </div>
                
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><a href="./site-pages/cart/cart.html" class="link-style"><i class="far fa-shopping-cart icon"></i></a></button>
                    <div class="real-badge">1</div>
                </div>
            </div>
        </nav>
    </div>
    <div class="body-container">
    <div class="author-flex">
        <div class="authors">
            <div class="img-cont">
                <img src="./images/all-products.jpg" class="round-img" alt="all-product-img"/>
                <button class="small-text btn primary-btn"><a href="./site-pages/all_products/products.html" class="link-style link-color">All Products </a></button>
            </div>
            <div class="img-cont">
                <img src="./images/john-green.jpg" class="round-img" alt="john-green-img"/>
                <button class="small-text btn secondary-btn-border">John Green</button>
            </div>
            <div class="img-cont">
                <img src="./images/paula-hawkins.jpg" class="round-img" alt="paula-hawkins-img"/>
                <button class="small-text btn secondary-btn-border">Paula Hawkins</button>
            </div>
            <div class="img-cont">
                <img src="./images/jkr.jpg" class="round-img" alt="jkr-img"/>
                <button class="small-text btn secondary-btn-border">JK Rowling</button>
            </div>
            <div class="img-cont">
                <img src="./images/murakami.jpg" class="round-img" alt="haruki-murakami-img"/>
                <button class="small-text btn secondary-btn-border">Haruki Murakami</button>
            </div>
            <div class="img-cont">
                <img src="./images/khaled.jpg" class="round-img" alt="khaled-hosseini-img"/>
                <button class="small-text btn secondary-btn-border">Khaled Hosseini</button>
            </div>
            <div class="img-cont">
                <img src="./images/nicholas.jpg" class="round-img" alt="nicholas-sparks-img"/>
                <button class="small-text btn secondary-btn-border">Nicholas Sparks</button>
            </div>
            <div class="img-cont">
                <img src="./images/colleen-hoover.png" class="round-img" alt="colleen-hoover-img"/>
                <button class="small-text btn secondary-btn-border">Colleen Hover</button>
            </div>
        </div>
    </div>
    <div class="hero">
        <img src="./images/hero-img.jpg" class="responsive-img" alt="hero-img"/>
    </div>
    <div class="cards-cont">
        <article class="complete-card">
            <div class="horizontal-content">
                <img src="./images/new-thriller.jpg" alt="thriller arrival" class="card-image hori-img"/>
                <div class="main-info-cont">
                    <p class="sm-txt new-ar">New arrival</p>
                    <h3 class="info-head">New Thriller</h3>
                    <p class="sm-txt">Novels full of suspense which won't let you sleep until you read one more page.</p>
                    <button class="button read-btn">Explore</button>
                </div>
            </div>
            
        </article>
        <article class="complete-card">
            <div class="horizontal-content">
                <img src="./images/new-rom-com.jpg" alt="rom-com arrival" class="card-image hori-img"/>
                <div class="main-info-cont">
                    <p class="sm-txt new-ar">New arrival</p>
                    <h3 class="info-head">New Rom-Com</h3>
                    <p class="sm-txt">Calm and breezy romantic comedy novels for you. </p>
                    <button class="button read-btn">Explore</button>
                </div>
            </div>
            
        </article>
    </div>
</div>
    </div>
  );
};

export { Homepage };
