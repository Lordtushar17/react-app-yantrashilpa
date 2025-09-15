import React from "react";

const services = [
  { description: "State-of-the-art equipment adhering to international engine testing standards." },
  { description: "Fully autonomous active & passive automotive safety testing rigs." },
  { description: "Customised systems for atypical user requirements." },
  { description: "Innovative & robust testing apparatus for critical components in the defence sector." },
];

const WeProvide = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gray-100 text-gray-900 text-center">
      <div className="relative inline-block mb-12 group"> {/* Added 'group' class */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold p-4 rounded-lg text-white bg-gradient-to-r from-blue-500 via-orange-700 to-orange-300 relative z-10">
          We Provide You
        </h2>
        {/* Blue Glow effect - with hover and transition */}
        <div className="absolute inset-0 -m-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-75 blur-none group-hover:blur-md z-0 transition-all duration-500 animate-pulse"></div>
        {/* Subtle Highlight effect - now also with hover */}
        <div className="absolute inset-0 -m-0.5 rounded-lg border-2 border-transparent group-hover:border-blue-200 z-0 transition-colors duration-500"></div>
        {/* Outer Shadow for depth - with hover */}
        <div className="absolute inset-0 rounded-lg shadow-none group-hover:shadow-xl group-hover:shadow-blue-300/50 z-0 transition-shadow duration-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 sm:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex items-center text-left"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mr-4 sm:mr-6">
              {idx + 1}
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeProvide;