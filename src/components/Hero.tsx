
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center animate-fade-in">
        <div className="w-28 h-28 rounded-full mb-6 overflow-hidden ring-4 ring-primary/20 shadow-xl animate-scale-in">
          <img 
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Diganta Diasi" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium text-primary bg-primary/10">
          Data Scientist & AI Researcher
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
          Hi, I'm <span className="text-primary">Diganta Diasi</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-muted-foreground mb-8 text-balance">
          M.Tech in Data Science at IIT Guwahati, specializing in machine learning, deep learning, and AI research with a focus on multimodal systems.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mt-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full",
              "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground",
              "transition-all duration-300"
            )}
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full",
              "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground",
              "transition-all duration-300"
            )}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:digantadiasi7@gmail.com" 
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full",
              "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground",
              "transition-all duration-300"
            )}
          >
            <Mail size={20} />
          </a>
        </div>
        
        <div className="absolute bottom-8">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
            </div>
            <span className="text-xs text-muted-foreground mt-2">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
