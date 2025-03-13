
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Diganta Diasi. All rights reserved.
          </p>
          
          <div className="mt-2 flex space-x-4">
            <a 
              href="#home" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="mt-6">
            <div className={cn(
              "inline-block py-1.5 px-4 rounded-full",
              "text-xs text-muted-foreground/70"
            )}>
              Made with precision and care
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
