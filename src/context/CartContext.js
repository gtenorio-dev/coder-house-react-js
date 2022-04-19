import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const getLocalCart = () => {
        let cart = [];
        let localCart = localStorage["cart"];
        if (localCart) cart = JSON.parse(localCart);

        return cart;
    };

    const saveLocalCart = () => {
        localStorage['cart'] = JSON.stringify(cart);
    }

    const [cart, setCart] = useState(getLocalCart());

    useEffect(() => {
        saveLocalCart();
    },[cart]);


    const addItemToCart = (item) => {
        setCart([...cart, item]);
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const cartQuantity = () => {
        return cart.reduce((counter, prod) => (counter += prod.quantity), 0);
    };

    const cartTotal = () => {
        return Number(
            cart.reduce(
                (total, prod) => (total += prod.price * prod.quantity),
                0
            )
        ).toFixed(2);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeCartItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const updateItem = (item) => {
        // console.log("Cart Context");
        // console.log(item);
        cart.forEach((cartItem) => {
            if (cartItem.id === item.id) {
                cartItem.quantity = item.quantity;
            }
        });
        setCart([...cart]);

        // console.log("cart");
        // console.log(cart);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                isInCart,
                cartQuantity,
                cartTotal,
                clearCart,
                removeCartItem,
                updateItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
