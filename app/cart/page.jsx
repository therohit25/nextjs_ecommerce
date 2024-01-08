"use client";
import CartContext from "@/app/(Context)/CartContext";
import Card from "@/components/Card";
import CheckOutForm from "@/components/CheckOutForm";
import OrderSummery from "@/components/OrderSummery";
import { useContext, useState } from "react";

const Page = () => {
  const { cartdata, setCartdata } = useContext(CartContext);
  const [formstatus, setFormStatus] = useState(0);
  const totalprice = cartdata.reduce(
    (sum, product) => (sum += product?.price),
    0
  );
  if (cartdata?.length === 0) {
    return (
      <>
        <p className="text-5xl text-center my-2 font-semibold  font-mono">
          Cart is Empty !..
        </p>
      </>
    );
  }

  return (
    <>
      <div className="flex  w-100 justify-center items-center md:space-x-5  px-10 flex-wrap">
        <div className="max-h-[100dvh] overflow-y-auto ">
          {formstatus ? (
            <div className="flex justify-center w-[50vw] items-center  h-screen ">
              <CheckOutForm
                totalprice={totalprice}
                setCartdata={setCartdata}
                cartdata={cartdata}
              />
            </div>
          ) : (
            <>
              <p className="text-5xl text-center my-5 font-semibold font-mono">
                My Cart
              </p>
              <div className="flex flex-wrap gap-8 space-y-3 w-[70vw] justify-center">
                {cartdata?.map((product) => (
                  <Card key={product?.id} {...product} ButtonText={"Remove"} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-100 flex items-center justify-center flex-col space-y-3 md:my-0 my-5">
          <div>
            <OrderSummery cartdata={cartdata} totalprice={totalprice} />
          </div>
          <div>
            <button
              className="p-2 rounded-lg outline-none shadow-md shadow-sky-700 bg-sky-400"
              onClick={() => setFormStatus(1)}
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
