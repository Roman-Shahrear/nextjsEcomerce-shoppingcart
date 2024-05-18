"use client";
import { useState } from "react";
import CartPage from "./cart/page";
import { useCart } from "./components/CartContext";
import Product from "./components/Product";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoAppsSharp } from "react-icons/io5";

export default function Home() {
  const { products, addToCart } = useCart();
  const [activeButton, setActiveButton] = useState(null);
  console.log(addToCart);
  
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
      <div className="flex h-screen">
        <div className="w-3/5 pl-20">
          <div className='flex justify-between mt-20'>
                  <h1 className='text-xl font-bold'>OUR ALL PRODUCTS</h1>
                <div className="space-x-4">
                <button
              onClick={() => handleButtonClick('apps')}
              className={activeButton === 'apps' ? 'text-blue-500' : 'text-black'}
            >
              <IoAppsSharp className='text-4xl' />
            </button>
                  <button
                    onClick={() => handleButtonClick('list')}
                    className={activeButton === 'list' ? 'text-blue-500' : 'text-black'}
                  >
                      <AiOutlineUnorderedList className="text-4xl"/>
                  </button>
                </div>
          </div>
          <div className="relative mt-6">
                <input
                  type="text"
                  placeholder="Search An Item"
                  className="border border-black rounded-full py-1 px-4 pl-10 w-full"
                />
                <CiSearch className="absolute top-2  left-3 text-black text-xl" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10 p-2">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
        </div>
        <div className="w-2/6 mt-6 ml-11">
          <CartPage />
        </div>
      </div>
  );
}
