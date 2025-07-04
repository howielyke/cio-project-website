
import { Header } from '@/components/header';
import { EpisodesList } from '@/components/episodes-list';
import { Footer } from '@/components/footer';

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              All Episodes
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Browse our complete collection of conversations with enterprise leaders and technology visionaries.
            </p>
          </div>
          <EpisodesList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
