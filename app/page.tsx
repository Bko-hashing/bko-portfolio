"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect/dist/core";

export default function Home() {
  const topTypewriterRef = useRef(null);
  const bottomTypewriterRef = useRef(null);
  const [showBottomTypewriter, setShowBottomTypewriter] = useState(false);

  useEffect(() => {
    if (Typewriter) {
      // Top typewriter
      new Typewriter(topTypewriterRef.current, {
        loop: false,
        delay: 35,
      })
        .typeString("Hi there, My name is Bernard. Welcome to my website.")
        .callFunction(() => setShowBottomTypewriter(true))
        .start();
    }
  }, []);

  useEffect(() => {
    if (showBottomTypewriter && Typewriter) {
      new Typewriter(bottomTypewriterRef.current, {
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      })
        .typeString(" stock trader.")
        .pauseFor(1200)
        .deleteAll()
        .typeString(" aspiring software engineer.")
        .pauseFor(1200)
        .deleteAll()
        .start();
    }
  }, [showBottomTypewriter]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] w-full px-4 md:px-16 py-12">
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <video
            width="420"
            height="320"
            className="object-contain rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/main/public/codingvidlogo.mp4"
            controls
          ></video>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-6xl font-bold mb-6 min-h-[4rem]">Welcome!</div>
          <div
            ref={topTypewriterRef}
            className="text-xl mb-4 min-h-[2.5rem] block"
          />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-medium min-h-[2.5rem]">
              I am a(n)
            </span>
            {showBottomTypewriter && (
              <div
                ref={bottomTypewriterRef}
                className="text-2xl font-medium min-h-[2.5rem]"
              />
            )}
          </div>
        </div>
      </section>

      {/* About Me Section (unchanged) */}
      <section className="flex flex-col items-center bg-blue-100 py-16 rounded-lg mx-2 md:mx-32 shadow-lg">
        <div className="text-2xl font-semibold mb-4">About Me</div>
        <div className="flex flex-row space-x-6 mb-6">
          <a
            href="https://github.com/bko-hashing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/github.svg"
              alt="GitHub"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-blue-700 hover:scale-110 transition"
            />
          </a>
          <a href="mailto:bernardko1203@gmail.com" aria-label="Email">
            <Image
              src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/email.svg"
              alt="Email"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-blue-700 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bernardko03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/linkedin.svg"
              alt="LinkedIn"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-blue-700 hover:scale-110 transition"
            />
          </a>
        </div>
        <div className="text-lg mb-6">Interested in me?</div>
        <Link href="/about">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl mx-auto py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10">My Recent Projects</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-8">
          {/* BuyTheDip Project */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-1/3">
            <Image
              src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/bullmarket.png"
              alt="BuyTheDip Logo"
              width={180}
              height={180}
              className="rounded-full mb-4"
            />
            <div className="text-2xl font-semibold mb-2">BuyTheDip</div>
            <div className="text-gray-600 mb-4">
              A stock market sentiment and analysis platform.
            </div>
            <div className="flex gap-4">
              <Link href="/buythedip" className="text-blue-600 hover:underline">
                View Demo
              </Link>
              <Link
                href="https://github.com/bko-hashing/buythedip"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View GitHub
              </Link>
            </div>
          </div>
          {/* WealthLadder Project */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-1/3">
            <Image
              src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/avgogirl.png"
              alt="WealthLadder Logo"
              width={180}
              height={180}
              className="rounded-full mb-4"
            />
            <div className="text-2xl font-semibold mb-2">WealthLadder</div>
            <div className="text-gray-600 mb-4">
              A financial educational tool designed to guide individuals towards
              financial freedom.
            </div>
            <div className="flex gap-4">
              <Link
                href="/wealthladder"
                className="text-blue-600 hover:underline"
              >
                View Demo
              </Link>
              <Link
                href="https://github.com/QuocHHDo/wealthladder"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View GitHub
              </Link>
            </div>
          </div>
          {/* CFOA Practice Exam Project */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-1/3">
          <br></br>
          <br></br>
            <Image
              src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/icfdt.png"
              alt="CFOA Logo"
              width={180}
              height={180}
              className="rounded-full mb-4"
            />
            <br></br>
            <div className="text-2xl font-semibold mb-2">WealthLadder</div>
            <div className="text-gray-600 mb-4">
              A financial educational website to help users prepare for the 
              Certified Financial Operations Analyst (CFOA) exam.
            </div>
            <div className="flex gap-4">
              <Link
                href="https://bko-hashing.github.io/cfoapractice/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View Demo
              </Link>
              <Link
                href="https://github.com/bko-hashing/cfoapractice"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View GitHub
              </Link>
            </div>
          </div>
        </div>
        <Link href="/projects">
          <button className="bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700 transition text-lg">
            View More
          </button>
        </Link>
      </section>
    </div>
  );
}
