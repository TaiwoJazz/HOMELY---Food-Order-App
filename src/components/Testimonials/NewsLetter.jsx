import React from 'react';
import Button from '../UI/Button';

const NewsLetter = () => {
  return (
    <div className='text-center mb-24 px-6 md:px-0'>
      <h1 className='text-4xl font-semibold text-brandColor'>
        Subscribe to our Newsletter
      </h1>
      <p className='text-md font-semibold text-textLight2 my-4'>
        Enter your Email address to get daily offers and news
      </p>
      <div>
      <input className='text-base border border-textLight2 rounded-md p-2 mr-4 md:w-96 mb-4 md:mb-0 focus:outline-brandColor' type='text' placeholder='Enter your email' />
      <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default NewsLetter;
