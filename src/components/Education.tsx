
import { cn } from "@/lib/utils";

const educationData = [
  {
    year: "2023 - Present",
    degree: "M.Tech (Data Science)",
    institute: "Indian Institute of Technology, Guwahati",
    grade: "8.00 CGPA",
  },
  {
    year: "2021 - 2023",
    degree: "M.Tech (CS & Data Processing)",
    institute: "Indian Institute of Technology, Kharagpur",
    grade: "8.58 CGPA",
  },
  {
    year: "2018 - 2020",
    degree: "M.Sc. (Applied Mathematics)",
    institute: "Vidyasagar University, West Bengal",
    grade: "7.52 CGPA",
  },
  {
    year: "2014 - 2018",
    degree: "B.Sc. (Mathematics Hons.)",
    institute: "Vidyasagar University, West Bengal",
    grade: "58.00%",
  },
  {
    year: "2014",
    degree: "Higher Secondary",
    institute: "West Bengal State Board",
    grade: "66.80%",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground">My academic journey</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative animate-stagger">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <div className={cn(
                  "flex flex-col md:flex-row md:items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : "",
                )}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-md"></div>
                  
                  {/* Mobile vertical design */}
                  <div className="md:hidden absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-md"></div>
                  <div className="md:hidden pl-6 border-l border-border">
                    <div className="glass-card rounded-lg p-5 shadow-sm">
                      <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-medium text-primary bg-primary/10">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institute}</p>
                      <div className="mt-2 text-sm font-medium">{item.grade}</div>
                    </div>
                  </div>
                  
                  {/* Desktop horizontal design */}
                  <div className="hidden md:block md:w-1/2 px-8">
                    <div className={cn(
                      "glass-card rounded-lg p-5 shadow-sm transition-transform",
                      "hover:translate-y-[-4px] hover:shadow-md"
                    )}>
                      <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-medium text-primary bg-primary/10">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institute}</p>
                      <div className="mt-2 text-sm font-medium">{item.grade}</div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
