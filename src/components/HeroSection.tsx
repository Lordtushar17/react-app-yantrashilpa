import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 text-black space-y-12 lg:space-y-0"
      style={{
        backgroundImage: "url('/images/safety.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Left Section - Company Photo */}
      <div className="flex-1 flex justify-center lg:justify-start relative z-10">
        <img
          src="/images/company-photo.jpg"
          alt="Company"
          className="w-72 md:w-96 lg:w-[28rem] rounded-2xl shadow-[0_0_30px_rgba(0,255,150,0.5)] hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Center Section - Text */}
      <div className="flex-1 flex flex-col justify-center space-y-6 p-6 md:p-8 rounded-2xl text-center lg:text-left relative z-10
                border-2 border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:drop-shadow-[0_0_40px_rgba(34,197,94,0.3)]
                transition-all duration-300">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600/100 dark:text-sky-400/100">
          Welcome to Yantrashilpa
        </h1>
        <p className="text-base md:text-lg text-gray-200">
            Innovating Industrial Solutions. <br />
            Yantrashilpa provides cutting-edge solutions to empower your business.
        </p>
        <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 hover:scale-105 transition-all shadow-lg mx-auto lg:mx-0">
            Learn More
        </button>
      </div>


      {/* Right Section - 3 Photos */}
      <div className="flex-1 flex flex-col items-center space-y-6 lg:space-y-0 lg:flex lg:flex-col lg:items-center relative z-10">
        {/* Mobile/Tablet view → stack clean */}
        <div className="flex flex-col space-y-6 lg:hidden">
          <img
            src="/images/pic1.jpeg"
            alt="Company 1"
            className="w-40 md:w-48 rounded-lg border border-green-400 animate-shake shadow-lg"
          />
          <img
            src="/images/pic3.jpg"
            alt="Company 3"
            className="w-40 md:w-48 rounded-lg border border-green-400 animate-shake shadow-lg"
          />
          <img
            src="/images/pic2.jpg"
            alt="Company 2"
            className="w-40 md:w-48 rounded-lg border border-green-400 animate-shake shadow-lg"
          />
        </div>

        {/* Desktop view → overlap effect */}
        <div className="hidden lg:block relative w-60 h-80">
          <img
            src="/images/pic1.jpeg"
            alt="Company 1"
            className="absolute top-0 left-4 w-52 rounded-lg border border-green-400 transform -rotate-6 animate-shake shadow-lg"
          />
          <img
            src="/images/pic3.jpg"
            alt="Company 3"
            className="absolute top-40 left-12 w-52 rounded-lg border border-green-400 transform rotate-3 animate-shake shadow-lg"
          />
          <img
            src="/images/pic2.jpg"
            alt="Company 2"
            className="absolute top-60 left-6 w-52 rounded-lg border border-green-400 transform rotate-6 animate-shake shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
