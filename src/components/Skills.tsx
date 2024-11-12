import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Skills() {
  const skills = [
    "Time Management",
    "Organization",
    "People-oriented",
    "Communicative",
    "Adaptable",
    "CAD proficiency",
    "Creative",
    "Self-taught C++ with Arduino IDE",
    "Intermediate C# experience with game development in Unity",
    "Intermediate Python experience through Mesa College Courses"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Briefcase className="w-8 h-8 text-indigo-600" />
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-white rounded-lg p-6 text-center hover:bg-indigo-50 transition-colors shadow-md flex-grow basis-auto min-w-[250px] max-w-[400px]"
            >
              <p className="text-lg font-semibold text-gray-900">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}