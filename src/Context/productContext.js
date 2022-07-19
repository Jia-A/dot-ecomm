import {
    createContext,
    useContext,
    useReducer,
    useEffect
} from "react";
import {
    useNavigate
} from "react-router-dom";
import toast from 'react-hot-toast';

import {
    getCategories,
    getProducts,
    removeCartProduct,
    removeWishlistProduct,
    postCartProduct,
    postWishlistProduct
} from "../services/products";

const ProductContext = createContext(null);

const initialState = {
    products: [],
    categories: [],
    cart: [],
    wishlist: [],
}

const ProductProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const productFunction = (productState, action) => {
        switch (action.type) {
            case "SET_PRODUCTS":
                return {
                    ...productState,
                    products: action.payload,
                }

                case "SET_CATEGORIES":
                    return {
                        ...productState,
                        categories: action.payload,
                    }

                    case "ADD_TO_CART":
                        return {
                            ...productState,
                            cart: action.payload,
                        }

                        case "INCREASE_CART":
                            return {
                                ...productState,
                                cart: action.payload
                            }
                            case "DECREASE_CART":
                                return {
                                    ...productState,
                                    cart: action.payload
                                }
                                case "REMOVE_FROM_CART":
                                    return {
                                        ...productState,
                                        cart: action.payload
                                    }
                                    case "ADD_TO_WISHLIST":
                                        return {
                                            ...productState,
                                            wishlist: action.payload,
                                        }

                                        case "REMOVE_FROM_WISHLIST":
                                            return {
                                                ...productState,
                                                wishlist: action.payload
                                            }
                                            case 'INCREASE_QUANTITY':
                                                return {
                                                    ...productState,
                                                    cart:
                                                        productState.cart.map((item) => item.id === action.payload.id ? {
                                                            ...item,
                                                            quantity: item.quantity + 1
                                                        } : item)
                                                };
                                            case 'DECREASE_QUANTITY':
                                                return {
                                                    ...productState,
                                                    cart:
                                                        productState.cart.map((item) => item.id === action.payload.id ? {
                                                            ...item,
                                                            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
                                                        } : item)
                                                };
        }
    }

    const [productState, productDispatch] = useReducer(productFunction, initialState);

    useEffect(() => {
        const allProducts = async () => {
            try {
                const response = await getProducts();
                productDispatch({
                    type: "SET_PRODUCTS",
                    payload: response.products
                });
            } catch (error) {
                console.log(error)
            }
        }
        allProducts();
    }, []);

    useEffect(() => {
        const allCategories = async () => {
            try {
                const response = await getCategories();
                productDispatch({
                    type: "SET_CATEGORIES",
                    payload: response.categories
                });
            } catch (error) {
                console.log(error)
            }
        }
        allCategories();
    }, []);

    const getWishlist = async (token, product) => {
        if (token) {
            try {
                console.log("hey")
                const response = await postWishlistProduct(token, product)
                productDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: response.wishlist
                })
                toast.success("Product added to wishlist!")
            } catch (error) {
                console.log(error)
                toast.error("Cannot add product to wishlist!")
            }
        } else {
            navigate("/login")
            toast.error("You're not logged in!")
        }
    }

    const getCart = async (token, product) => {
        if (token) {
            try {
                const response = await postCartProduct(token, product)
                productDispatch({
                    type: "ADD_TO_CART",
                    payload: response.cart
                })
                toast.success("Product added to cart!")
            } catch (error) {
                console.log(error)
                toast.error("Cannot add product to cart!")
            }
        } else {
            navigate("/login")
            toast.error("You're not logged in!")
        }
    }

    const removeFromWishlist = async (token, _id) => {
        try {
            const response = await removeWishlistProduct(token, _id)
            productDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: response.wishlist
            })
            toast.success("Product removed from wishlist!")
        } catch (error) {
            console.log(error)
            toast.error("Cannot remove product from wishlist!")
        }
    }
    const removeFromCart = async (token, _id) => {
        try {
            const response = await removeCartProduct(token, _id)
            productDispatch({
                type: "REMOVE_FROM_CART",
                payload: response.cart
            })
            toast.success("Product removed from cart!")
        } catch (error) {
            console.log(error)
            toast.error("Cannot remove product from cart!")
        }
    }
    return ( <ProductContext.Provider value = {
            {
                productState,
                productDispatch,
                getCart,
                getWishlist,
                removeFromWishlist,
                removeFromCart
            }
        } > {
            children
        } </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export {
    useProduct,
    ProductProvider
}