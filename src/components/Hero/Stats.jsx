import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col lg:flex-row text-center items-center justify-center gap-12 mb-24'>
      <div>
        <h1 className='text-5xl font-bold mb-4 text-textBold'>500+</h1>
        <p className='text-base font-semibold text-textLight2'>Food Partner</p>
      </div>
      <div>
        <h1 className='text-5xl font-bold mb-4 text-textBold'>1k+</h1>
        <p className='text-base font-semibold text-textLight2'>Order Delivery</p>
      </div>
      <div>
        <h1 className='text-5xl font-bold mb-4 text-textBold'>12k+</h1>
        <p className='text-base font-semibold text-textLight2'>Clients</p>
      </div>
    </div>
  )
}

export default Stats