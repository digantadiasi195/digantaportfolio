
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground">My background and expertise</p>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8 animate-scale-in">
          <p className="text-lg leading-relaxed mb-8">
            I'm currently pursuing an M.Tech in Data Science at the Indian Institute of Technology, Guwahati. 
            With a strong foundation in mathematics and computer science, I specialize in machine learning, 
            deep learning, and AI research with a particular focus on multimodal systems, natural language 
            processing, and computer vision applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={cn(
              "flex flex-col items-center text-center p-4 rounded-lg",
              "bg-secondary/50 border border-border transition-transform",
              "hover:translate-y-[-4px] hover:shadow-md"
            )}>
              <GraduationCap className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">Education</h3>
              <p className="text-sm text-muted-foreground">M.Tech in Data Science (IIT Guwahati) and M.Tech in CS & Data Processing (IIT Kharagpur)</p>
            </div>
            
            <div className={cn(
              "flex flex-col items-center text-center p-4 rounded-lg",
              "bg-secondary/50 border border-border transition-transform",
              "hover:translate-y-[-4px] hover:shadow-md"
            )}>
              <Briefcase className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">Experience</h3>
              <p className="text-sm text-muted-foreground">Teaching Assistant at Coursera Digital Learning Platform</p>
            </div>
            
            <div className={cn(
              "flex flex-col items-center text-center p-4 rounded-lg",
              "bg-secondary/50 border border-border transition-transform",
              "hover:translate-y-[-4px] hover:shadow-md"
            )}>
              <Award className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">Achievements</h3>
              <p className="text-sm text-muted-foreground">GATE (MA) Qualified with AIR 546 in Mathematics</p>
            </div>
          </div>
          
          <p className="text-base text-muted-foreground">
            My academic background spans mathematics, computer science, and data science, giving me a unique perspective 
            on solving complex problems. I'm passionate about designing intelligent systems that can understand and 
            interpret multimodal data to make meaningful impacts in fields like healthcare, research, and security.
          </p>
        </div>
      </div>
    </section>
  );
}
