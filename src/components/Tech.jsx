import React, { useState } from "react";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center" id="tech">
    <div className="text-center mb-6">
    <p className="text-sm text-gray-400 uppercase tracking-wide">
    Mes compétences techniques
    </p>
    <h2 className="text-4xl font-extrabold text-white">
    Outils et technologies
    </h2>
  </div>
  
      
      {/* Liste des technologies */}
      <div className="flex flex-wrap justify-center gap-5">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="tech-item rounded-lg bg-gray-800 shadow-md"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="tech-item-content flex flex-col items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-[80px] h-[80px] object-contain mb-2"
              />
              <p className="text-sm text-white text-center">{tech.name}</p>
              {hoveredTech === tech.name && (
                <p className="tech-level">{tech.level}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
