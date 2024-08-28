import React from 'react'

const Text = (props) => {
    const { text } = props;
    return (
        <a
            href="#"
            className="text-[#bebebe] text-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
            {text}
        </a>
    )
}

export default Text;
