import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile Avatar */}
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-primary/50 animate-float">
            <AvatarImage src="/images/profile.jpg" alt="Tanishq Thakkar" />
            <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground font-rounded">
              TT
            </AvatarFallback>
          </Avatar>

          {/* Name and Title with Typewriter Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-glow">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Tanishq Thakkar')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                cursor: '',
                delay: 100,
              }}
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString('Software Engineer & Computer Science Student')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                cursor: '|',
                delay: 50,
              }}
            />
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(4000)
                  .typeString('Passionate Software developer with experience in Full Stack, Cloud and AI/ML technologies.')
                  .pauseFor(500)
                  .typeString(' Graduating with a B.S. Computer Science @ University of Cincinnati in April 2026.')
                  .start();
              }}
              options={{
                cursor: '|',
                delay: 30,
              }}
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/tanishqthakkar" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/tanishqthakkar/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:thakkatq@mail.uc.edu">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;