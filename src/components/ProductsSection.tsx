import React from "react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <section id="products" className="bg-gradient-to-br from-gray-100 to-white py-16 sm:py-24 md:py-32 mx-4 my-8 rounded-2xl">
      {/* Separator line at the top of the section */}
      <div className="flex justify-center mb-12">
        <div className="w-4/5 h-0.5 bg-black"></div>
      </div>
      
      {/* Section Title */}
      <div className="text-center mb-16 mt-28">
        <div className="relative inline-block group">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold p-4 rounded-lg text-white bg-gradient-to-r from-orange-500 to-blue-700 relative z-10">
            Our Products
          </h2>
          <div className="absolute inset-0 -m-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-75 blur-none group-hover:blur-md z-0 transition-all duration-500 animate-pulse"></div>
          <div className="absolute inset-0 -m-0.5 rounded-lg border-2 border-transparent group-hover:border-blue-200 z-0 transition-colors duration-500"></div>
          <div className="absolute inset-0 rounded-lg shadow-none group-hover:shadow-xl group-hover:shadow-blue-300/50 z-0 transition-shadow duration-500"></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
        {/* Product Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 flex flex-col">
          <h3 className="text-xl font-bold text-black mb-4">Coolant Conditioning System </h3>
          <div className="flex flex-col">
            <div className="w-full mx-auto mb-4">
              <img 
                src="/images/CCS 10.png" 
                alt="Charged Air Control System" 
                className="w-full h-48 object-contain rounded-lg"
              />
            </div>
            <p>
              The “Coolant Conditioning System” is aimed to provide coolant at controlled temperature, flow rate and pressure to the engine water jacket.
            </p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 flex flex-col">
          <h3 className="text-xl font-bold text-black mb-4">Charged Air Control System</h3>
          <div className="flex flex-col">
            <div className="w-full mx-auto mb-4">
              <img 
                src="/images/CACS 3.png" 
                alt="Coolant Conditioning System" 
                className="w-full h-48 object-contain rounded-lg"
              />
            </div>
            <p>
              

              The “Charged Air Control System” is designed to maintain or control temperature & pressure of the turbo charged air supplied to the engine.
            </p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 flex flex-col">
          <h3 className="text-xl font-bold text-black mb-4">Fuel Conditioning System</h3>
          <div className="flex flex-col">
            <div className="w-full mx-auto mb-4">
              <img 
                src="/images/FCS 5.png" 
                alt="Fuel Conditioning System" 
                className="w-full h-48 object-contain rounded-lg"
              />
            </div>
            <p>
              The ‘Fuel Conditioning System’ is aimed to maintain temperature, flow rate and pressure of the FUEL going to feed pump of the engine constant at set value. 
            </p>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <Link
          to="/products"
          className="relative inline-block px-6 py-3 rounded-lg text-white font-bold overflow-hidden group transition-all duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700"></div>
          <span className="relative z-10">View More</span>
          <div className="absolute inset-0 -m-1 rounded-lg border-2 border-transparent group-hover:border-green-200 z-0 transition-colors duration-300"></div>
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
