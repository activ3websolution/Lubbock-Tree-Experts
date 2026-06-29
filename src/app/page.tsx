import Hero from "@/components/home/Hero";
import LocalSeo from "@/components/home/LocalSeo";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";
import Trust from "@/components/home/Trust";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <LocalSeo />
      <Reviews />
    </>
  );
}
