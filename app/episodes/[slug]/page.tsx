
import { Header } from '@/components/header';
import { EpisodeDetail } from '@/components/episode-detail';
import { Footer } from '@/components/footer';
import { getEpisodeBySlug } from '@/lib/episodes';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface EpisodePageProps {
  params: {
    slug: string;
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const episode = await getEpisodeBySlug(params.slug);
  
  if (!episode) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main className="pt-20">
        <EpisodeDetail episode={episode} />
      </main>
      <Footer />
    </div>
  );
}
