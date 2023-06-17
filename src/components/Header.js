import React from 'react';
import Logo from '../assets/logo.png.png'

const Header = () => {
  return <header className='mx-20 py-6'>
    <div className='countainer mx-auto'>
      <div className='flex items-center justify-between'>
        <a href='#'>
          <img className='h-[50px] w-[50px] flex items-center' src={Logo} alt=''/>

        </a>
        <button className='btn btn-sm'>Hire Me</button>
      </div>

    </div>

  </header>;
};

export default Header;
