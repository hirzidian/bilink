import React from 'react'

const Text = (props) => {
    const {text} = props
  return (
    <a href='#' className='text-[#bebebe] text-sm hover:transalted '>
       {text}
    </a>
  )
}

export default Text