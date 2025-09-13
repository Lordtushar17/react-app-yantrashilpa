import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Innovating Industrial Solutions</h1>
      <p className="text-lg mb-6 max-w-xl">
        Yantrashilpa provides cutting-edge solutions to empower your business.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
        Learn More
      </button>
    </div>
  );
};

export default HeroSection;
