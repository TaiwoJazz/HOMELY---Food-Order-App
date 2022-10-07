import React from 'react';

import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';

const Social = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mb-10'>Social</h1>
      <span className='space-y-6 cursor-pointer'>
        <img src={instagram} alt='instagram' />
        <img src={twitter} alt='instagram' />
        <img src={facebook} alt='instagram' />
      </span>
    </div>
  );
};

export default Social;
