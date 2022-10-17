import React, { Fragment } from 'react';
import  ReactDOM  from 'react-dom';

const Backdrop = props => {
  return (
    <div onClick={props.onCloseCart} className='fixed top-0 left-0 w-full h-screen z-40 bg-backDrop'></div>
  );
};

const ModalOverlay = props => {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[330px] sm:w-[25rem] md:w-[32rem] lg:w-[50rem] bg-white p-4 rounded-xl shadow-xl z-50'>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
