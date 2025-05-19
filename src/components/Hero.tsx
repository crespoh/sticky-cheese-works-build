
import { Button } from "@/components/ui/button";
import { ArrowRight, Cookie } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-light to-cheese-light py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cheese-pattern opacity-30"></div>
      
      {/* Floating Cookie Icons */}
      <div className="absolute top-1/4 left-10 animate-float">
        <Cookie className="h-12 w-12 text-cheese opacity-30" />
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <Cookie className="h-16 w-16 text-cheese opacity-30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
        <Cookie className="h-10 w-10 text-cheese opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Coded Ideas,</span>
            <span className="text-cheese-dark">Cheesy Solutions</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We craft delightful apps and SAAS solutions that stick with your users. 
            From educational tools to business software, our cheese-powered team
            delivers excellence with a smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cheese hover:bg-cheese-hover text-lg px-6 py-6 h-auto">
              Explore Our Apps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-cheese text-foreground hover:bg-cheese/10 text-lg px-6 py-6 h-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
