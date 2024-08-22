import React from 'react';
import { FloatingDockDemo } from '@/app/floatingdock';
import { CanvasRevealEffectDemo } from './canvasreveal';

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-900 text-white">
      <header className="mb-8">
      </header>
      <main className="flex-grow text-center">
      <h1 className="text-3xl font-bold">Feel Free to Contact me here!</h1>
      <br />
        <CanvasRevealEffectDemo />
      </main>
      <footer > 
        <FloatingDockDemo />
      </footer>
    </div>
  );
};

export default Skills;
