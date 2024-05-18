"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="pl-20 pr-20 py-4 flex justify-between items-center bg-backbg text-white">
      <div className="font-bold">
        <Link href="/">E-comerce Site</Link>
      </div>
      <div className="space-x-10">
        <Link href="/product">Product</Link>
        <Link href="/cart">Cart</Link>
      </div>
      <div className="font-bold bg-backbtn px-6 py-2 rounded-md">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
