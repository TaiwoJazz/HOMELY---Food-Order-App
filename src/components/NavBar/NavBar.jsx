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
    <div className='flex items-center justify-between h-[80px] md:h-[110px] bg-backgroundMedium px-4 md:px-8 lg:px-32'>
      <Logo />
      <PC showMenu={showMenu} />
      <Mobile showMenu={showMenu} active={active} />
    </div>
  );
};

export default NavBar;