import React from 'react';

import Brand from './Brand';
import AboutUs from './AboutUs';
import Social from './Social';

const Footer = () => {
  return (
    <div className='bg-backgroundFooter px-6 md:px-0'>
      <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 items-center lg:items-start justify-between text-white md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto py-12 text-center lg:text-left'>
        <Brand />
        <AboutUs />
        <Social />
      </div>
    </div>
  );
};

export default Footer;
