import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
          Education
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Point Loma High School, San Diego, CA — Senior</h3>
            <p className="text-gray-600 mt-2">August 2021 - Expected Graduation: June 2025</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>★ Weighted GPA: 4.31</li>
              <li>★ Relevant Coursework: AP Psychology, AP Biology, Honors Engineering Design and Development, AP Chemistry, Honors Precalculus</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Mesa Community College, San Diego, CA — Dual Enrollment</h3>
            <p className="text-gray-600 mt-2">June 2023 - Present</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>★ Relevant Coursework: Calculus, Computer Science, Linear Algebra, Discrete Mathematics, Political Science</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}