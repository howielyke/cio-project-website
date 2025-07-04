
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: string;
  description: string;
  active: boolean;
}

export function SponsorsSection() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    try {
      const response = await fetch('/api/sponsors');
      const data = await response.json();
      setSponsors(data.sponsors?.filter((s: Sponsor) => s.active) || []);
    } catch (error) {
      console.error('Error fetching sponsors:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || sponsors.length === 0) {
    return (
      <section className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Our Sponsors
            </h2>
            <p className="text-xl text-[#A0A0A0]">
              Proud partners supporting enterprise innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-lg p-6 animate-pulse">
                <div className="h-16 bg-[#2A2A2A] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Proud partners supporting enterprise innovation
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] rounded-lg p-6 card-hover group"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/sponsors">
            <Button variant="outline" className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-8 py-3 text-lg">
              Learn More About Our Sponsors
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
