
import { Card, CardContent } from "@/components/ui/card";
import { Code, CircleDot, CakeSlice, BookOpen } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of development services to help bring your ideas to life,
            whether you need a custom application or a complete SAAS solution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* App Development */}
          <Card className="border-none bg-gray-light rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-cheese-light rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-cheese-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">App Development</h3>
              <p className="text-muted-foreground mb-4">
                We create beautiful, functional mobile and web applications tailored to your specific requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>iOS & Android Applications</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Progressive Web Apps</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Cross-platform Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>UI/UX Design</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* SAAS Development */}
          <Card className="border-none bg-gray-light rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-cheese-light rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center mb-6">
                <CakeSlice className="h-8 w-8 text-cheese-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SAAS Solutions</h3>
              <p className="text-muted-foreground mb-4">
                We build scalable, secure software-as-a-service platforms to power your business operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Custom SAAS Development</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>API Development & Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Subscription Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Educational Products */}
          <Card className="border-none bg-gray-light rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-cheese-light rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-cheese-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Products</h3>
              <p className="text-muted-foreground mb-4">
                We specialize in creating engaging educational applications that make learning fun and effective.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Learning Management Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Interactive Learning Tools</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Progress Tracking Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-light shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                    <CircleDot className="h-3 w-3 text-cheese" />
                  </span>
                  <span>Gamified Learning Experiences</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
