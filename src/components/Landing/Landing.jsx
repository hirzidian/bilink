import React, { useEffect } from 'react'
import LeftContainer from './fragments/LeftContainer'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Landing = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=' flex items-center flex-col md:flex-row'>
        <LeftContainer/>

        <div className='' data-aos="fade-left"  data-aos-duration="1000">
            <img src="image/19.png" className='' alt="" />
        </div>
         <img src="icon/wave.svg" className='absolute bottom-0' alt="" />
    </div>
  )
}

export default Landing