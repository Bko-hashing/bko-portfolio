'use client';

import React from 'react';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-blue-100">
      <div className="relative z-10 min-h-screen w-full text-black p-4 sm:p-8 flex flex-col items-center justify-start">
        <h1 className="text-4xl font-bold mb-4">My Resume</h1>
        <p className="mb-4 max-w-2xl text-center">
          Here&apos;s my full resume. You can view it directly on this page or download it for offline viewing.
        </p>


        <a 
          href="./BernardKoResume_2025.pdf" 
          download 
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-colors duration-300 mb-6"
        >
          Download PDF
        </a>


        <div className="w-full max-w-5xl flex-1">
          <iframe 
            src="./BernardKoResume_2025.pdf" 
            className="w-full" 
            style={{ 
              width: '100%',
              height: '80vh',
              border: 'none',
            }} 
          />
        </div>


        <Link 
          href="/" 
          className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
