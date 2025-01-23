'use client';

import React from 'react';
import Link from 'next/link';
import Background from '../../components/Background';

export default function About() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <Background />
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
          <p className="mb-4 text-white">
            Hello! I&apos;m Bernard Ko, an aspiring software engineer with entry level experience in Python, React, Typescript & Java.
          </p>
          <p className="mb-4 text-white">
            I love to challenge myself and learn new technologies.
          </p>
          <p className="mb-4 text-white">
            When I&apos;m not coding, you can find me working on my projects like this website or researching the stock market.
          </p>
          <p className="mb-4 text-white">
            I&quot;m known these quotes by my peers:
          </p>
          <p className="mb-4 text-white">
          &quot;BUY THE TOP SELL THE DIP&quot; 
          </p>
          <p className="mb-4 text-white">
          &quot;When in doubt, be in doubt!!! Don&quot;t question it!!&quot; 
          </p>
          <Link href="/" className="mt-8 inline-block text-blue-400 hover:text-blue-300">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}