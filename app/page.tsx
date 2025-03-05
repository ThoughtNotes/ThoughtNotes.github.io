"use client"
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
//import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Navbar } from "@/components/landing/Navbar";
//import { ThemeToggle } from "@/components/landing/ThemeToggle";
import { Footer } from "@/components/landing/Footer";
import { Problem } from "@/components/landing/Problem";
import { useState } from "react";

export default function Home() {
  const [highlight, setHighlight] = useState(false);

  const highlightForm = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 2000);
  };

  return (
    <main>
    <Navbar highlightForm={highlightForm}/>
      <Hero highlight={highlight} />
      <Problem />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA highlightForm={highlightForm}/>
    <Footer />
    </main>
  );
}

