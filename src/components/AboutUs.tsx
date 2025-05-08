
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cheese-light/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Us Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About StickyCheeseWorks</h2>
            <p className="text-lg mb-6">
              Founded with a passion for creating software that sticks with users, StickyCheeseWorks 
              is a playful yet professional software development company specializing in educational 
              apps and innovative SAAS solutions.
            </p>
            <p className="text-lg mb-6">
              Our team combines technical expertise with creative thinking to build applications that 
              are not only functional but delightful to use. Just like a perfect cheese blend, we mix 
              the right ingredients to create products that leave lasting impressions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-cheese mr-2 mt-0.5 flex-shrink-0" />
                <p>We value simplicity and user experience above all</p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-cheese mr-2 mt-0.5 flex-shrink-0" />
                <p>Our products are crafted with care and attention to detail</p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="h-6 w-6 text-cheese mr-2 mt-0.5 flex-shrink-0" />
                <p>We continually evolve our offerings based on user feedback</p>
              </div>
            </div>
          </div>
          
          {/* Stats and Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-cheese/20 cheese-shadow bg-background/70">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-xl mb-2">Innovation</h4>
                  <p className="text-muted-foreground">
                    We're constantly exploring new ideas and technologies to create better solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-cheese/20 cheese-shadow bg-background/70">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-xl mb-2">Quality</h4>
                  <p className="text-muted-foreground">
                    We believe in crafting products that stand the test of time and exceed expectations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-cheese/20 cheese-shadow bg-background/70">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-xl mb-2">User Focus</h4>
                  <p className="text-muted-foreground">
                    Everything we build starts with understanding the needs and desires of our users.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-cheese/20 cheese-shadow bg-background/70">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-xl mb-2">Fun</h4>
                  <p className="text-muted-foreground">
                    We believe software should be enjoyable to use and bring a smile to your face.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
