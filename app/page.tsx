
import { HeroSection } from '@/components/hero-section';
import { EpisodeCard } from '@/components/episode-card';
import { HostProfile } from '@/components/host-profile';
import { Mic, Users, Target, TrendingUp, Shield, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Sample data - Updated with actual episode information
const featuredEpisode = {
  id: '2',
  title: 'Episode 2: Vala Ashfar, Chief Evangelist Office, Salesforce',
  description: 'Chief Digital Evangelist, Salesforce.com. Renowned Speaker, and Author of BOUNDLESS and his New BOOK publishing this October 2025, ZDNET Columnist, and weekly Podcast: DisrupTV, VALA AFSHAR, joins us today.',
  episodeNumber: 2,
  youtubeId: 'u517t9BrNQw', // Episode 2 YouTube ID
  guests: ['Vala Afshar', 'Brian Shield', 'Howie L Lyke'],
  publishedAt: new Date('2025-06-27T12:00:00.000Z'),
  showNotes: 'Join us for an exciting conversation with Vala Ashfar, Chief Evangelist Office at Salesforce. We\'ll explore the current state of the CIO marketplace and dive deep into real AI discussions that matter to technology leaders.',
};

const upcomingEpisode = {
  id: '3',
  title: 'Episode 3: Rob Stricklen, CEO and Founder of Move 37 Ventures LLC',
  description: 'C-level executive for over 30 years in the high-tech arena, including: Apple & Honeywell; The Cable TV Industry, including: Continental Cablevision & The Weather Channel; Satellite TV & Delivery, including: Dish Network & Kymet; and Wireless Carriers, including: T-mobile, Leap Wireless/Cricket, Truconnect, Cape, Pronto and Karrier-One.',
  episodeNumber: 3,
  guests: ['Rob Stricklen'],
  publishedAt: new Date('2025-06-13T12:00:00.000Z'),
  showNotes: 'Join us for an exciting conversation with Rob Stricklen, CEO and Founder of Move 37 Ventures LLC, as he shares insights from his 30+ years of C-level executive experience across major tech companies.',
};

const hosts = [
  {
    name: 'Howie L Lyke',
    title: 'CEO & Veteran IT Strategist',
    company: 'Sherpa Techs LLC',
    bio: 'With nearly four decades of IT leadership strategy experience, Howie brings unparalleled insights into technology transformation and executive leadership. His deep expertise spans enterprise architecture, strategic planning, and organizational change management.',
    experience: 'Nearly 40 years in IT leadership',
    achievements: [
      'CEO of Sherpa Techs LLC',
      'Led digital transformations for Fortune 500 companies', 
      'Pioneered innovative IT governance frameworks',
      'Mentored dozens of emerging CIO leaders',
      'Expert in enterprise architecture and strategic planning'
    ],
    image: '/howie-speaking.png',
    linkedinUrl: '#'
  },
  {
    name: 'Brian Shield',
    title: 'SVP, CTO & CIO',
    company: 'Boston Red Sox',
    bio: 'Brian serves as the SVP, CTO & CIO of the Boston Red Sox and National Chair of InspireCIO, bringing cutting-edge technology leadership to both sports entertainment and the broader IT community. His expertise spans fan experience technology, operational excellence, and diversity initiatives in tech.',
    experience: 'Current C-suite technology executive',
    achievements: [
      'SVP, CTO & CIO at Boston Red Sox',
      'National Chair of InspireCIO organization',
      'Leading digital innovation for major sports franchise',
      'Champion of diversity and inclusion in technology',
      'Expert in fan experience and sports technology'
    ],
    image: '/brian-shield.jpeg',
    linkedinUrl: '#'
  }
];

const stats = [
  {
    icon: Users,
    label: 'C-Suite Audience',
    value: 'Executive',
    description: 'Reach decision-makers and influencers'
  },
  {
    icon: Mic,
    label: 'Authentic Content',
    value: 'Real Talk',
    description: 'Unfiltered conversations and confessions'
  },
  {
    icon: Target,
    label: 'Focused Audience',
    value: 'IT Leaders',
    description: 'Current and aspiring technology executives'
  },
  {
    icon: TrendingUp,
    label: 'Growing Community',
    value: 'Weekly',
    description: 'New episodes and expanding reach'
  }
];

const sponsorshipBenefits = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with technology leaders worldwide'
  },
  {
    icon: Shield,
    title: 'Trusted Authority',
    description: 'Associate your brand with respected industry veterans'
  },
  {
    icon: Star,
    title: 'Quality Audience',
    description: 'Reach decision-makers who influence technology budgets'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Prominent Show Trailer */}
      <HeroSection />

      {/* Why The CIO Project Matters */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why The CIO Project Matters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In a world of sanitized corporate content, we deliver the real conversations, 
                personal confessions, and unfiltered insights that drive technology leadership forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                    <div className="font-medium text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode & Upcoming */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Episodes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dive into authentic conversations that reveal the human side of technology leadership.
                Real insights from real leaders who aren't afraid to share their confessions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Episode */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">Current Episode</h3>
                <EpisodeCard episode={featuredEpisode} featured={true} />
              </div>

              {/* Upcoming Episode */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-600">Coming Soon</h3>
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-amber-500 flex items-center justify-center">
                      <Mic className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{upcomingEpisode.title}</h4>
                      <p className="text-gray-600 mt-2">{upcomingEpisode.description}</p>
                      <p className="text-sm text-red-600 mt-3 font-medium">
                        Releasing June 11-15th
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/episodes">
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  View All Episodes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Hosts */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Meet Your Hosts
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn from two industry veterans who bring decades of real-world experience 
                and hard-won wisdom to every conversation. No corporate speak, just authentic insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hosts.map((host, index) => (
                <HostProfile key={host.name} host={host} index={index} />
              ))}
            </div>

            <div className="pt-8">
              <Link href="/about">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900">
                  Learn More About Our Hosts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Partner with The CIO Project
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Reach an exclusive audience of C-suite technology executives and decision-makers 
                who influence technology investments and strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorshipBenefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg bg-red-50 border border-red-100">
                  <div className="w-12 h-12 mx-auto rounded-full bg-red-600 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">{benefit.title}</h3>
                    <p className="text-red-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/sponsors">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for Real Talk?
            </h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Join thousands of technology leaders who trust The CIO Project for 
              unfiltered insights, authentic conversations, and the confessions that drive real change.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4">
              Subscribe to Podcast
            </Button>
            <Link href="/sponsors">
              <Button size="lg" className="show-trailer-highlight text-amber-400 font-semibold px-8 py-4">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
