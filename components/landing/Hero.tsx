"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SubscriptionForm } from "./SubscriptionForm";

type HeroProps = {
  highlight: boolean;
};

const intro = ["Take notes ", "Give voice ", "Leverage "];
const phrases = ["in a structured way.", "to your thoughts.", "the power of AI."];

export function Hero({ highlight }: HeroProps) {
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
        Transform your ideas into clear, structured notes with a single click.
        <br /> Simple, fast, and powered by AI.
      </p>

      <div id="subscription" className="mt-6 w-full md:max-w-1/2 mx-auto">
        <motion.div
          initial={{ scale: 1, border: "none" }}
          animate={{
            scale: highlight ? 1.05 : 1,
            boxShadow: highlight
              ? "0px 0px 20px rgba(59, 130, 246, 0.7)"
              : "none",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="py-2 px-4 rounded-lg w-full border border-gray-300 dark:border-gray-700 transition-all"
        >
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">
            Enter your email and get an <strong>exclusive discount</strong>!
          </p>
          <SubscriptionForm />
        </motion.div>
      </div>
    </section>
  );
}
