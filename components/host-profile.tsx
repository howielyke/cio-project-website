
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

interface HostProfileProps {
  host: {
    name: string;
    title: string;
    company: string;
    bio: string;
    experience: string;
    achievements: string[];
    image: string;
    linkedinUrl: string;
  };
  index: number;
}

export function HostProfile({ host, index }: HostProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-600">
        <CardHeader className="space-y-6">
          {/* Host Image */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src={host.image}
                alt={`${host.name} - ${host.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Host Info */}
          <div className="text-center space-y-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {host.name}
              </h3>
              <p className="text-red-600 font-medium">{host.title}</p>
              <p className="text-gray-600">{host.company}</p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Award className="h-4 w-4" />
              <span>{host.experience}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Bio */}
          <p className="text-gray-600 leading-relaxed">
            {host.bio}
          </p>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center">
              <Users className="h-4 w-4 mr-2 text-red-600" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {host.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LinkedIn CTA */}
          <div className="pt-4 border-t border-gray-100">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-red-200 text-red-600 hover:bg-red-50 group/btn"
              onClick={() => window.open(host.linkedinUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Connect on LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
