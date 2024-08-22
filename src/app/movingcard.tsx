"use client";

import React from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

const techLogos = [
  { src: "../img/JS.svg", alt: "JavaScript" },
  { src: "../img/typescript.svg", alt: "TypeScript" },
  { src: "../img/c.svg", alt: "C" },
  { src: "../img/CPlusPlus.svg", alt: "C++" },
  { src: "../img/Python.svg", alt: "Python" },
  { src: "../img/PHP.svg", alt: "PHP" },
  { src: "../img/laravel.svg", alt: "Laravel 11" },
  { src: "../img/git.svg", alt: "Git" },
  { src: "../img/vscode.svg", alt: "VisualStudio Code" },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[35rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={techLogos}
        direction="right"
        speed="slow"
        renderItem={(item) => (
          <img
            src={item.src}
            alt={item.alt}
            className="w-16 h-16 object-contain" // Adjust size as needed
          />
        )}
      />
    </div>
  );
}
