import React from "react";
import Login from "./Login";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  // const onSubmit = (data) => console.log(data);
    const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://react-shopping-cart-application.onrender.com/api/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Signup Successfully")
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        //  localStorage.setItem("Users",res.data);  // ya object ki form ma h hume name is chaiye to niche likha h ya browser k local storage ma set karta h
        // localStorage.setItem("Users", JSON.stringify(res.data.user));  
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("Error: "+ err.response.data.message)
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="border shadow-md p-5 m-4 rounded-lg w-150 bg-white text-black">
        <div className="">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none text-white"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup!</h3>

            <div className="mt-3 space-y-1">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-1 border border-gray-400 rounded-md outline-none"
                {...register("fullname", { required: "fullname is required" })}
              />
              {errors.fullname && (
                <p className="text-sm text-red-700" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-1 border border-gray-400 rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-700" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border border-gray-400 rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-sm text-red-700" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 duration-200">
                Signup
              </button>
              <p>
                Have Account?
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  {" "}
                  Login
                </Link> <br />

                {/* <div>
                  <a className="underline text-blue-500 cursor-pointer"  onClick={() =>
                  document.getElementById("my_modal_3")?.showModal()
                }>
                  {" "}
                  Login
                </a>
                <Login/>
                </div> */}

              </p>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
