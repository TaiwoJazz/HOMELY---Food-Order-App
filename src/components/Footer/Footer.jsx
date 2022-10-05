import React from 'react';
import Logo from '../Header/Logo';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';

const Footer = () => {
  return (
    <div className='bg-backgroundFooter px-6 md:px-0'>
      <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 items-center lg:items-start justify-between text-white md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto py-12 text-center lg:text-left'>
        <div>
          <Logo />
          <p className='text-xl max-w-sm my-6'>
            Solution for easy and flexible house hunting. You can trust us
            anywhere through this platform
          </p>
          <span className='text-xl'>
            Made with ❤️ by <span className='cursor-pointer'>Taiwo Jazz</span>
          </span>
          <span className='block mt-4 text-2xl'>&copy;2022</span>
        </div>
        <div>
          <h1 className='text-3xl mb-8'>About</h1>
          <span className='flex flex-col gap-3 opacity-80 cursor-pointer'>
            <h6>Our Company</h6>
            <h6>Career</h6>
            <h6>Investor Relations</h6>
            <h6>Social Impact</h6>
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl mb-10'>Social</h1>
          <span className='space-y-6 cursor-pointer'>
            <img src={instagram} alt='instagram' />
            <img src={twitter} alt='instagram' />
            <img src={facebook} alt='instagram' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
