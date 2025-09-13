import React from "react";

const services = [
  { title: "Design", description: "Custom industrial designs" },
  { title: "Manufacturing", description: "High-quality production" },
  { title: "Consulting", description: "Expert industrial advice" },
  { title: "Support", description: "Maintenance & support" },
];

const WeProvide = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg flex items-center"
          >
            <div className="text-4xl font-bold mr-4">{idx + 1}</div>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeProvide;
