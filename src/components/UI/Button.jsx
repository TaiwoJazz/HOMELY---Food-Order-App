import React from 'react'

const Button = (props) => {
  return (
    <div className='py-3 px-3 w-auto inline-block bg-brandColor rounded-xl text-white cursor-pointer hover:opacity-80'>{props.children}</div>
  )
}

export default Button