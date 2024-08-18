import React from 'react'

const Card = (props) => {
  const {img, title, desc} = props
  return (
    <div className="border border-[#2D2197] rounded-md text-white w-full px-3 py-4 flex flex-col gap-4">
    <img src={`icon/${img}`} alt="" className="w-1/5" />
    <h2 className="uppercase text-2xl font-bold">{title}</h2>
    <p className="text-sm text-[#e1e1e1]">{desc}</p>
</div>
  )
}

export default Card