import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto lg:mx-40'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap:x-20 lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top'>
          
          </motion.div >
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-2'>
              I'm a Junior front-end Developer & Web designer
            </h3>
            <p className='mb-4'>A pationnate person With a strong foundation in both technical and creative skills, I am committed to continuously improving and staying up-to-date with the latest design trends and technologies.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-8 '>
              
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Completed <br />
                  Projects
                </div>
              </div>
            </div>
            <div className='flex gap-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
