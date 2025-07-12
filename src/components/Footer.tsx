import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Let's Build Something Amazing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              or collaborating on cutting-edge full stack solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => window.open('mailto:sathvikreddy3737@gmail.com', '_blank')}
              className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://github.com/sathvik9347', '_blank')}
                className="shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Tampa, FL • Open to Remote Opportunities</span>
            </div>
            
            <div className="text-center text-muted-foreground">
              <p>© 2025 Sathvik Reddy Kakulavaram. All rights reserved.</p>
              <p className="text-sm mt-1">Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};