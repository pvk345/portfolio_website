import React from 'react'

export default function Education() {
  return (
    <section id="education" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-16">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 top-10 left-1/2 transform -translate-x-1/2"></div>

      <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 max-w-3xl w-full text-center space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-purple-400">Education</span>
          </h1>
        </header>

        <article
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:bg-purple-900/40 transition-all duration-300 text-left"
        >
          <header className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Rutgers University, New Brunswick
            </h3>
            <p className="text-purple-400 font-medium mt-1">
              Bachelor of Science in Computer Science and Data Science
            </p>
            <p className="text-gray-400 text-sm mt-1">May 2028</p>
          </header>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
            <li>GPA: 3.78 / 4.0 &middot; Dean&apos;s List</li>
            <li>
              Relevant Courses: Data Structures (Java), Linear Algebra, Mobile App Development,
              Discrete Structures, Computer Architecture, Data Management for Data Science
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
