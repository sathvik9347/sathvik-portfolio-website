import { Button } from "@/components/ui/button";
import { Github, FileText, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-accent/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-bounce-subtle"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10 px-4">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading with enhanced gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent animate-glow relative">
                Sathvik
                <div className="absolute inset-0 bg-hero-gradient bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>
              </span>
            </h1>
            <div className="text-xl md:text-3xl text-muted-foreground font-medium">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-lg text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">Java</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">Spring Boot</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">AWS</span>
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building end-to-end web applications with secure APIs, modern frontends, and cloud infrastructure.
          </p>
          
          {/* Location with icon */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-lg">Tampa, FL</span>
          </div>
          
          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-hero-gradient hover:bg-hero-gradient-dark shadow-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 border border-primary/20"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <FileText className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">View Resume</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-card-gradient hover:bg-card-gradient-hover shadow-glass hover:shadow-floating border border-border/50 hover:border-primary/30 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              onClick={() => window.open('https://github.com/sathvik9347', '_blank')}
            >
              <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};