
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Cookie, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-light/90 backdrop-blur-md border-b border-cheese/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <Cookie className="h-8 w-8 text-cheese" />
          <span className="font-bold text-xl md:text-2xl text-foreground">Coded Cheese</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-cheese transition-colors">About</a>
          <a href="#apps" className="text-foreground hover:text-cheese transition-colors">Our Apps</a>
          <a href="#services" className="text-foreground hover:text-cheese transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-cheese transition-colors">Contact</a>
          <Button className="bg-cheese text-cheese-foreground hover:bg-cheese-hover">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-light border-t border-cheese/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-foreground py-2 hover:text-cheese transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#apps" className="text-foreground py-2 hover:text-cheese transition-colors" onClick={() => setIsMenuOpen(false)}>Our Apps</a>
            <a href="#services" className="text-foreground py-2 hover:text-cheese transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="text-foreground py-2 hover:text-cheese transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="bg-cheese text-cheese-foreground hover:bg-cheese-hover w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
