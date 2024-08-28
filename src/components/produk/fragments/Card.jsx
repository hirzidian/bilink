import React from 'react'

const Card = (props) => {
  const {image, title, desc} = props
  return (
    <div className="border border-[#2D2197] rounded-md text-white w-full px-3 py-4 flex flex-col gap-4 ">
    <img src={`icon/${image}`} alt="" className="md:w-1/5 w-1/2" />
    <h2 className="font-bold uppercase text-[10px] md:text-2xl">{title}</h2>
    <p className="text-sm text-[#e1e1e1]">{desc}</p>
</div>
  )
}

export default Card