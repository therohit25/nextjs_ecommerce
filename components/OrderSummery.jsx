import React from "react";

const OrderSummery = ({ cartdata, totalprice }) => {
  return (
    <>
      <div className="flex flex-col w-80  shadow-sky-50 shadow-md rounded-lg space-y-3 bg-gray-400 h-auto ">
        <div className="w-100 bg-gray-800 text-center py-2">
          Product Summary
        </div>
        <div className="max-h-[20vh] overflow-y-scroll">
          {cartdata.map((product) => (
            <div className="flex justify-around ">
              <div>{product?.title.split("", 15)}...</div>
              <div>{product?.price}</div>
            </div>
          ))}
        </div>

        <div className="w-100 bg-gray-800 text-center py-2">
          Total Price : {totalprice?.toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default OrderSummery;
