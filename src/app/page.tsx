import Footer from "@/components/layout/Footer";
import Features from "@/components/layout/homepage/Features";
import Hero from "@/components/layout/homepage/Hero";
import HowItWorks from "@/components/layout/homepage/HowItWorks";
import Testimonials from "@/components/layout/homepage/Testimonials";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
