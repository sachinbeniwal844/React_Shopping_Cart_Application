import { ChevronLeft, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cart, cartCount, cartTotal } = useCart();
  return (
    <div className="mt-30 container mx-auto px-4 md:px-8 pt-4">
      <div className="flex items-center text-xl text-gray-400">
        <Link
          to={"/"}
          className="flex items-center hover:text-orange-500 transition duration-150 taxt-lg"
        >
          <ChevronLeft />
          <span>Back to Store</span>
        </Link>
      </div>

      <div>
        <h2 className="text-4xl font-extrabold pl-3 py-6">
          Shopping Cart ( {cartCount} )
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 mb-8">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="md:col-span-1 p-8 border border-gray-800 rounded-xl bg-gray-900 space-y-5 h-fit sticky top-27">
          <h3 className="border-b  border-gray-500 pb-3">
            <div className="flex space-x-1 text-2xl font-bold">
              <span className="text-orange-500">₹</span>
              <span>Order Total</span>
            </div>
          </h3>

          <div className="flex justify-between items-center mt-3 text-xl">
            <span className="text-gray-400">SubTotal : </span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center mt-3 text-xl border-b border-gray-500 pb-4 ">
            <span className="text-gray-400">Shipping (Express): </span>
            <span className="text-green-400 font-bold">Free</span>
          </div>

          <div className="flex justify-between items-center mt-3 text-xl">
            <span className="font-extrabold text-2xl text-white">
              Estimated Total :{" "}
            </span>
            <span className="font-extrabold text-2xl text-orange-500">
              ₹{cartTotal.toFixed(2)}
            </span>
          </div>

          <Link
            to={"/checkout"}
            className="flex justify-center items-center text-white font-extrabold text-xl gap-2 w-full p-4 bg-orange-600 rounded-full mt-5 uppercase hover:ring-4 hover:ring-pink-800 hover:bg-orange-700"
          >
            <Zap className="w-6 h-6" />
            <span>proced Securely</span>
          </Link>

          <p className="text-sm text-gray-400 text-center">All transactions are encrypted and secure.</p>

        </div>
      </div>
    </div>
  );
};

export default Cart;
