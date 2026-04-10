import AboutSection from "@/layout/landing/AboutSection";
import Footer from "@/layout/landing/Footer";
import GallerySection from "@/layout/landing/GallerySection";
import  Header  from "@/layout/landing/Header";
import HeroSection from "@/layout/landing/HeroSection";
import ServiceSection from "@/layout/landing/ServiceSection";
import TestimonialSection from "@/layout/landing/TestimonialSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <header> 
        <Header />    
      </header>

      <main>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <GallerySection />
        <TestimonialSection />
      </main>

      <footer>
        <Footer />
      </footer>
       
     </div>
  );
}
