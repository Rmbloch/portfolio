/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion';
import Skills from './Skills';
import Image from 'next/image';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const h1Elements = document.querySelectorAll('h1[data-text]')
    const interval = setInterval(() => {
      h1Elements.forEach(h1 => h1.classList.add('h1-glitch'))
      setTimeout(() => {
        h1Elements.forEach(h1 => h1.classList.remove('h1-glitch'))
      }, 3000) // Remove hover effect after 3 seconds
    }, 10000) // Trigger hover effect every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.section 
        id="about" 
        className="flex-1 px-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mt-20 mb-10 pt-20">
          <h1 className="glitch" data-text="About Me">About Me</h1>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start bg-white py-20">
          <div className="flex-1 text-center">
            <div className="flex justify-center pb-10">
              <Image 
                src="/Image 5-1-24 at 3.19 PM.JPG" 
                alt="Ryan Bloch" 
                width={160}
                height={160} 
                className="w-36 h-36 xl:w-60 xl:h-60 md:w-48 md:h-48 sm:w-36 sm:h-36 rounded-full border-4 border-blue-950"
              />
            </div>
            <p className="text-xl text-black pb-10">
              Hi, I’m Ryan Bloch, a passionate developer and full time student at the University of Pittsburgh.
              I’m currently pursuing a Bachelor of Science in Computer Science and a minor in Business, expecting to graduate in April 2026.
              Along with my studies, I have experience in both front-end and back-end development, with hands-on experience in modern technologies like Ruby on Rails, React, and OpenAI's APIs.
            </p>
          </div>

          <motion.div 
            className="flex-1 w-full flex justify-center items-center pl-2" 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <Skills />
          </motion.div>
        </div>
      </motion.section>

      <section className="pt-24">
        <div className="container mx-auto py-12">
          <div className="relative">
            {/* Longer line at the top with "scroll" text don't touch*/}
            <div className="absolute left-1/2 h-48 w-0.5 bg-gray-300 -translate-x-1/2 -top-48">
              <span className="absolute top-0 right-2 text-sm text-gray-500 origin-bottom-right">
                scroll
              </span>
            </div>

            {/* Central line also don't touch*/}
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="relative mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <motion.div 
                  className="w-full sm:w-1/2 flex justify-center px-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{ once: true, margin: '-100px 0px' }}
                >
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Education</h3>
                    <p className="text-gray-700">
                      I am currently a full-time student at the University of Pittsburgh, pursuing a Bachelor of Science in Computer Science with a minor in Business. I am a rising junior with an expected graduation date of April 2026.
                      Throughout my 2 full years at Pitt, I have completed rigorous coursework towards the Computer Science degree such as Algorithms and Data Structures 1 & 2, Computer Organization & Assembly Language, and Discrete Structures.
                      While maintaining a GPA above 3.7, I also stay actively involved in various coding projects, hack-a-thons, and on-campus clubs.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="invisible absolute left-1/2 w-4 h-4 bg-blue-800 rounded-full transform -translate-x-1/2 flex items-center justify-center sm:visible"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="w-full pt-12 sm:w-1/2 px-0 sm:px-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/cathycathedral.webp?height=200&width=300"
                    alt="Cathy"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </motion.div>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="flex flex-col sm:flex-row-reverse items-center">
                <motion.div 
                  className="w-full sm:w-1/2 flex justify-center px-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 2 } }}
                  viewport={{ once: true, margin: '-200px 0px' }}
                >
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-right">
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">Philanthropy</h3>
                      <p className="text-gray-700">
                        Since I was 11 years old, I had a passion for raising money for charity. The first charity I supported was called Jewish War Veterans, which sought to help veterans and their families.
                        Although I was young, I still disliked seeing veterans homeless on the streets, so I called up family and friends to help me raise money for the charity.
                        I was able to raise upwards of $1,000 using my tennis tournament as an event. Ever since that first event, I have organized and participated in numerous charity events for notable charities such as GameChanger Charity, The American Cancer Society, and KureIt.
                        My two most successful events were a gaming tournament that raised $26,000 for KureIT, called <a href="https://dinasherman21.wixsite.com/gameonforakure" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">"Game on For a Kure"</a>, and a 24hr streaming marathon that raised $72,000 for GameChanger Charity, called "GamersBeatCancer".
                        For my contributions to the GamersBeatCancer event, I was recognized as Youth Volunteer of the Year by GameChanger Charity and featured in an <a href="https://www.11alive.com/article/entertainment/television/programs/the-a-scene/atlanta-gamers-team-up-against-cancer/85-c57ee8a1-6cf7-4b3a-8973-6b0ba630af87" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">interview</a> on a local Atlanta news station.
                        In recognition of my philanthropic efforts, I was also awarded the Global Youth Award by Global Youth Group and featured as a "Extraordinary Teen" on a <a href="https://venturablvd.goldenstate.is/from-high-achievers-to-change-makers-meet-10-extraordinary-valley-teenagers/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">local magazine</a>.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="invisible absolute left-1/2 w-4 h-4 bg-blue-800 rounded-full transform -translate-x-1/2 flex items-center justify-center sm:visible"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 2 } }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="w-full pt-12 sm:w-1/2 px-0 sm:px-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/kureit.JPEG?height=200&width=300"
                    alt="Kure It"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </motion.div>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div 
                  className="w-full sm:w-1/2 px-6 mx-auto flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{ once: true, margin: '-200px 0px' }}
                >
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">When I'm not programming...</h3>
                    <p className="text-gray-700">
                      I enjoy listening to all kinds of music, staying active in my on-campus clubs, playing guitar, going to the gym, cooking, and following the latest tech news and stock market.
                      I am also an extremely big sports fan, with my favorite teams being the Pittsburgh Steelers, Los Angeles Lakers, and Los Angeles Dodgers. When it comes to music,
                      I enjoy listening to all different genres, but my favorite are rock, rap, and jazz. Some of my favorite artists/bands include Pink Floyd, Kid Cudi, Masayoshi Takanaka,
                      and Miles Davis. Unfortunately, I have not been playing the guitar long enought to play some of my favorite songs... but I am working on it! At the moment, I am 
                      currently part of two on-campus organizations/clubs, the Pitt Computer Science Club and the Sigma Alpha Epsilon fraternity. While I am just a active member in both, 
                      I am looking to take on more of a leadership role in my fraternity in the future. Finally, I am a huge tech and stock market enthusiast. I very much love following
                      the latest tech news and anything to do with the US stock market. I have been investing in the market since I was a junior in highschool, and it has taught me a lot
                      about not only the importance of saving, but also how both large and small companies operate.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="invisible absolute left-1/2 w-4 h-4 bg-blue-800 rounded-full transform -translate-x-1/2 flex items-center justify-center sm:visible"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="w-full pt-12 sm:w-1/2 px-0 sm:px-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/albums.png?height=200&width=300"
                    alt="Albums"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}