
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111]"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/two-microphones-dark-recording-studio-podcast-interview-concept-setup-scene-audio-equipment-lighting-316115321.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] mb-6 leading-tight">
            Conversations with the leaders{' '}
            <span className="text-gradient">shaping tomorrow's</span>{' '}
            enterprise
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-[#A0A0A0] mb-8 max-w-4xl mx-auto">
            In-depth interviews with Chief Information Officers and tech visionaries
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/episodes">
              <Button className="btn-primary text-white font-medium px-8 py-3 text-lg">
                <Play className="w-5 h-5 mr-2" />
                View Latest Episode
              </Button>
            </Link>
            
            <Link href="/about">
              <Button variant="outline" className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-8 py-3 text-lg">
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#007BFF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#007BFF] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
