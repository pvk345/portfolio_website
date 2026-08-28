import React from "react";
import { SiGmail, SiNextdotjs } from "react-icons/si";

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
      Icon: SiGmail,
      title: "Recruiter Outreach Automation",
      subtitle: "Python, Flask, LangChain, OpenAI API, SQLite, Apollo.io API, Gmail API (OAuth2)",
      description: `
        • Built a full-stack outreach automation tool that discovers company recruiters via the Apollo.io
        API and drafts personalized cold emails using OpenAI.
        • Integrated the Gmail API with OAuth2 to send drafted emails directly through the user's own
        Gmail account.
        • Engineered a LangChain agent with a custom web-search tool to autonomously research target
        companies in real time, grounding each email in verifiable, company-specific facts instead of
        generic language.
        • Designed a SQLite-backed review workflow with rate-limited sending to protect email
        deliverability and support safe, real-world outreach at scale.
      `,
      link: "https://github.com/pvk345",
    },
    {
      Icon: SiNextdotjs,
      title: "Polymarket Trader",
      subtitle: "Next.js, FastAPI, PostgreSQL, Redis, AWS Lambda, Vercel, Render, Docker, Resend",
      description: `
        • Built a full-stack automated trading platform that evaluates Polymarket prediction-market
        probabilities against user-defined rules, live across ~500 markets.
        • Integrated the Alpaca API to automatically place corresponding stock trades based on triggered
        rules.
        • Engineered an independently-scheduled evaluator on AWS Lambda (Docker/ECR, EventBridge) to
        execute rule and watchlist logic against a Postgres database.
        • Implemented multithreading with Python's ThreadPoolExecutor to parallelize concurrent ticker
        price lookups, cutting refresh latency 9x (0.89s → 0.10s).
        • Implemented JWT authentication with bcrypt password hashing and Redis-backed caching for live
        market data.
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
