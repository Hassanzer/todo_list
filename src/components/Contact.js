import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='py-8 lg:py-24 lg:h-screen flex items-center sm:py-16' id='contact'>
    <div className='container mx-auto mt-20 py-10'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none'>Let's Talk </h2>
          </div>
        </motion.div>
        <motion.form 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          type="text"
          placeholder='Your Name'/>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          type="text"
          placeholder='Your Email'/>
          <textarea className='bg-transparent border-b py-16 outline-none w-full placeholder:text-white focus:border-accent transition-al resize-none mb-12'
          placeholder='Your Message' type='text'></textarea>
        
        <button className='btn btn-lg ml-60'>Send Message</button>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
