import React, { useEffect } from 'react'
import LeftContainer from './fragments/LeftContainer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './wave.css'

const Landing = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='flex items-center flex-col md:flex-row'>
        <LeftContainer/>

        <div className='' data-aos="fade-left"  data-aos-duration="1000">
            <img src="image/19.png" className='' alt="" />
        </div>
        <div className='wave'>
          <div className='wave wave1'></div>
          <div className='wave wave2'></div>
          <div className='wave wave3'></div>
          <div className='wave wave4'></div>
        </div>
    </div>
  )
}

export default Landing