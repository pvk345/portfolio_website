import React from 'react'

const experienceData = [
  {
    id: 1,
    role: 'Software Engineer Intern',
    org: 'NeuZenAI',
    location: 'Dallas, Texas',
    dates: 'May 2026 - August 2026',
    bullets: [
      'Designed a Model Context Protocol (MCP) server for an AI-powered social media content generation platform.',
      'Gave AI assistants (Claude, ChatGPT, Cursor) tool-based access to generate, review, and publish content — 15 tools spanning content generation, live publishing, and multi-day campaign planning with a human-approval workflow.',
      'Built and designed a token and OAuth-based authentication architecture, producing a full technical implementation for MCP connection.',
    ],
  },
  {
    id: 2,
    role: 'Research Assistant — Computer Vision & Deep Learning for Biomedical Image Analysis',
    org: 'Rutgers University',
    location: 'Piscataway, NJ',
    dates: 'Jan 2026 – Currently Working',
    bullets: [
      'Gathered numerical data from images regarding scratch area over time and conducted statistical analysis in Excel.',
      'Built a Python program to conduct image color-thresholding analysis to gather data for biological experiments.',
      'Built a computer vision and deep learning system, implementing a U-Net convolutional neural network from scratch using TensorFlow/Keras to achieve end-to-end semantic segmentation of wound regions across 1M+ pixels.',
    ],
  },
  {
    id: 3,
    role: 'Software Engineer Intern',
    org: 'Astralinx',
    location: 'Remote',
    dates: 'May 2025 – August 2025',
    bullets: [
      'Developed a business document suggestion platform that provided automated recommendations for grammar, clarity, and professional tone, helping users produce polished business papers efficiently.',
      'Developed and maintained a Spring Boot backend with an SQL database, implementing RESTful APIs and optimizing query performance to reduce API response time by 35%.',
    ],
  },
]

const ExperienceCard = ({ role, org, location, dates, bullets }) => (
  <article className="relative bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:bg-purple-900/40 transition-all duration-300">
    <header className="mb-4">
      <h3 className="text-xl sm:text-2xl font-bold text-white">{role}</h3>
      <p className="text-purple-400 font-medium mt-1">{org} &middot; {location}</p>
      <p className="text-gray-400 text-sm mt-1">{dates}</p>
    </header>
    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base text-left">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </article>
)

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-16 bg-gray-950">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#6d2897] rounded-full blur-3xl opacity-40 top-10 left-1/2 transform -translate-x-1/2"></div>

      <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 max-w-4xl w-full text-center space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-purple-400">Experience</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Where I've applied and grown my skills.
          </p>
        </header>

        <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 gap-6 sm:gap-8">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
