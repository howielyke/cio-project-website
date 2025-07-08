
import { EpisodeCard } from '@/components/episode-card';
import { Calendar, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Episodes data - Updated with actual episode information
const episodes = [
  {
    id: '1',
    title: 'Episode 1: The CIO Journey - Leadership Lessons from the Trenches',
    description: 'Join our inaugural episode as we dive deep into what it really means to be a Chief Information Officer in today\'s rapidly evolving tech landscape. Our hosts share their personal journeys, biggest challenges, and the unfiltered truths about leading technology organizations.',
    episodeNumber: 1,
    youtubeId: 'ARSzL4295lE',
    guests: ['Howie L Lyke', 'Brian Shield'],
    publishedAt: new Date('2025-06-15'),
    showNotes: 'In this inaugural episode, we explore the evolving role of the CIO, discuss key leadership strategies, and share personal confessions about the challenges of driving digital transformation in large organizations. Topics covered include: building effective IT teams, managing stakeholder expectations, navigating budget constraints, and the importance of aligning technology strategy with business objectives.',
  },
  {
    id: '2',
    title: 'Episode 2: Vala Ashfar, Chief Evangelist Office, Salesforce',
    description: 'Chief Digital Evangelist, Salesforce.com. Renowned Speaker, and Author of BOUNDLESS and his New BOOK publishing this October 2025, ZDNET Columnist, and weekly Podcast: DisrupTV, VALA AFSHAR, joins us today.',
    episodeNumber: 2,
    youtubeId: 'u517t9BrNQw',
    guests: ['Vala Afshar', 'Brian Shield', 'Howie L Lyke'],
    publishedAt: new Date('2025-06-27'),
    showNotes: 'Join us for an exciting conversation with Vala Ashfar, Chief Evangelist Office at Salesforce. We\'ll explore the current state of the CIO marketplace and dive deep into real AI discussions that matter to technology leaders.',
  }
];

const upcomingEpisode = {
  id: '3',
  title: 'Episode 3: Rob Stricklen, CEO and Founder of Move 37 Ventures LLC',
  description: 'C-level executive for over 30 years in the high-tech arena, including: Apple & Honeywell; The Cable TV Industry, including: Continental Cablevision & The Weather Channel; Satellite TV & Delivery, including: Dish Network & Kymet; and Wireless Carriers, including: T-mobile, Leap Wireless/Cricket, Truconnect, Cape, Pronto and Karrier-One.',
  episodeNumber: 3,
  guests: ['Rob Stricklen'],
  publishedAt: new Date('2025-06-13'),
  showNotes: 'Join us for an exciting conversation with Rob Stricklen, CEO and Founder of Move 37 Ventures LLC, as he shares insights from his 30+ years of C-level executive experience across major tech companies.',
};

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Episodes
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of unfiltered conversations with global technology leaders. 
              Each episode delivers real insights, personal stories, and actionable wisdom.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search episodes..."
                className="pl-10 border-gray-300 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Available Episodes */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h2 className="text-2xl font-bold text-gray-900">Available Now</h2>
              </div>
              <div className="grid gap-8">
                <EpisodeCard episode={episodes[1]} featured={true} />
                <EpisodeCard episode={episodes[0]} featured={true} />
              </div>
            </div>

            {/* Upcoming Episode */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
              </div>
              <div className="grid gap-8">
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-amber-500 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
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

            {/* Subscribe CTA */}
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Never Miss an Episode</h3>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Subscribe to The CIO Project on your favorite podcast platform and get notified 
                  when new episodes are released.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="https://podcasts.apple.com/us/podcast/the-cio-project/id1800079926" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-gray-900 w-full">
                      Subscribe on Apple Podcasts
                    </Button>
                  </a>
                  <a href="https://open.spotify.com/show/706zX0WbNnJuoyTcrLw59z?si=7da97599ad434e30" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full">
                      Listen on Spotify
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
