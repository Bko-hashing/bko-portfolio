'use client';

import React from 'react';
import Link from 'next/link';
import Background from '../../components/Background';

export default function Resume() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <Background />
      <div className="relative z-10 min-h-screen w-full text-white p-4 sm:p-8 flex flex-col items-center justify-start overflow-auto">
        <h1 className="text-4xl font-bold mb-4">My Resume</h1>
        <p className="mb-4 max-w-2xl text-center">
          Here&apos;s my full resume. You can view it directly on this page or download it for offline viewing.
        </p>
        <a 
          href="/Bernard_Ko_Resume2025.pdf" 
          download 
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-colors duration-300 mb-6"
        >
          Download PDF
        </a>
        <div className="w-full max-w-4xl h-[calc(100vh-250px)] overflow-hidden">
          <iframe 
            src="/Bernard_Ko_Resume2025.pdf" 
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
        <Link href="/" className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}