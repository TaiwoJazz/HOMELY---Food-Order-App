import React, { Fragment } from 'react';
import Stats from './Stats';
import Button from '../UI/Button';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <Fragment>
      <div
        className='flex flex-col lg:flex-row items-center text-center lg:text-left gap-8 md:gap-24 lg:gap-8 xl:gap-32 px-6 md:px-0 md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto mt-28 lg:mt-52'
        data-aos='fade-up'
        data-aos-easing='ease-in'
        data-aos-duration='2000'
      >
        <div>
          <h1 className='text-5xl font-semibold leading-snug'>
            Enjoy <span className='text-brandColor'>home made meals</span> far
            away from home
          </h1>
          <p className='text-2xl mt-2 mb-8 max-w-md mx-auto lg:mx-0'>
            Helping you enjoy confortable and health food anywhere and anytime
            on the go
          </p>
          <Button>Order Now</Button>
        </div>
        <img
          src={heroImage}
          alt='hero'
          // data-aos='fade-left'
          // data-aos-easing='ease-in'
          // data-aos-duration='2000'
        />
      </div>
      <Stats />
    </Fragment>
  );
};

export default Hero;
