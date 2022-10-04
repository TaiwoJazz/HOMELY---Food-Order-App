import React from 'react';
import order from '../../img/order.png';
import delivery from '../../img/delivery-man.png';
import food from '../../img/food.png';

const aboutUsData = [
  {
    tag: 'Easy to Order',
    icon: order,
    description:
      'Order food at a single click and select all food to order at any poin in time and at ease and comfort'
  },
  {
    tag: 'Fast Delivery',
    icon: delivery,
    description:
      'Food delivery fast and reliable and get delivered at deliivery tinme and location any day any time'
  },
  {
    tag: '100% Quality',
    icon: food,
    description:
      'We provide quality food for you and your loved ones for health and so onnnnnn and for wellness'
  }
];

const AboutUs = () => {
  return (
    <div className='my-28 px-4 md:px-0' id='AboutUs'>
      <div
        className='text-center mb-12'
        data-aos='fade-up'
        data-aos-easing='ease-in'
      >
        <h1 className='text-4xl font-semibold text-brandColor'>
          Why choose us
        </h1>
        <p className='text-2xl mt-4'>
          This is what makes our product different
        </p>
      </div>
      <div
        className='flex flex-col lg:flex-row gap-8 bg-backgroundLight w-[400px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto'
        data-aos='fade-up'
        data-aos-easing='ease-in'
        data-aos-duration='500'
      >
        {aboutUsData.map((items, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-6  bg-white my-12 p-12 lg:w-[385px] md:w-[700px] rounded-xl'
            data-aos='zoom-in'
            data-aos-easing='ease-in'
          >
            <img className='w-28 my-6' src={items.icon} alt='' />
            <h2 className='text-3xl font-semibold'>{items.tag}</h2>
            <p className='text-center text-[19px]'>{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
