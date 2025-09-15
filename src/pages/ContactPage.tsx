import React, { useEffect } from "react";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24 flex flex-col items-center">
      {/* Title Box */}
      <div className="mb-12 px-8 py-6 rounded-2xl text-center bg-gradient-to-r from-orange-400 via-orange-500 to-blue-900 shadow-[0_0_20px_rgba(255,165,0,0.5)] hover:shadow-[0_0_30px_rgba(255,165,0,0.7)] transition-all">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_white]">
          Contact Us
        </h1>
      </div>

      {/* Info Boxes */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition font-bold">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 text-center ">
            Email
          </h2>
          <p className="text-gray-700 text-lg">info@yantrashilpa.com</p>
          <p className="text-gray-700 text-lg">support@yantrashilpa.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center font-bold">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 text-center">
            Phone
          </h2>
          <p className="text-gray-700 text-lg">+91 98765 43210</p>
          <p className="text-gray-700 text-lg">+91 91234 56789</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 text-center">
              Address
          </h2>
          <p className="text-gray-700 text-lg text-center font-bold">
              Yantrashilpa Technologies Pvt. Ltd.<br />
              CIN: U29299PN2000PTC15590<br />
              27/4/2, Dhayari-Narhe Rd,<br />
              Dhayari, Pune, Maharashtra 411041
          </p>
        </div>

      </div>

      {/* Embedded Map */}
      <div className="w-full max-w-5xl mt-12 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Yantrashilpa Location"
          src="https://www.google.com/maps?q=18.447265312187177,73.82047744554852&hl=es;z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactPage;
