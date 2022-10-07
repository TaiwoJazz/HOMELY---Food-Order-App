import React, { Fragment } from 'react';
import {Link} from 'react-scroll'
import NavCartButton from './NavCartButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const PC = props => {
  return (
    <Fragment>
      <div className='md:hidden flex gap-2 items-center cursor-pointer'>
        <MenuOutlinedIcon
          onClick={props.showMenu}
          sx={{ fontSize: 40 }}
          style={{ color: 'rgba(255, 77, 0, 1)' }}
        />
      </div>
      <ul className='hidden md:flex items-center justify-between md:gap-8 xl:gap-12 font-semibold text-base md:text-sm lg:text-base cursor-pointer'>
        {[
          ['Home', 'home'],
          ['Why Choose Us', 'why'],
          ['Our Dishes', 'dishes'],
          ['About Us', 'about'],
          ['Testimonials', "testimonials"]
        ].map(([title, url]) => (
          <Link key={url} to={url} spy={true} smooth={true} offset={-100} duration={500}>
            <a
              className='relative block duration-500 after:absolute after:content-[""] after:w-full after:h-0.5 after:top-full after:left-0 after:bg-brandColor after:transition after:duration-500 after:scale-0 after:origin-right hover:after:origin-left after:hover:scale-100 hover:text-brandColor'
              href='/'
            >
              {title}
            </a>
          </Link>
        ))}
        <NavCartButton onOpenCart={props.onOpenCart}/>
      </ul>
    </Fragment>
  );
};

export default PC;
