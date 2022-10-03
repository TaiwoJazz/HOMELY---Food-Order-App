import React from 'react'

const Button = (props) => {
  return (
    <div className='py-3 px-4 bg-brandColor rounded-xl text-white cursor-pointer'>{props.children}</div>
  )
}

export default Button