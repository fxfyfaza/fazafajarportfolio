import React from "react";
import { EvervaultCard, Icon } from "@/app/components/ui/everfault-card";

export function EvervaultCardDemo() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Full-screen overlay */}
      <div className="absolute inset-0 bg-transparent hover:bg-gray-800/[0.3] transition-all duration-300"></div>

      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />


      </div>
    </div>
  );
}
