import React from "react";

const products = [
  { name: "Product 1", description: "High quality industrial system" },
  { name: "Product 2", description: "Innovative machinery solutions" },
  { name: "Product 3", description: "Advanced engineering tools" },
  { name: "Product 4", description: "Custom automation products" },
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
