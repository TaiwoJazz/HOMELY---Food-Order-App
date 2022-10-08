import React, { useState } from 'react';
import PC from './PC';
import Mobile from './Mobile';
import Logo from './Logo';

const NavBar = (props) => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(prevActive => !prevActive);
  };

  return (
    <div
      className='flex items-center justify-between w-screen h-[80px] md:h-[90px] bg-backgroundMedium px-6 md:px-8 lg:px-32 fixed top-0 right-0 left-0 z-30'
      data-aos='fade-down'
      data-aos-easing='ease-in'
      data-aos-duration='1500'
    >
      <Logo />
      <PC showMenu={showMenu} onOpenCart={props.onOpenCart} />
      <Mobile showMenu={showMenu} active={active} onOpenCart={props.onOpenCart} />
    </div>
  );
};

export default NavBar;
