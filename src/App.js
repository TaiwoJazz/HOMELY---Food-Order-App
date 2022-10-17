import React, { useState} from 'react';

import NavBar from './components/Header/NavBar';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Dishes from './components/OurDishes/Dishes';
import AboutUs from './components/AboutUs/AboutUs';
import GetOurMobile from './components/AboutUs/GetOurMobile';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

import CartProvider from './Store/CartProvider';
import swal from 'sweetalert';
import Tostify from './components/UI/Tostify';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  

  const openCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  const handleOrder = () => {
    setCartIsShown(false);
    swal(
      'Successful!',
      'Your order was placed, you will be contact by a delivery agent soon!',
      'success'
    );
  };

  return (
    <CartProvider>
      <div className='font-body scroll-smooth'>
      <Tostify />
        {cartIsShown && (
          <Cart onCloseCart={closeCartHandler} onOrder={handleOrder} />
        )}
        <NavBar onOpenCart={openCartHandler} />
        <main>
          <Hero />
          <WhyChooseUs />
          <Dishes />
          <AboutUs />
          <GetOurMobile />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
