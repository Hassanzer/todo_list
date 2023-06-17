import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import {motion } from 'framer-motion'
import { fadeIn } from '../variants';


import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";

import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";

import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";


const services =[
  {
    name: 'UI/UX Design',
    description: 'I can use my technical and creative skills to craft memorable user experiences that make an impact.',
    link: 'Learn More',
  },
  {
    name: 'Graphic Design',
    description: 'As a multi-disciplinary designer, I am passionate about creating intuitive, user-friendly interfaces that blend function with aesthetics.',
    link: 'Learn More',
  },
  {
    name: 'Web Developer',
    description: 'Junior front-end developer with a strong educational background in computer development and self-taught experience in React, Tailwind, JavaScript, HTML, CSS, and Wordpress, as well as basic knowledge of Node.js, Next.js',
    link: 'Learn More',
  }
]

const Services = () => {
  return <section className='py-8 lg:py-24 lg:h-screen flex items-center' id='services'>
    <div className='container mx-auto lg:mx-40'>
    <div className='flex items-center justify-center rounded-full flex-1 h-12 w-12 space-x-4 mx-auto mb-6 py-6 mix-blend-lighten'>
          <img src={sk1} alt=''/>
          <img src={sk2} alt=''/>
          <img src={sk4} alt=''/>
          <img src={sk5} alt=''/>
          <img src={sk8} alt=''/>
          <img src={sk9} alt=''/>
          <img src={sk10} alt=''/>
          <img src={sk11} alt=''/>
        </div>
      <div className='flex flex-col lg:flex-row'>
        
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          I'm a Junior front-end Developer with over that one years of experience.
          </h3>
          <button className='btn btn-sm'>See My Work</button>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
            {services.map((service, index)=> {
              const { name, description, link} = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                  <p className='font-secondary leading-tight text-[16px]'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] justify-center items-center flex'>
                    <BsArrowUpRight />
                  </a>
                  <a href='#' className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
