import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tostify = () => {
  return <ToastContainer
  style={{ fontFamily: 'body' }}
  position='top-center'
  autoClose={1000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss={false}
  draggable
  pauseOnHover
  transition={Zoom}
/>
}

export default Tostify