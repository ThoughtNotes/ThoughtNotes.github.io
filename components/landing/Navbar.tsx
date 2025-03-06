"use client"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from 'next/link'

type NavbarProps = {
  highlightForm: () => void;
};

export function Navbar({highlightForm}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartAndCloseMenuMobile = () => {
      setIsOpen(!isOpen);
      highlightForm();
  }

  return (
    <nav className="w-full bg-white dark:bg-black shadow-md dark:shadow-gray-800 py-4 px-6 fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
              <a href="#" className="text-xl font-bold hover:text-primary/80">
          Thought Notes
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#how-it-works" className="hover:text-primary/80 hover:underline">
            How It Works
          </Link>
          <Link href="#pricing" className="hover:text-primary/80 hover:underline">
            Pricing
          </Link>
          <Button className="text-sm" onClick={highlightForm}>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-black shadow-lg dark:shadow-gray-800 rounded-lg py-4 px-6 absolute w-full left-0">
          <Link href="#how-it-works" className="block py-3 active:text-primary/80 active:underline" onClick={() => setIsOpen(!isOpen)}>
            How It Works
          </Link>
          <Link href="#pricing" className="block py-2 active:text-primary/80 active:underline" onClick={() => setIsOpen(!isOpen)}>
            Pricing
          </Link>
          <Button className="mt-4 w-full" onClick={handleStartAndCloseMenuMobile}>Get Started</Button>
        </div>
      )}
    </nav>
  );
}
