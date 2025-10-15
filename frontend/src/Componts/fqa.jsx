import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const frontendServices = [
  {
    title: "Custom Website Development",
    points: [
      "Fully responsive websites using HTML, CSS, JavaScript",
      "Built with React, Vue, or other modern frameworks",
    ],
  },
  {
    title: "UI/UX Design",
    points: [
      "User-centered design with tools like Figma or Adobe XD",
      "Conversion from design (PSD/Figma) to live frontend",
    ],
  },
  {
    title: "Single Page Applications (SPA)",
    points: [
      "React-based dynamic SPAs",
      "Fast loading with routing (React Router)",
    ],
  },
  {
    title: "Landing Page Design",
    points: [
      "High-converting marketing pages",
      "Optimized for performance and SEO",
    ],
  },
  {
    title: "Responsive Design",
    points: ["Mobile-first approach", "Cross-browser and cross-device support"],
  },
  {
    title: "Dashboard & Admin Panel UIs",
    points: [
      "Data-driven dashboards using charts, tables, filters",
      "Integrating with APIs (REST/GraphQL)",
    ],
  },
  {
    title: "Firebase Frontend Integration",
    points: ["Authentication", "Firestore and Realtime Database connection", "Hosting"],
  },
  {
    title: "Tailwind CSS or Bootstrap Integration",
    points: [
      "Clean, scalable UI with utility-first CSS",
      "Component-based development",
    ],
  },
  {
    title: "Website Maintenance & Support",
    points: ["Bug fixing", "UI updates or upgrades"],
  },
];

const FrontendServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <section className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Services I Offer 
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Transforming ideas into modern, scalable, and interactive digital experiences.
          Hi I Am tejas deshmukh i am a Frontend Web Developer with 1 year of experiences in this feild 
        </p>

        {/* Service List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frontendServices.map((service, index) => (
            <div
              key={index}
              onClick={() => toggleIndex(index)}
              className="rounded-xl p-6 cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800 tracking-wide">
                  {service.title}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-indigo-500" : "text-gray-400"
                  }`}
                />
              </div>

              {openIndex === index && (
                <ul className="mt-4 pl-5 list-disc space-y-2 text-gray-600 text-sm">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="hover:text-indigo-600 transition-colors duration-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FrontendServices;
