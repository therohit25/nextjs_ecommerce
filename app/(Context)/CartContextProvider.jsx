"use client";
import { useState } from "react";
import CartContext from "./CartContext";

export const CartContextProvider = ({ children }) => {
  const [cartdata, setCartdata] = useState([]);
  return (
    <CartContext.Provider value={{ cartdata, setCartdata }}>
      {children}
    </CartContext.Provider>
  );
};
