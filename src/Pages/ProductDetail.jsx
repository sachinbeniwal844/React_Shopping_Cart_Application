import { ChevronLeft, ShoppingCart, Tag, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../Data/Data";
import { useCart } from "../Context/CartContext";

const ProductDetail = () => {
  const {addToCart} = useCart();

  // console.log("data from id = ", useParams())
  const { id } = useParams();

  const [product, setproduct] = useState();
  useEffect(() => {
    setproduct(initialProducts.find((data) => data.id == id));
  }, [id]);
  // console.log("my product = ", product);

  // console.log(id);
  return (
    <div className="mt-35 max-w-6xl mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl p-6 md:p-12 border border-gray-800">

      <Link to={"/"}>
        <button className="flex justify-center items-center text-gray-400 gap-2 text-lg font-semibold">
          <ChevronLeft className="w-6 h-6 mr-1" />
          <span>Back to All Products</span>
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ">

        <div className="w-full">
          <img src={product?.image} alt={product?.name} className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800 mt-4"/>
        </div>

        <div className="w-full flex flex-col justify-between">
          <h1 className="font-extrabold text-4xl text-white leading-tight tracking-tight">{product?.name}</h1>
          <p className="font-extrabold text-3xl text-orange-400 mb-4">₹{product?.price.toFixed(2)}</p>

          <div className="flex items-center border-b border-gray-400 gap-2 text-xl pb-2 text-white">
            <Tag className="w-5 h-5 text-orange-400"/>
            <span>Product Overview</span>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed my-2">{product?.description}</p>

          <ul className="flex flex-col justify-center p-4 border border-gray-700 bg-gray-800 text-gray-300 rounded-xl space-y-3">
            <li className="flex items-center space-x-3 text-lg">
              <Zap className="w-5 h-5 text-orange-500"/>
              <span>High-Quality, Professional Grade Materials</span>
            </li>
            <li className="flex items-center space-x-3 text-lg">
              <Zap className="w-5 h-5 text-orange-500"/>
              <span>Comprehensive 1-Year Manufacturer Warranty</span>
            </li>
            <li className="flex items-center space-x-3 text-lg">
              <Zap className="w-5 h-5 text-orange-500"/>
              <span>Immediate Shipping for In-Stock Items</span>
            </li>
          </ul>

          <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
            <button onClick={()=>addToCart(product)}className="flex justify-center items-center w-full rounded-full bg-orange-600 text-white uppercase gap-4 p-3 text-extrabold text-xl hover:bg-orange-700 transition duration-300 cursor-pointer hover:ring-4 hover:ring-pink-600/50 tracking-wider">
              <ShoppingCart/>
              <span>add to cart</span>
            </button>
            <Link to={"/"} className="w-full py-3 font-bold rounded-full hover:bg-orange-900/50 border-2 border-orange-600 text-orange-400 text-center uppercase transition duration-300 tracking-wider">
            Keep Shopping
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
