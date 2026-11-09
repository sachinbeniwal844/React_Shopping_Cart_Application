import { CheckCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const OrderConfimation = ({ deliverydetails }) => {
  return (
    <div className="container mx-auto mt-30 px-4 md:px-8">
      <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white">
        <CheckCircle className="w-20 h-20 text-green-500 text-center mx-auto" />
        <h1 className="p-4 text-3xl font-extrabold">Order Confirmed!</h1>
        <p className="text-gray-300">
          Your transaction is complete. A confirmation email has been sent to
          your account.
        </p>

        <div className="p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm mt-4">
          <p className="font-semibold text-lg mb-1">{deliverydetails?.name}</p>
          <p>{deliverydetails?.Address}</p>
          <p>
            {deliverydetails?.City},{deliverydetails?.PinCode}
          </p>
        </div>

           <Link
              to={"/"}
              className="mt-10 px-4 py-4 bg-orange-600 text-white font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
            >
              
              Continue Shopping
            </Link>

      </div>
    </div>
  );
};

export default OrderConfimation;
