import React from 'react';
import { FloatingDockDemo } from '@/app/floatingdock';
import { EvervaultCard, Icon } from './components/ui/everfault-card';
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import Image from 'next/image';

const Home: React.FC = () => {
  const words = [
    {
      text: "Ohayo",
    },
    {
      text: "Sekai",
    },
    {
      text: "Good",
    },
    {
      text: "Morning",
    },
    {
      text: "World!!!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/vid/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-4xl p-12 relative bg-gray-800/[0.9] rounded-lg shadow-lg">
        <Icon className="absolute h-10 w-10 -top-5 -left-5 dark:text-white text-black" />
        <Icon className="absolute h-10 w-10 -bottom-5 -left-5 dark:text-white text-black" />
        <Icon className="absolute h-10 w-10 -top-5 -right-5 dark:text-white text-black" />
        <Icon className="absolute h-10 w-10 -bottom-5 -right-5 dark:text-white text-black" />
        
        <div className="relative flex flex-col items-center justify-center h-[30rem] w-[50rem] bg-gray-700 rounded-md p-8">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-gray-800 rounded-md p-8 shadow-md text-center">
              <header className="mb-4">
                <h1 className="text-3xl font-bold">Nur Muhammad <span className='text-red-700'>Faza</span> Dwi <span className='text-red-700'>Fajar</span> Ramdhani</h1>
                <div className="flex justify-center mt-4">
                  <Image src="/img/pict.jpg" alt="Profile Picture" width={128} height={128} className="rounded-full" />
                </div>
              </header>
              <main className="mb-2">
                <TypewriterEffectSmooth words={words} />
              </main>
            </div>
          </div>
          <footer className="absolute top-80">
            <FloatingDockDemo />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
