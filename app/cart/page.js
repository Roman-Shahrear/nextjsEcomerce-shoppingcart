"use client";

import { useCart } from "../components/CartContext";
import CartProduct from "../components/CartProduct";
import React from "react";

const CartPage = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-744 h-356 border border-backbg shadow-xl rounded-md">
        <h3 className="text-center bg-backbg text-white my-2 mx-2 py-1 rounded-md">
          SELECTED PRODUCTS
        </h3>
        <div>
          {cart?.map((item) => {
            return <CartProduct data={item} key={item.id} />;
          })}
        </div>
        <div className="flex justify-center items-center font-bold mt-10">
          <h1>TOTAL: ${totalPrice}</h1>
        </div>
        <div className="mt-20 flex space-x-6">
          <input
            type="checkbox"
            id="checkbox"
            className="w-4 h-4 mx-2 self-center"
          />
          <p>
          I&apos;ve read and agree to the{" "}
            <a href="terms&condition" className="underline decoration-solid">
              terms and condition,
            </a>{" "}
            <a href="refund&policy" className="underline decoration-solid">
              refund policy &
            </a>{" "}
            <a className="underline decoration-solid">privacy</a>{" "}
            <a className="underline decoration-solid">policy</a>
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center font-bold">
          <button className=" bg-backbg text-white px-4 py-3 rounded-lg my-6">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
