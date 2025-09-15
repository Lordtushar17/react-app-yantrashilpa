import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-24 text-black text-center"
      style={{
        backgroundImage: "url('/images/safety.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Text + Button Wrapper */}
      <div
        className="relative z-10 flex flex-col items-center space-y-6 p-6 md:p-8 rounded-2xl transition-all duration-300"
        style={{ marginLeft: "-20rem" }} // adjust wrapper left/right
      >
        {/* Title */}
        <h1 className="text-8xl md:text-8x1 lg:text-8xl font-bold text-blue-600 dark:text-sky-400">
          Yantrashilpa
        </h1>

        {/* Middle Text - Top Section */}
        <div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold drop-shadow-[0_0_10px_white]"
            style={{ fontFamily: "LucidaHandwritingStdLight" }}
          >
            Innovation and Simplicity...
          </h2>

          {/* Middle Text - Bottom Section */}
          <p
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold drop-shadow-[0_0_10px_white]"
            style={{
              fontFamily: "LucidaHandwritingStdLight",
              marginLeft: "43rem", 
            }}
          >
            Going hand in hand
          </p>
        </div>

        {/* Learn More Button */}
        <a
          href="#products"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-32 h-12 flex items-center justify-center bg-blue-500 text-black font-semibold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:bg-orange-700 hover:scale-105 transition-all"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
