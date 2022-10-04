import React, { Fragment } from 'react';
import NavCartButton from './NavCartButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Button from '../UI/Button';
import carticon from '../../img/carticon.svg';

export const PC = ({ showMenu }) => {
  return (
    <Fragment>
      <div className='md:hidden flex gap-2 items-center cursor-pointer'>
        <Button className='p-6'>
          <img src={carticon} alt='carticon' className='inline-block mr-2 w-3' />
          <span className='ml-1 py-1 px-2 text-xs text-black bg-white rounded-full'>
            4
          </span>
        </Button>
        <MenuOutlinedIcon
          onClick={showMenu}
          sx={{ fontSize: 40 }}
          color='primary'
        />
      </div>
      <ul className='hidden md:flex items-center justify-between md:gap-8 xl:gap-12 font-semibold text-base md:text-sm lg:text-base'>
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
        <NavCartButton />
      </ul>
    </Fragment>
  );
};

export default PC;
