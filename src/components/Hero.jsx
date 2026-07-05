import React from 'react';
import Navbar from './Navbar';
import GitHub from '/gitlogo.png';
import Resume from '/Prateek_Komarla_Resume.pdf';
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <div className='absolute h-[550px] w-[450px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'></div>
            
            <Navbar />

            <main
                id="home"
                className='flex flex-1 flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 pt-20 md:pt-32 z-10'
            >
                <section
                    className="flex-1 mr-0 md:mr-28 mt-10 md:mt-0 relative md:text-left text-center"
                    data-aos='fade-up'
                    data-aos-delay="500"
                >
                    <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>

                    <header>
                        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                            Prateek Komarla
                        </h1>
                        <h2 className="text-2xl sm:text-4xl md:text-3xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
                            Software Engineer & ML Enthusiast
                        </h2>
                    </header>

                    <p className="text-lg sm:text-xl md:text-xl text-gray-200 mb-6">
                        Passionate about coding, creating innovative solutions, and constantly learning.
                        I specialize in fullstack development and machine learning, focusing on building
                        user-friendly, data-driven applications.
                    </p>

                    <div className="flex justify-center md:justify-start items-center space-x-6 mb-6">
                        <a href="https://github.com/pvk345" target="_blank" rel="noopener noreferrer">
                            <img 
                                src={GitHub} 
                                alt="github" 
                                className="w-20 h-20 rounded-full transition-transform transform hover:scale-125 hover:rotate-12 shadow-lg"
                            />
                        </a>
                        {/* TODO: replace with your actual LinkedIn URL */}
                        <a href="https://www.linkedin.com/in/prateek-komarla-95100732b/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-20 h-20 rounded-full bg-white text-[#0A66C2] p-3 transition-transform transform hover:scale-125 hover:-rotate-12 shadow-lg" />
                        </a>
                    </div>

                    <a href={Resume} download>
                        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
                            Download Resume
                        </button>
                    </a>
                </section>
            </main>
        </div>
    );
}
