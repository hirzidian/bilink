import React from 'react'
import Text from './Text'
const Footer = () => {
  return (
    <footer className='bg-[#040836] text-white '>
        <div className='flex gap-4 justify-center flex-col md:flex-row'>
        <div className='border-r-2 border-gray-400 w-full md:w-[30rem]  '>
            <img src="icon/logo-light.png" className='w-[12rem] ' alt="" />
            <p className='w-full text-xs text-[#d1d1d1] px-7 md:px-0'>BILINK membantu banyak server pulsa & aplikator tumbuh pesat dengan menghubungkan mereka kepada 700 lebih produk PPOB seperti PDAM, PLN, KARTU KREDIT, GAME ONLINE, PULSA & Paket Data, Emoney dengan harga dan layanan terbaik.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl my-3'>Tentang Kami</h1>
           <div className='flex flex-col'>
           <Text
            text="tentang kami"
            />
            <Text
            text="hubungi kami"
            />
           </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl my-3'>Tentang Kami</h1>
           <div className='flex flex-col'>
           <Text
            text="tentang kami"
            />
            <Text
            text="hubungi kami"
            />
           </div>
        </div>
        </div>
      
        <hr className='mt-10'/>
    
            <p className='text-xs text-[#d1d1d1] py-10'>© 2022. All Rights Reserved</p>
       
    </footer>
  )
}

export default Footer