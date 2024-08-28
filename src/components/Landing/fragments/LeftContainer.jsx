import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const LeftContainer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="text-white ml-0 md:ml-14 z-10 flex flex-col gap-4 p-4 md:p-0 max-w-full">
      <h1
        className="text-3xl sm:text-3xl md:text-5xl font-bold leading-snug"
        data-aos="fade-right"
        data-aos-duration="1000"
        style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
      >
        Solusi Layanan Biller Agregator H2H Terbaik
      </h1>
      <p
        className="text-base sm:text-lg md:text-xl mt-4"
        data-aos="fade-right"
        data-aos-duration="1400"
        style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
      >
        Transaksi ppob dan pulsa all operator kini lebih mudah, cepat dan aman
        dengan layanan terbaru dari BiLink
      </p>
      <div
        className="mt-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        style={{ display: 'flex', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start' }}
      >
        <button className="flex items-center gap-4 relative font-semibold">
          <img
            src="icon/arrow.svg"
            alt="arrow icon"
            className="bg-white aspect-square rounded-full p-3 z-10"
          />
          <div className="h-10 w-10 rounded-full absolute animate-ping bg-white/80 z-0"></div>
          <span className="relative z-10">Daftar Sekarang</span>
        </button>
      </div>
    </div>
  );
};

export default LeftContainer;
