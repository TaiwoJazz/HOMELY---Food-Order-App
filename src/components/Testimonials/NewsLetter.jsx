import React, {useRef} from 'react';
import Button from '../UI/Button';
import swal from 'sweetalert';

const NewsLetter = () => {

  const emailInputRef = useRef()

  const handleAlert = () => {
    const enteredEmail = emailInputRef.current.value;

     if (enteredEmail.includes('@' && '.') && enteredEmail.length > 12) {
      swal("Successful!", "Your email has been added to our list.", "success");
    } else {
      swal("Opps", "Please enter a valid email address!", "error");
    }
  }

  return (
    <div className='text-center mb-24 px-6 md:px-0'>
      <h1 className='text-4xl font-semibold text-brandColor'>
        Subscribe to our Newsletter
      </h1>
      <p className='text-md font-semibold text-textLight2 my-4'>
        Enter your Email address to get daily offers and news
      </p>
      <div>
      <input ref={emailInputRef} className='text-base border border-textLight2 rounded-md p-2 mr-4 md:w-96 mb-4 md:mb-0 focus:outline-brandColor' type='text' placeholder='Enter your email' />
      <Button onClick={handleAlert}>Subscribe</Button>
      </div>
    </div>
  );
};

export default NewsLetter;
