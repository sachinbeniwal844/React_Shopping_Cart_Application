import { X } from "lucide-react";
import React from "react";
import { useCart } from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();
  const increaseQ = () => addToCart(item);
  const descreaseQ = () => removeFromCart(item.id);
  return (
    <div className="flex justify-between items-center p-4 border border-gray-800 bg-gray-900 rounded-xl">
      <div className="flex items-center space-x-4">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-24 h-24 object-cover rounded-xl border-2 border-gray-700"
        />
        <div className="grow">
          <h1 className="text-xxl font-extrabold">{item?.name}</h1>
          <span className="text-orange-400 text-lg font-semibold">
            ₹{item?.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex justify-center items-center space-x-3 text-lg border border-gray-700 bg-gray-800 py-1 px-3 rounded-full">
          <button
            onClick={descreaseQ}
            className="hover:bg-gray-600 rounded-2xl"
          >
            -
          </button>
          <span className="border-l border-r  border-gray-600 px-2">
            {item.quantity}
          </span>
          <button onClick={increaseQ} className="hover:bg-gray-600 rounded-2xl">
            +
          </button>
        </div>

        <p className="text-xl font-bold text-orange-400 items-center">
          ₹{item.price.toFixed(2)}
        </p>

        <div
          className="p-2 border bg-red-800/20 text-red-400 border-red-400  rounded-full"
          onClick={() => removeFromCart(item.id, true)}
        >
          {" "}
          <X className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
