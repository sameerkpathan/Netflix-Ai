import React from "react";

const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-gray-800 z-10 flex justify-between ">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex ">
        <img
          className="w-8"
          src="https://cineverse-gpt.vercel.app/userIcons/yellowUserIcon.jpg"
          alt="User Profile Logo"
        />

        <button>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
