import React from 'react'
import img_about1 from '/rutgerslogo copy.png'

export default function About() {
    return (
        <section 
            id='about'
            className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center text-center lg:text-left">
                
                <figure 
                    data-aos='fade-right' 
                    data-aos-delay='500'
                    className="relative flex justify-center items-center w-full mb-8 lg:mb-0"
                >
                    {/* Image container with gradient background on large screens */}
                    <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 z-10">
                        <img 
                            src={img_about1} 
                            alt="Rutgers Computer Science Logo"
                            className="w-full h-full object-contain rounded-3xl shadow-lg"
                        />

                        {/* Gradient background behind image on large screens */}
                        <div className="hidden md:block absolute inset-0 
                                        bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] 
                                        rounded-full blur-2xl -z-10 rotate-12 scale-125">
                        </div>
                    </div>
                </figure>

                <article 
                    data-aos="fade-left" 
                    data-aos-delay="500" 
                    className="relative"
                >
                    {/* Glowing Circle Behind Text */}
                    <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] 
                                    rounded-full blur-3xl opacity-50 -top-5 left-10">
                    </div>

                    <header>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative z-10">
                            About Me
                        </h1>
                    </header>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed relative z-10">
                        I am a Computer Science and Data Science student at Rutgers University, New Brunswick, with a
                        strong foundation in software engineering and a growing focus on machine learning and computer
                        vision. I've built full-stack applications with React, Spring Boot, and TypeScript, and more
                        recently I've been applying deep learning to real research problems, from convolutional neural
                        networks for image segmentation to AI-powered data analysis tools.
                        I'm Amazon Cloud Practitioner certified and enjoy working across the stack, from Python and
                        TensorFlow on the backend to modern JavaScript frameworks on the front end.
                    </p>
                </article>
            </div>
        </section>
    )
}
