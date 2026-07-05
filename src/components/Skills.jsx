import React from 'react'
import {
  SiJavascript, SiHtml5, SiCss, SiPython, SiReact, SiGit, SiMongodb,
  SiTensorflow, SiKeras, SiUnity, SiLangchain,
  SiStreamlit, SiPandas, SiDocker, SiHuggingface,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const languages = [
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: SiPython },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Git', icon: SiGit },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'SQL', icon: TbSql },
]

const tools = [
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'Keras', icon: SiKeras },
  { name: 'Unity', icon: SiUnity },
  { name: 'VS Code', icon: VscVscode },
  { name: 'LangChain', icon: SiLangchain },
  { name: 'Streamlit', icon: SiStreamlit },
  { name: 'Pandas', icon: SiPandas },
  { name: 'Docker', icon: SiDocker },
  { name: 'Hugging Face', icon: SiHuggingface },
]

const SkillBadge = ({ name, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center gap-2 bg-gray-800 rounded-lg shadow-lg px-4 py-5 w-24 sm:w-28 hover:bg-purple-800 transition-all duration-300">
    <Icon className="text-3xl sm:text-4xl" />
    <span className="text-xs sm:text-sm text-center text-gray-200">{name}</span>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-16">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-10 max-w-5xl w-full"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br /> and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Amazon Cloud Practitioner Certified
          </p>
        </header>

        <div data-aos="fade-up" data-aos-delay="500" className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Languages</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {languages.map((s) => (
              <SkillBadge key={s.name} name={s.name} icon={s.icon} />
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Frameworks & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tools.map((s) => (
              <SkillBadge key={s.name} name={s.name} icon={s.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
