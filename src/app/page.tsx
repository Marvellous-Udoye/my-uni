import Footer from "@/components/layout/Footer";
import FAQs from "@/components/layout/homepage/FAQs";
import Features from "@/components/layout/homepage/Features";
import Hero from "@/components/layout/homepage/Hero";
import HowItWorks from "@/components/layout/homepage/HowItWorks";
import Testimonials from "@/components/layout/homepage/Testimonials";
import Navbar from "@/components/layout/Navbar";
import TakeQuiz from "../components/layout/homepage/TakeQuiz";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQs />
      <TakeQuiz />
      <Footer />
    </div>
  );
}
