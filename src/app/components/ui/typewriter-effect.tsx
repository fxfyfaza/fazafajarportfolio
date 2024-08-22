"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopComplete, setLoopComplete] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;
    let typingSpeed = 150; // Waktu mengetik dalam ms
    let deletingSpeed = 75; // Waktu menghapus dalam ms

    if (loopComplete) {
      setCurrentText(""); 
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setLoopComplete(false);
      return;
    }

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setLoopComplete(true);
        }
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        if (currentText === currentWord) {
          setIsDeleting(true);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentText, isDeleting, currentWordIndex, words, loopComplete]);

  return (
    <div className={cn("text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      <div className="inline">
        <span className={cn("dark:text-white text-black", words[currentWordIndex]?.className)}>
          {currentText}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500", cursorClassName)}
        ></motion.span>
      </div>
    </div>
  );
};
