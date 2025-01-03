import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-2">
      <div className="w-full   ">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Mes Projets</h2>

        <div className=" space-y-2   ">
          <div className="flex flex-col lg:flex-row project-card w-full min-h-full p-2 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-indigo-500 mb-4">Projet 1</h3>
              <p className="text-gray-700 mb-4">
                Une brève description du projet, expliquant son objectif et sa réalisation.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Objectif : Simplifier l'accès à des données complexes.</li>
                <li>Technologie : React, Node.js, API RESTful.</li>
                <li>Résultat : Gain de 30% de productivité.</li>
              </ul>
            </div>
            <div className="flex-1 relative lg:w-32 aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Présentation du projet 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>


          <div className="flex flex-col  lg:flex-row  project-card w-full p-2 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
          <div className="flex-1">
              <h3 className="text-xl font-semibold text-indigo-500 mb-4">Projet 2</h3>
              <p className="text-gray-700 mb-4">
                Une brève description du projet, expliquant son objectif et sa réalisation.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Objectif : Simplifier l'accès à des données complexes.</li>
                <li>Technologie : React, Node.js, API RESTful.</li>
                <li>Résultat : Gain de 30% de productivité.</li>
              </ul>
            </div>
            <div className="flex-1 relative lg:w-32 aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Présentation du projet 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col  lg:flex-row  project-card w-full p-2 rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
          <div className="flex-1">
              <h3 className="text-xl font-semibold text-indigo-500 mb-4">Projet 2</h3>
              <p className="text-gray-700 mb-4">
                Une brève description du projet, expliquant son objectif et sa réalisation.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Objectif : Simplifier l'accès à des données complexes.</li>
                <li>Technologie : React, Node.js, API RESTful.</li>
                <li>Résultat : Gain de 30% de productivité.</li>
              </ul>
            </div>
            <div className="flex-1 relative lg:w-32 aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Présentation du projet 1"
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
