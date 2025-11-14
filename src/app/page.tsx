"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

// local components (already in your repo per original file)
import { WavyBackground } from "@/components/ui/wavy-background";
import Testimonials from "@/app/components/Testinomials";
import ProjectsShowcase from "@/components/ProjectShowcase";
import { projects } from "@/lib/projects";

// icons
import { Mail, Phone, ExternalLink, ShieldCheck, Timer, FileText, Code, Brain, Users, Database, CheckCircle, Handshake, LineChart } from "lucide-react";

// --- replace with real team data ---
const teamMembers = [
  {
    name: "Ibad Ur Rahman",
    role: "Founder & Engineer",
    linkedin: "https://www.linkedin.com/in/ibadski/",
    bio: "Engineer and builder. I focus on clear scoping, predictable delivery, and long‑term maintainability.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/D4D03AQHOFCYfofmHjA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718453820686?e=1759968000&v=beta&t=Mg1anakchhNENC5BqjitShEaLfe1NIeVOhMrqSg-wEw",
  },
  {
    name: "Tanzeel Ur Rahman",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/tanxeel/",
    bio: "15+ years designing and shipping systems at scale. Helps us keep quality high and decisions pragmatic.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/C4E03AQF3w5tFaK1aFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517712057780?e=1759968000&v=beta&t=pfH7Le5YF1N7CErTrlaG5BJkmp9YNhMlOmPNWBSk6fo",
  },
  {
    name: "Zilay Huda",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/zilehuda/",
    bio: "Backend & APIs. Enjoys turning ambiguous product ideas into reliable services.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/D4D03AQE2Zi4iQsPn8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718623199646?e=1759968000&v=beta&t=FJiliHPLEYRMY-zphAuVDpKDHxss7tTQWELI6uvbMII",
  },
  {
    name: "Muhammad Talha",
    role: "Data Analyst",
    linkedin: "https://www.linkedin.com/in/mohammad-talha-datadaily/",
    bio: "Data pipelines, dashboards, and applied ML to support product decisions.",
    profilePic:
      "https://media.licdn.com/dms/image/v2/D4D03AQEI8_wOdyOJlA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729431760222?e=1759968000&v=beta&t=xtGz4MhrIbt3MHv8y7TDZhJdsSp6dm0A9X-B9JtRIiw",
  },
];

export default function SirFasTechLanding() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            onClick={() => router.push("/")}
            aria-label="SirFasTech homepage"
          >
            SirFasTech
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "#services" },
              { label: "Process", href: "#process" },
              { label: "Work", href: "#projects" },
              { label: "Team", href: "#team" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">Start a project</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <WavyBackground className="max-w-5xl mx-auto pb-24" backgroundFill="white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              We build dependable software, the way you can verify.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              No hype. Clear scope, weekly demos, version‑controlled code, and post‑launch support. We focus on outcomes you can measure.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href="#contact">Discuss your project</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">See selected work</a>
              </Button>
            </div>
          </div>
        </WavyBackground>

        {/* Subtle background dots */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              `radial-gradient(circle at 25% 25%, rgba(var(--primary), 0.12) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(var(--secondary), 0.12) 0%, transparent 40%)`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      </section>

      {/* Trust bar */}
      <section className="px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center py-6 rounded-xl border">
            {["NDA‑friendly", "Source in your repo", "CI/CD setup", "Post‑launch support"].map((item) => (
              <div key={item} className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3">Services</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Practical, production‑oriented engineering. We scope narrowly, build iteratively, and document decisions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Web & Mobile Apps", desc: "Next.js, Django/DRF, Node. From MVP to scale with testing and observability." },
              { icon: Brain, title: "Applied AI/ML", desc: "Retrieval, embeddings, and LLM workflows with cost control and evaluation." },
              { icon: Users, title: "Consulting & Reviews", desc: "Architecture reviews, performance tuning, and hiring support for your team." },
              { icon: Database, title: "Data Engineering", desc: "ETL pipelines, analytics, and dashboards that your team can actually maintain." },
            ].map((s, i) => (
              <Card key={i} className="border hover:shadow-md transition-all">
                <CardHeader>
                  <s.icon className="w-10 h-10 text-accent" />
                  <CardTitle className="mt-2">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process (how we work) */}
      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3">How we work</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A straightforward process that keeps you in control and reduces risk.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Scope & Plan", desc: "We co‑write a short Scope of Work with milestones, success criteria, and a communication cadence." },
              { icon: Timer, title: "Build & Demo", desc: "Weekly demos from a staging URL. We track tasks and decisions in your tool of choice." },
              { icon: ShieldCheck, title: "Ship & Support", desc: "We deploy with CI/CD, hand over docs, and offer sensible support packages." },
            ].map((step, i) => (
              <Card key={i} className="border">
                <CardHeader>
                  <step.icon className="w-10 h-10 text-accent" />
                  <CardTitle className="mt-2">{step.title}</CardTitle>
                  <CardDescription>{step.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: "Transparent Billing", desc: "Fixed‑scope or weekly retainer. No surprise invoices." },
              { icon: LineChart, title: "Measurable Outcomes", desc: "Agree on metrics (TTFB, conversion, error rate) and review them together." },
              { icon: ShieldCheck, title: "Security by Default", desc: "NDA on request, least‑privilege access, and secrets handled properly." },
            ].map((p, i) => (
              <Card key={i} className="border bg-muted/30">
                <CardHeader>
                  <p.icon className="w-6 h-6 text-accent" />
                  <CardTitle className="mt-1 text-xl">{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>
          <ProjectsShowcase projects={projects} />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <Card key={m.name} className="text-center border">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-3 ring-2 ring-accent/20">
                    <AvatarImage src={m.profilePic || "/placeholder.svg"} alt={m.name} />
                    <AvatarFallback>{m.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{m.name}</CardTitle>
                  <CardDescription>{m.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{m.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>
          <p className="text-center text-muted-foreground mb-10">Short, direct answers. If something isn’t covered, ask us.</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you sign NDAs?</AccordionTrigger>
              <AccordionContent>
                Yes. We’re comfortable working under an NDA and within your security policies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do you bill?</AccordionTrigger>
              <AccordionContent>
                Either fixed price for a clearly scoped project, or a weekly retainer with capped hours. We invoice only for agreed work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Who owns the code?</AccordionTrigger>
              <AccordionContent>
                You do. We keep the source in your Git repository from day one and document setup thoroughly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What about post‑launch support?</AccordionTrigger>
              <AccordionContent>
                We offer sensible support packages (bug fixes, small enhancements, monitoring) so you’re not left on your own.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" aria-hidden />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Let’s talk</h2>
            <p className="text-muted-foreground mb-8">Tell us what you’re trying to achieve and a sensible timeline. We’ll suggest a pragmatic path forward.</p>
            <div className="grid gap-4">
              <Card className="border p-6">
                <div className="flex items-center justify-center gap-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:ibad@sirfastech.com" className="text-accent hover:underline">ibad@sirfastech.com</a>
                  </div>
                </div>
              </Card>
              <div className="flex justify-center gap-3">
                <Button size="lg" asChild>
                  {/* Removing the stale `month` param so Calendly opens to current month */}
                  <a href="https://calendly.com/ibad2762/30min" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a 30‑minute call
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold">SirFasTech</p>
              <p className="text-sm text-muted-foreground">Reliable software, delivered transparently.</p>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-4">
              <a className="hover:underline" href="#services">Services</a>
              <a className="hover:underline" href="#process">Process</a>
              <a className="hover:underline" href="#projects">Work</a>
              <a className="hover:underline" href="#contact">Contact</a>
            </div>
          </div>
          <Separator className="my-4" />
          <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} SirFasTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
