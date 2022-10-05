import React from 'react';
import mobileapps from '../../assets/mobile-app.png';
import playstore from '../../assets/play-store.png';
import applestore from '../../assets/apple-store.png';

const GetOurMobile = () => {
  return (
    <div className='text-center px-4 md:px-0'>
      <h1 className='text-4xl font-semibold text-brandColor'>
        Get Our Mobile App
      </h1>
      <p className='text-2xl mt-2'>Enjoy better experience</p>
      <div
        className='flex flex-col-reverse lg:flex-row items-start justify-around w-[290px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto mb-32 lg:mt-12'
        data-aos='fade-up'
        data-aos-easing='ease-in'
      >
        <img
          className='lg:-ml-24'
          src={mobileapps}
          alt='about us'
        />
        <div className='text-center lg:text-left mb-16 lg:mb-0 mx-auto'>
          <p className='text-xl md:text-2xl my-6 max-w-lg leading-normal'>
            I make delicious healthy meals for busy people who want to enjoy
            home made food without the hassle of cooking. Why would you cook
            when you don't have to? The Hot Plate makes it easy to eat your
            favorite home cooked food anywhere you want. You deserve to eat
            great food, whether you're at home or on the go.
          </p>
          <img
            className='inline-block mr-4 md:mr-10 w-32 md:w-48'
            src={playstore}
            alt=''
          />
          <img className='inline-block w-28 md:w-40' src={applestore} alt='' />
        </div>
      </div>
    </div>
  );
};

export default GetOurMobile;
