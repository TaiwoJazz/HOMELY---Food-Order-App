import React from 'react';
import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import NavCartButton from './NavCartButton';

const Mobile = props => {
  return (
    <div
      className={
        props.active
          ? 'md:hidden flex flex-col items-center justify-center gap-16 fixed inset-0 text-xl text-center text-textBold font-semibold'
          : 'hidden'
      }
    >
      <div className='flex flex-col gap-12 h-screen w-4/5 justify-center bg-backgroundMedium absolute right-0'>
        <CloseIcon
          onClick={props.showMenu}
          sx={{ fontSize: 40 }}
          className='absolute cursor-pointer top-6 right-6'
          style={{ color: 'rgba(255, 77, 0, 1)' }}
        />
        <ul className='flex flex-col gap-8'>
          {[
            ['Home', 'home'],
            ['Why Choose Us', 'why'],
            ['Our Dishes', 'dishes'],
            ['About Us', 'about'],
            ['Testimonials', 'testimonials']
          ].map(([title, url]) => (
            <Link
              key={url}
              to={url}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a onClick={props.showMenu}
                className='relative block duration-500 w-fit mx-auto after:absolute after:content-[""] after:w-full after:h-0.5 after:top-full after:left-0 after:bg-brandColor after:transition after:duration-500 after:scale-0 after:origin-right hover:after:origin-left after:hover:scale-100 hover:text-brandColor'
                href='/'
              >
                {title}
              </a>
            </Link>
          ))}
          <NavCartButton onOpenCart={props.onOpenCart} />
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
