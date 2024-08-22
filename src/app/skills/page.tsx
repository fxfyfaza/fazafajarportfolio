"use client";
import React from 'react';
import { FloatingDockDemo } from '@/app/floatingdock';
import { FocusCardsDemo } from './focuscard';


const Skills: React.FC = () => {
  return (

    <div className="flex flex-col min-h-screen w-screen bg-gray-900 text-white">
      <header className="mb-8">
      </header>
      <main className="flex-grow text-center">
      <h1 className="text-3xl font-bold">My Skills</h1>
        <p className="text-lg mb-4">Here's some of my skills</p>
        <FocusCardsDemo />
      </main>
      <footer > 
        <FloatingDockDemo />
      </footer>
    </div>
  );
};

export default Skills;
