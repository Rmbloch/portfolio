'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FaNodeJs, FaReact, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'
import { RiNextjsFill } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiRubyonrails, SiTailwindcss } from 'react-icons/si'
import SkillItem from './SkillItem'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const skills = [
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Ruby', icon: <DiRuby className="text-red-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3 className="text-blue-500" /> },
  { name: 'Ruby on Rails', icon: <SiRubyonrails className="text-red-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Next.js', icon: <RiNextjsFill className="text-black" /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql className="text-blue-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-pink-500" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> }
]

export default function Skills() {
  const rowRefs = useRef([])

  const rows = []
  const itemsPerRow = [1, 2, 3, 4, 5]

  let skillIndex = 0
  for (let i = 0; i < itemsPerRow.length; i++) {
    rows.push(skills.slice(skillIndex, skillIndex + itemsPerRow[i]))
    skillIndex += itemsPerRow[i]
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="gap-2 row"
          ref={(el) => (rowRefs.current[rowIndex] = el)}
          variants={containerVariants}
        >
          {row.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}