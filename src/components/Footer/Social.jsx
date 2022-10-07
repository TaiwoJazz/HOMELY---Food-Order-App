import React from 'react';

import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';

const Social = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mb-10'>Social</h1>
      <span className='flex md:flex-col gap-8 md:cursor-pointer'>
        <a
          href='https://www.instagram.com/babsman4all/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={instagram} alt='instagram' />
        </a>
        <a href='https://twitter.com/Taiwo__Jazz' target='_blank' rel='noopener noreferrer'>
          <img src={twitter} alt='instagram' />
        </a>
        <a href='https://facebook.com/TaiwoJazz' target='_blank' rel='noopener noreferrer'>
          <img src={facebook} alt='instagram' />
        </a>
      </span>
    </div>
  );
};

export default Social;
