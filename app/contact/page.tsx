'use client';

import React from 'react';
import Link from 'next/link';
import Background from '../../components/Background';

export default function Contact() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <Background />
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-white">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 rounded text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 rounded text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-white">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 bg-gray-800 rounded text-white"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 w-full">Send Message</button>
          </form>
          <Link href="/" className="mt-8 inline-block text-blue-400 hover:text-blue-300 text-center w-full">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}