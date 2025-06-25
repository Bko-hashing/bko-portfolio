'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect/dist/core';
import Image from 'next/image';

export default function About() {
  const typewriterRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        loop: false,
        delay: 15,
      })
        .typeString(`Hello! I&apos;m Bernard Ko, an aspiring software engineer with entry level experience in Python & Basic knowledge in React, TypeScript & JavaScript.<br/><br/>I love to challenge myself and learn new technologies.<br/><br/>When I&apos;m not coding, you can find me working on my projects like this website or researching the stock market.<br/><br/>I&apos;m known these quotes by my peers:<br/><br/>&quot;📈 BUY THE TOP SELL THE DIP 📉&quot;<br/><br/> 🤷🏻‍♂️&quot;When in doubt 🤷🏻‍♂️, be in doubt 🤷🏻‍♂️!!! Don&apos;t question it!! 🤷🏻‍♂️&quot;`)
        .start();
    }
  }, []);

  const handleLearnMore = () => {
    summaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Full viewport About Me section */}
      <section className="flex flex-col items-center justify-center min-h-screen relative">
        <h1 className="text-4xl font-bold mb-8 items-center justify-center ">About Me!</h1>
        <div ref={typewriterRef} className="text-lg text-black mb-8 text-center min-h-[18rem]" />
        <button
          onClick={handleLearnMore}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center group focus:outline-none"
          aria-label="Learn more"
        >
          <span className="text-blue-700 font-semibold mb-1 group-hover:underline">Learn more</span>
          <svg className="w-8 h-8 animate-bounce text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </section>

      {/* Scrollable content below */}
      <div ref={summaryRef} />
      <div className="relative z-10 w-full p-8">
        {/* Personalized summary with image */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center mb-16">
          <div className="md:w-2/3 w-full md:pr-8">
            <p className="text-lg text-black mb-4">
              I graduated from The City College of New York with a Bachelor of Engineering in Electrical Engineering and minor in Mathematics. 
              I am currently seeking Entry Level Software Engineering positions and working towards AZ-900 Certifications.
            </p>
            <p className="text-lg text-black mb-4">
              The first programming language I learned was Python and I used it to develop an algorithm for my final project in college. 
              My experience also includes full-stack web development, in which I&apos;ve worked with several frontend frameworks like React, and I&apos;ve utilized relational databases 
              like PostgreSQL in the backend. 
              Currently, I am still trying to further develop my skills in the MERN stack. 
              My skills also include JavaScript, TypeScript, and C/C++.
            </p>
            <p className="text-lg text-black mb-4">
              Besides coding, I love to trade stocks and practice programming languages. 
              These interests inspired me to create projects like a web application for helping traders/investers with key technical, seasonal, dividend, and growth data and collaborate in a project with a fellow friend/SWE in helping others financially.
              Harvesting the power of technology to transform individual hobbies into practical solutions is what fulfills me in life.
            </p>
            <p className="text-lg text-black mb-2">Currently, I am:</p>
            <ul className="list-disc ml-8 text-black mb-4">
              <li>Developing new features for my web applications</li>
              <li>Maintaining and improving the existing source code for these applications</li>
              <li>Looking for an entry-level software engineering position.</li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full flex justify-center mt-8 md:mt-0">
            <Image src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/personalheadpic.png" alt="Bernard Ko" width={350} height={350} className="rounded-full object-cover border-4 border-blue-300" />
          </div>
        </section>
        {/* Education Section */}
        <section className="w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-blue-400 w-fit">Education</h2>
          <div className="space-y-8 mt-8">
            {/* Baruch College */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
              <div className="md:w-1/5 w-full flex justify-center mb-4 md:mb-0">
                <Image src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/ccny.png" alt="CCNY" width={120} height={120} className="rounded-full" />
              </div>
              <div className="md:w-4/5 w-full md:pl-8">
                <h3 className="text-3xl font-bold">The City College of New York</h3>
                <div className="text-lg mb-1">Bachelors of Engineering in Electrical Engineering with Minor in Mathematics</div>
                <div className="text-gray-600 mb-1">August 2018-January 2023</div>
                <div className="text-gray-700">Relevant Courses:</div>
                <ul className="list-disc ml-8">
                  <li>Introduction to Artifical Intelligence and Machine Learning</li>
                  <li>Data and Computer Communication & Digital Computer Systems</li>
                  <li>Programming for EE</li>
                </ul>
              </div>
            </div>
            {/* CodePath */}
            {/* <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
              <div className="md:w-1/5 w-full flex justify-center mb-4 md:mb-0">
                <Image src="/codepath.png" alt="CodePath" width={120} height={120} className="rounded-full" />
              </div>
              <div className="md:w-4/5 w-full md:pl-8">
                <h3 className="text-3xl font-bold">Codepath</h3>
                <div className="text-lg mb-1">September 2024-November 2024</div>
                <div className="text-gray-700">Relevant Courses:</div>
                <ul className="list-disc ml-8">
                  <li>Intermediate Technical Interview Prep</li>
                  <li>Advanced Web Development</li>
                </ul>
              </div>
            </div> */}
            {/* Penn State */}
            {/* <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
              <div className="md:w-1/5 w-full flex justify-center mb-4 md:mb-0">
                <Image src="/psu.png" alt="Pennsylvania State University" width={120} height={120} className="rounded-full" />
              </div>
              <div className="md:w-4/5 w-full md:pl-8">
                <h3 className="text-3xl font-bold">Pennsylvania State University</h3>
                <div className="text-lg mb-1">Bachelor of Science in Data Science, Minor in Information Sciences and Technology</div>
                <div className="text-gray-600 mb-1">August 2019-May 2023</div>
                <div className="text-gray-700">Relevant Courses:</div>
                <ul className="list-disc ml-8">
                  <li>Data Structures and Algorithms</li>
                  <li>Database Management Systems</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
            </div> */}
          </div>
        </section>
        {/* Work Experience Section */}
        <section className="w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-blue-400 w-fit">Work Experience</h2>
          <div className="space-y-8 mt-8">
            {/* HBK Engineering, LLC. */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
              <div className="md:w-1/5 w-full flex justify-center mb-4 md:mb-0">
                <Image src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/hbklogo.png" alt="HBK Engineering" width={240} height={240} className="rounded-full" />
              </div>
              <div className="md:w-4/5 w-full md:pl-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">HBK Engineerinng, LLC.</h3>
                <div className="text-lg mb-1">Electrical Engineer I</div>
                <div className="text-gray-600 mb-1">July 2019 - August 2019</div>
                <ul className="list-disc ml-8">
                  <li>Managed PECO&apos;s assets for efficient material orders, lowering material orders and cost by 50%.</li>
                  <li>Drafted project proposals that minimize cost & labor by as much as 30%, outbid our competitors and increased
                  profit by 30%</li>
                  <li>Lead PECO&apos;s pole replacement program, trained & managed six designers to efficiently design replacements,
                  saving 40% in time for each pole replacement.</li>
                  <li>Designed utility line upgrades and facility replacement for five counties in Pennsylvania to match the growing energy demands.</li>
                </ul>
              </div>
            </div>
            {/* Meter Engineer Intern */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
              <div className="md:w-1/5 w-full flex justify-center mb-4 md:mb-0">
                <Image src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/nypalogo.jpg" alt="New York Power Authority" width={240} height={240} className="rounded-full" />
              </div>
              <div className="md:w-4/5 w-full md:pl-8">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">New York Power Authority</h3>
                <div className="text-lg mb-1">Meter Engineer Intern</div>
                <div className="text-gray-600 mb-1">June 2022 - December 2022</div>
                <ul className="list-disc ml-8">
                  <li>Engineered potential and current transformer replacements for NYPA&apos;s 69/115kV substations.</li>
                  <li>Drafted 1 & 3-line technical drawings and schematics using AutoCAD.</li>
                  <li>Designed & supported meter installation and instrument upgrades for NYPA&apos;s facilities and municipalities.</li>
                  <li>Calibrated & tested revenue/genitor control meters for NYPA&apos;s substations to meet ANSI & IEEE standards.</li>
                </ul>
              </div>
            </div>
            {/* Research Assistant  */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
              <div className="md:w-1/5 w-full flex justify-center mb-4 md:mb-0">
                <Image src="https://raw.githubusercontent.com/Bko-hashing/bko-portfolio/refs/heads/main/public/ccny.png" alt="The City College of New York" width={120} height={120} className="rounded-full" />
              </div>
              <div className="md:w-4/5 w-full md:pl-8">
                <h3 className="text-3xl font-bold text-purple-500 mb-2">The City College of New York</h3>
                <div className="text-lg mb-1">Research Assistant</div>
                <div className="text-gray-600 mb-1">June 2021 - August 2021</div>
                <ul className="list-disc ml-8">
                  <li>Collaborated on a research project focusing on radar and optical detection of UAVs, specifically bird-type drones.</li>
                  <li>Deployed a laser generator emitting both in 380 nm to 1mm spectra to illuminate airborne targets.</li>
                  <li>Captured scattered radiation using a photodetector, channeling the data to an oscilloscope for signal generation.</li>
                  <li>Processed and analyzed time domain signals in MATLAB to extract specific frequencies to differentiate bird type
                  drones from biological birds.</li>
                </ul>
              </div>
            </div>
        </div>
        </section>
      </div>
    </div>
  );
}