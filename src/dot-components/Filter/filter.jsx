
import { useFilter } from "../../Context/filterContext";
import "../Product-listing/product.css"


const Filter = () => {
    const { filterState, filterDispatch } = useFilter();
    return (
        <div className="App">
            <aside class="filters">
            <div class="filter-head">
                <h3 class="filter-heading">Filters</h3>
                <button class="button read-btn right" onClick={()=>filterDispatch({type : "CLEAR_ALL", payload: { ...filterState.realProduct}})}>Clear all</button>
            </div>
            <div>
                <h4 class="filter-heading">Price</h4>
                <div class="range-cont">
                    <span class="sm-txt range-num">300</span>
                    <span class="sm-txt range-num">400</span>
                    <span class="sm-txt range-num">500</span>
                </div>
                <input type="range" class="price-range" min="300" max="500" step="100" value={filterState.priceRangeFil} onChange={(e)=>filterDispatch({type : "PRICE_RANGE", payload : Number(e.target.value)})}/>
            </div>
            <div>
               <h4 class="filter-heading">Category</h4> 
               <label for="thriller">
                   <input type="radio" id="thriller" name="category" checked= {filterState.categoryFil === "Thriller"} onClick={()=>filterDispatch({
                       type : "CATEGORIES", payload : "Thriller",
                   })}/>
                   Thriller
               </label>
               <label for="rom-com">
                    <input type="radio" id="rom-com" name="category" checked = {filterState.categoryFil === "Rom-Com"}
                    onClick={()=>filterDispatch({
                        type : "CATEGORIES", payload : "Rom-Com"
                    })}/>
                    Rom-com
                </label>
                <label for="fanstasy">
                    <input type="radio" id="fantasy" name="category" checked = {filterState.categoryFil === "Fantasy"}
                    onClick={()=>filterDispatch({
                        type : "CATEGORIES", payload : "Fantasy"
                    })}/>
                    Fantasy
                </label>
                <label for="sad">
                    <input type="radio" id="sad" name="category" checked = {filterState.categoryFil === "Sad"} onClick={()=>filterDispatch({type : "CATEGORIES", payload : "Sad"})}/>
                    Sad
                </label>
                <label for="horror">
                    <input type="radio" id="horror" name="horror" checked = {filterState.categoryFil === "Horror"} onClick={()=>filterDispatch({type : "CATEGORIES", payload : "Horror"})}/>
                    Horror
                </label>
            </div>
            <div>
                <h4 class="filter-heading">Ratings</h4>
                <label for="1star">
                    <input type="radio" id="1star" name="rating" value={filterState.ratingFil === "1"} onClick ={()=> filterDispatch({type : "RATING", payload : 1})}/>
                    1 star 
                </label>
                <label for="2star">
                    <input type="radio" id="2star" name="rating" value={filterState.ratingFil === "2"} onClick ={()=> filterDispatch({type : "RATING", payload : 2})}/>
                    2 star 
                </label>
                <label for="3star">
                    <input type="radio" id="3star" name="rating" value={filterState.ratingFil === "3"} onClick ={()=> filterDispatch({type : "RATING", payload : 3})}/>
                    3 star 
                </label>
                <label for="4star">
                    <input type="radio" id="4star" name="rating" value={filterState.ratingFil === "4"} onClick ={()=> filterDispatch({type : "RATING", payload : 4})}/>
                    4 star 
                </label>
                <label for="4star">
                    <input type="radio" id="5star" name="rating" value={filterState.ratingFil === "5"} onClick ={()=> filterDispatch({type : "RATING", payload : 5})}/>
                    5 star 
                </label>
            </div>
            <div>
                <h4 class="filter-heading">Sort by</h4>
                <label for="l-to-h">
                    <input type="radio" id="l-to-h" name="sorting" value="PRICE_LOW_TO_HIGH" checked={filterState.sortByPriceFil === "PRICE_LOW_TO_HIGH"} onClick={()=>filterDispatch({type : "SORT_BY_PRICE", payload : "PRICE_LOW_TO_HIGH"})}/>
                    Price : Low to High
                </label>
                <label for="h-to-l">
                    <input type="radio" id="h-to-l" name="sorting" value="PRICE_HIGH_TO_LOW" checked={filterState.sortByPriceFil === "PRICE_HIGH_TO_LOW"} onClick={()=>filterDispatch({type : "SORT_BY_PRICE", payload : "PRICE_HIGH_TO_LOW"})}/>
                    Price : High to Low
                </label>
            </div>
        </aside>
        </div>
    );
}


export {Filter};

