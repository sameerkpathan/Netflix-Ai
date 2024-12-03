import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
          alt="Background"
        />
      </div>
      <form className="absolute w-3/12 p-12 mx-auto my-32 right-0 left-0 bg-black text-white rounded-sm bg-opacity-80">
        <h1 className="font-bold text-3xl p-1 my-3 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-3 my-4 w-full  rounded-md  bg-black/90 border border-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="p-3 my-4 w-full  rounded-md  bg-black/90 border border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  rounded-md bg-black/80  border border-white"
        />
        <button className="p-3 my-6 bg-red-800 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <a href="https://www.netflix.com/in/LoginHelp" >Forgot Password</a> */}
        {isSignInForm ? (
          <p className="py-2 my-2 ">
            New To Netflix?{" "}
            <span
              onClick={toggleSignInForm}
              className="hover:border-white hover:border-b-2 font-bold cursor-pointer"
            >
              Sign Up Now.
            </span>
          </p>
        ) : (
          <p className="py-2 my-2 ">
            Already Have Account?{" "}
            <span
              onClick={toggleSignInForm}
              className="hover:border-white hover:border-b-2 font-bold cursor-pointer"
            >
              Sign In Now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
