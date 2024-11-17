import React from 'react';
import { Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Wrench className="w-8 h-8 text-indigo-600" />
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow text-left h-full flex flex-col"
            >
              {project.id === "freddy-fazbear" && (
                <div className="relative w-full pt-[100%]">
                  <img
                    src="https://imgur.com/jjOOgwa.jpg"
                    alt="Freddy Fazbear Animatronic"
                    className="absolute top-0 left-0 w-full h-full object-contain bg-gray-100"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}