import React from "react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Product 1</h3>
          <p>Short description of product 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Product 2</h3>
          <p>Short description of product 2.</p>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <Link
          to="/products"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
