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
    location: "Tampa, USA",
    description: [
      "Engineered full-stack financial systems using Spring Boot (Java) and React.js, improving system scalability.",
      "Developed and deployed 15+ secure RESTful APIs handling 100K+ financial transactions daily using AWS RDS.",
      "Reduced API security vulnerabilities by 20% through JWT-based authentication and OWASP-compliant practices.",
      "Built backend logic with Java and Express.js, ensuring encrypted data exchange via JWT and OAuth 2.0.",
      "Accelerated feature delivery by 25% by collaborating with product/UX teams in Agile sprints.",
      "Delivered responsive UI components aligned with user workflows, enhancing user experience and task efficiency.",
      "Deployed serverless infrastructure using AWS Batch, SNS, and RDS to support high-throughput transaction data."

    ],
    technologies: ["Java", "Spring Boot", "React.js", "AWS RDS", "REST APIs", "Microservices"]
  },
  {
    company: "HCL Technologies",
    role: "Software Engineer",
    period: "2021 – 2023",
    location: "Chennai, India",
    description: [
      "Built Guidewire CC modules using Gosu, Java, and XML, integrating LexisNexis, CCC, and third-party services.",
      "Improved test coverage by 35% and reduced post-release issues by 20% through comprehensive GUnit test suites.",
      "Optimized workflows and business rules, cutting claims cycle time and increasing process efficiency.",
      "Resolved high-priority production issues via deep log analysis and tuning, cutting downtime by 30%.",
      "Led peer code reviews and enforced standards, lowering defect rates by 20% and enhancing maintainability.",
      "Implemented secure API integrations with external systems, improving data reliability and reducing response time.",
      "Streamlined batch jobs and policy integrations, reducing manual effort and boosting system throughput."
    ],
    technologies: ["Java", "Guidewire", "Gosu", "JUnit", "Integration Testing"]
  },
  {
    company: "Dell Technologies",
    role: "Software Developer",
    period: "2020 – 2021",
    location: "Hyderabad, India",
    description: [
      "Achieved 40% test coverage for critical modules using JUnit and rigorous TDD methodologies.",
      "Architected and deployed RESTful APIs for CRUD operations and billing system integrations.",
      "Reduced third-party API failures by 20% via robust error handling and retry mechanisms.",
      "Boosted user engagement by 30% by redesigning responsive UIs using Tailwind CSS and Bootstrap.",
      "Conducted functional and integration testing using JUnit and Postman, ensuring robust service validation."
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
                <p className="text-muted-foreground mb-6 text-justify">
                  {exp.description.join(" ")}
                </p>

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
