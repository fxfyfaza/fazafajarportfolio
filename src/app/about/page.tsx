import React from 'react';
import { FloatingDockDemo } from '@/app/floatingdock';
import { EvervaultCard, Icon } from '../components/ui/everfault-card';
import { InfiniteMovingCardsDemo } from '../movingcard';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';
import Image from 'next/image';

const Home: React.FC = () => {


  return (
    <BackgroundBeamsWithCollision>
    <div className="relative flex items-center justify-center min-h-screen w-full text-white">


      <div className="absolute inset-0 flex items-center justify-center">
        <EvervaultCard className="w-full h-full" />
      </div>

      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-4xl p-12 relative bg-gray-800/[0.9] rounded-lg shadow-lg">

        
        <div className="relative flex flex-col items-center justify-center h-[30rem] w-[50rem] bg-gray-700 rounded-md p-8">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-gray-800 rounded-md p-8 shadow-md text-center">
              <header className="mb-4">
                <h1 className="text-3xl font-bold">Welcome to My portfolio web! <br /><br />
                I'm an undergrad in Physics Engineering.
                  My love for tech started as a kid, watching my cousin "Ngoprek" anything.
                   He sparked my curiosity, which has stuck with me ever since.
                    Want to know more? Hit me up! (Quick replies when I'm active xD).</h1>
              </header>
              <main className="mb-2">
              </main>
            </div>
          </div>
          <footer className="absolute top-80">
            <FloatingDockDemo />
          </footer>
        </div>
      </div>
    </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Home;
