'use client';

import React from 'react';
import Link from 'next/link';
import Background from '../../components/Background';

export default function Projects() {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Background />
      <div className="relative z-10 h-full w-full text-white p-8 text-center overflow-auto">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{project}</h2>
              <p className="mb-4">Description of {project} goes here.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">Learn more</a>
            </div>
          ))}
        </div>
        <Link href="/" className="mt-8 inline-block text-blue-400 hover:text-blue-300">Back to Home</Link>
      </div>
    </div>
  );
}