import React from 'react';

const Stats = () => {
  return (
    <div
      className='flex flex-col md:flex-row text-center items-center justify-center gap-12 md:gap-24 lg:gap-48 my-24'
      data-aos='fade-up'
      data-aos-easing='ease-in'
      data-aos-duration='400'
    >
      {[
        ['500+', 'Food Partner'],
        ['1k+', 'Order Delivery'],
        ['12k+', 'Clients']
      ].map(([number, description]) => (
        <div key={number}>
          <h1 className='text-5xl font-bold mb-4 text-textBold'>{number}</h1>
          <p className='text-base font-semibold text-textLight2'>
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
