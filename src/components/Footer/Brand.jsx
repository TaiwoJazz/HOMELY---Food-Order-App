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
      <span className='text-xl'>
        Made with ❤️ by <span className='cursor-pointer'>Taiwo Jazz</span>
      </span>
      <span className='block mt-4 text-2xl'>&copy;2022</span>
    </div>
  );
};

export default Brand;
