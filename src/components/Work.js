import React from 'react';

import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return <section className='py-8 lg:py-12 lg:h-screen flex items-center mt-20' id='work'>
  <div className='container mx-auto lg:mx-40'>
    <div className='flex flex-col lg:flex-row gap-x-10'>
      <motion.div 
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 flex-col gap-y-16 mb-10 lg:mb-0'>
        <div>
          <h2 className='h2 leading-tight text-accent'>
            My Best <br />
            Projects.
            </h2>
            <p className='max-w-sm mb-[90px]'>
            Explore my best projects showcasing my skills in web design, front-end development, and UX/UI design.
            </p>
            
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='gourp-hover:scale-125 transition-all duration-500' 
          src={Img1} alt='' />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>UI/UX Design</div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>Project Title</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
      variants={fadeIn('right', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 flex flex-col gap-y-10'>
      <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='gourp-hover:scale-125 transition-all duration-500' 
          src={Img2} alt='' />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>UI/UX Design</div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>Project Title</span>
          </div>
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          <img className='gourp-hover:scale-125 transition-all duration-500' 
          src={Img3} alt='' />
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>UI/UX Design</div>
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>Project Title</span>
          </div>
        </div>

      </motion.div>
    </div>

  </div>
  
  </section>;

};

export default Work;
