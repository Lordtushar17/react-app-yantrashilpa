import React from "react";

const stats = [
  { number: "1415", label: "Systems Installed" },
  { number: "45", label: "Happy Clients" },
  { number: "30", label: "Patents/Designs" },
];

const StatsSection = () => {
  return (
    <section className="relative bg-gray-800 text-white py-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex justify-around text-center z-10">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
