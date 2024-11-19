import React from 'react';
import { Users } from 'lucide-react';

export default function Extracurricular() {
  const activities = [
    "Badminton, Varsity",
    "Badminton Club",
    "Robotics Club",
    "Intro to Robotics Club",
    "California-Scholarship-Federation Leadership",
    "Presidents Club",
    "Vexillology Club",
    "Creators Club"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Users className="w-8 h-8 text-indigo-600" />
          Extracurricular Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:bg-indigo-50 transition-colors">
              <p className="text-lg font-semibold text-gray-900 text-center">{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}