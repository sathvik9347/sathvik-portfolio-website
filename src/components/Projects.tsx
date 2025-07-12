import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "NFT Marketplace",
    description: "A decentralized marketplace for minting, buying, and selling NFTs with secure wallet integration and smart contract functionality.",
    technologies: ["Solidity", "React.js", "Web3.js", "MetaMask", "Ethereum"],
    features: [
      "Smart contract development for secure NFT transactions",
      "MetaMask wallet integration for seamless user authentication",
      "Responsive React.js frontend with modern UI/UX design",
      "Real-time transaction tracking and confirmation"
    ]
  },
  {
    title: "Q-learning Robotic Simulation",
    description: "An intelligent robotic simulation system using reinforcement learning for autonomous decision-making and path optimization.",
    technologies: ["Python", "CoppeliaSim", "ZMQ", "Q-learning", "AI/ML"],
    features: [
      "Implemented Q-learning algorithm for autonomous navigation",
      "Real-time communication using ZeroMQ messaging protocol",
      "3D robotic simulation environment in CoppeliaSim",
      "Adaptive learning system for optimal path finding"
    ]
  },
  {
    title: "FOON AI Task Planner",
    description: "Advanced AI task planning system for automated food preparation using multiple search algorithms and optimization techniques.",
    technologies: ["Python", "A*", "IDS", "MCTS", "Algorithm Design"],
    features: [
      "Multiple search algorithms: A*, Iterative Deepening Search, Monte Carlo Tree Search",
      "Automated food preparation task optimization",
      "Intelligent decision-making for complex multi-step processes",
      "Performance comparison and algorithm selection based on task complexity"
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-background via-muted/10 to-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in full stack development, AI, and blockchain technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group shadow-glass hover:shadow-xl border-0 bg-card-gradient hover:bg-card-gradient-hover h-full flex flex-col transform hover:scale-105 transition-all duration-500 overflow-hidden relative ${
                index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
              }`}
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col relative z-10">
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${featureIndex * 0.2}s` }}></span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-8">
                  {project.link && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-hero-gradient hover:bg-hero-gradient-dark group-hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:border-primary/50 group-hover:scale-105 transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {!project.link && !project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 opacity-60 cursor-not-allowed" 
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Private Repo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};