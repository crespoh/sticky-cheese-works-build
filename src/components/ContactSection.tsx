import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-cheese-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to discuss a potential project? 
            We'd love to hear from you! Fill out the form below and we'll respond shortly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background rounded-xl p-8 cheese-shadow">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-cheese/20 focus-visible:ring-cheese"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-cheese/20 focus-visible:ring-cheese"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  required
                  className="border-cheese/20 focus-visible:ring-cheese min-h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-cheese hover:bg-cheese-hover w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⏳</span> Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-10 w-10 bg-cheese rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:info@stickycheeseworks.com" className="text-cheese-dark hover:underline">
                    info@stickycheeseworks.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 bg-cheese rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p>StickyCheeseWorks is a remote-first company,</p>
                  <p>with team members around the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
