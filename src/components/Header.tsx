import React from "react";
import "../styles/fonts.css";
const Header: React.FC = () => {
  return (
    <header className="bg-[#00040D] text-black py-4 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-4xl text-white font-bold tracking-wider bebas-neue-regular">
          Ticket Stubs
        </h1>
      </div>
    </header>
  );
};

export default Header;
