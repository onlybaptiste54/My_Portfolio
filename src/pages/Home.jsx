// src/pages/Home.jsx
import React from 'react';
import profileImage from '../assets/profile.png'; // Assure-toi que l'image est dans ce chemin
import '../App.css'
const Home = () => {
  return (
    <section id="home" className=" ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-auto ">
      {/* Section SVG et image */}
        <div className="flex-1 md:w-1/2">
          <svg className="home_blob" viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
            <mask id="maskBlob" mask-type="alpha">
              <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z" />
            </mask>
            <g mask="url(#maskBlob)">
              <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z" />
              <rect x="37" width="476" height="630" fill="url(#pattern0)" />
            </g>
            <rect x="37" width="476" height="300" fill="url(#pattern1)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)" />
              </pattern>
              <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)" />
              </pattern>
              <image className="home_img" id="imageBlob" width="640" height="925" href={profileImage} data-aos="flip-right" />
            </defs>
          </svg>
        </div>

        {/* Section texte à droite du SVG */}
        <div className="flex-1 pl-8 md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-4xl font-semibold mb-4">Bienvenue sur mon portfolio</h2>
          <p className="text-lg mb-4">
            Je suis un développeur passionné par l'automatisation des processus et l'optimisation des flux de travail.
            Mon objectif est d'aider les entreprises et les particuliers à atteindre leurs objectifs grâce à des solutions
            simples et efficaces.
          </p>
          <p className="text-lg">
            Découvrez mes projets et n'hésitez pas à me contacter pour toute collaboration ou question.
          </p>
        </div>
      </div>
    
    </section>
    
  );
};

export default Home;
