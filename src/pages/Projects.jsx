// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Mes Projets</h2>
        <div className="relative perspective-2000">
          <div className="flex flex-col place-content-center  space-y-6">
            {/* Carte Projet 1 */}
            <div className="project-card w-64 h-80 p-4 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Projet 1</h3>
              <p className="text-sm">Une brève description du projet 1.</p>
            </div>

            {/* Carte Projet 2 */}
            <div className="project-card w-64 h-80 p-4 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Projet 2</h3>
              <p className="text-sm">Une brève description du projet 2.</p>
            </div>

            {/* Carte Projet 3 */}
            <div className="project-card w-64 h-80 p-4 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Projet 3</h3>
              <p className="text-sm">Une brève description du projet 3.</p>
            </div>

            {/* Carte Projet 4 */}
            <div className="project-card w-64 h-80 p-4 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Projet 4</h3>
              <p className="text-sm">Une brève description du projet 4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
