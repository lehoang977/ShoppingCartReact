import Products from "./Products";
import { useState } from "react";
import React from "react";

export const ShopContext = React.createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; ++i) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (id) => {
    setCartItems((listCart) => ({ ...listCart, [id]: listCart[id] + 1 }));
  };

  const deleteFromCart = (id) => {
    setCartItems((listCart) => ({ ...listCart, [id]: listCart[id] - 1 }));
  };

  const updateCart = (amount, id) => {
    setCartItems((listCart) => ({ ...listCart, [id]: amount }));
  };

  const getTotalCart = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    deleteFromCart,
    updateCart,
    getTotalCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
