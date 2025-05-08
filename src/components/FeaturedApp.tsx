
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookText } from "lucide-react";

const FeaturedApp = () => {
  return (
    <section id="apps" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured App</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest creation, crafted with care to make learning fun and effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* App Demo/Image */}
          <div className="order-2 md:order-1">
            <div className="bg-cheese-light rounded-2xl p-8 cheese-shadow">
              <div className="bg-background rounded-xl p-6 flex items-center justify-center h-80 border border-cheese/20">
                <div className="text-center">
                  <BookText className="h-16 w-16 text-cheese mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold">Spelling App Preview</h3>
                  <p className="text-muted-foreground mt-2">Coming soon!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Description */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Spelling Learning App
              <span className="text-sm ml-2 text-muted-foreground">(Name coming soon!)</span>
            </h3>
            <p className="text-lg mb-6">
              Our upcoming spelling application makes learning fun and engaging for students of all ages. 
              With interactive exercises, progress tracking, and customizable word lists, mastering 
              spelling has never been more enjoyable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="border-cheese/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Interactive Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Engaging exercises that adapt to the learner's skill level
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-cheese/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Progress Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualize improvement with detailed performance analytics
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-cheese/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Customizable Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Create your own word lists or use our curated collections
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-cheese/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Multi-platform</h4>
                  <p className="text-sm text-muted-foreground">
                    Available on web, iOS, and Android devices
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-cheese hover:bg-cheese-hover">
              Join the waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApp;
