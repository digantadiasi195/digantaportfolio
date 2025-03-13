
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "digantadiasi7@gmail.com",
      action: "copy",
    },
    {
      icon: Mail,
      label: "Academic Email",
      value: "d.diasi@iitg.ac.in",
      action: "copy",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7586839723",
      action: "copy",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIT Guwahati, Assam, India",
      action: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setEmail("");
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    
    setTimeout(() => {
      setCopied(null);
    }, 2000);
    
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
    });
  };

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
          <p className="text-muted-foreground">Get in touch for collaborations or opportunities</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 md:p-8 animate-scale-in">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-6 animate-scale-in">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4 p-2 rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <div className="flex items-center">
                        <p className="font-medium">{item.value}</p>
                        {item.action === "copy" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2 h-8 w-8 p-0"
                            onClick={() => handleCopy(item.value, item.label)}
                          >
                            {copied === item.label ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full",
                      "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground",
                      "transition-all duration-300"
                    )}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full",
                      "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground",
                      "transition-all duration-300"
                    )}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Currently Seeking</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2 w-2 h-2 rounded-full bg-primary"></div>
                  <span>Research Collaborations in AI/ML</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 w-2 h-2 rounded-full bg-primary"></div>
                  <span>Internship Opportunities</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 w-2 h-2 rounded-full bg-primary"></div>
                  <span>PhD Positions in Data Science/AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
