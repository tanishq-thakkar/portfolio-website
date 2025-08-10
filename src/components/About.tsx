import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code, Palette, Zap, Users } from "lucide-react";
import Typewriter from 'typewriter-effect';

const About = () => {
  const skills = [
    { name: "Full Stack Development", level: 95, icon: Code },
    { name: "Cloud & DevOps", level: 90, icon: Zap },
    { name: "AI/ML Technologies", level: 85, icon: Palette },
    { name: "Team Collaboration", level: 95, icon: Users }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Java", "Python", "C++", "Go", "Rust",
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "PostgreSQL", "MongoDB",
    "Spring Boot", "Flask", "Express", "PyTorch", "Terraform", "Jenkins"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString('About Me')
                  .start();
              }}
              options={{
                cursor: '',
                delay: 100,
              }}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science student at University of Cincinnati with a passion for building scalable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student at the University of Cincinnati, currently pursuing a 
                Bachelor of Science in Computer Science with a Software Engineering Certificate. I'm also enrolled in 
                the Accelerated Master's program in Computer Science.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With experience as a Software Engineer Intern at companies like Sensforge and Phillips Edison & Company, 
                I've developed expertise in full-stack development, cloud infrastructure, and AI/ML technologies. 
                I'm passionate about creating efficient, scalable solutions that solve real-world problems.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies & Experience */}
          <div className="space-y-8">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Education & Recognition</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">University of Cincinnati</h4>
                    <p className="text-primary font-medium">Bachelor of Science in Computer Science • 2026</p>
                    <p className="text-muted-foreground text-sm">
                      GPA: 3.63 • Honors, Dean's List • University Honors Scholar
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Software Engineering Certificate • Accelerated Master's Program
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Relevant Coursework</h4>
                    <p className="text-muted-foreground text-sm">
                      Software Engineering, AI Principles, Cloud Computing, Database Design, 
                      Data Structures & Algorithms, Computer Networks, Operating Systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;