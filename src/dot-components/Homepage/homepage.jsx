import "../../public-css/root.css";
import "./homepage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "../../Context/filterContext";
import { Navbar } from "../Navbar/navbar"
import { Footer } from "../Footer/footer";

const Homepage = () => {
const [categories, setCategories] = useState([]);
const { filterDispatch } = useFilter();

useEffect(()=>{
axios.get("/api/categories")
.then(response =>{
setCategories(response.data.categories)
})
}, [])

return (
<div className="App">
    <Navbar />
    <div class="body-container">
        <div class="hero">
            <img src="./images/hero-img.jpg" class="responsive-img" alt="hero-img" />
        </div>
        <div class="author-flex">
            <div class="authors">
                <div class="img-cont">
                    <img src="./images/all-products.jpg" class="round-img" alt="all-product-img" />
                    <Link to="/products" className="link-style link-color">
                    <button class="small-text btn primary-btn">All Products</button>
                    </Link>
                </div>
                {categories.map(item =>
                <div class="img-cont">
                    <img src={item.image} class="round-img" alt={item.categoryName} />
                    <Link to="/products">
                    <button class="small-text btn primary-btn-border" onClick={()=>filterDispatch({
                        type : "CATEGORIES", payload : item.categoryName,
                        })}>{item.categoryName}</button>
                    </Link>
                </div>
                )}
            </div>
        </div>

    </div>
    <Footer />
</div>
);
};

export { Homepage };
