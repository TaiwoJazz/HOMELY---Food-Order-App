import React from 'react';
import { Formik } from 'formik';
import validationSchema from './Validation';

const initialValues = {
  name: '',
  email: '',
  address: '',
  postal: '',
  city: '',
  state: ''
};

const Checkout = props => {
  const handleSubmit = (values, { setSubmitting }) => {
    JSON.stringify(values, null, 2);
    setSubmitting(false);

    props.onConfirm({
      name: values.name,
      email: values.email,
      address: values.address,
      postal: values.postal,
      city: values.city,
      state: values.state
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <form
          onSubmit={formik.handleSubmit}
          className='w-full h-60 md:h-80 overflow-y-auto'
        >
          {[
            [
              'name',
              'Name:',
              'text',
              formik.handleChange,
              formik.handleBlur,
              formik.values.name,
              formik.touched.name,
              formik.errors.name
            ],
            [
              'email',
              'Email:',
              'email',
              formik.handleChange,
              formik.handleBlur,
              formik.values.email,
              formik.touched.email,
              formik.errors.email
            ],
            [
              'address',
              'Address:',
              'text',
              formik.handleChange,
              formik.handleBlur,
              formik.values.address,
              formik.touched.address,
              formik.errors.address
            ],
            [
              'postal',
              'Postal Code:',
              'text',
              formik.handleChange,
              formik.handleBlur,
              formik.values.postal,
              formik.touched.postal,
              formik.errors.postal
            ],
            [
              'city',
              'City:',
              'text',
              formik.handleChange,
              formik.handleBlur,
              formik.values.city,
              formik.touched.city,
              formik.errors.city
            ],
            [
              'state',
              'State:',
              'text',
              formik.handleChange,
              formik.handleBlur,
              formik.values.state,
              formik.touched.state,
              formik.errors.state
            ]
          ].map(
            ([
              name,
              title,
              type,
              handleChange,
              handleBlur,
              values,
              touched,
              errors
            ]) => (
              <span key={title} className='w-full mb-4 flex items-center gap-4'>
                <label htmlFor={name} className='font-semibold'>
                  {title}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values}
                  className='p-2 w-2/4 border rounded-md border-gray-300 outline-1 outline-brandColor shadow-sm'
                />
                {touched && errors ? <div>{errors}</div> : null}
              </span>
            )
          )}
          <div className='flex justify-center sm:justify-end'>
            <button
              onClick={props.onCancel}
              type='button'
              className='py-1 px-6 mr-6 w-auto font-semibold inline-block border-2 border-brandColor rounded-xl text-brandColor cursor-pointer hover:bg-brandColor hover:text-white transition-all duration-300 ease-in-out'
            >
              Close
            </button>
            <button
              type='submit'
              className='py-1.5 px-6 w-auto font-semibold inline-block bg-brandColor rounded-xl text-white cursor-pointer hover:opacity-80'
            >
              Order
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Checkout;
