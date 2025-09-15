import React from "react";

const WhoWeAre = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-900 text-center px-6 md:px-12">
      {/* Title with box, glow, and shadow */}
      <h2
        className="inline-block px-6 py-3 rounded-2xl
                   bg-gradient-to-r from-orange-400 via-orange-500 to-blue-900
                   text-white font-bold text-4xl md:text-5xl
                   shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
                   hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]
                   transition-all duration-500 mb-6"
      >
        Who We Are
      </h2>

      <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-800">
        The strong design oriented organization known today as Yantrashilpa evolved from a solid technical and administrative support base. The origins of its Engine testing equipments often trace back to the SPM’s and test-rigs for ballistic applications, designed by founder in the late 90's.
        <br /><br />
        Since then Yantrashilpa is one of the leading companies with proven ability to deliver innovative products that span traditional and next-generation requirements.
        <br /><br />
        Our customers recognize us for providing remarkably high quality technology and support with expertise to match. Yantrashilpa’s continuing impressive growth is a direct result of providing excellent products at appropriate prices and prompt delivery in combination with technical support, service and localized inventory.
      </p>
    </section>
  );
};

export default WhoWeAre;
