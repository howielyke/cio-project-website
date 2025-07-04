
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Share2, Calendar, Clock, User, Tag } from 'lucide-react';

interface Episode {
  id: string;
  title: string;
  slug: string;
  guest: string;
  guestBio: string | null;
  guestPhoto: string | null;
  description: string;
  audioUrl: string | null;
  duration: string | null;
  category: string;
  publishDate: Date;
  showNotes: string | null;
  featured: boolean;
}

interface EpisodeDetailProps {
  episode: Episode;
}

export function EpisodeDetail({ episode }: EpisodeDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullNotes, setShowFullNotes] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: episode.title,
          text: `Listen to this episode of The CIO Project: ${episode.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Audio player logic would go here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Episode Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-[#007BFF] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
          {episode.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
          {episode.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-[#A0A0A0]">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{episode.guest}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
          </div>
          {episode.duration && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{episode.duration}</span>
            </div>
          )}
        </div>
      </div>

      {/* Audio Player */}
      <div className="audio-player p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={togglePlay}
            className="btn-primary text-white p-4 rounded-full"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>
          
          <div className="flex-1 mx-4">
            <div className="bg-[#2A2A2A] rounded-full h-2 mb-2">
              <div className="bg-[#007BFF] h-2 rounded-full w-1/3" />
            </div>
            <div className="flex justify-between text-sm text-[#A0A0A0]">
              <span>5:23</span>
              <span>{episode.duration || '--:--'}</span>
            </div>
          </div>
          
          <Button
            onClick={handleShare}
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
        
        {episode.audioUrl && (
          <audio
            controls
            className="w-full"
            style={{ filter: 'invert(1) grayscale(1) contrast(1.2)' }}
          >
            <source src={episode.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      {/* Episode Description */}
      <div className="bg-[#1A1A1A] rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">About This Episode</h2>
        <p className="text-[#A0A0A0] leading-relaxed">
          {episode.description}
        </p>
      </div>

      {/* Guest Information */}
      <div className="bg-[#1A1A1A] rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Meet the Guest</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-32 h-32 bg-gradient-to-br from-[#007BFF]/20 to-[#0056B3]/20 rounded-lg flex items-center justify-center">
            {episode.guestPhoto ? (
              <img
                src={episode.guestPhoto}
                alt={episode.guest}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <User className="w-12 h-12 text-[#007BFF]" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">
              {episode.guest}
            </h3>
            <p className="text-[#A0A0A0] leading-relaxed">
              {episode.guestBio || 'Biography not available.'}
            </p>
          </div>
        </div>
      </div>

      {/* Show Notes */}
      {episode.showNotes && (
        <div className="bg-[#1A1A1A] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">Show Notes</h2>
          <div className="text-[#A0A0A0] leading-relaxed">
            <div className={`${showFullNotes ? '' : 'line-clamp-6'}`}>
              {episode.showNotes.split('\n').map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
            {episode.showNotes.length > 300 && (
              <Button
                onClick={() => setShowFullNotes(!showFullNotes)}
                variant="outline"
                className="mt-4 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
              >
                {showFullNotes ? 'Show Less' : 'Show More'}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
