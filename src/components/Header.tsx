
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Cookie, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-light shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 p-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300">
          <div className="h-10 w-10 rounded-full bg-gray-light shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] flex items-center justify-center">
            <Cookie className="h-6 w-6 text-cheese" />
          </div>
          <span className="font-bold text-xl md:text-2xl text-foreground">Coded Cheese</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300">About</a>
          <a href="#apps" className="text-foreground px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300">Our Apps</a>
          <a href="#services" className="text-foreground px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300">Services</a>
          <a href="#contact" className="text-foreground px-4 py-2 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300">Contact</a>
          <Button className="bg-cheese shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] text-cheese-foreground hover:bg-cheese-hover ml-2 rounded-xl">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden h-10 w-10 rounded-full bg-gray-light shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] flex items-center justify-center focus:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-light shadow-[inset_0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-foreground py-3 px-4 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#apps" className="text-foreground py-3 px-4 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Our Apps</a>
            <a href="#services" className="text-foreground py-3 px-4 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="text-foreground py-3 px-4 rounded-lg hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="bg-cheese shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] text-cheese-foreground hover:bg-cheese-hover rounded-xl">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
