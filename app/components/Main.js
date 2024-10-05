'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

export default function Main() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [text, setText] = useState('')
  const fullText = 'Student, Software Engineer, and Full-Stack Developer'
  const vantaRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffect = CLOUDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        THREE
      })
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }
  }, [vantaRef])

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black-100 relative gradient-opacity"
      ref={vantaRef}
      initial={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl text-black font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 8 }}
        >
          Ryan Bloch
        </motion.h1>
        <motion.h2
          className="text-3xl text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {text}
        </motion.h2>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isAtTop ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            width="24"
            height="42"
            viewBox="0 0 24 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="40"
              rx="11"
              stroke="currentColor"
              strokeWidth="2"
            />
            <motion.line
              x1="12"
              y1="8"
              x2="12"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ y: 0 }}
              animate={{ y: [0, 6, 6, 0, 0], opacity: [1, 1, 0, 0, 1]  }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  )
}