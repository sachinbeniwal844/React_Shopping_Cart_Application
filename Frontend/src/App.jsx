import React from "react";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import ProductList from "./Pages/ProductList";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Footer from "./Components/Footer";
import { ToastContainer, Bounce } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { useCart } from "./Context/CartContext";

const App = () => {
  const { authUser } = useCart();
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="min-h-screen bg-gray-950">
        {location.pathname !== "/signup" && (
          <>
            <Navbar />
          </>
        )}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={authUser ? <Cart /> : <Navigate to="/signup"/>}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {location.pathname !== "/signup" && (
          <>
           <Footer />
          </>
        )}
        <Toaster />
      </div>
    </>
  );
};

export default App;
