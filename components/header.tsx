
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Mic className="h-8 w-8 text-[#007BFF]" />
            <span className="text-xl font-bold text-[#F5F5F5]">The CIO Project</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors">
              Home
            </Link>
            <Link href="/episodes" className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors">
              Episodes
            </Link>
            <Link href="/about" className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors">
              About
            </Link>
            <Link href="/sponsors" className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors">
              Sponsors
            </Link>
            <Button
              onClick={scrollToContact}
              className="btn-primary text-white font-medium px-6"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F5F5F5] hover:text-[#007BFF] transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#111111]/95 backdrop-blur-md border-b border-[#1A1A1A]">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/episodes"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors"
              >
                Episodes
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors"
              >
                About
              </Link>
              <Link
                href="/sponsors"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors"
              >
                Sponsors
              </Link>
              <Button
                onClick={scrollToContact}
                className="btn-primary text-white font-medium w-full"
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
