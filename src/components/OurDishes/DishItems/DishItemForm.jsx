import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import plusSign from '../../../assets/plus.png';

const DishItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 7
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '7',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button
        onClick={props.handleNotify}
        className='py-2 px-3 w-auto inline-block bg-brandColor rounded-xl text-white cursor-pointer hover:opacity-80'
      >
        <img className='inline-block mb-1' src={plusSign} alt='sign' />
        &nbsp; Add &nbsp;
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-7)</p>}
    </form>
  );
};

export default DishItemForm;
