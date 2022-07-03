import {
    createContext,
    useContext,
    useReducer,
} from "react";

const initVal = {
    categoryFil: [],
    priceRangeFil: 500,
    ratingFil: 1,
    sortByPriceFil: "",
    searchFil: "",
    showProduct: [],
    realProduct: []
}

const FilterContext = createContext();

const FilterProvider = ({
    children
}) => {

    const [filterState, filterDispatch] = useReducer(filterFunc, initVal);
    return ( <FilterContext.Provider value = {
            {
                filterState,
                filterDispatch,
            }
        } > {
            children
        } </FilterContext.Provider>
    );
}

const useFilter = () => useContext(FilterContext);

export {
    useFilter,
    FilterProvider
};


const filterFunc = (filterState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...filterState,
                showProduct: action.payload,
                realProduct: action.payload,
            };
        case "CLEAR_ALL":
            return {
                ...filterState,
                categoryFil: [],
                    priceRangeFil: 500,
                    ratingFil: 1,
                    sortByPriceFil: "",
                    searchFil: filterState.searchFil,
                    showProduct: filterState.realProduct,
                    realProduct: filterState.realProduct,
            };
        case "SORT_BY_PRICE":
            if (action.payload === "PRICE_LOW_TO_HIGH") {
                return {
                    ...filterState,
                    sortByPriceFil: "PRICE_LOW_TO_HIGH",
                    showProduct: [...filterState.showProduct].sort(
                        (a, b) => a.price - b.price
                    ),
                };
            } else if (action.payload === "PRICE_HIGH_TO_LOW") {
                return {
                    ...filterState,
                    sortByPriceFil: "PRICE_HIGH_TO_LOW",
                    showProduct: [...filterState.showProduct].sort(
                        (a, b) => b.price - a.price
                    ),
                };
            } else {
                return {
                    ...filterState
                };
            };

        case "PRICE_RANGE":
            return {
                ...filterState,
                priceRangeFil: action.payload,
            };
        case "CATEGORIES":
            return {
                ...filterState,
                categoryFil: action.payload,
            };
        case "RATING":
            return {
                ...filterState,
                ratingFil: action.payload,
            };
        case "SEARCH":
            return {
                ...filterState,
                searchFil: action.payload,
            };

        default:
            return filterState;
    }
}