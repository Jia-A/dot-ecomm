import "../../public-css/navbar.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/productContext";
import { useAuth } from "../../Context/authContext";
import { useTheme } from "../../Context/themeContext";
import { useState } from "react";
import { Filter } from "../Filter/filter";


const NavbarResp = () =>{
const { productState } = useProduct();
const { token, logoutHandler } = useAuth();
const { theme, setTheme } = useTheme();
const [ filterShow, setFilterShow ] =  useState(false);

const { wishlist, cart } = productState;
return (
<div className="App">
    <div class="nav-con">
        <nav class="nav-bar">
            <div>
                <Link to="/" className="link-style link-color-primary">
                <h2 class="website-name">D<img src="./images/dot.png" class="dot-img" />T Store</h2>
                </Link>
                <p class="sm-txt"><i>Everything ends with a dot.</i></p>
            </div>

            <div class="nav-buttons">
                <div class="btn-badge">
                    <Link to="/wishlist" className="link-style">
                    <button className="btn icon-only-btn nav-btn"><i class="far fa-heart icon"></i></button>
                    </Link>
                    <div class="real-badge">{wishlist.length}</div>
                </div>

                <div class="btn-badge">
                    <Link to="/cart" className="link-style">
                    <button className="btn icon-only-btn nav-btn"><i class="far fa-shopping-cart icon"></i></button>
                    </Link>
                    <div class="real-badge">{cart.length}</div>
                </div>
                { filterShow ?
                 (
                    <button className="btn icon-only-btn nav-btn filter-hide" onClick={()=> setFilterShow(false)}><i className="far fa-sort icon"></i></button>
                ) : (
                    <button className="btn icon-only-btn nav-btn filter-hide" onClick={()=> setFilterShow(true)}><i className="far fa-filter icon"></i></button>
                )
                }
                
                { theme === "light" ? 
                (  <button className="btn icon-only-btn nav-btn" onClick={()=> setTheme("dark")}><i class="fad fa-moon-cloud icon"></i></button> ) : 
                (  <button className="btn icon-only-btn nav-btn" onClick={()=> setTheme("light")}><i class="fad fa-cloud-sun icon"></i></button> 
                ) }
                { token ? ( 
                 <button className="btn icon-only-btn nav-btn" onClick={()=>logoutHandler()}><i className="fas fa-sign-out-alt icon"></i></button>
                ) : (
                    <Link to="/login" className="link-style link-color">
                        <button className="btn icon-only-btn nav-btn"><i className="fas fa-sign-in-alt icon"></i></button>
                    </Link>
                ) }
                
            </div>
        </nav>
    </div>
    {filterShow && 
    <div className="filter-container">
        <Filter/>
    </div>        
    }
</div>
);

}

export { NavbarResp };