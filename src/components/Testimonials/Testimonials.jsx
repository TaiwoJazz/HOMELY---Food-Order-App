import React, { Fragment } from 'react';

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Heading from './Heading';
import Content from './Content';
import quotation from '../../assets/quotation-marks.svg';
import NewsLetter from './NewsLetter';

let testimonialContent = Content.map(testimonial => (
  //mapping through testimonial content
  <SwiperSlide
    key={testimonial.id}
    className='text-center bg-white drop-shadow-lg cursor-pointer px-4 md:px-0 rounded-3xl border before:content-[""] after:content-[""] before:absolute after:absolute before:right-0 after:right-0 before:bottom-20 after:bottom-20 before:h-[1.5rem] after:h-[1.8rem] before:w-[1.5rem] after:w-[1.8rem] before:bg-brandColor after:bg-white after:rounded-br-2xl'
  >
    <span className='absolute top-14 md:top-10 left-6 md;left-10'>
      {testimonial.rating}
    </span>
    <img
      className='w-12 md:w-20 absolute -top-5 right-10 rotate-180'
      src={quotation}
      alt={quotation}
    />
    <p className='font-semibold text-sm md:text-[1.1rem] md:w-64 my-10 mx-auto leading-relaxed mt-24'>
      {testimonial.content}
    </p>
    <div className='flex gap-4 bg-brandColor py-2 px-6 absolute bottom-0 right-0 left-0 rounded-br-3xl rounded-bl-3xl rounded-tl-3xl'>
      <img
        className='w-16 rounded-full my-auto border-[.3rem] border-white'
        src={testimonial.image}
        alt={testimonial.image}
      />
      <div className='text-left text-white my-auto'>
        <h2 className='text-sm md:text-md font-semibold'>{testimonial.name}</h2>
        <p className='text-[12px] italic'>{testimonial.location}</p>
      </div>
    </div>
  </SwiperSlide>
));

const Testimonials = () => {
  return (
    <Fragment>
      <div id='testimonials' className='px-2 md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto mb-32'>
        <Heading />
        <Swiper
          // swiper configuration
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={55}
          loop={true}
          className='mySwiper'
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
          }}
          style={{
            height: '33rem',
            padding: '3rem 3rem',
            color: 'black'
          }}
          breakpoints={{
            // swiper media query
            300: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonialContent}
        </Swiper>
      </div>
      <NewsLetter />
    </Fragment>
  );
};

export default Testimonials;
