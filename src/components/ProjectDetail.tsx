import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to projects
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="prose max-w-none bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 text-lg mb-6">{project.fullDescription}</p>
          
          {project.technologies && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.gallery && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative pb-[56.25%]">
                    <img
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}