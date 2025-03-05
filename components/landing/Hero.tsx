"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";


const intro = [
    "Give voice ",
    "Leverage ",
    "Take notes ",
];

const phrases = [
  "to your thoughts.",
  "the power of AI.",
  "in a structured way.",
];

const handleSubscription = () => {
    alert("Iscritto correttamente, Grazie!");
}


export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Cambia frase ogni 3 secondi
    return () => clearInterval(interval);
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  return (
    <section className="text-center py-20 px-6 pt-38 mx-auto md:max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 0.5 }}
                key={intro[index]}
                className="inline"
            >
              <span className="hidden md:inline opacity-25 dark:opacity-50">{intro[index]} {" "}</span>
              <span className="opacity-25 dark:opacity-50 md:hidden">{intro[index]} {" "}<br /></span>
            </motion.div>
          <span className="relative inline-block">
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                key={phrases[index]}
              >
                {splitText(phrases[index])}
              </motion.div>
          </span>
        </h1>

      <p className="text-lg font-semibold mt-4">
        Transform your ideas into clear, structured notes with a single click.<br /> Simple, fast, and powered by AI.
      </p>

      <div id="subscription" className="mt-8 w-full md:max-w-1/2 mx-auto">
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mt-2">
         Enter your email and get an <strong>exclusive discount</strong>!
         </p>
        <form 
            className="flex flex-col md:flex-row items-center justify-center gap-3 " 
            onSubmit={handleSubscription}
            action="https://formspree.io/f/xovjggje"
            method="POST"
        >
          <Input 
            required
            type="email" 
            name="email"
            placeholder="Enter your email" 
            className="w-full  text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-600 rounded-md shadow-md"
          />
          <Button type="submit" variant="primary" className="w-full md:w-auto px-6 py-3 text-md font-semibold" >
            Sign Up
          </Button>
        </form>
      </div>

    </section>
  );
}
