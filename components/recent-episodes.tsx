
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Episode {
  id: string;
  title: string;
  slug: string;
  guest: string;
  description: string;
  category: string;
  publishDate: string;
  duration: string;
  featured: boolean;
}

export function RecentEpisodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentEpisodes();
  }, []);

  const fetchRecentEpisodes = async () => {
    try {
      const response = await fetch('/api/episodes?limit=3');
      const data = await response.json();
      setEpisodes(data.episodes || []);
    } catch (error) {
      console.error('Error fetching recent episodes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Latest Episodes
            </h2>
            <p className="text-xl text-[#A0A0A0]">
              Discover the most recent conversations with industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#111111] rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-[#2A2A2A] rounded-lg mb-4" />
                <div className="h-6 bg-[#2A2A2A] rounded mb-2" />
                <div className="h-4 bg-[#2A2A2A] rounded mb-4" />
                <div className="h-20 bg-[#2A2A2A] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Latest Episodes
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Discover the most recent conversations with industry leaders
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-[#111111] rounded-lg p-6 card-hover">
              <div 
                className="h-48 bg-gradient-to-br from-[#007BFF]/20 to-[#0056B3]/20 rounded-lg mb-4 flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/umj9LFUmnsk/maxresdefault.jpg featuring ${episode.guest}:16:9}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="text-[#007BFF] font-bold text-lg">
                  {episode.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 line-clamp-2">
                {episode.title}
              </h3>
              
              <div className="flex items-center text-[#A0A0A0] text-sm mb-3">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{episode.guest}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{episode.duration}</span>
              </div>
              
              <p className="text-[#A0A0A0] mb-4 line-clamp-3">
                {episode.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#A0A0A0] text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
                </div>
                
                <Link href={`/episodes/${episode.slug}`}>
                  <Button className="btn-primary text-white font-medium">
                    Listen Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/episodes">
            <Button variant="outline" className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-8 py-3 text-lg">
              View All Episodes
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
