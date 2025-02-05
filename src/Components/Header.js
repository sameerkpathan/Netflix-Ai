import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store)=>store.user);
 

  const handleSignOut = () => {
    // Sign Out The User

    signOut(auth)
      .then(() => {
        // Sign-out successful.
    
        Navigate("/");
      })
      .catch((error) => {
        // An error happened.
        Navigate("/errorpage");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-gray-800 z-10 flex justify-between ">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    {user && <div className="flex text-center">
      <img
        className="w-12 h-14 p-2 m-2"
        src="https://cineverse-gpt.vercel.app/userIcons/yellowUserIcon.jpg"
        alt="User Profile Logo"
      />

      <button className="font-bold text-white" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>}
    </div>
  );
};

export default Header;
