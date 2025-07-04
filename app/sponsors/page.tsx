
import { Header } from '@/components/header';
import { SponsorsContent } from '@/components/sponsors-content';
import { Footer } from '@/components/footer';

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main className="pt-20">
        <SponsorsContent />
      </main>
      <Footer />
    </div>
  );
}
