import React from 'react';
import dishItems from './DishItems';
import Button from '../UI/Button';
import PlusSign from '../../assets/plus.png';

const Dishes = () => {
  return (
    <div className='mb-24 px-6 md:px-0 md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto'>
      <div
        className='text-center mb-12'
        data-aos='fade-up'
        data-aos-easing='ease-in'
      >
        <h1 className='text-4xl font-semibold text-brandColor'>
          Our daily dishes
        </h1>
        <p className='text-2xl mt-4'>
          Check out recomended dishes of your choice
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-16'>
        {dishItems.map(dishes => (
          <div
            key={dishes.id}
            className='bg-white px-4 md:px-12 py-6  lg:w-[350px] md:w-[600px] rounded-xl drop-shadow-lg mx-auto cursor-pointer'
            data-aos='fade-up'
            data-aos-easing='ease-in'
          >
            <img className='mx-auto' src={dishes.image} alt='' />
            <h4 className='text-xl text-center font-semibold my-6'>
              {dishes.title}
            </h4>
            <span className='flex items-center justify-between'>
              <p className='text-xl inline-block font-semibold'>
                ₦{dishes.amount}
              </p>
              <Button>
                <img className='inline-block mb-1' src={PlusSign} alt='' />
                &nbsp; Add &nbsp;
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
