import React from "react";

interface Value {
  title: string;
  description: string;
  image: string;
}

const values: Value[] = [
  {
    title: "Integrity",
    description:
      "Integrity is at the core of everything we do at Yantrashilpa. We believe in honesty, transparency, and accountability in all our actions and decisions. Our commitment to integrity guides us as we interact with our customers, partners, and each other. We take responsibility for our actions and strive to maintain the highest ethical standards in all that we do. We are committed to doing what is right, not just what is easy or convenient, and to upholding our values in everything we do.",
    image: "images/integrity.png",
  },
  {
    title: "Safety",
    description:
      "At Yantrashilpa, we place the highest priority on the safety of our customers, employees, and the community. We are committed to creating a safe environment for all and take all necessary measures to ensure the well-being of everyone involved with our company. From the products we offer to the practices we employ, safety is always at the forefront of our minds. We are dedicated to maintaining the highest standards of safety and continue to prioritize it in all of our operations.",
    image: "/images/safety.jpg",
  },
  {
    title: "Customer Satisfaction",
    description:
      "At Yantrashilpa, we are dedicated to providing exceptional customer service and satisfaction. We believe that our customers are the foundation of our success and that their satisfaction is the measure of our performance. We are committed to understanding the needs of our customers and providing solutions that meet those needs. Our goal is to exceed your expectations and earn your trust, and we will do everything in our power to achieve that.",
    image: "/images/customer.jpg",
  },
];

const OurValues: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((value, idx) => (
          //pop effect on hover
          //fade in background image on hover
          //text over image with white background and some opacity
          <div
            key={idx}
            className="relative group rounded-lg overflow-hidden shadow transition-transform duration-300 transform hover:shadow-2xl hover:scale-110"
          >

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-85 transition-opacity duration-300"
              style={{ backgroundImage: `url(${value.image})` }}
            ></div>

            {/* Text Content */}
            <div className="relative bg-white/35 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
