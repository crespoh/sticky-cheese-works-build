
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedApp from "@/components/FeaturedApp";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedApp />
        <AboutUs />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
