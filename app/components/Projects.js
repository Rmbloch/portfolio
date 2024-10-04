'use client'

import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Macbook from './Macbook'
import ScrambleText from './ScrambleText'
import { motion } from 'framer-motion'

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false)
  

  useEffect(() => {
    setIsMounted(true)
    const h1Elements = document.querySelectorAll('h1[data-text]')
    const interval = setInterval(() => {
      h1Elements.forEach(h1 => h1.classList.add('h1-glitch'))
      setTimeout(() => {
        h1Elements.forEach(h1 => h1.classList.remove('h1-glitch'))
      }, 3000) 
    }, 10000)

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Automated Youtube Channel",
      description: "Created a python program that fully automates the creation of a video and uploads it to a Youtube channel. The github repository linked, goes indepth on the technologies I used to create this project. The purpose of this project was to gain more experience with Python and challenge myself to build something that I have never attempted before.",
      buttonText: "See Project Github",
      buttonLink: "https://github.com/Rmbloch/news-youtube",
      screenImage: "/global-news-yt(1).png"
    },
    {
      title: "LaterHater Extension",
      description: "Originally called Hate Blocker, LaterHater is a Chrome Extension that uses a natural language model to detect hate speech and block it from a social media feed. This extension was created by me and two other team members for a local Hack-a-thon, and sought to tackle the issue of online hate in social media. As LLMs become more advanced, I plan to revist this project and eventually release it to the public.",
      buttonText: "See Project Github",
      buttonLink: "https://github.com/Rmbloch/Hate-Blur-Chrome-Extension ",
      screenImage: "/laterhater.png"
    },
    {
      title: "Portfolio Website",
      description: "I am including this website as a major project, not only because it is recent, but because it was a project which required me to learn a lot of new technologies in order to complete the website. I combined my full-stack experience with unfamiliar technologies such as React and Next.js, to build a visually appealing and responsive website. My goal for this project was to further develope my front-end skills, while also creating a platform to showcase my projects and other information about me.",
      buttonText: "See Code",
      buttonLink: "https://github.com/Rmbloch/portfolio",
      screenImage: "/website.png"
    }
  ]

  return (
    <section className="bg-white pb-12">
      <div className="flex justify-center pt-20">
        <h1 className="glitch" data-text="Projects">Projects</h1>
      </div>
      <div className="container mx-auto px-4 pt-20 lg:pt-0">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? " ": "lg:pl-8"}`}>
              <h2 className="text-3xl text-black font-bold mb-4">
                <ScrambleText text={project.title} />
              </h2>
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>
              <motion.button 
                className="mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <a href={project.buttonLink} target="_blank" className="project-button inline-block px-6 py-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl relative overflow-hidden transform hover:scale-105 transition duration-300 ease-out">
                  <span className="relative z-10 text-white font-semibold">{project.buttonText}</span>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="i"></div>
                  </div>
                </a>
              </motion.button>
            </div>
            <div className='w-full md:w-1/2 h-64 lg:h-128 xl:h-lvh xl:-mt-40'>
              {isMounted && (
                <Canvas camera={{ position: [0, 0, 2.3], fov: 55 }}>
                  <ambientLight intensity={20} /> 
                  <directionalLight position={[5, 5, 5]} intensity={15} />
                  <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                  >
                    <Macbook screenImage={project.screenImage} facingDirection={index % 2 === 0 ? 'right' : 'left'} />
                  </PresentationControls>
                </Canvas>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}