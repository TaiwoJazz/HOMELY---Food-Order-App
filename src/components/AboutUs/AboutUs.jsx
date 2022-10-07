import React from 'react';
import Button from '../UI/Button';
import aboutus from '../../assets/aboutus.png';

const AboutUs = () => {
  return (
    <>
      <div id='about'
        className='flex flex-col lg:flex-row items-center justify-between md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto mb-32 mt-44 px-6 md:px-0'
        data-aos='fade-up'
        data-aos-easing='ease-in'
      >
        <div className='text-center lg:text-left mb-16 lg:mb-0'>
          <h1 className='text-4xl font-semibold text-brandColor'>About Us</h1>
          <p className='text-xl md:text-2xl my-6 max-w-lg leading-normal'>
            I make delicious healthy meals for busy people who want to enjoy
            home made food without the hassle of cooking. Why would you cook
            when you don't have to? The Hot Plate makes it easy to eat your
            favorite home cooked food anywhere you want. You deserve to eat
            great food, whether you're at home or on the go.
          </p>
          <Button>See More</Button>
        </div>
        <img
          className='w-64 sm:w-96'
          src={aboutus}
          alt='about us'
        />
      </div>
    </>
  );
};

export default AboutUs;
