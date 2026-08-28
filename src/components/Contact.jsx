import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const contactLinks = [
  { icon: FaEnvelope, label: 'prateekkv06@gmail.com', href: 'mailto:prateekkv06@gmail.com' },
  { icon: FaPhone, label: '609-240-1513', href: 'tel:+16092401513' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prateek-komarla-95100732b/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/pvk345' },
]

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden flex flex-col items-center justify-center text-white px-4 py-20 bg-gray-950">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#6d2897] rounded-full blur-3xl opacity-40 top-10 left-1/2 transform -translate-x-1/2"></div>

      <div data-aos="fade-up" data-aos-delay="300" className="relative z-20 max-w-3xl w-full text-center space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s <span className="text-purple-400">Connect</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Open to new opportunities, interesting projects, or just talking tech.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 bg-gray-800 rounded-lg shadow-lg px-5 py-3 hover:bg-purple-800 transition-all duration-300 text-sm sm:text-base"
            >
              <Icon className="text-lg" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-xs sm:text-sm pt-6">
          &copy; {new Date().getFullYear()} Prateek Komarla. Built with React.
        </p>
      </div>
    </footer>
  )
}
