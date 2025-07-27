import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenAI-powered Astrology Website",
      description: "Designed a modular, event-driven backend for a real-time OpenAI-powered astrology startup, leveraging Azure Event Grid and Service Bus to decouple transcription and summarization workflows, enabling scalable, asynchronous processing.",
      technologies: ["Azure Functions", "Cosmos DB", "Event Grid", "Service Bus", "OpenAI API", "Python"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Real Estate Data Scraping Application",
      description: "Engineered automated scripts using Java 8 and Selenium WebDriver to scrape data from multiple real estate websites, reducing manual effort by 40 hours per month for the analytics team.",
      technologies: ["Java 8", "Selenium", "PostgreSQL", "Web Scraping", "Automation"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
    },
    {
      title: "User Handling Application",
      description: "Developed a user authentication system using Java Spring Boot and PostgreSQL, with a responsive React.js frontend. Secured user data using bcrypt for password hashing and JWT for stateless authentication.",
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "bcrypt", "Java"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, cloud computing, and AI/ML technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;