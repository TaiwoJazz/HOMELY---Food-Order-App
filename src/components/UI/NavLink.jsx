import React from 'react';

const NavLink = props => {
  return (
    <li>
      <a
        className='relative block duration-500 after:absolute after:content-[""] after:w-full after:h-1 after:top-full after:left-0 after:bg-brandColor after:transition after:duration-500 after:scale-0 after:origin-right hover:after:origin-left after:hover:scale-100 hover:text-brandColor '
        href={props.href}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavLink;
