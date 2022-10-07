import React, { useState, useContext } from 'react';

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
import CartContext from './Store/cart-context';
import swal from 'sweetalert';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartCtx = useContext(CartContext);
  

  const openCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  const handleOrder = () => {
    setCartIsShown(false);
    cartCtx.clearItems()
    swal(
      'Successful!',
      'Your order was placed, delivery in 2 hours',
      'success'
    );
  };

  return (
    <CartProvider>
      <div className='font-body scroll-smooth'>
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
