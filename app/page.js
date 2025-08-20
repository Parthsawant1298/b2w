import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Section from "@/components/Section";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonial";
import LowerSection from "@/components/LowerFooter";
import Footer from "@/components/Footer";
import Collaboration from "@/components/Collaboration";
import WhyChoose from "@/components/Whychoose";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Section />
       <WhyChoose />
      <Collaboration />
     
      <Pricing />
      <Testimonials />
      <LowerSection />
      <Footer />
    </main>
  );
}