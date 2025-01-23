'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Rocket = ({ onComplete }) => {
  const [showRocket, setShowRocket] = useState(true);
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    const rocketTimer = setTimeout(() => {
      setShowRocket(false);
      setShowExplosion(true);
    }, 4000); // 4 seconds for rocket animation

    const explosionTimer = setTimeout(() => {
      setShowExplosion(false);
      onComplete();
    }, 8000); // 4 seconds for rocket + 4 seconds for explosion

    return () => {
      clearTimeout(rocketTimer);
      clearTimeout(explosionTimer);
    };
  }, [onComplete]);

  return (
    <>
      <AnimatePresence>
        {showRocket && (
          <motion.div
            initial={{ y: "100%", x: "-50%" }}
            animate={{ y: "-250%", x: "-50%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <Image 
              src="/fat-man.png"
              alt="Rocket" 
              width={100} 
              height={200} 
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showExplosion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image 
              src="/giphy.webp"
              alt="Explosion" 
              width={200} 
              height={200} 
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Meteor = ({ src, direction }) => {
  const [position, setPosition] = useState({ top: Math.random() * 100, left: direction === 'right' ? -10 : 110 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        top: Math.random() * 100,
        left: direction === 'right' ? -10 : 110
      });
    }, (Math.random() * 5000) + 5000); // Random interval between 5-10 seconds

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div 
      className={`absolute ${direction === 'right' ? 'meteor-right' : 'meteor-left'}`}
      style={{ 
        top: `${position.top}%`, 
        left: `${position.left}%`,
        animationDuration: `${Math.random() * 2 + 3}s` // Random duration between 3-5 seconds
      }}
    >
      <Image src={src} alt="Meteor" width={50} height={50} className="object-contain" />
    </div>
  );
};

export default function Home() {
  const [stars, setStars] = useState([]);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const newStars = Array.from({ length: 500 }, () => ({
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      delay: Math.random() * 5, 
      hue: Math.random() * 360, 
    }));
    setStars(newStars);
  }, []);

  const handleAnimationComplete = () => {
    setShowWelcome(true);
    setTimeout(() => setShowLinks(true), 1000);
  };

  return (
    <div className="h-screen w-full overflow-hidden relative bg-black">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="black" />
        {stars.map((star, index) => (
          <circle 
            key={index} 
            cx={star.x} 
            cy={star.y} 
            r="1.5" 
            className="star" 
            style={{ 
              animationDelay: `${star.delay}s`,
              fill: `hsl(${star.hue}, 100%, 70%)`
            }}
          />
        ))}
      </svg>

      <Meteor src="/meteor.webp" direction="right" />
      <Meteor src="/meteor2.webp" direction="left" />

      <Rocket onComplete={handleAnimationComplete} />

      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 text-white text-center"
          >
            <div className="text-6xl font-bold space-y-2">
              <div>Welcome to</div>
              <div>Bernard's</div>
              <div>Website</div>
              <div>(As Of Jan. 2025)</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLinks && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="absolute right-1/4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
          >
            {['Projects', 'About', 'Resume', 'Contact'].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link 
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-blue-300 transition-colors duration-300 text-xl font-semibold"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}