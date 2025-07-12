import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Intel",
    role: "Full Stack Developer",
    period: "2025 – Present",
    location: "Remote",
    description: [
      "Built full stack applications with high-performance REST APIs handling 100K+ transactions daily using AWS RDS, Java, and Spring Boot",
      "Developed responsive React.js frontends with modern UI/UX design and seamless backend integration",
      "Implemented scalable microservices architecture for enterprise-level applications"
    ],
    technologies: ["Java", "Spring Boot", "React.js", "AWS RDS", "REST APIs", "Microservices"]
  },
  {
    company: "HCL Technologies",
    role: "Software Engineer",
    period: "2021 – 2023",
    location: "Chennai, India",
    description: [
      "Developed comprehensive insurance platform features using Guidewire, Gosu, and Java",
      "Improved test coverage from 60% to 85% through implementation of comprehensive unit and integration tests",
      "Reduced system downtime by 30% through proactive monitoring and performance optimization"
    ],
    technologies: ["Java", "Guidewire", "Gosu", "JUnit", "Integration Testing"]
  },
  {
    company: "Dell Technologies",
    role: "Software Developer",
    period: "2020 – 2021",
    location: "Bangalore, India",
    description: [
      "Designed and implemented backend billing APIs for enterprise customer management system",
      "Enhanced user interface components using Tailwind CSS and modern React patterns",
      "Focused on Test-Driven Development (TDD) and comprehensive integration testing strategies"
    ],
    technologies: ["Java", "React.js", "Tailwind CSS", "TDD", "REST APIs"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable systems across leading technology companies
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 bg-card-gradient">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                    <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};