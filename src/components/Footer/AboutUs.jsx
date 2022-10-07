import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h1 className='text-3xl mb-8'>About</h1>
      <span className='flex flex-col gap-3 opacity-80 cursor-pointer'>
        <h6>Our Company</h6>
        <h6>Career</h6>
        <h6>Investor Relations</h6>
        <h6>Social Impact</h6>
      </span>
    </div>
  );
};

export default AboutUs;
