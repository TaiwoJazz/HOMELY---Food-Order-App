import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Mobile = props => {
  return (
    <div
      className={
        props.active
          ? 'md:hidden flex flex-col items-center justify-center gap-16 fixed inset-0 text-xl text-center text-white'
          : 'hidden'
      }
    >
      <div className='flex flex-col gap-12 h-screen w-5/6 justify-center bg-brandColor/70 backdrop-blur-3xl absolute right-0'>
        <CloseIcon
          onClick={props.showMenu}
          sx={{ fontSize: 40 }}
          className='absolute cursor-pointer top-12 right-4'
        />
        <ul className='flex flex-col gap-8'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#AboutUs'>About Us</a>
          </li>
          <li>
            <a href='/'>Services</a>
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
