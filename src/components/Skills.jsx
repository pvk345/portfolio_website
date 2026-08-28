import React from 'react'
import {
  SiJavascript, SiHtml5, SiCss, SiPython, SiReact, SiGit, SiMongodb,
  SiTensorflow, SiKeras, SiUnity, SiLangchain, SiNodedotjs, SiPostgresql, SiRedis,
  SiStreamlit, SiPandas, SiDocker, SiHuggingface, SiC, SiCplusplus,
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
  { name: 'SQL', icon: TbSql },
  { name: 'C', icon: SiC },
  { name: 'C++', icon: SiCplusplus },
]

const frameworks = [
  { name: 'React', icon: SiReact },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'Keras', icon: SiKeras },
  { name: 'Unity', icon: SiUnity },
  { name: 'LangChain', icon: SiLangchain },
  { name: 'Streamlit', icon: SiStreamlit },
  { name: 'Pandas', icon: SiPandas },
  { name: 'Hugging Face', icon: SiHuggingface },
]

const databases = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
]

const devops = [
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'VS Code', icon: VscVscode },
]

const SkillBadge = ({ name, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center gap-2 bg-gray-800 rounded-lg shadow-lg px-4 py-5 w-24 sm:w-28 hover:bg-purple-800 transition-all duration-300">
    <Icon className="text-3xl sm:text-4xl" />
    <span className="text-xs sm:text-sm text-center text-gray-200">{name}</span>
  </div>
)

const SkillGroup = ({ title, items, delay }) => (
  <div data-aos="fade-up" data-aos-delay={delay} className="space-y-3">
    <h3 className="text-lg sm:text-xl font-semibold text-purple-300">{title}</h3>
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {items.map((s) => (
        <SkillBadge key={s.name} name={s.name} icon={s.icon} />
      ))}
    </div>
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

        <SkillGroup title="Languages" items={languages} delay="500" />
        <SkillGroup title="Frameworks & Libraries" items={frameworks} delay="600" />
        <SkillGroup title="Databases" items={databases} delay="700" />
        <SkillGroup title="DevOps & Infrastructure" items={devops} delay="800" />
      </div>
    </section>
  )
}
