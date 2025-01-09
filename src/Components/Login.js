import React, { useRef, useState } from "react";
import Header from "./Header";
import { chechVlidateData, nameValidation } from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  let email = useRef(null);
  let password = useRef(null);
  let fullName = useRef(null);

  // Validate the form Data
  const handleClickButton = () => {
    
    if (!isSignInForm && fullName.current.value === "") {
      alert("Please write your Name");
    } else if (email.current.value === "") {
      alert("Please write your Email");
    } else if (password.current.value === "") {
      alert("Please Write your Password");
    } else if (isSignInForm) {
      const message = chechVlidateData(
        email.current.value,
        password.current.value
      );

      console.log(email.current.value);
      setErrorMessage(message);
    } else if (!isSignInForm) {
      const message = chechVlidateData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);

      const newmessage = nameValidation(fullName.current.value);
      setErrorMessage(newmessage);
    }
  };

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 p-12 mx-auto my-32 right-0 left-0 bg-black text-white rounded-sm bg-opacity-80"
      >
        <h1 className="font-bold text-3xl p-1 my-3 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={fullName}
            placeholder="Enter Full Name"
            className="p-3 my-4 w-full  rounded-md  bg-black/90 border border-white"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter Email"
          className="p-3 my-4 w-full  rounded-md  bg-black/90 border border-white"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-3 my-4 w-full  rounded-md bg-black/80  border border-white"
        />

        <p className="text-red-800">{errorMessage}</p>

        <button
          className="p-3 my-6 bg-red-800 w-full rounded-md"
          onClick={handleClickButton}
        >
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
