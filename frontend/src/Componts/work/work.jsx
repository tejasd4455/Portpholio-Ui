import React, { useState, useRef, useEffect } from "react";
import Web from "../../assets/web-search.mp4"
import Ecommers from "../../assets/e-commers-shopping.mp4"
import Contact from "../../assets/contact-working.mp4"
import Blog from "../../assets/socail-media.mp4"

export default function ProjectSection() {
  return (
    
    <section className="min-h-screen bg-gray-100 text-black py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center" id="work">
      <div className="w-full mb-3 max-w-7xl">
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold text-center animate-fade-in">
          My Projects
        </h2>
        <p className="text-gray-600 font-medium mb-6 sm:mb-8 md:mb-12 text-center text-sm sm:text-base md:text-lg">
          Some of the work I've done recently
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Project 1 */}
          <ProjectCard
            videoSrc={Web}
            title="Personal Portfolio Website"
            description="Built with React and Tailwind CSS."
            liveDemoLink="#projects" 
            codeLink="https://github.com/tejasd4455"
          />

          {/* Project 2 */}
          <ProjectCard
            videoSrc= {Ecommers}
            title="E-Commerce Website"
            description="Built with React and Tailwind CSS."
            liveDemoLink="https://tejasd4455.github.io/UpTreand.github.io/"
            codeLink="https://github.com/tejasd4455"
          />

          {/* Project 3 */}
          <ProjectCard
            videoSrc={Contact}
            title="Contact Manager App"
            description="Built with React,Node-Js and MongoDB."
            liveDemoLink="#projects"
            codeLink="https://github.com/tejasd4455"
          />

          {/* Project 4 */}
          <ProjectCard
            videoSrc={Blog}
            title="Developer Blog Website"
            description="Built with React and Tailwind CSS."
            liveDemoLink="#projects"
            codeLink="https://github.com/tejasd4455"
          />
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ videoSrc, title, description, liveDemoLink, codeLink }) => {
  const [isInView, setIsInView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col mx-1 sm:mx-0 animate-slide-up"
    >
      <div className="relative aspect-video">
        {isInView && (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            preload="metadata"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>
      <div className="flex-grow p-4 sm:p-5 md:p-6 text-center bg-stone-100">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">{title}</h3>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-black text-white text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};