
import { Metadata } from 'next';
import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocalSeo from "@/components/home/LocalSeo";
import Reviews from "@/components/home/Reviews";
import ServiceAreas from "@/components/home/ServiceAreas";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: 'Top Tree Service in Lubbock, TX | Lubbock Tree Experts',
  description: 'Lubbock Tree Experts offers professional tree service in Lubbock, TX, including tree removal, trimming, stump grinding, and emergency services. Call for a free estimate!',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <LocalSeo />
      <Reviews />
      <ServiceAreas />
      <FinalCta />
    </main>
  );
}
