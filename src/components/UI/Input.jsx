import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className='border rounded-md mr-2 p-1.5 border-brandColor outline-brandColor inline-block'
      ref={ref}
      {...props.input}
    />
  );
});

export default Input;
