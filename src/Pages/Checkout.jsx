import { MapPin, Package } from "lucide-react";
import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import OrderConfimation from "./OrderConfimation";

const Checkout = () => {
  const { cart, cartTotal,  clearCart } = useCart();

   const [isConfirmed, setIsConfirmed] = useState(false);

  const [deliverydetails, setdeliverydetails] = useState({
    name: "",
    Address: "",
    City: "",
    PinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdeliverydetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  console.log("shipping data = ", deliverydetails);

  if (isConfirmed)
    return <OrderConfimation deliverydetails={deliverydetails} />;

  return (
    <div className="container mx-auto mt-30 px-4 md:px-8">
      <h1 className="text-4xl text-white font-extrabold px-4">
        Finalize Order
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2  my-6 border bg-gray-900 border-gray-700 p-6 rounded-xl sticky top-27 h-fit">
          <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-500 pb-4">
            <span className="">
              <MapPin />
            </span>
            <span className="">Shipping Information</span>
          </h3>

          <form action="" className="space-y-6" onSubmit={handleSumbit}>
            {Object.keys(deliverydetails).map((key) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-semibold text-gray-300 capitalize mb-2 "
                >
                  {key === "zip" ? "Pin Code " : key}
                </label>
                <input
                  type={key === "zip" ? "number" : "text"}
                  id={key}
                  name={key}
                  value={deliverydetails[key]}
                  onChange={handleChange}
                  required
                  className="mb-3 block w-full px-5 py-3 border border-gray-400 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-500"
                />
              </div>
            ))}

            <div className="pt-6">
              <button
                type="submit"
                className="p-4 w-full rounded-full text-white text-center bg-orange-600 text-2xl uppercase tracking-wide hover:ring-4 hover:ring-pink-700 hover:bg-amber-700"
              >
                ₹ pay and confirm order (₹{cartTotal.toFixed(2)})
              </button>
            </div>
          </form>
        </div>

        <div className="md:col-span-1 flex flex-col my-6 border bg-gray-800 border-gray-800 rounded-xl text-white p-6 h-fit">

          <div className="flex items-center space-x-2 border-b border-gray-500 pb-4 text-2xl ">
            <span className="text-orange-600"><Package/></span>
            <span>Summary</span>
          </div>

          <div>
            {cart.map((item)=>(
              <div key={item.id}>
                <div className="flex justify-between border-b gap-3 space-y-3 mt-3 text-md text-white">
                  <span>{item.name}</span>
                  <span className="text-orange-300 text-xl">₹{item.price.toFixed(2)}</span>
                </div>
                </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center text-xl text-white mt-4">
              <span>SubTotal : </span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-xl text-white mt-4 border-b pb-4">
              <span>Shipping (Express): </span>
              <span className="text-green-400">Free</span>
            </div>
            <div className="flex justify-between items-center text-3xl text-white mt-4">
              <h1>Total Due :</h1>
              <span className="text-3xl font-extrabold text-orange-400">₹{cartTotal.toFixed(2)}</span>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Checkout;
