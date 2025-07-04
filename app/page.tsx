
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { RecentEpisodes } from '@/components/recent-episodes';
import { SponsorsSection } from '@/components/sponsors-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main>
        <HeroSection />
        <RecentEpisodes />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
