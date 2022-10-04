import React from 'react';
import GetOurMobile from './GetOurMobile';
import Button from '../UI/Button';
import aboutus from '../../assets/aboutus.png';

const AboutUs = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center justify-between w-[400px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto mb-32 mt-44'>
      <div
        className='text-center lg:text-left mb-16 lg:mb-0'
        data-aos='fade-right'
        data-aos-easing='ease-in'
      >
        <h1 className='text-4xl font-semibold text-brandColor'>About Us</h1>
        <p className='text-2xl my-6 max-w-lg leading-normal'>
          I make delicious healthy meals for busy people who want to enjoy home
          made food without the hassle of cooking. Why would you cook when you
          don't have to? The Hot Plate makes it easy to eat your favorite home
          cooked food anywhere you want. You deserve to eat great food, whether
          you're at home or on the go.
        </p>
        <Button>See More</Button>
      </div>
      <img
        src={aboutus}
        alt='about us'
        data-aos='fade-left'
        data-aos-easing='ease-in'
      />
    </div>
    <GetOurMobile />
    </>
  );
};

export default AboutUs;
