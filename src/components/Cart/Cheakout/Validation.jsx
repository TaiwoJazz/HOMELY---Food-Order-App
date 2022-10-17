import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Name field cannot be empty'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email field cannot be empty'),
  address: Yup.string().required('Address field cannot be empty'),
  postal: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(6, 'Must be 6 characters or less')
    .required('Postal code field cannot be empty'),
  city: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('City field cannot be empty'),
  state: Yup.string()
    .max(12, 'Must be 12 characters or less')
    .required('State field cannot be empty')
});

export default validationSchema