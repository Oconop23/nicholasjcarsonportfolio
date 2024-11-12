import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://i.imgur.com/jHN7HwD.png"
              alt="Freddy Fazbear Animatronic Project"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="w-8 h-8 text-indigo-600" />
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate mechanical engineering high school student with hands-on experience working on amazing projects. 
              From designing, printing, and coding an Iron Man helmet to building a 7-joint Freddy Fazbear animatronic and even 
              interning at Airbus Robotics, I thrive on turning creative ideas into reality.
            </p>
            <p className="text-lg text-gray-600">
              I specialize in CAD and multiple programming languages, bringing a unique passion and obsession to each project I take on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}