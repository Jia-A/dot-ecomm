import "../../public-css/root.css";
import "./product.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../Filter/filter";
import { useFilter } from "../../Context/filterContext";
// import { Navbar } from "../Navbar/navbar";
import { useAuth } from "../../Context/authContext";
import { useProduct } from "../../Context/productContext";
import { NavbarResp } from "../Navbar/navbarResponsive";


const Products = () => {

const { token } = useAuth(); 
const { productState, getCart, getWishlist, removeFromWishlist } = useProduct();
const { products, cart, wishlist } = productState  

const { filterState, filterDispatch } = useFilter();

useEffect(() => {
    filterState.showProduct.length === 0 &&
    filterDispatch({
    type: "SET_DATA",
    payload: products,
    });
    }, [products]);


const categoryFilter = (showProduct, filterOnCategories) => {
if (filterOnCategories.length > 0) {
return showProduct.filter((item) => {
return filterOnCategories.includes(item.categoryName);
});
} else {
return showProduct;
}
};
const priceFilter = (showProduct, filterOnPrice) => {
if (filterOnPrice === "PRICE_LOW_TO_HIGH") {
return showProduct.sort(
(item1, item2) => item1.price - item2.price
);
} else if (filterOnPrice === "PRICE_HIGH_TO_LOW") {
return showProduct.sort(
(item1, item2) => item2.price - item1.price
);
} else {
return showProduct;
}
};

const priceRangeFilter = (showProduct, filterOnPriceRange) => {
if (filterOnPriceRange !== null) {
return showProduct.filter(
(item) => item.price <= filterOnPriceRange ); } else { return showProduct; } }; const ratingFilter=(showProduct,
    filterOnRating)=> {
    if (filterOnRating != null) {
    return showProduct.filter((item) => item.ratings >= filterOnRating);
    } else {
    return showProduct;
    }
    };

    const filteredItems = (filterState) => {
    const sortByCategoryItems = categoryFilter(
    filterState.showProduct,
    filterState.categoryFil
    );

    const sortByPriceItems = priceFilter(
    sortByCategoryItems,
    filterState.sortByPriceFil
    );
    const sortByRatingItems = ratingFilter(
    sortByPriceItems,
    filterState.ratingFil
    );

    const sortByPriceRangeItems = priceRangeFilter(
    sortByRatingItems,
    filterState.priceRangeFil
    );
    return sortByPriceRangeItems;
    };
    return (
    <div className="App">
        {/* <Navbar /> */}
        <NavbarResp/>
        <div class="page-container">
            <div className="fil-box">
            <Filter />
            </div>
            <div class="product-container flex-prop">
                <h2 class="product-head">Showing All Products</h2>
                <div class="product-cards-container">
                     {filteredItems(filterState).length > 0 && 
                    
                    filteredItems(filterState).map((item =>
                    <article class="complete-card">
                        <img src={item.image} alt="" class="card-image" />
                        {wishlist.find((wishProduct) => wishProduct.id===item.id) ?                           
                            <span className="like-btn"><i class="fas fa-heart wish-icon" onClick={ ()=> removeFromWishlist(token, item._id)}></i></span>
                             : <span className="not-like-btn"><i class="far fa-heart not-wish" onClick={ ()=>
                            getWishlist(token, item)}></i></span>
                        }
                        <div className="sub-info rate">{item.ratings}<span><i class="fas fa-star"></i></span></div>
                       
                        <div class="main-info-cont">
                            <h3 class="info-head">{item.title}</h3>
                            <p class="sm-txt">{item.author}</p>
                            
                            <p class="sub-info">Rs. {item.price}</p>
                        </div>
                        <div class="footer">
                            {cart.find((cartProduct) => cartProduct.id===item.id) ?
                            <Link to="/cart">
                            <button class="btn primary-btn">Go to Cart</button>
                            </Link> : <button class="btn primary-btn" onClick={()=>getCart(token, item)}>Add to cart</button>
                            }

                        </div>
                    </article>
                    ))}


                </div>
            </div>
        </div>
    </div>
    );
    };

    export { Products };