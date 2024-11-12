import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const handleEmailClick = () => {
    window.open('mailto:njcarson238@gmail.com', '_blank');
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Nicholas Carson
        </h1>
        <p className="text-2xl text-gray-600 mb-12 animate-fade-in-delay">
          Responsible, resilient, and reliable high school senior
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://linkedin.com/in/nico-carson" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <button onClick={handleEmailClick} className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Mail className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}