import "../../public-css/navbar.css";
import "./wishlist.css"

import "../../public-css/root.css";

const Wishlist =() => {
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
    <div class="wishlist-container flex-prop align-justify-center">
        <h3 class="wishlist-head">Your Wishlist</h3>
        <div class="wishlist-cards align-justify-center">
            <article class="complete-card">
                <img src="./images/1984.jpg" alt="1984-novel-img" class="card-image"/>
                <div class="main-info-cont">
                    <h3 class="info-head">1984</h3>
                    <p class="sm-txt">George Orwell</p>
                </div>
                <div class="sub-info-cont">
                    <p class="sub-info">Rs. 500</p>
                </div>
                <div class="footer">
                    <button class="btn primary-btn">Move to cart</button>
                    <button class="button read-btn">Remove <i class="fas fa-heart wish-icon"></i></button>
                </div>
            </article>
            <article class="complete-card">
                <img src="./images/layla.jpg" alt="layla-novel-img" class="card-image"/>
                <div class="main-info-cont">
                    <h3 class="info-head">Layla</h3>
                    <p class="sm-txt">Colleen Hoover</p>
                </div>
                <div class="sub-info-cont">
                    <p class="sub-info">Rs. 500</p>
                </div>
                <div class="footer">
                    <button class="btn primary-btn">Move to cart</button>
                    <button class="button read-btn">Remove <i class="fas fa-heart wish-icon"></i></button>
                </div>
            </article>
            <article class="complete-card">
                <img src="./images/norwe-wood.jpg" alt="norweigan-wood-novel-img" class="card-image"/>
                <div class="main-info-cont">
                    <h3 class="info-head">Norweigan Wood</h3>
                    <p class="sm-txt">Haruki Murakami</p>
                </div>
                <div class="sub-info-cont">
                    <p class="sub-info">Rs. 500</p>
                </div>
                <div class="footer">
                    <button class="btn primary-btn">Move to cart</button>
                    <button class="button read-btn">Remove <i class="fas fa-heart wish-icon"></i></button>
                </div>
            </article>
            <article class="complete-card">
                <img src="./images/splendid-suns.jpg" alt="a-thousand-splendid-suns-noevl-img" class="card-image"/>
                <div class="main-info-cont">
                    <h3 class="info-head">A thousand splendid suns</h3>
                    <p class="sm-txt">Khaled Hosseini</p>
                </div>
                <div class="sub-info-cont">
                    <p class="sub-info">Rs. 500</p>
                </div>
                <div class="footer">
                    <button class="btn primary-btn">Move to cart</button>
                    <button class="button read-btn">Remove <i class="fas fa-heart wish-icon"></i></button>
                </div>
            </article>
        </div>
    </div>
    </div>
  );
};

export {Wishlist};