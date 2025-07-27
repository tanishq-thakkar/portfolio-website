import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 90, icon: Code },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Backend Development", level: 80, icon: Zap },
    { name: "Team Collaboration", level: 95, icon: Users }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Figma", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer and designer with over 5 years of experience 
                building web applications that combine beautiful design with robust functionality. 
                I love turning complex problems into simple, elegant solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and staying up-to-date with the latest industry trends.
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
                <h3 className="text-2xl font-semibold mb-4">Experience Highlights</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Senior Full Stack Developer</h4>
                    <p className="text-primary font-medium">TechCorp Inc. • 2022 - Present</p>
                    <p className="text-muted-foreground text-sm">
                      Leading development of enterprise applications serving 100k+ users
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Frontend Developer</h4>
                    <p className="text-primary font-medium">StartupXYZ • 2020 - 2022</p>
                    <p className="text-muted-foreground text-sm">
                      Built responsive web applications and design systems
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