import React from "react";
import { useCart } from '../Context/CartContext';

import toast from "react-hot-toast";

function Logout() {

  const {authUser, setAuthUser} = useCart();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <button
      className="p-3 bg-orange-500/10  text-orange-400 rounded-xl hover:bg-orange-500/20 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
