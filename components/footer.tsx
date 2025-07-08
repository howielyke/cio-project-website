
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Podcast, Linkedin, Youtube, Music, Apple } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500">
                <Podcast className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <div className="font-bold text-lg">The CIO Project</div>
                <div className="text-sm text-amber-400">Confessions; Real Talk; Real Tech</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Unfiltered conversations with global technology leaders. 
              Join us for authentic insights from CIOs, CTOs, and CISOs worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/episodes" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Episodes
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-amber-400 transition-colors">
                About the Hosts
              </Link>
              <Link href="/sponsors" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Sponsor Opportunities
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/showcase/105979474/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-amber-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@theCIOProject/videos"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-amber-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://podcasts.apple.com/us/podcast/the-cio-project/id1800079926"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-amber-500 transition-colors"
              >
                <Apple className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://open.spotify.com/show/706zX0WbNnJuoyTcrLw59z?si=7da97599ad434e30"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-amber-500 transition-colors"
              >
                <Music className="h-5 w-5" />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe on your favorite podcast platform
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 The CIO Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
