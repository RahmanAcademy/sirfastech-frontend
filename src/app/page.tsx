"use client";
import Image from "next/image";
import Testimonials from './components/Testinomials'; // Add this import

const teamMembers = [
  {
    name: "Ibad Ur Rahman",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/ibadski/",
    bio: "Having worked for 5 years in the Software Development industry, I am now very excited to work on something of my own. All the process and issues I have learned in my career here I try to create processes which resolves them in the first place.",
    profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQHOFCYfofmHjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718453820686?e=1730332800&v=beta&t=i0KAEJu7uWFWeoIjZrP9vPX19lWKXrn8PBL92jezj-Y"
  },
  {
    name: "Tanzeel Ur Rahman",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/tanxeel/",
    bio: "Currently working at Amazon as SDE3. Team player, Leader, Persistent, Passionate, Analytical and Problem Solver. I have a passion for software engineering, with a strong academic background and an outstanding track record of over 15 years leading the development of software solutions.",
    profilePic: "https://media.licdn.com/dms/image/v2/C4E03AQF3w5tFaK1aFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517712057723?e=1730332800&v=beta&t=NFgzSh_aduopOGTYH_PLypH_oXCmAPOqN5YgFDUoYac"
  },
  {
    name: "Zilay Huda",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/zilehuda/",
    bio: "An experienced Software Engineer with a demonstrated history of working in the information technology and services industry. ~5 years of experience in the design/development of Backend systems and APIs/Services for FMCGs to startups.",
    profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQE2Zi4iQsPn8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718623199646?e=1730332800&v=beta&t=T2vLkW2dHQ-CPJENl81jnLlip68A76WiUm0IxE4sV3k"
  },
  {
    name: "Muhammad Talha",
    role: "Data Analyst",
    linkedin: "https://www.linkedin.com/in/mohammad-talha-datadaily/",
    bio: "As a Data Analyst with extensive experience in machine learning and data visualization, I excel at turning complex data into actionable insights to drive strategic business decisions. Currently, I lead cross-functional teams to optimize production processes and enhance operational efficiency using data-driven strategies.",
    profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQGyjt5YswfZcw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670431143200?e=1730332800&v=beta&t=AYD9ATWD4yLDmm7RJlztmmb1ZTszl1LnY0gLJGwy7oA"
  }
];

const projects = [
  {
    name: "Easymeal",
    description: "A robust CRUD application for managing vending machines",
    details: "Easymeal automates various processes essential to vending machine owners, including refill management, encashment and sales monitoring, route planning, maintenance scheduling, and employee management.",
    technologies: ["Django", "Celery", "React"],
    deployment: "AWS"
  },
  {
    name: "RahmanAcademy",
    description: "An interactive learning platform for medical students",
    details: "RahmanAcademy provides topic-based MCQs, performance ratings, and comprehensive MCQ management for medical students.",
    technologies: ["React", "Django"],
    deployment: "Heroku"
  },
  {
    name: "Snowflake Warehousing System",
    description: "A comprehensive data warehousing solution",
    details: "Developed at Seed Labs, this system efficiently managed the transport of over one billion rows of data, resulting in significant cost savings.",
    technologies: ["Python", "Snowflake"],
    deployment: "Snowflake"
  }
];

export default function Home() {
  

  return (
    <main className="min-h-screen pt-24 dark bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-10 bg-gray-900 shadow-md transition-colors duration-300">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Sirfastech</div>
            <div className="hidden md:flex space-x-6">
              {['Services', 'About', 'Team', 'Projects', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SirFasTech</h1>
          <p className="text-xl mb-8">Delivering high-quality solutions with integrity and innovation</p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition duration-300">Get in Touch</a>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Web Development", "AI/ML", "Software Consulting", "Data Engineering"].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-300">
                  {service === "Web Development" && "We create responsive, user-friendly websites and web applications using cutting-edge technologies."}
                  {service === "AI/ML" && "Our AI/ML solutions help businesses leverage data for intelligent decision-making and process automation."}
                  {service === "Software Consulting" && "We provide expert guidance on software architecture, development practices, and technology selection."}
                  {service === "Data Engineering" && "Our data engineering services help organizations build robust data pipelines and infrastructure for efficient data management."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="https://raw.githubusercontent.com/ibadia/ibadia.github.io/newcvtemplate/images/background_image_horse_ibad.jpeg" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-300 mb-4">
                We come with rich experience in programming and have developed several applications in our career. We have a good experience of data science, machine learning and software architecture. We love programming and love to use programming to create a positive impact.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Our core values define our way of working:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
                <li>Work Hard: There is no alternate to working hard. We work hard and enjoy working hard. We have the policy of undercommitting and overdelivering.</li>
                <li>Be Ethical and maintain integrity: We are always ethical and transparent on how exactly we are completing a project.</li>
                <li>Be Honest: We call spade a spade while maintaining respect. Honest conversations are always helpful in the long term and in the best interest of all.</li>
              </ul>
              <p className="text-lg text-gray-300 mb-4">
                These three ethos define the way we work and guide our clients on their respective problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={member.profilePic}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-2"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-gray-300 text-center">{member.role}</p>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-300 mb-4">{project.details}</p>
                <p className="text-gray-300 mb-2"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                <p className="text-gray-300"><strong>Deployed on:</strong> {project.deployment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <Testimonials />
        </div>
      </section>

      <section id="contact" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="bg-gray-700 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-100">Let's Connect</h3>
                <p className="text-lg text-gray-300">
                  We're excited to hear from you and discuss how we can help with your project.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ibad@sirfastech.com" className="text-lg text-blue-400 hover:text-blue-300">
                  ibad@sirfastech.com
                </a>
              </div>
              <div className="w-full max-w-md">
                <a
                  href="https://calendly.com/ibad2762/30min?month=2024-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-lg transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Schedule a 30-minute call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">SirFasTech</h3>
              <p>Delivering excellence in software development</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Connect with our founder</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ibadski/" className="hover:text-blue-400 transition-colors duration-300">Ibad Ur Rahman</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Sirfastech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}