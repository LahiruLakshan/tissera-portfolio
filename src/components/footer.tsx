import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold font-headline mb-4 text-center">Contact & Connect</h2>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
          <div className="flex space-x-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:contact@tissera.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Tissera. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
