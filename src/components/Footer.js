import React from 'react';
import Logo from '../assets/logo.png.png'

const Footer = () => {
  return <footer className='mx-20 pt-40 pb-10'>
    <div className='countainer mx-auto'>
      <div className='flex items-center justify-between'>
        <a href='#'>
          <img className='h-[50px] w-[50px] flex items-center' src={Logo} alt=''/>

        </a>
        <button className='btn btn-sm'>Hire Me</button>
      </div>

    </div>

  </footer>;
};

export default Footer;
