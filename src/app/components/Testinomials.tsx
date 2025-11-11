"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Star, CheckCircle2, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

type Testimonial = {
  image?: string;
  name: string;
  title: string;
  date?: string;
  text: string;
  link?: string;
  rating?: number; // optional: 1..5
};

const testimonials: Testimonial[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C5103AQEndZagxNo9Kg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1586539953087?e=1759968000&v=beta&t=E28Ug7iHOzCU51UHAulKdm52w2UwNT90WLSAfuBXn7w",
    name: "Aarthika Thangavel",
    title: "VP, Marketing MI and Analytics",
    date: "Aug 27, 2023",
    text:
      "Ibad is a knowledgeable team member with good problem solving skills. He brings in variety of approaches for the data science problems which have derived critical insights. He solves complex problems with his excellent coding abilities and has been very focused on the task at hand.",
    link: "https://www.linkedin.com/in/aarthika-thangavel-9a3928a4",
    rating: 5,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGqWYazAnewdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698764766910?e=1729123200&v=beta&t=ByNPPJYtqS8D2ABWGvGx9-Xym35RxHw0Yn_4wYkIpDE",
    name: "James Bryce",
    title: "Speech Intelligence Expert",
    date: "Jun 15, 2019",
    text:
      "Ibad was a key member of a University of Sheffield MSc Data Science research project. In just 8 weeks, Ibad and team were able to come up to speed and produce some highly credible research outputs. Ibad is diligent, patient and methodical.",
    link: "https://www.linkedin.com/in/james-b-55b038b",
    rating: 5,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGyiQGlFajkeg/profile-displayphoto-shrink_200_200/B4EZZYar5.HkAY-/0/1745240113457?e=1759968000&v=beta&t=KVLL1fgkdjelZmTQWulzxQ7nk46wrLDhllu7yW5EnQQ",
    name: "Rahul Sengupta",
    title: "Private Cloud & Middleware — Barclays UK",
    date: "Jun 12, 2019",
    text:
      "Ibad is one of the most diligent and intelligent people I know. He has expertise in Machine Learning and is adept at PySpark. Due to our project work, he helped build Neural Network models for audio classification.",
    link: "https://www.linkedin.com/in/rahul-sengupta",
    rating: 5,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEDLrW05xNCrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1664185335001?e=1759968000&v=beta&t=ubaecHxMJzJHNjddeg6q7VcWGJQ3Bb4r3YBW2GBW4cw",
    name: "Martin Skauen",
    title: "Senior Data Engineer, Itera",
    date: "May 26, 2019",
    text:
      "I was really impressed by Ibad's professional skills, creative thinking and team management skills. His background in Computer Science gave us a huge advantage in Speech Processing.",
    link: "https://www.linkedin.com/in/mskauen",
    rating: 5,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH6Jpz7Vm6GyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729159625261?e=1759968000&v=beta&t=CiKNEYOiVacz6bx3MIa8y4KxwebIpLlJLDj1-rlkaLg",
    name: "Yuliang Li",
    title: "Data Scientist, PwC Consulting",
    date: "Jan 23, 2019",
    text:
      "Ibad is a self-motivated person who has been diving deeply in data science for years. He's especially good at drawing insights from data with visualization tools.",
    link: "https://www.linkedin.com/in/yuliang-li-julian",
    rating: 5,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQG4lGzr_9HHzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666951332557?e=1759968000&v=beta&t=vHbGwAWf9skMCCskyjTSvKadVlNgxThlcnBHWiqhi0E",
    name: "Pavel Romashov",
    title: "Senior Product Manager",
    date: "Mar 21, 2023",
    text:
      "I worked together with Hafiz in Y42 as a product manager. Hafiz's performance was always on point. I enjoyed his sense of discipline and responsibility, which made feature development a very enjoyable journey.",
    link: "https://www.linkedin.com/in/pavel-romashov",
    rating: 5,
  },
];

function Stars({ rating = 0 }: { rating?: number }) {
  if (!rating) return null;
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="h-full border bg-background hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-muted">
            <AvatarImage src={t.image || "/placeholder.svg"} alt={t.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold leading-tight truncate">{t.name}</h4>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
              {/* “Verified source” cue; remove if you don’t want it */}
            </div>
            <p className="text-sm text-muted-foreground truncate">{t.title}</p>
            {t.date && <p className="text-xs text-muted-foreground">{t.date}</p>}
          </div>
          {t.link && (
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Open source"
              title="Open source"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-border" />

        {/* Body */}
        <div className="flex items-start gap-2 flex-1">
          <Quote className="h-5 w-5 mt-0.5 opacity-60" aria-hidden />
          <blockquote className="text-sm leading-relaxed text-foreground/90">
            “{t.text}”
          </blockquote>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <Stars rating={t.rating} />
          {t.link && (
            <span className="text-xs text-muted-foreground">Source: LinkedIn</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((t, idx) => (
            <CarouselItem
              key={idx}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard t={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border bg-background/70 backdrop-blur hover:bg-background" />
        <CarouselNext className="border bg-background/70 backdrop-blur hover:bg-background" />
      </Carousel>
    </div>
  );
}
