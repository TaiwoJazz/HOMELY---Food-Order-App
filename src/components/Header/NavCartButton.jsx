import React from 'react';
import Button from '../UI/Button';
import carticon from '../../img/carticon.svg';

const NavCartButton = () => {
  return (
    <Button>
      <img src={carticon} alt='carticon' className='inline-block mr-2' />
      <span>Cart</span>
      <span className='ml-4 py-1 px-2.5 text-black bg-white rounded-full'>
        4
      </span>
    </Button>
  );
};

export default NavCartButton;
