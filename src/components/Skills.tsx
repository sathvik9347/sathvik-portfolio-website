import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Zap, 
  GitBranch, 
  TestTube,
  Cpu,
  Brain,
  MessageSquare
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Solidity", "Gosu"],
    color: "text-blue-600"
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    skills: ["Spring Boot", "Spring Framework", "Node.js", "Express.js"],
    color: "text-green-600"
  },
  {
    title: "Frontend Technologies",
    icon: Zap,
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Web3.js"],
    color: "text-purple-600"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (Lambda, RDS, S3)", "Docker", "Kubernetes", "CI/CD"],
    color: "text-orange-600"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB", "PostgreSQL", "AWS RDS", "Redis"],
    color: "text-indigo-600"
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: ["GitHub", "JUnit", "Maven", "Gradle", "CoppeliaSim"],
    color: "text-red-600"
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    skills: ["JUnit", "Integration Testing", "TDD", "Unit Testing", "Test Coverage"],
    color: "text-teal-600"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "Q-learning", "MCTS", "A* Algorithm", "Python ML"],
    color: "text-pink-600"
  },
  {
    title: "Messaging & Streaming",
    icon: MessageSquare,
    skills: ["Apache Kafka", "ZeroMQ", "REST APIs", "WebSockets"],
    color: "text-cyan-600"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-bounce-subtle"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group shadow-glass hover:shadow-xl border-0 bg-card-gradient hover:bg-card-gradient-hover transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-muted to-muted/50 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm bg-muted/60 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced experience showcase */}
        <div className="mt-20 text-center">
          <Card className="group shadow-xl border-0 bg-hero-gradient hover:bg-hero-gradient-dark p-12 text-white relative overflow-hidden transform hover:scale-105 transition-all duration-500">
            {/* Animated particles */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:scale-105 transition-transform duration-300">
                4+ Years of Experience
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Specialized in building complete web applications with modern frontend frameworks, 
                robust backend APIs, and scalable cloud-native architectures.
              </p>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-80">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-80">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};