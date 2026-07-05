import React from "react";
import { SiTensorflow, SiLangchain, SiNextdotjs } from "react-icons/si";

const ProjectCard = ({ Icon, title, subtitle, description, link }) => {
  return (
    <article className="relative max-w-sm w-full bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative h-40 sm:h-48 md:h-56 flex items-center justify-center bg-gray-900">
          <Icon className="text-6xl sm:text-7xl text-purple-400 transition-transform duration-300 group-hover:scale-110" />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-xl shadow hover:text-white hover:bg-[#2879d5]">
              Link
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
            <p className="text-purple-400 text-sm mb-3">{subtitle}</p>
          </header>
          <ul className="text-gray-200 text-base">
            {description.split("\n").map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      Icon: SiTensorflow,
      title: "CNN for Image Segmentation",
      subtitle: "Python, TensorFlow, Keras, Deep Learning, Computer Vision",
      description: `
        • Implemented a symmetrical encoder-decoder U-Net architecture from scratch utilizing the TensorFlow/Keras
        functional API to achieve end-to-end semantic pixel-level segmentation.
        • Formulated a customized pixel-activation classification layer using a 1×1 convolution with a sigmoid
        activation function, establishing a stable continuous probability distribution mapped across more than
        1 million individual canvas pixels.
        • Created an automated image-padding tracking algorithm to mathematically compute active canvas ratios,
        normalizing final wound surface area calculations against the structural artifacts of square image
        transformations.
      `,
      link: "https://github.com/pvk345",
    },
    {
      Icon: SiLangchain,
      title: "DataChat",
      subtitle: "Python, LangChain, GPT-4o, Streamlit, Pandas, Plotly, ReportLab",
      description: `
        • Built an AI-powered data analyst that lets users upload any CSV or Excel file and query it in plain
        English, generating and executing pandas code against real data via a LangChain agent.
        • Engineered a three-stage chained LLM pipeline that analyzes datasets, writes narrative business reports,
        and exports them as formatted PDFs using ReportLab.
        • Deployed on Hugging Face Spaces via Docker with environment-based secret management.
      `,
      link: "https://github.com/pvk345",
    },
    {
      Icon: SiNextdotjs,
      title: "ClimateShield",
      subtitle: "Next.js, XGBoost, AWS, Supabase",
      description: `
        • Built a full-stack climate risk intelligence platform that scores wildfire and flood risk (0-100) for
        any US property address using a custom XGBoost ML model trained on 4 government data sources.
        • Deployed ML scoring API on AWS Lambda via Docker/ECR, achieving a wildfire MAE of 5.72 and flood MAE of
        7.01 across 3,144 US counties.
      `,
      link: "https://github.com/pvk345",
    },
  ];

  return (
    <main className="p-4 bg-gray-900 text-white" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            A showcase of my recent work and personal projects.
          </p>
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6 pb-10"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            Icon={project.Icon}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
