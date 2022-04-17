import {
    createContext,
    useContext,
    useReducer
} from "react";

const CartContext = createContext();

const cartFunction = (cartState, action) => {
    switch (action.type) {
        case 'Add_to_cart':
            return {
                ...cartState,
                cart: [
                    ...cartState.cart,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }

            case 'Increase_quantity':
                return {
                    ...cartState,
                    cart:
                        cartState.cart.map((item) => item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : item)
                };
            case 'Decrease_quantity':
                return {
                    ...cartState,
                    cart:
                        cartState.cart.map((item) => item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
                        } : item)
                };
            case 'Remove_from_cart':
                return {
                    ...cartState,
                    cart: cartState.cart.filter((obj) => obj._id !== action.payload._id)
                }
                default:
                    return cartState;
    }
}
const CartProvider = ({
    children
}) => {
    const [cartState, cartDispatch] = useReducer(cartFunction, {
        cart: []
    });

    return ( <CartContext.Provider value = {
        {
            cartState,
            cartDispatch
        }
    } > {
        children
    } </CartContext.Provider>);
};

const useCart = () => useContext(CartContext);

export {
    CartProvider,
    useCart
};