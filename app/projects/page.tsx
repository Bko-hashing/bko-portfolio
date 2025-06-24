"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "BuyTheDip!",
    description: "Empowers traders and investors with key technical, seasonal, dividend, and growth data.",
    image: "https://github.com/Bko-hashing/bko-portfolio/blob/main/public/bullmarket.png",
    demo: "#",
    github: "https://github.com/bko-hashing/buythedip",
    tech: ["TypeScript,", "Next.js", "Node.js","NestJS","JavaScript", "React","PostgreSQL","Finance","Trading/Investing"],
  },
  {
    name: "WealthLadder",
    description: "A financial educational tool designed to guide individuals towards financial freedom through debt management and investment strategies",
    image: "https://github.com/Bko-hashing/bko-portfolio/blob/main/public/avgogirl.png",
    demo: "#",
    github: "https://github.com/QuocHHDo/wealthladder",
    tech: ["TypeScript,", "Next.js", "JavaScript", "React", "Educational", "Finance"],
  },
  {
    name: "Project 3",
    description: "Not yet created, stay tuned!",
    image: "https://github.com/Bko-hashing/bko-portfolio/blob/main/public/working.svg",
    demo: "#",
    github: "#",
    tech: ["Coming Soon"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between h-full min-h-[420px] hover:shadow-2xl transition-shadow"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">{project.name}</h2>
            <p className="text-gray-700 mb-4 text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto justify-center w-full">
              <Link href={project.demo} className="text-blue-600 hover:underline" target="_blank">
                Demo
              </Link>
              <Link href={project.github} className="text-blue-600 hover:underline" target="_blank">
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-0">
        <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
