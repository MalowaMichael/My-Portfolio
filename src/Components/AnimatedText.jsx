import React from 'react'
import {motion} from 'framer-motion'
const AnimatedText = () => {
  return (
    <div className='mt-[5%] w-[60%] m-auto'>
      <motion.div
        className='text-2l font-medium text-white'
        animate = {{
          x:["0%", "100%", "0%"],
          rotate:[0, 360]
        }}

        transition={{
          x:{
            repeat:"infinity",
            repeatType:"reverse",
            duration:4,
            ease:'ease-in-out'

          },
          rotate: {
            repeat:"infinity",
            duration: 2,
            ease: "linear"
          }
        }}
      >
        Infinite rotation and bouncing text
      </motion.div>
    </div>
  )
}

export default AnimatedText