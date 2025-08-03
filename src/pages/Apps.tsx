import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Image, Calculator } from "lucide-react";

const Apps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-light to-cheese-light">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="bg-gray-light p-8 rounded-2xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] mb-8 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our <span className="text-cheese-dark">Apps</span>
                </h1>
                <p className="text-lg md:text-xl">
                  Discover our collection of innovative applications designed to make your life easier and more productive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Image Coded Cheese App */}
              <Card className="border-none bg-gray-light rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-cheese-light rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center mb-6">
                    <Image className="h-8 w-8 text-cheese-dark" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Image Coded Cheese</h3>
                  
                  <p className="text-muted-foreground mb-6">
                    An AI-powered image generation tool that transforms your creative ideas into stunning visuals. 
                    Create custom images using text prompts with various artistic styles, effects, and filters. 
                    Perfect for designers, content creators, and anyone looking to bring their imagination to life.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>AI-powered image generation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>Multiple artistic styles and effects</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>Text-to-image conversion</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>High-quality output formats</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-cheese hover:bg-cheese-hover w-full shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] rounded-xl"
                    onClick={() => window.open('https://image.codedcheese.com', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit App
                  </Button>
                </CardContent>
              </Card>

              {/* Calorie Coded Cheese App */}
              <Card className="border-none bg-gray-light rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-cheese-light rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center mb-6">
                    <Calculator className="h-8 w-8 text-cheese-dark" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Calorie Coded Cheese</h3>
                  
                  <p className="text-muted-foreground mb-6">
                    A comprehensive nutrition tracking application that helps you monitor your daily calorie intake 
                    and maintain healthy eating habits. Track meals, set goals, and get insights into your nutritional 
                    patterns with an intuitive and user-friendly interface.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>Daily calorie tracking</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>Nutritional insights and analytics</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>Goal setting and progress tracking</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-cheese"></span>
                      </span>
                      <span>User-friendly meal logging</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-cheese hover:bg-cheese-hover w-full shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] rounded-xl"
                    onClick={() => window.open('https://calorie.codedcheese.com', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit App
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-t from-gray-light to-cheese-light/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gray-light p-8 rounded-2xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Have an App Idea?</h2>
              <p className="text-lg mb-6">
                We'd love to help bring your vision to life. Get in touch with us to discuss your next project.
              </p>
              <Button 
                className="bg-cheese hover:bg-cheese-hover shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] rounded-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apps;