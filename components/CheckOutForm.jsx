"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const CheckOutForm = ({ totalprice, setCartdata, cartdata }) => {
  const router = useRouter();
  const [userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    address: "",
    payment: "--Select Payment--",
  });

  const onchangeHandler = (e) => {
    setUserdetails({
      ...userdetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Order Confirmed!",
      text: "Order Summary:",
      icon: "success",
      confirmButtonText: "OK",
      html: `<strong>Order Summary:</strong>
              <ul>
              <li>Ordered By: ${userdetails.name}</li>
              <li>Email: ${userdetails.email}</li>
              <li>Address: ${userdetails.address}</li>
              <li>Payment: ${userdetails.payment}</li>
           <b>Total Price: ${totalprice.toFixed(2)}</b>
         <details>
          <summary>
View More Details
                </summary>
                <ul>
              ${cartdata
                .map(
                  (item) =>
                    ` <hr/><li><strong>Product</strong>:${item.title}</li> <li><strong>Price </strong>:${item.price}</li><hr/>`
                )
                .join("")}
</ul>
               
            </details>
              </ul>   


              `,
    }).then(() => {
      setCartdata([]);
      router.push("products");
    });
  };
  return (
    <div className="w-100 bg-gray-500 p-5 rounded-md">
      <p className="text-5xl text-center my-5 font-semibold font-mono">
        Checkout Form
      </p>
      <form className="flex flex-col space-y-10 text-black">
        <input
          type="text"
          name="name"
          id="name"
          className="p-2 rounded-lg outline-none shadow-md shadow-sky-700"
          placeholder="Your Name"
          value={userdetails.name}
          required
          onChange={onchangeHandler}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="p-2 rounded-lg outline-none shadow-md shadow-sky-700"
          value={userdetails.email}
          required
          onChange={onchangeHandler}
        />
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Your Address"
          className="p-2 rounded-lg outline-none shadow-md shadow-sky-700"
          value={userdetails?.address}
          required
          onChange={onchangeHandler}
        ></textarea>
        <select
          name="payment"
          id="payment"
          className="p-2 rounded-lg outline-none shadow-md shadow-sky-700"
          value={userdetails.payment}
          required
          onChange={onchangeHandler}
        >
          <option value="--Select Payment--" disabled>
            --Select Payment--
          </option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
          <option value="COD">COD</option>
        </select>
        <button
          className="p-2 rounded-lg outline-none shadow-md shadow-sky-700 bg-sky-400"
          onClick={submitHandler}
        >
          Proceed To Payment
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
