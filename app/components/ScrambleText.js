import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ScrambleText = ({ text }) => {
  const [scrambledText, setScrambledText] = useState(' '.repeat(text.length))
  const characters = 'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴ'
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let revealTimeouts = []
      let scrambleIntervals = []

      const scramble = (index) => {
        setScrambledText((prev) => {
          const newText = prev.split('')
          newText[index] = characters[Math.floor(Math.random() * characters.length)]
          return newText.join('')
        });
      };

      const reveal = (index) => {
        setScrambledText((prev) => {
          const newText = prev.split('')
          newText[index] = text[index]
          return newText.join('')
        });
        clearInterval(scrambleIntervals[index])
      };

      text.split('').forEach((char, index) => {
        if (char !== ' ') {
          scrambleIntervals[index] = setInterval(() => scramble(index), 30)
          revealTimeouts[index] = setTimeout(() => reveal(index), 500 + index * 50)
        } else {
          revealTimeouts[index] = setTimeout(() => reveal(index), 500 + index * 50)
        }
      });

      return () => {
        revealTimeouts.forEach(clearTimeout)
        scrambleIntervals.forEach(clearInterval)
      };
    }
  }, [inView, text, characters])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {scrambledText}
    </motion.span>
  );
};

export default ScrambleText;