
import { Card, CardContent } from "@/components/ui/card";
import { Code, CircleDot, CakeSlice } from "lucide-react";

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
          <Card className="border-cheese/20 hover:border-cheese transition-colors">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-cheese-light rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-cheese-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">App Development</h3>
              <p className="text-muted-foreground mb-4">
                We create beautiful, functional mobile and web applications tailored to your specific requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>iOS & Android Applications</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Progressive Web Apps</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Cross-platform Solutions</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>UI/UX Design</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* SAAS Development */}
          <Card className="border-cheese/20 hover:border-cheese transition-colors">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-cheese-light rounded-full flex items-center justify-center mb-4">
                <CakeSlice className="h-6 w-6 text-cheese-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SAAS Solutions</h3>
              <p className="text-muted-foreground mb-4">
                We build scalable, secure software-as-a-service platforms to power your business operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Custom SAAS Development</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>API Development & Integration</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Subscription Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Educational Products */}
          <Card className="border-cheese/20 hover:border-cheese transition-colors">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-cheese-light rounded-full flex items-center justify-center mb-4">
                <BookText className="h-6 w-6 text-cheese-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Products</h3>
              <p className="text-muted-foreground mb-4">
                We specialize in creating engaging educational applications that make learning fun and effective.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Learning Management Systems</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Interactive Learning Tools</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
                  <span>Progress Tracking Solutions</span>
                </li>
                <li className="flex items-center">
                  <CircleDot className="h-4 w-4 text-cheese mr-2" />
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
