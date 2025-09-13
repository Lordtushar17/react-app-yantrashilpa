import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Yantrashilpa</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Who We Are</li>
          <li>Services</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
