import React, { createContext, useState } from "react";

// 1. Create the context
export const CartContext = createContext();

// 2. Create the provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
  };
  
    // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
