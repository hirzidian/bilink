import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
const LeftContainer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='text-white ml-0 md:ml-14 z-10 flex flex-col gap-4' >
    <h1 className='text-4xl font-bold' data-aos="fade-right"  data-aos-duration="1000">Solusi Layanan Biller Agregator H2H Terbaik</h1>
    <p  data-aos="fade-right"  data-aos-duration="1400">Transaksi ppob dan pulsa all operator kini lebih mudah, cepat dan aman dengan layanan terbaru dari BiLink</p>
    <div  data-aos="fade-right"  data-aos-duration="1000">
      
        <button className='flex font-semibold items-center gap-4 '><img src="icon/arrow.svg" alt=""  className='bg-white aspect-square rounded-full p-3'/><div className='h-10 w-10 rounded-full absolute animate-ping bg-white/80 z-0'></div> Daftar Sekarang</button>
    </div>
</div>

  )
}

export default LeftContainer