import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const { pathname } = useLocation(); // Récupère le chemin actuel

  return (
    <div className="sidebar bg-white  border-l-4 border-indigo-500 text-black w-28 p-4 m-1 h-42">
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className={`block py-2 px-2 transition-all rounded-lg ${
              pathname === '/' ? 'text-white bg-indigo-500' : 'text-indigo-600 hover:bg-gray-100'
            }`}
          >
            <FaHome className="md:hidden text-2xl" />
            <span className="hidden md:inline-block">Accueil</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`block py-2 px-2 transition-all rounded-lg ${
              pathname === '/projects' ? 'text-white bg-indigo-500' : 'text-indigo-600 hover:bg-gray-100'
            }`}
          >
            <FaProjectDiagram className="md:hidden text-2xl" />
            <span className="hidden md:inline-block">Projets</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`block py-2 px-2 transition-all rounded-lg ${
              pathname === '/contact' ? 'text-white bg-indigo-500' : 'text-indigo-600 hover:bg-gray-100 rounded '
            }`}
          >
            <FaEnvelope className="md:hidden text-2xl" />
            <span className="hidden md:inline-block">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
