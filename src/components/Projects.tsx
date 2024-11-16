import React from 'react';
import { Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-gray-50">
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow text-left h-full flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}