import React, { useContext } from 'react';

import carticon from '../../assets/carticon.svg';
import CartContext from '../../Store/cart-context';

const NavCartButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (currentValue, item) => {
      return currentValue + item.amount;
    },
    0
  );

  // const btnClasses = `.bump`

  return (
    <button className='py-3 px-3 inline-block bg-brandColor rounded-xl text-white cursor-pointer hover:opacity-80 w-40 mx-auto .bump'  onClick={props.onOpenCart}>
      <img src={carticon} alt='carticon' className='inline-block mr-2' />
      <span>Cart</span>
      <span className='ml-4 py-1 px-2.5 text-black bg-white rounded-full'>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default NavCartButton;
