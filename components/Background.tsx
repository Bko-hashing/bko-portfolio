import React, { useState, useEffect } from 'react';

interface StarProps {
  x: string;
  y: string;
  delay: number;
  hue: number;
}

const Star: React.FC<StarProps> = ({ x, y, delay, hue }) => (
  <circle 
    cx={x} 
    cy={y} 
    r="1.5" 
    className="star"
    style={{ 
      animationDelay: `${delay}s`,
      fill: `hsl(${hue}, 100%, 70%)`
    }}
  />
);

const Car: React.FC<{ x: number; y: number; imageUrl: string; rotationDirection: string }> = ({ x, y, imageUrl, rotationDirection }) => (
  <image 
    href={imageUrl} 
    x={`${x}vw`}  // Position in viewport width (vw)
    y={`${y}vh`}  // Position in viewport height (vh)
    height="100"  // Scaled height
    width="125"   // Scaled width
    className="moving-car" 
    style={{
      transformOrigin: 'center',  // Set the rotation point to the center of the image
      animation: `rotate 10s linear infinite ${rotationDirection}`, // Rotate with random direction
    }}
  />
);

const MovingObject: React.FC<{ startX: number; startY: number; endX: number; endY: number; duration: number; imageUrl: string }> = ({ startX, startY, endX, endY, duration, imageUrl }) => {
  const [position, setPosition] = useState({ x: startX, y: startY });
  const [rotationDirection, setRotationDirection] = useState('none');

  useEffect(() => {
    const startTime = performance.now();

    // Randomly select clockwise or counterclockwise rotation
    const randomDirection = Math.random() > 0.5 ? 'normal' : 'reverse';
    setRotationDirection(randomDirection);

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const t = Math.min(elapsed / (duration * 1000), 1); // Normalize time between 0 and 1

      const newX = startX + (endX - startX) * t;
      const newY = startY + (endY - startY) * t;

      setPosition({ x: newX, y: newY });

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [startX, startY, endX, endY, duration]);

  return <Car x={position.x} y={position.y} imageUrl={imageUrl} rotationDirection={rotationDirection} />;
};

const Background: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [movingObject, setMovingObject] = useState<{ startX: number; startY: number; endX: number; endY: number; duration: number; imageUrl: string } | null>(null);

  // Array of car logo URLs (replace with your actual logo paths)
  const rock = [
    'https://bko-hashing.github.io/bko-portfolio/alienrock.png'
  ];

  // Utility function to get random positions on screen edges (left, right, top, bottom)
  const getRandomEdgePosition = () => {
    const edge = Math.floor(Math.random() * 4); // 0 = left, 1 = right, 2 = top, 3 = bottom
    let startX = 0, startY = 0, endX = 0, endY = 0;

    switch (edge) {
      case 0: // Start on the left edge
        startX = -100; // Off-screen to the left
        startY = Math.random() * 100;
        endX = Math.random() * 100 + 100; // Moves to off-screen right
        endY = Math.random() * 100;
        break;
      case 1: // Start on the right edge
        startX = 110; // Off-screen to the right
        startY = Math.random() * 100;
        endX = -100; // Moves to off-screen left
        endY = Math.random() * 100;
        break;
      case 2: // Start on the top edge
        startX = Math.random() * 100;
        startY = -100; // Off-screen to the top
        endX = Math.random() * 100 + 100;
        endY = 110; // Moves to off-screen bottom
        break;
      case 3: // Start on the bottom edge
        startX = Math.random() * 100;
        startY = 110; // Off-screen to the bottom
        endX = Math.random() * 100 + 100;
        endY = -100; // Moves to off-screen top
        break;
    }

    return { startX, startY, endX, endY };
  };

  useEffect(() => {
    const newStars = Array.from({ length: 500 }, () => ({
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      delay: Math.random() * 5,
      hue: Math.random() * 360,
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    const addMovingObject = () => {
      const { startX, startY, endX, endY } = getRandomEdgePosition();
      const duration = 8; // Slower car speed, increased duration
      const imageUrl = rock[Math.floor(Math.random() * rock.length)]; // Select random car logo

      setMovingObject({ startX, startY, endX, endY, duration, imageUrl });
    };

    // Add a new object every 6 seconds, and only keep one moving object at a time
    const intervalId = setInterval(addMovingObject, 6000); // Slow down the frequency
    return () => clearInterval(intervalId);
  }, [rock]);

  return (
    <svg 
      className="absolute inset-0 w-full h-full" 
      preserveAspectRatio="xMidYMid slice"
      width="100vw"  // Full screen width
      height="100vh" // Full screen height
    >
      <rect width="100%" height="100%" fill="black" />
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
      {movingObject && <MovingObject {...movingObject} />}
    </svg>
  );
};

export default Background;
