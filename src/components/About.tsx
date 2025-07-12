import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Shield, Cloud } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-b from-muted/20 via-background to-muted/10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full stack engineer with expertise in building complete web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 order-2 lg:order-1 text-justify">
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg leading-relaxed">
                I'm a dedicated <span className="text-primary font-semibold">Full Stack Developer</span> with a
                <span className="text-primary font-semibold"> Master's in Computer Science</span> from the University of South Florida and
                over <span className="text-accent font-semibold">4+ years of experience</span> in building enterprise-grade web applications.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans the entire development stack from creating secure, scalable APIs and cloud-native backend systems using
                <span className="font-medium"> Java</span> and <span className="font-medium">Spring Boot</span>, to building responsive,
                user-friendly frontends with <span className="font-medium">React.js</span>, <span className="font-medium">Node.js</span>  and modern CSS frameworks.
                I’m passionate about crafting complete solutions that offer seamless and high-quality user experiences.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I thrive in collaborative environments where I can contribute to innovative full stack solutions, mentor team members, and
                continuously learn emerging technologies across the web development ecosystem from frontend frameworks to serverless architecture.
              </p>
            </div>
          </div> {/* ← This closing div was missing */}

          {/* Enhanced cards grid */}
          <div className="grid grid-cols-2 gap-6 order-1 lg:order-2">
            <Card className="group shadow-glass hover:shadow-xl border-0 bg-card-gradient hover:bg-card-gradient-hover transform hover:scale-105 hover:rotate-1 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-bold text-lg mb-3">Education</h3>
                <p className="text-sm text-muted-foreground">Master's in Computer Science, USF</p>
              </CardContent>
            </Card>

            <Card className="group shadow-glass hover:shadow-xl border-0 bg-card-gradient hover:bg-card-gradient-hover transform hover:scale-105 hover:-rotate-1 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Code className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="font-bold text-lg mb-3">Full Stack</h3>
                <p className="text-sm text-muted-foreground">Frontend & Backend Development</p>
              </CardContent>
            </Card>

            <Card className="group shadow-glass hover:shadow-xl border-0 bg-card-gradient hover:bg-card-gradient-hover transform hover:scale-105 hover:rotate-1 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <h3 className="font-bold text-lg mb-3">Security</h3>
                <p className="text-sm text-muted-foreground">API Security & Best Practices</p>
              </CardContent>
            </Card>

            <Card className="group shadow-glass hover:shadow-xl border-0 bg-card-gradient hover:bg-card-gradient-hover transform hover:scale-105 hover:-rotate-1 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Cloud className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
                <h3 className="font-bold text-lg mb-3">Cloud Native</h3>
                <p className="text-sm text-muted-foreground">Serverless Architecture</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
