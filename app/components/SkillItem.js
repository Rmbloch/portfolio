import { motion, useSpring, transform } from 'framer-motion'
import { useState } from 'react'

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillItem({ skill }) {
  const [frame, setFrame] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  })

  const rotateValue = 15
  const springValue = { stiffness: 400, damping: 30 }

  const rotateX = useSpring(0, springValue)
  const rotateY = useSpring(0, springValue)
  const shadowX = useSpring(0, springValue)
  const shadowY = useSpring(30, springValue)

  const convertCursorPosition = (e) => {
    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height

    rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]))
    rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]))

    shadowX.set(transform(objectX, [0, 1], [20, -20]))
    shadowY.set(transform(objectY, [0, 1], [60, 20]))
  }

  const handleMouseEnter = (e) => {
    const currentElement = e.target.getBoundingClientRect()

    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left
    })

    convertCursorPosition(e)
  }

  const handleMouseMove = (e) => {
    convertCursorPosition(e)
  }

  const handleMouseLeave = (e) => {
    rotateX.set(0)
    rotateY.set(0)
    shadowX.set(0)
    shadowY.set(40)
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1200,
      }}
    >
      <div className="content flex flex-col items-center">
        <div className="text-5xl sm:text-6xl xl:text-7xl">{skill.icon}</div>
        <div className="text-[9px] sm:text-sm mt-1 text-center">{skill.name}</div>
      </div>
    </motion.div>
  )
}