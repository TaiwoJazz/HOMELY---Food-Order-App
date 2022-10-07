import React from 'react';

import Logo from '../Header/Logo';

const Brand = () => {
  return (
    <div>
      <Logo />
      <p className='text-xl max-w-sm my-6'>
        Solution for easy and flexible house hunting. You can trust us anywhere
        through this platform
      </p>
      <a
        className='text-xl'
        href='https://github.com/TaiwoJazz'
        target='_blank'
        rel='noopener noreferrer'
      >
        Made with ❤️ by <span className='cursor-pointer'>Taiwo Jazz</span>
      </a>
      <span className='block mt-4 text-2xl'>&copy;2022</span>
    </div>
  );
};

export default Brand;
