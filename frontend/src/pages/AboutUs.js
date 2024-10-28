import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    id: 1,
    description: "We're more than just a platform; we're a beacon of hope in the digital realm, providing solace to those navigating life's storms Our mission is simple yet profound: to create a nurturing environment where individuals can share their struggles openly while receiving invaluable insights and support from a caring community"
  },
  {
    id: 2,
    description: "We harness the power of technology not just to connect, but to heal—to ensure that every interaction nurtures both mind and soul. We believe in the transformative magic of sharing ,knowing that in each narrative lies the potential for healing and growth."
  },
  {
    id: 3,
    description: "In a world where mental well being is often overlooked, especially in India where millions grapple with silent battles, we stand firm in our commitment to fostering positive change. Through our app and website, we have cultivated a diverse tapestry of voices, including survivors, therapists, psychologists, and everyday heroes. Here, conversations span a myriad of topics-from financial woes to familial dynamics-bolstered by the unifying thread of empathy and understanding."
  }
]

const variants ={
  hidden:{
    opacity:0,
  },
  show:{
    opacity:1,
  }
}

const About = () => {
  return (
    <>
      <div className='min-h-svh'>
        <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-none flex justify-evenly text-3xl p-5 px-24 font-serif font-semibold text-black" id='about'>
          <h1>Who We Are?</h1>
          <h1>What We Do?</h1>
          <h1>Why We Do?</h1>
        </div>
        <motion.div 

        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once:true,
          amount:0.7,
        }}
        transition={{
          duration:1.5,
        }}

        className='lg:p-16 lg:px-[200px] xl:p-20 xl:px-[300px] flex justify-between font-serif text-black '>
          <div className='flex flex-col lg:gap-4 xl:gap-7'>
            <div className='bg-lime-100 rounded-xl  lg:w-[30vw] xl:w-[500px] p-8 text-center lg:text-xl xl:text-2xl'>
              <p>{data[0].description}</p>
            </div>

            <div className='bg-lime-100 rounded-xl  xl:w-[500px] lg:text-xl xl:text-2xl text-center p-8 py-10'>
              <p>{data[1].description}</p>
            </div>
          </div>

          <div className='bg-lime-100 rounded-xl lg:h-[600px] xl:h-[480px] xl:w-[500px] lg:text-xl xl:text-2xl text-center p-8 float-right lg:ml-10 lg:mt-8 mt-16'>
            <p>{data[2].description}</p>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default About
