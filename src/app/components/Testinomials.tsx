"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ExternalLink } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C5103AQEndZagxNo9Kg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1586539953087?e=1759968000&v=beta&t=E28Ug7iHOzCU51UHAulKdm52w2UwNT90WLSAfuBXn7w",
    name: "Aarthika Thangavel",
    title: "VP, Marketing MI and Analytics",
    date: "August 27, 2023",
    text: "Ibad is a knowledgeable team member with good problem solving skills. He brings in variety of approaches for the data science problems which have derived critical insights. He solves complex problems with his excellent coding abilities and has been very focused on the task at hand.",
    link: "https://www.linkedin.com/in/aarthika-thangavel-9a3928a4",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGqWYazAnewdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698764766910?e=1729123200&v=beta&t=ByNPPJYtqS8D2ABWGvGx9-Xym35RxHw0Yn_4wYkIpDE",
    name: "James Bryce",
    title: "Speech Intelligence Expert",
    date: "June 15, 2019",
    text: "Ibad was a key member of a University of Sheffield MSc Data Science research project. In just 8 weeks, Ibad and team were able to come up to speed and produce some highly credible research outputs. Ibad is diligent, patient and methodical.",
    link: "https://www.linkedin.com/in/james-b-55b038b",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGyiQGlFajkeg/profile-displayphoto-shrink_200_200/B4EZZYar5.HkAY-/0/1745240113457?e=1759968000&v=beta&t=KVLL1fgkdjelZmTQWulzxQ7nk46wrLDhllu7yW5EnQQ",
    name: "Rahul Sengupta",
    title: "Private Cloud and Middleware - Barclays UK",
    date: "June 12, 2019",
    text: "Ibad is one of the most diligent and intelligent people I know. He has expertise in all Machine Learning Algorithms and is adept at PySpark. Due to our project work, he helped build Neural Network models for audio classification.",
    link: "https://www.linkedin.com/in/rahul-sengupta",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEDLrW05xNCrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1664185335001?e=1759968000&v=beta&t=ubaecHxMJzJHNjddeg6q7VcWGJQ3Bb4r3YBW2GBW4cw",
    name: "Martin Skauen",
    title: "Senior Data Engineer at Itera Fredrikstad",
    date: "May 26, 2019",
    text: "I was really impressed by Ibad's professional skills, creative thinking and team management skills. His background in Computer Science gave us a huge advantage in Speech Processing. He's a great motivator and leader.",
    link: "https://www.linkedin.com/in/mskauen",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH6Jpz7Vm6GyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729159625261?e=1759968000&v=beta&t=CiKNEYOiVacz6bx3MIa8y4KxwebIpLlJLDj1-rlkaLg",
    name: "Yuliang Li",
    title: "Data Scientist at PwC Consulting Services",
    date: "January 23, 2019",
    text: "Ibad is a self-motivated person who has been diving deeply in data science for years. He's especially good at drawing insights from data with visualization tools. He must be a high performer in your team.",
    link: "https://www.linkedin.com/in/yuliang-li-julian",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQG4lGzr_9HHzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666951332557?e=1759968000&v=beta&t=vHbGwAWf9skMCCskyjTSvKadVlNgxThlcnBHWiqhi0E",
    name: "Pavel Romashov",
    title: "Senior Product Manager",
    date: "March 21, 2023",
    text: "I worked together with Hafiz in Y42 as a product manager. Hafiz's performance was always on point. I enjoyed his sense of discipline and responsibility, which made feature development a very enjoyable journey.",
    link: "https://www.linkedin.com/in/pavel-romashov",
  },
]

export default function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-3 ring-2 ring-blue-200 dark:ring-blue-700">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 truncate">{testimonial.name}</h4>
                      <p className="text-xl text-blue-700 dark:text-blue-300 truncate">{testimonial.title}</p>
                      <p className="text-lg text-blue-600 dark:text-blue-400">{testimonial.date}</p>
                    </div>
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors ml-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-blue-800 dark:text-blue-200 text-lg leading-relaxed italic flex-1">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 border-blue-300 dark:border-blue-700" />
        <CarouselNext className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 border-blue-300 dark:border-blue-700" />
      </Carousel>
    </div>
  )
}
