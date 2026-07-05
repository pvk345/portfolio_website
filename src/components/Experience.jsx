import React from 'react'

const experienceData = [
  {
    id: 1,
    role: 'Software Engineer Intern',
    org: 'Astralinx',
    location: 'Remote',
    dates: 'May 2025 – August 2025',
    bullets: [
      'Developed a business document suggestion platform that provided automated recommendations for grammar, clarity, and professional tone, helping users produce polished business papers efficiently.',
      'Developed and maintained a Spring Boot backend with an SQL database, implementing RESTful APIs and data processing logic.',
      'Optimized backend query performance, reducing API response time by 35%.',
      'Built an interactive TypeScript frontend, enhancing user experience with dynamic interfaces and real-time suggestion updates.',
      'Integrated natural language processing (NLP) features to generate context-aware editing suggestions.',
    ],
  },
  {
    id: 2,
    role: 'Research Assistant — Image Data Analysis for Wound Progression in Cell Biology Models',
    org: 'Rutgers University',
    location: 'Piscataway, NJ',
    dates: 'March 2025 – Present',
    bullets: [
      'Gathered numerical data from images regarding scratch area over time by examining pixel values and conducting statistical data analysis on Google Sheets/Excel; automated the entire image analysis process using Python.',
      'Built a Python program to conduct image color thresholding analysis to gather data for biological experiments.',
      'Designing a convolutional neural network capable of conducting image segmentation to isolate wound regions from surrounding tissue.',
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
