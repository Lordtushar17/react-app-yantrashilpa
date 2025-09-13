import React from "react";

const values = [
  { title: "Innovation", description: "We innovate continuously." },
  { title: "Quality", description: "Highest standards of quality." },
  { title: "Integrity", description: "We uphold honesty and ethics." },
];

const OurValues = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((value, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
