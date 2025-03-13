
import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/4">
              <div className="p-4 rounded-lg bg-secondary/50 text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-primary/10 mb-4">
                  <img 
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png" 
                    alt="Coursera Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold">Coursera</h3>
                <p className="text-sm text-muted-foreground">Digital Learning Platform</p>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <h3 className="text-xl font-semibold">Teaching Assistant</h3>
                <div className="bg-primary/10 text-primary text-xs font-medium rounded-full px-2.5 py-0.5">
                  Academic
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  <span>Nov 2023 - Apr 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-1.5 h-4 w-4" />
                  <span>Guwahati, Assam</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-base">
                  Served as a Teaching Assistant for C Programming and Foundations of Data Science courses as part of the Online B.Sc. (Hons.) in Data Science and Artificial Intelligence program organized by IIT Guwahati on Coursera.
                </p>
                
                <ul className="space-y-2 text-base">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Assisted over 375 students, providing guidance and support in their learning journey</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Conducted lab sessions and evaluated assignments to enhance student understanding</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Addressed technical queries and created assessment questions to test student knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className={cn(
            "inline-block py-1.5 px-4 rounded-full",
            "text-sm text-muted-foreground border border-border"
          )}>
            Currently open to new opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
