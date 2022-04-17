import {
    createContext,
    useContext,
    useReducer
} from "react";

const WishlistContext = createContext();

const wishFunction = (wishState, action) => {
    switch (action.type) {
        case 'Remove_from_wishlist':
            return {
                ...wishState,
                wish:
                    wishState.wish.filter((product) => product._id != action.payload._id)
            }
            case 'Add_to_wishlist':
                return {
                    ...wishState,
                    wish: [
                        ...wishState.wish,
                        {
                            ...action.payload
                        },
                    ],
                }
                default:
                    return wishState;


    }
}

const WishlistProvider = ({
    children
}) => {
    const [wishState, wishDispatch] = useReducer(wishFunction, {
        wish: []
    })
    return ( <WishlistContext.Provider value = {
            {
                wishState,
                wishDispatch
            }
        } > {
            children
        } </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export {
    WishlistProvider,
    useWishlist
};