import React from 'react';
import { Trophy } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      title: "Outstanding Achievement in AP Psychology",
      description: "Awarded for strong analytical skills, high-level engagement, and outstanding performance"
    },
    {
      title: "AP Scholar with Honor",
      description: "Received an average score of at least 3.25 on all AP Exams taken"
    },
    {
      title: "California Seal of Biliteracy - Spanish",
      description: "Attained a high level of proficiency in speaking, reading, and writing"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Trophy className="w-8 h-8 text-indigo-600" />
          Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{award.title}</h3>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}