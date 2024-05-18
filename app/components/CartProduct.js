import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

const CartProduct = ({ product }) => {
  const { removeFromCart } = useCart();

  if (!product || !product.image || !product.title || !product.price) {
    console.error("Product data is incomplete:", product);
    return null;
  }

  return (
    <div className="flex items-center border-b py-4">
      <div className="w-24 h-24 relative">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="ml-4 flex-1">
        <h4 className="font-bold">{product.title}</h4>
        <p>${product.price}</p>
      </div>
      <button
        className="text-red-500"
        onClick={() => removeFromCart(product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
