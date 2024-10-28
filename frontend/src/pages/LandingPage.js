
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import Image1 from '../assets/images/Image1.png'
import Image2 from '../assets/images/Image2.png'
import Image3 from '../assets/images/Image3.png'

const variants = {
  hidden: {
    y: 400,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 1,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const data = [
  { id: 1, title: "Anonymity security and safety", subtitle: "Your identity remains safeguarded as you open up about your deepest struggles." },
  { id: 2, title: "Seasoned professionals at your fingertips", subtitle: "Engage in insightful conversations with experienced psychologists and empathetic individuals who genuinely care." },
  { id: 3, title: "Around the clock support", subtitle: "Day or night, you're never alone. Our dedicated team ensures that someone is always available to lend a compassionate ear." },
  { id: 4, title: "Empower through support", subtitle: "Beyond seeking solace, you also have the opportunity to extend a helping hand to others traversing similar paths." },
]



const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full bg-[#9AF0E4] min-h-screen overflow-hidden text-black' id='home'>
      <div className='flex w-full items-center pl-40 min-h-screen'>
        <div className='overflow-hidden '>
          <motion.h1 variants={variants} initial="hidden" animate="show"
            className='leading-snug text-[90px] mb-10 font-lobster pt-28'>
            YOUR MENTAL <br />
            HEALTH MATTERS
          </motion.h1>

          <motion.p variants={variants} initial="hidden" animate="show"
            className='text-2xl px-5 font-serif mb-7'>
            Explore a compassionate space where you can connect,
            <br /> share, and grow with others on their mental health journey.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.2 }}
            onClick={() => navigate('/signup')}
          className='bg-red-400 p-3 rounded-full px-3 ml-5 hover:bg-red-300 font-medium hover:scale-105 transition-all'>
            SPEAK IT OUT
          </motion.button>
        </div>
        <div className='ml-12 '>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>
            <img src={Image1} alt="" className='w-[500px] h-[500px]' />
          </motion.div>
        </div>
      </div>

      <div className='flex min-h-screen items-center overflow-hidden'>
        <div className='overflow-hidden flex'>
          <img
            variants={variants} initial="hidden" whileInView="show"
            viewport={{ once: true }}
            src={Image2} alt="" className='w-[800px] pl-16'
          />
        </div>

        <div className='w-1/2 overflow-hidden '>
          <motion.div variants={variants} initial="hidden" whileInView="show"
            viewport={{ once: true }} className=''>
            <h1 className='text-[90px] leading-tight font-lobster ml-28 mb-4'>
              It's okay to <br /> not be okay
            </h1>
            <p className=' py-6 px-28 text-lg font-serif'>
              In the fast-paced hustle of life, it's easy to feel overwhelmed by the weight of our problems. But fret not, for here, within the safe confines of our anonymous haven, you can unburden your heart and soul without fear or judgment.
            </p>
          </motion.div>
        </div>
      </div>


      <div className='flex justify-center text-center mb-24 mt-10 min-h-svh'>
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <div className='grid grid-cols-1 mb-5 bg-red-300 rounded-2xl px-8 py-10 hover:scale-105 transition-all'>
                <h1 className='text-4xl mb-5 font-medium font-satisfy'>{item.title}</h1>
                <h1 className='px-5 text-xl font-serif'>{item.subtitle}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='p-10 px-36 min-h-screen grid grid-cols-1 pb-40'>
        <h1 className='text-center text-6xl font-lobster mb-2'>
          “Recovery is not one and done. It's a lifelong journey that takes place one day, one step at a time”
        </h1>
        <h1 className='text-end pr-16 font-medium text-xl'>
          -Steve Jobs, Mental Health & Adaptations.
        </h1>

        <div className='flex justify-center items-center'>
          <img src={Image3} alt="" />
          <p className='p-16 text-2xl ml-10 mt-14 font-serif'>
            Join us on this journey of resilience and renewal, as together, we weave a tapestry of support and compassion. At HearMe-Out, your well-being is not just our priority; it's our collective mission.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
