import React from "react";

const login = () => {
  return (
    <>
      <div className="container max-w-screen-xl m-auto flex justify-center items-center h-full flex-col gap-2 mt-20">
        <input type="number" placeholder="Enter your number" name="phone_number" className="py-2 px-2 rounded-md"/>
        <input type="password" placeholder="Enter your password" name="password" className="py-2 px-2 rounded-md"/>
        <button className="py-2 px-2 outline-dotted outline-2 outline-offset-2 rounded-md">Register</button>
      </div>
    </>
  );
};

export default login;
