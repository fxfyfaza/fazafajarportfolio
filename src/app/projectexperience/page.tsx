import React from 'react';
import { FloatingDockDemo } from '@/app/floatingdock';
import { CardHoverEffectDemo } from './cardhover';

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-900 text-white">
      <header className="mb-8">
      </header>
      <main className="flex-grow text-center">
      <h1 className="text-3xl font-bold">My recent Projects and Experiences</h1>
        <CardHoverEffectDemo />
      </main>
      <footer > 
        <FloatingDockDemo />
      </footer>
    </div>
  );
};

export default Skills;
