import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Briefcase className="w-8 h-8 text-indigo-600" />
          Experience
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Airbus Robotics, Seattle, WA — Intern</h3>
            <p className="text-gray-600 mt-2">June 2024 - July 2024</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>★ I contributed to a semi-confidential sorting machine project, gaining experience in mechanical design through CAD software, Solidworks, and through hands-on learning with industry tools.</li>
              <li>★ I developed better time management by balancing project deadlines while still producing quality work</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">I Love a Clean San Diego, San Diego — Community Service Volunteer</h3>
            <p className="text-gray-600 mt-2">February 2022 – Present</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>★ Participate in bi-monthly beach cleanups and storm drain painting as part of environmental conservation efforts.</li>
              <li>★ I promote sustainability and environmental awareness within the community encouraging school clubs like the California Scholarship Federation to participate locally</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Ocean Beach Community Garden, San Diego— Volunteer</h3>
            <p className="text-gray-600 mt-2">August 2023 – Present</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>★ As part of a new project with the California Scholarship Federation I help with maintaining plots, including planting, weeding, and general upkeep.</li>
              <li>★ I work with many community members to help ensure the garden remains healthy and protected.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}