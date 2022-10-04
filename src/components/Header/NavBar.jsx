import React, { useState } from 'react';
import PC from './PC';
import Mobile from './Mobile';
import Logo from './Logo';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div
      className='flex items-center justify-between w-screen h-[80px] md:h-[90px] bg-backgroundMedium px-4 md:px-8 lg:px-32 fixed top-0 right-0 left-0 z-50'
      data-aos='fade-down'
      data-aos-easing='ease-in'
      data-aos-duration='1500'
    >
      <Logo />
      <PC showMenu={showMenu} />
      <Mobile showMenu={showMenu} active={active} />
    </div>
  );
};

export default NavBar;
