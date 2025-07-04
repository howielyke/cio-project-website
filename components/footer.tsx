
import Link from 'next/link';
import { Mic, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mic className="h-8 w-8 text-[#007BFF]" />
              <span className="text-xl font-bold text-[#F5F5F5]">The CIO Project</span>
            </Link>
            <p className="text-[#A0A0A0] mb-4 max-w-md">
              Conversations with the leaders shaping tomorrow's enterprise. 
              In-depth interviews with Chief Information Officers and tech visionaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-[#F5F5F5] font-bold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                Home
              </Link>
              <Link href="/episodes" className="block text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                Episodes
              </Link>
              <Link href="/about" className="block text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                About
              </Link>
              <Link href="/sponsors" className="block text-[#A0A0A0] hover:text-[#007BFF] transition-colors">
                Sponsors
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-[#F5F5F5] font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-[#A0A0A0]">hello@cioproject.com</p>
              <p className="text-[#A0A0A0]">+1 (555) 123-4567</p>
              <p className="text-[#A0A0A0]">San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#1A1A1A] mt-12 pt-8 text-center">
          <p className="text-[#A0A0A0]">
            © {new Date().getFullYear()} The CIO Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
