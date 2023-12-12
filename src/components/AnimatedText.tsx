import React from 'react'
import { AnimatedTextType } from '../types/AnimatedText'
import { motion } from 'framer-motion';


function AnimatedText(props: AnimatedTextType) {

  const words = props.text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
  }


  return (
    <motion.div style={{ overflow: "hidden", display: "flex" }} variants={container} initial="hidden" animate="visible" className='font-semibold' >
      {words.map((word, index) => (
        <motion.span variants={child} className={props.mode ? 'mr-2 text-gray-100' : 'mr-2 text-slate-950'} key={index} >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}


export default AnimatedText
