import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
    return cart.reduce(
      (total, prod) => (total += prod.price * prod.quantity),
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
