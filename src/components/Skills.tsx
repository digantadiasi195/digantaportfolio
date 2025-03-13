
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C/C++", "SQL", "Python"],
  },
  {
    name: "Tools & Frameworks",
    skills: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "OpenCV", "FastAPI", "Transformers", "Ollama", "Neo4j"],
  },
  {
    name: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Data Science",
    skills: ["Machine Learning", "Deep Learning", "NLP with LLMs", "Image Processing"],
  },
  {
    name: "Computer Science",
    skills: ["Data Structures", "Algorithms", "OOPs", "DBMS", "Operating Systems"],
  },
  {
    name: "Mathematics",
    skills: ["Linear Algebra", "Probability & Statistics", "Optimization", "Matrix Computations"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="text-muted-foreground">My technical expertise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 transition-transform",
                "hover:translate-y-[-4px] hover:shadow-md"
              )}
              style={{ "--stagger": index } as React.CSSProperties}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm",
                      "bg-secondary border border-border",
                      "transition-colors hover:bg-primary hover:text-primary-foreground"
                    )}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className={cn(
            "inline-block glass-card rounded-xl p-6",
            "animate-scale-in"
          )}>
            <h3 className="text-xl font-semibold mb-4">Positions of Responsibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <h4 className="font-medium mb-1">Core Team Member</h4>
                <p className="text-sm text-muted-foreground">Social Service Club, IIT Guwahati</p>
                <div className="text-xs mt-1 text-muted-foreground">July 2024 - Present</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <h4 className="font-medium mb-1">Core Team Member</h4>
                <p className="text-sm text-muted-foreground">Academic Initiative Club, IIT Guwahati</p>
                <div className="text-xs mt-1 text-muted-foreground">August 2024 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
