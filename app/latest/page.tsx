import { EpisodeCard } from '@/components/episode-card';
import { Button } from '@/components/ui/button';

// Latest episode data
const latestEpisode = {
  id: '2',
  title: 'Episode 2: Vala Ashfar, Chief Evangelist Office, Salesforce',
  description: 'Chief Digital Evangelist, Salesforce.com. Renowned Speaker, and Author of BOUNDLESS and his New BOOK publishing this October 2025, ZDNET Columnist, and weekly Podcast: DisrupTV, VALA AFSHAR, joins us today.',
  episodeNumber: 2,
  youtubeId: 'u517t9BrNQw',
  guests: ['Vala Afshar', 'Brian Shield', 'Howie L Lyke'],
  publishedAt: new Date('2025-06-27'),
  showNotes: 'Join us for an exciting conversation with Vala Ashfar, Chief Evangelist Office at Salesforce. We\'ll explore the current state of the CIO marketplace and dive deep into real AI discussions that matter to technology leaders.',
};

export default function LatestEpisodePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Current Episode
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enjoy the current episode of The CIO Project featuring authentic conversations 
              with global technology leaders sharing their real insights and confessions.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Current Episode */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h2 className="text-2xl font-bold text-gray-900">Latest Episode</h2>
              </div>
              <div className="grid gap-8">
                <EpisodeCard episode={latestEpisode} featured={true} />
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
