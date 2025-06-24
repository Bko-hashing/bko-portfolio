import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="w-full bg-blue-600 shadow text-white px-6 py-4 flex justify-between items-center">
    <span className="text-3xl font-bold" style={{ fontFamily: '"Dancing Script", cursive' }}>
      <Link href="/" className="hover:underline px-2">Bernard Ko</Link>, An aspiring software engineer
      </span>
    <div className="space-x-6 pr-8">
      <Link href="/" className="hover:underline px-2">Home</Link>
      <Link href="/projects" className="hover:underline px-2">Projects</Link>
      <Link href="/about" className="hover:underline px-2">About</Link>
      <Link href="/resume" className="hover:underline px-2">Resume</Link>
    </div>
  </nav>
);

export default Navbar;