import Footer from "@/components/layout/Footer";
import FAQs from "@/components/layout/homepage/FAQs";
import Features from "@/components/layout/homepage/Features";
import Hero from "@/components/layout/homepage/Hero";
import HowItWorks from "@/components/layout/homepage/HowItWorks";
import WhyItMatters from "@/components/layout/homepage/WhyItMatters";
import Navbar from "@/components/layout/Navbar";
import TakeQuiz from "../components/layout/homepage/TakeQuiz";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <WhyItMatters />
      <FAQs />
      <TakeQuiz />
      <Footer />
    </div>
  );
}
