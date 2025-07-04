
import { Header } from '@/components/header';
import { AboutContent } from '@/components/about-content';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
