import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#D9F5D5] text-black py-4 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold tracking-wider">Ticket Stubs</h1>
      </div>
    </header>
  );
};

export default Header;
