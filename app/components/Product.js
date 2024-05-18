import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-4">
          {product.title}
        </h2>
        <span className="ml-2">{product.rating.icon}Rating icon</span>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <span className="text-gray-600 ml-2">{product.rating.rate}</span>
          </div>
          <span className="text-gray-600 ml-2">
            ({product.rating.count} reviews)
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-red-600 font-bold">${product.price}</span>
          <button
            className="bg-backbg hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
