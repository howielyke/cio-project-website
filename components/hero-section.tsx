

'use client';

import { motion } from 'framer-motion';
import { Play, Users, Mic, Star, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30"
              >
                <Mic className="h-4 w-4 text-amber-400 mr-2" />
                <span className="text-amber-400 text-sm font-medium">New Episodes Twice Monthly</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                The CIO Project
              </h1>
              
              <div className="text-2xl md:text-3xl text-amber-400 font-medium">
                Confessions • Real Talk • Real Tech
              </div>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Join veteran IT strategist <strong className="text-white">Howie L Lyke</strong> and Boston Red Sox CIO <strong className="text-white">Brian Shield</strong> for unfiltered conversations with global technology leaders. Get the real insights, 
                personal confessions, and hard-won wisdom that drive today's digital transformation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">40+</div>
                <div className="text-sm text-gray-300">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">C-Suite</div>
                <div className="text-sm text-gray-300">Executive Insights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Global</div>
                <div className="text-sm text-gray-300">Technology Leaders</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="show-trailer-highlight text-white font-semibold text-lg px-8 py-4">
                <Youtube className="h-5 w-5 mr-2" />
                Watch Show Trailer
              </Button>
              <Button size="lg" className="show-trailer-highlight text-amber-400 font-semibold text-lg px-8 py-4">
                <Users className="h-5 w-5 mr-2" />
                Meet the Hosts
              </Button>
            </div>
          </motion.div>

          {/* Visual Content - Actual Podcast Cover Art */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Actual Podcast Cover Art */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden cover-art-glow">
                <Image
                  src="/Cover theCIOProject (v2).png"
                  alt="The CIO Project Podcast Cover"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Play overlay for trailer */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-xl"
              >
                <Star className="h-10 w-10 text-red-800" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl"
              >
                <Mic className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Show Trailer Prominent Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Watch Our Show Trailer
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Get a taste of the authentic conversations and real insights that make The CIO Project 
              the essential podcast for technology leaders.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="trailer-embed">
                <div className="youtube-container">
                  <iframe
                    src="https://www.youtube.com/embed/QUaTLrYHFgw"
                    title="The CIO Project - Show Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
