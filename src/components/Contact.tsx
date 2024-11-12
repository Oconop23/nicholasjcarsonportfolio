import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:njcarson238@gmail.com', '_blank');
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3 justify-center">
          <Mail className="w-8 h-8 text-indigo-600" />
          Get In Touch
        </h2>
        <button
          onClick={handleEmailClick}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors text-lg"
        >
          <Mail className="w-5 h-5" />
          Send me an email
        </button>
      </div>
    </section>
  );
}