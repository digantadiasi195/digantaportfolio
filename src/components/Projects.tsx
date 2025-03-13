
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Multi-Modal Deepfake Detection",
    description: "Developed a Multimodal DeepFake Classification model using Graph Attention Networks to detect and classify deepfake videos into four categories by integrating video and audio modalities, using the FakeAVCeleb dataset.",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Graph Attention Networks", "CNN", "Multimodal Fusion", "Deepfake Detection"],
    github: "https://github.com",
    link: "",
    period: "Aug 2024 - Present",
    type: "Master's Thesis",
    supervisor: "Dr. Prashant W. Patil (MFSDSAI) and Dr. Anirban Dasgupta (Dept. of EEE)",
  },
  {
    title: "Academic Research Paper Assistant",
    description: "Developed a Streamlit-based AI Research Paper Assistant with a FastAPI backend, integrating a multi-agent system for intelligent retrieval, Q&A, summarization, and future research prediction using Neo4j for graph-based storage.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["LLM", "RAG", "FastAPI", "Neo4j", "Streamlit", "FAISS"],
    github: "https://github.com",
    link: "",
    period: "Nov 2024 - Feb 2025",
    type: "Self Project",
    supervisor: "",
  },
  {
    title: "AI-Based Healthcare Assistant",
    description: "Developed a healthcare assistant by fine-tuning the Llama2-7b language model with a custom dataset from the Gale Encyclopedia of Alternative Medicine, implementing a pipeline to generate responses up to 200 tokens.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Llama2", "QLoRA", "Hugging Face", "Fine-tuning"],
    github: "https://github.com",
    link: "",
    period: "Jan 2024 - May 2024",
    type: "Course Project",
    supervisor: "Dr. Chiranjib Sur, Assistant Professor, MFSDSAI, IIT Guwahati",
  },
  {
    title: "Care Vision AI",
    description: "Created AI models to detect medical conditions such as skin cancer, brain tumors, lung cancer, and pneumonia using custom CNN architecture, SVM, Random Forest, and morphological operations for image processing.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Computer Vision", "CNN", "Transfer Learning", "Medical Imaging"],
    github: "https://github.com",
    link: "",
    period: "Jan 2024 - May 2024",
    type: "Course Project",
    supervisor: "Dr. Debanga Raj Neog, Assistant Professor, MFSDSAI, IIT Guwahati",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">My recent work and research</p>
        </div>
        
        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projects.map((project, index) => (
            <Button
              key={index}
              variant={activeProject === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveProject(index)}
              className="transition-all duration-300"
            >
              {project.title.split(" ").slice(0, 2).join(" ")}
            </Button>
          ))}
        </div>
        
        {/* Project Display */}
        <div className="animate-scale-in">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl overflow-hidden transition-opacity duration-500",
                activeProject === index ? "block" : "hidden"
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-60 lg:h-full overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-medium text-primary bg-primary/10">
                        {project.type}
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="icon" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.link && (
                        <Button size="icon" variant="outline" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {project.period}
                    {project.supervisor && (
                      <div className="mt-1">
                        <span className="font-medium">Supervisor:</span> {project.supervisor}
                      </div>
                    )}
                  </div>
                  
                  <p className="mb-6 text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
