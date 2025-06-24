import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="w-full bg-blue-600 shadow text-white px-6 py-4 flex justify-between items-center">
    <span className="font-bold text-lg">Bernard Ko</span>
    <div className="space-x-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/resume" className="hover:underline">Resume</Link>
    </div>
  </nav>
);

export default Navbar;
 