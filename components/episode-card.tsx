
'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EpisodeCardProps {
  episode: {
    id: string;
    title: string;
    description?: string;
    episodeNumber: number;
    youtubeId?: string;
    guests: string[];
    publishedAt: Date;
    showNotes?: string;
  };
  featured?: boolean;
}

export function EpisodeCard({ episode, featured = false }: EpisodeCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    }).format(date);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group ${featured ? 'col-span-full' : ''}`}
    >
      <Card className="podcast-card overflow-hidden h-full border-l-4 border-l-red-600">
        {/* YouTube Embed */}
        {episode.youtubeId && (
          <div className="youtube-container">
            <iframe
              src={`https://www.youtube.com/embed/${episode.youtubeId}`}
              title={episode.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Episode Content */}
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Episode {episode.episodeNumber}
              </span>
              {featured && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Latest
                </span>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(episode.publishedAt)}
            </div>
          </div>

          <CardTitle className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 group-hover:text-red-600 transition-colors`}>
            {episode.title}
          </CardTitle>

          {episode.description && (
            <p className="text-gray-600 leading-relaxed">
              {episode.description}
            </p>
          )}

          {/* Guests */}
          {episode.guests.length > 0 && (
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Featuring: {episode.guests.join(', ')}
              </span>
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Show Notes Preview */}
          {episode.showNotes && (
            <div className="bg-red-50 rounded-lg p-4 border border-red-100">
              <h4 className="font-medium text-red-900 mb-2">Show Notes</h4>
              <p className="text-sm text-red-700 line-clamp-3">
                {episode.showNotes}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              <Play className="h-4 w-4 mr-2" />
              Listen Now
            </Button>
            <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Full Notes
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
