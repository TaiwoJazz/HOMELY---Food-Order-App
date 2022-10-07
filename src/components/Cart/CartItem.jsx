const CartItem = props => {
  const price = `₦${props.price.toFixed(2)}`;

  return (
    <li className='flex justify-between items-center border-b-2 border-brandColor py-4 my-4'>
      <div className="flex gap-2 md:gap-4 items-center">
        <img className='w-16 md:w-20' src={props.image} alt={props.image} />
        <span>
          <h2 className='mb-2 text-md sm:text-lg font-bold text-textBold'>
            {props.title}
          </h2>
          <div className='w-[5rem] sm:w-[8rem] flex flex-col sm:flex-row justify-between items-center'>
            <span className='font-semibold text-brandColor'>{price}</span>
            <span className='font-semibold text-brandColor border shadow-md py-1 px-2 md:px-3 rounded-lg'>
              x {props.amount}
            </span>
          </div>
        </span>
      </div>
      <div className='flex flex-col md:flex-row'>
        <button
          className='font-bold text-lg text-brandColor border-2 border-brandColor w-10 rounded-md bg-transparent  cursor-pointer ml-4 m-1 hover:bg-brandColor hover:text-white transition-all duration-300 ease-in-out'
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className='font-bold text-lg text-brandColor border-2 border-brandColor w-10 rounded-md bg-transparent  cursor-pointer ml-4 m-1 hover:bg-brandColor hover:text-white transition-all duration-300 ease-in-out'
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
