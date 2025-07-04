
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, User, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

export function EpisodesList() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchEpisodes();
  }, [searchTerm, selectedCategory, currentPage]);

  const fetchEpisodes = async () => {
    try {
      const params = new URLSearchParams({
        search: searchTerm,
        category: selectedCategory === 'all' ? '' : selectedCategory,
        page: currentPage.toString(),
        limit: '12',
      });

      const response = await fetch(`/api/episodes?${params}`);
      const data = await response.json();
      setEpisodes(data.episodes || []);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'AI/ML', label: 'AI/ML' },
    { value: 'Cloud', label: 'Cloud' },
    { value: 'Security', label: 'Security' },
    { value: 'Leadership', label: 'Leadership' },
    { value: 'Innovation', label: 'Innovation' },
  ];

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
            <Input
              placeholder="Search episodes..."
              className="pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#007BFF]"
              disabled
            />
          </div>
          <Select disabled>
            <SelectTrigger className="w-full md:w-48 bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Loading skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#1A1A1A] rounded-lg p-6 animate-pulse">
              <div className="h-32 bg-[#2A2A2A] rounded-lg mb-4" />
              <div className="h-6 bg-[#2A2A2A] rounded mb-2" />
              <div className="h-4 bg-[#2A2A2A] rounded mb-4" />
              <div className="h-16 bg-[#2A2A2A] rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
          <Input
            placeholder="Search episodes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#007BFF]"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48 bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Episodes Grid */}
      {episodes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-[#1A1A1A] rounded-lg p-6 card-hover group">
              <div 
                className="h-32 bg-gradient-to-br from-[#007BFF]/20 to-[#0056B3]/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/6Khv9P1tCiQ/maxresdefault.jpg with ${episode.guest}:16:9}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 bg-[#007BFF] text-white text-xs px-2 py-1 rounded">
                  {episode.category}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 line-clamp-2">
                {episode.title}
              </h3>
              
              <div className="flex items-center text-[#A0A0A0] text-sm mb-3">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{episode.guest}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{episode.duration}</span>
              </div>
              
              <p className="text-[#A0A0A0] mb-4 line-clamp-3 text-sm">
                {episode.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#A0A0A0] text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
                </div>
                
                <Link href={`/episodes/${episode.slug}`}>
                  <Button size="sm" className="btn-primary text-white">
                    Listen
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-[#A0A0A0] mb-4">
            <Search className="w-12 h-12 mx-auto mb-4" />
            <p className="text-lg">No episodes found matching your criteria.</p>
            <p className="text-sm">Try adjusting your search or filter options.</p>
          </div>
        </div>
      )}
    </div>
  );
}
