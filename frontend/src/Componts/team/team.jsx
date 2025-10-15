import React from 'react';
import './team.css'
const items = [
  { title: "Global Impact", icon: "🌐" },
  { title: "Local Connection", icon: "📍" },
  { title: "Customer-Centric", icon: "🧑‍🤝‍🧑" },
  { title: "Agility", icon: "🎯" },
  { title: "Persistence", icon: "✊" },
];

const TeamJourney = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20">
      <h3 className="text-center text-sm font-semibold mb-2">We Started Small</h3>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">A tight-knit team with big dreams</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Today, we’re a cross-functional force delivering AI-driven development, 
        industry-specific solutions, and enterprise-grade platforms across sectors
      </p>

      {/* Timeline */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
        {/* Animated dashed line */}
        <div className="absolute top-8 md:top-1/2 md:left-0 md:right-0 w-full h-0.5 md:h-0.5 z-0">
          <div className="h-full w-full border-t-2 border-dashed border-pink-500 animate-dash md:block hidden"></div>
        </div>

        {items.map((item, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-2 text-3xl">{item.icon}</div>
            <p className="text-sm mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold">What’s remained constant?</h3>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Our obsession with building what matters, staying agile, and delighting every customer we work with.
        </p>
      </div>
    </div>
  );
};

export default TeamJourney;
