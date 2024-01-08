"use client";
import CartContext from "@/app/(Context)/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useContext } from "react";

const Navbar = () => {
  const { cartdata } = useContext(CartContext);
  const pathname = usePathname();

  return (
    <>
      <div className="md:flex  text-center md:justify-around bg-gray-800 py-5">
        <div className="font-serif text-3xl uppercase"> Next_E-commerce💰</div>
        <div>
          {/* NavTabs */}
          <ul className="md:flex text-center md:space-x-4 ">
            <li className="my-5 md:my-0">
              <Link
                href={"products"}
                className={`${pathname === "/products" && "text-gray-400"}`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={"cart"}
                className={`relative ${
                  pathname === "/cart" && "text-gray-400"
                }`}
              >
                My Cart
                <small className="absolute top-[-10px] bg-cyan-500 rounded-full w-8 text-white">
                  {cartdata?.length}
                </small>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
