import React from 'react'

const Card = (props) => {
  const {img, title, desc} = props
  return (
    <div className="aspect-square bg-white shadow-xl md:w-[14rem] w-full p-10 flex flex-col justify-center items-center md:items-start">
    <img src={`icon/${img}`} className='w-1/3' alt="" />
    <h1 className='font-semibold text-md'>{title}</h1>
    <p className='text-md text-center md:text-start md:text-xs  text-gray-600'>
      {desc}
    </p>
  </div>
  )
}

export default Card