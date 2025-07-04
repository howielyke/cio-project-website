
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, Mail } from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: string;
  description: string;
  active: boolean;
}

export function SponsorsContent() {
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

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const getTierInfo = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return { name: 'Platinum Partners', color: 'text-gray-300', icon: '💎' };
      case 'gold':
        return { name: 'Gold Partners', color: 'text-yellow-400', icon: '🏆' };
      case 'silver':
        return { name: 'Silver Partners', color: 'text-gray-400', icon: '🥈' };
      default:
        return { name: 'Partners', color: 'text-[#007BFF]', icon: '🤝' };
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('sponsor-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Our Sponsors
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Loading sponsor information...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
          Our Sponsors
        </h1>
        <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
          We're proud to partner with innovative companies that share our vision of 
          advancing enterprise technology and leadership.
        </p>
      </div>

      {/* Sponsor Tiers */}
      {Object.entries(groupedSponsors).map(([tier, tierSponsors]) => {
        const tierInfo = getTierInfo(tier);
        return (
          <div key={tier} className="mb-16">
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold ${tierInfo.color} mb-2`}>
                {tierInfo.icon} {tierInfo.name}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tierSponsors.map((sponsor) => (
                <div key={sponsor.id} className="bg-[#1A1A1A] rounded-lg p-6 card-hover">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 text-center">
                    {sponsor.name}
                  </h3>
                  
                  {sponsor.description && (
                    <p className="text-[#A0A0A0] mb-4 text-center">
                      {sponsor.description}
                    </p>
                  )}
                  
                  <div className="text-center">
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Button className="btn-primary text-white">
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Empty State */}
      {sponsors.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-12 h-12 text-[#007BFF]" />
          </div>
          <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">
            Join Our Sponsor Family
          </h3>
          <p className="text-[#A0A0A0] max-w-md mx-auto">
            We're currently building our sponsor network. Be part of the conversation 
            that's shaping the future of enterprise technology.
          </p>
        </div>
      )}

      {/* Sponsorship CTA */}
      <div id="sponsor-contact" className="bg-[#1A1A1A] rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-[#F5F5F5] mb-4">
          Become a Sponsor
        </h2>
        <p className="text-xl text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
          Partner with The CIO Project to reach an engaged audience of technology leaders, 
          decision-makers, and innovators shaping the future of enterprise technology.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">10K+</div>
            <div className="text-[#A0A0A0]">Monthly Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">85%</div>
            <div className="text-[#A0A0A0]">C-Level Audience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">50+</div>
            <div className="text-[#A0A0A0]">Episodes Released</div>
          </div>
        </div>
        
        <Button 
          onClick={scrollToContact}
          className="btn-primary text-white font-medium px-8 py-3 text-lg"
        >
          <Mail className="w-5 h-5 mr-2" />
          Get Sponsorship Details
        </Button>
      </div>
    </div>
  );
}
