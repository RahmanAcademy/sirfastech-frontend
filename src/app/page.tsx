"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Mail,
  Phone,
  Linkedin,
  Code,
  Brain,
  Users,
  Database,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Testimonials from "@/app/components/Testinomials";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ProjectsShowcase from "@/components/ProjectShowcase";
import { projects } from "@/lib/projects";

const teamMembers = [
  {
    name: "Ibad Ur Rahman",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/ibadski/",
    bio: "Having worked for 5 years in the Software Development industry, I am now very excited to work on something of my own. All the process and issues I have learned in my career here I try to create processes which resolves them in the first place.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/D4D03AQHOFCYfofmHjA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718453820686?e=1759968000&v=beta&t=Mg1anakchhNENC5BqjitShEaLfe1NIeVOhMrqSg-wEw",
  },
  {
    name: "Tanzeel Ur Rahman",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/tanxeel/",
    bio: "Currently working at Amazon as SDE3. Team player, Leader, Persistent, Passionate, Analytical and Problem Solver. I have a passion for software engineering, with a strong academic background and an outstanding track record of over 15 years leading the development of software solutions.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/C4E03AQF3w5tFaK1aFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517712057780?e=1759968000&v=beta&t=pfH7Le5YF1N7CErTrlaG5BJkmp9YNhMlOmPNWBSk6fo",
  },
  {
    name: "Zilay Huda",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/zilehuda/",
    bio: "An experienced Software Engineer with a demonstrated history of working in the information technology and services industry. ~5 years of experience in the design/development of Backend systems and APIs/Services for FMCGs to startups.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/D4D03AQE2Zi4iQsPn8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718623199646?e=1759968000&v=beta&t=FJiliHPLEYRMY-zphAuVDpKDHxss7tTQWELI6uvbMII",
  },
  {
    name: "Muhammad Talha",
    role: "Data Analyst",
    linkedin: "https://www.linkedin.com/in/mohammad-talha-datadaily/",
    bio: "As a Data Analyst with extensive experience in machine learning and data visualization, I excel at turning complex data into actionable insights to drive strategic business decisions. Currently, I lead cross-functional teams to optimize production processes and enhance operational efficiency using data-driven strategies.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/D4D03AQEI8_wOdyOJlA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729431760222?e=1759968000&v=beta&t=xtGz4MhrIbt3MHv8y7TDZhJdsSp6dm0A9X-B9JtRIiw",
  },
];

export default function SirFasTechHomepage() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text animate-pulse">
              SirFasTech
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "Services",
                "About",
                "Team",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section
        className="relative py-48 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/hero_section.svg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(var(--primary), 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(var(--secondary), 0.1) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                Welcome
              </span>{" "}
              <span
                className="inline-block animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                to
              </span>{" "}
              <span
                className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                SirFasTech
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.5s",
                animationFillMode: "forwards",
              }}
            >
              Delivering high-quality solutions with integrity and innovation
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance animate-slide-up">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                desc: "We create responsive, user-friendly websites and web applications using cutting-edge technologies.",
              },
              {
                icon: Brain,
                title: "AI/ML",
                desc: "Our AI/ML solutions help businesses leverage data for intelligent decision-making and process automation.",
              },
              {
                icon: Users,
                title: "Software Consulting",
                desc: "We provide expert guidance on software architecture, development practices, and technology selection.",
              },
              {
                icon: Database,
                title: "Data Engineering",
                desc: "Our data engineering services help organizations build robust data pipelines and infrastructure for efficient data management.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="gradient-card border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in group text-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <CardHeader>
                  <service.icon className="w-12 h-12 text-accent mb-4 group-hover:animate-float" />
                  <CardTitle className=" group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-slide-up">
              <Image
                src="https://raw.githubusercontent.com/ibadia/ibadia.github.io/newcvtemplate/images/background_image_horse_ibad.jpeg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="lg:w-1/2 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-4xl font-bold mb-8 text-balance">About Us</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                We come with rich experience in programming and have developed
                several applications in our career. We have a good experience of
                data science, machine learning and software architecture. We
                love programming and love to use programming to create a
                positive impact.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our core values define our way of working:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Work Hard",
                    desc: "There is no alternate to working hard. We work hard and enjoy working hard. We have the policy of undercommitting and overdelivering.",
                  },
                  {
                    title: "Be Ethical",
                    desc: "We are always ethical and transparent on how exactly we are completing a project.",
                  },
                  {
                    title: "Be Honest",
                    desc: "We call spade a spade while maintaining respect. Honest conversations are always helpful in the long term and in the best interest of all.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg gradient-card hover:shadow-lg transition-all duration-300 text-xl"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-glow"></div>
                    <div>
                      <h4 className="font-semibold text-accent mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-lg">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance animate-slide-up">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center gradient-card border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-accent/20 group-hover:ring-accent/50 transition-all duration-300">
                    <AvatarImage
                      src={member.profilePic || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4 line-clamp-4">
                    {member.bio}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsShowcase projects={projects} />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance animate-slide-up">
            Testimonials
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5 animate-float"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-balance animate-slide-up">
              Get in Touch
            </h2>
            <p
              className="text-lg text-muted-foreground mb-12 text-pretty animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We&apos;re excited to hear from you and discuss how we can help
              with your project.
            </p>

            <div className="space-y-6">
              <Card
                className="gradient-card border-0 p-6 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-center gap-4">
                  <Mail className="w-6 h-6 text-accent animate-glow" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:ibad@sirfastech.com"
                      className="text-accent hover:text-accent/80 transition-colors duration-300 hover:underline"
                    >
                      ibad@sirfastech.com
                    </a>
                  </div>
                </div>
              </Card>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300 animate-glow animate-scale-in"
                style={{ animationDelay: "0.6s" }}
                asChild
              >
                <a
                  href="https://calendly.com/ibad2762/30min?month=2024-08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a 30-minute call
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary-foreground text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 ">SirFasTech</h3>
              <p className="opacity-90">
                Delivering excellence in software development
              </p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">
                Connect with our founder
              </h4>
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 bg-transparent text-lg"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ibadski/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ibad Ur Rahman
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center opacity-75">
            <p>&copy; 2024 Sirfastech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
