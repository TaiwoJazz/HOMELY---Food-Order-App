import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Mobile = ({ showMenu, active }) => {
  return (
    <div
      className={
        active
          ? 'md:hidden flex flex-col items-center justify-center gap-16 fixed inset-0 text-xl text-center text-white'
          : 'hidden'
      }
    >
      <div className='flex flex-col gap-12 h-screen min-w-[22rem] justify-center bg-brandColor/70 backdrop-blur-3xl absolute right-0'>
        <CloseIcon
          onClick={showMenu}
          sx={{ fontSize: 40 }}
          className='absolute cursor-pointer top-12 right-4'
        />
        <ul className='flex flex-col gap-8'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About Us</a>
          </li>
          <li>
            <a href='/'>Our Products</a>
          </li>
          <li>
            <a href='/'>Testimonials</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
