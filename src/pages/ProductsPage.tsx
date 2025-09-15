import React, { useEffect } from "react";

const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
      <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="/product1.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2">Product 1</h2>
          <p className="text-gray-600">Longer description of product 1.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="/product2.jpg" alt="Product 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2">Product 2</h2>
          <p className="text-gray-600">Longer description of product 2.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="/product3.jpg" alt="Product 3" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2">Product 3</h2>
          <p className="text-gray-600">Longer description of product 3.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
