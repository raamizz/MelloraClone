import React from "react";

const Logo = ({size}) => {
  return (
    <div>
      <a href="https://flowbite.com" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className={`${size} mr-1`}
          alt="Logo"
        />
        <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-blue-800">
          ARRORRA
        </span>
      </a>
    </div>
  );
};

export default Logo;