import React, { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import DishItemForm from './DishItemForm';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DishItems = props => {
  const cartCtx = useContext(CartContext);

  const price = `₦${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      image: props.image
    });
  };

  const notify = () => {
    toast.success(`${props.title} Added to Cart`, {
      position: 'top-center',
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-16'>
      <div
        className='bg-white px-3 md:px-12 py-6 sm:w-[400px] lg:w-[350px] md:w-[600px] rounded-xl drop-shadow-lg mx-auto md:cursor-pointer'
        data-aos='fade-up'
        data-aos-easing='ease-in'
      >
        <img className='mx-auto' src={props.image} alt='' />
        <h4 className='text-xl text-center font-semibold my-6'>
          {props.title}
        </h4>
        <span className='flex items-center justify-between my-auto'>
          <p className='text-xl inline-block font-semibold'>{price}</p>
          <DishItemForm onAddToCart={addToCartHandler} handleNotify={notify} />
        </span>
      </div>
    </div>
  );
};

export default DishItems;
