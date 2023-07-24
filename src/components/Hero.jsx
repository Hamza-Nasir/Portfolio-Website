import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from './canvas'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={` px-[10%] md:px-[25%] xl:px-[35%] absolute inset-0 top-[120px] 
        mx-auto flex flex-row items-start gap-5`}>

        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
        <div>
          <h1 className={`${styles.heroHeadText} mt-[25%] text-white text-center`}>Hello! I'm <br />
            <span className='text-[#4169E1]'><TypeAnimation
              sequence={[
                'Hamza', // Types 'One'
                1000, // Waits 1s
                'Eggy Sama', // Deletes 'One' and types 'Two'
                1000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              
            /></span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            A seasoned <span className='text-[#4169E1]'>Software Engineer </span>
            from <br /> FAST specializing in
            <span className='text-[#4169E1]'> Frontend technologies</span>
            <br /> and an endless desire for self-improvement
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 
        w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4
              border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />

          </div>
        </a>
      </div> */}
    </section>
  )
}
