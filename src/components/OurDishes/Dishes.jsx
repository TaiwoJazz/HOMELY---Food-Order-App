import React from 'react';

import Heading from './Heading';
import AvailableMeals from './AvailableMeals';

const Dishes = () => {
  return (
    <div id='dishes' className='mb-24 px-6 md:px-0 md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto'>
      <Heading />
      <AvailableMeals />
    </div>
  );
};

export default Dishes;
