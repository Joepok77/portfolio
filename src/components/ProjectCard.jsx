import React, { useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
}) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (video) {
      videoRef.current?.play(); // Lecture de la vidéo
      videoRef.current?.classList.add("scale-up"); // Ajouter l'effet de zoom
    }
  };

  const handleMouseLeave = () => {
    if (video) {
      videoRef.current?.pause(); // Pause de la vidéo
      videoRef.current.currentTime = 0; // Réinitialisation
      videoRef.current?.classList.remove("scale-up"); // Supprimer l'effet de zoom
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className="relative w-full h-[230px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {video ? (
            <video
              ref={videoRef}
              src={video}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-out" // Transition pour le zoom
              muted
              loop
            />
          ) : (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          )}

          {/* L'icône GitHub n'est affichée que si ce n'est pas une vidéo */}
          {!video && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
