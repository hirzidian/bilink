import React, { useState, useEffect } from 'react';
//import component
import Landing from '../Landing/Landing';
import Fitur from '../fitur/Fitur';
import Produk from '../produk/Produk';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Loading from '../loading/Loading';

//loading
const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);  //mengecek apakah halaman sedang status "loading" atau tidak

  useEffect(() => {               //untuk mengatur waktu per detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; 
  }

  //end loading

  return (
    <div>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-tr from-[#0BDDB5] to-[#5A57FB] flex items-center '>
        <div id="home" className='bg-black/10 h-[25rem] w-[25rem] rounded-full absolute -top-10 -left-16 z-0 hidden md:block'></div>
        <Landing />
      </div>
      <div id="fitur">
        <Fitur />
      </div>
      <div id='produk'>
        <Produk />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
