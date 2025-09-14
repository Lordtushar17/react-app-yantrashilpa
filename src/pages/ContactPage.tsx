import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Contact Us</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Email</h2>
          <p className="text-gray-700">info@yantrashilpa.com</p>
          <p className="text-gray-700">support@yantrashilpa.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Phone</h2>
          <p className="text-gray-700">+91 98765 43210</p>
          <p className="text-gray-700">+91 91234 56789</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2 text-green-600">Address</h2>
          <p className="text-gray-700">123 Industrial Area</p>
          <p className="text-gray-700">Pune, Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
