"use client";

import CartContext from "@/app/(Context)/CartContext";
import { useContext } from "react";

const Button = (props) => {
  const { setCartdata, cartdata } = useContext(CartContext);

  const OperateCart = () => {
    if (props?.ButtonText === "Add") {
      setCartdata([
        ...cartdata?.filter((item) => item.id !== props.id),
        { ...props },
      ]);
    } else {
      setCartdata(cartdata?.filter((product) => product.id !== props.id));
    }
  };

  return (
    <>
      <button
        className="p-2 rounded-md bg-cyan-600 hover:bg-blue-600"
        onClick={OperateCart}
      >
        {props?.ButtonText} to Cart
      </button>
    </>
  );
};

export default Button;
