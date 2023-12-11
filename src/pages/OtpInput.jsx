import React from "react";

const OtpInput = () => {
  return (
    <>
      <div className="container max-w-screen-xl m-auto flex justify-center items-center h-full flex-col gap-2 mt-20">
        <input
          type="number"
          placeholder="Enter your otp code"
          name="otp"
          className="py-2 px-2 rounded-md"
        />
        <button className="py-2 px-2 outline-dotted outline-2 outline-offset-2 rounded-md">
          Verify
        </button>
      </div>
    </>
  );
};

export default OtpInput;
