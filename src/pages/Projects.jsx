import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-6 ">
      <div className="w-4/5 mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Mes Projets</h2>
        
        <div className=" space-y-8  ">
          <div className="flex flex-col md:flex-row project-card w-full p-6 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Projet 1</h3>
            
            <p className="text-gray-700 mb-4">
              Une brève description du projet, expliquant son objectif et sa réalisation.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Objectif : Simplifier l'accès à des données complexes.</li>
              <li>Technologie : React, Node.js, API RESTful.</li>
              <li>Résultat : Gain de 30% de productivité.</li>
            </ul>

            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow"
                src="https://www.youtube.com/embed/ScMzIvxBSi4" // Remplace par le lien de ta vidéo
                title="Présentation du projet 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="project-card w-full p-6 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Projet 2</h3>
            <p className="text-gray-700 mb-4">
              Un autre projet innovant, conçu pour résoudre des problématiques uniques.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Objectif : Améliorer l'expérience utilisateur.</li>
              <li>Technologie : Next.js, Tailwind CSS, Firebase.</li>
              <li>Résultat : Augmentation de 50% du trafic web.</li>
            </ul>
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow"
                src="https://www.youtube.com/embed/ScMzIvxBSi4" // Remplace par le lien de ta vidéo
                title="Présentation du projet 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
