import React, { useEffect } from "react";
import Card from "./fragments/Card";
import Aos from "aos";
import "aos/dist/aos.css";

const Fitur = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="relative min-h-screen bg-white flex items-center md:flex-row flex-col justify-center">
      <div className="flex items-center justify-between md:flex-row flex-col w-full mx-[9rem] z-10">
        <div className="flex flex-col items-center md:items-start" data-aos="fade-right" data-aos-duration="1500">
          <p className="text-[#553CEE] font-semibold text-start">Fitur BiLink</p>
          <h1 className="text-gray-800 font-bold text-3xl text-center md:text-start mx-10 md:mx-0">
            Layanan dan dukungan yang siap kami berikan untuk Anda
          </h1>
          <p className="text-gray-500 text-xs md:text-start mx-7 text-center md:mx-0">
            Pelayanan dan performance API BiLink akan selalu ditingkatkan dan dikembangkan untuk kebutuhan partner. Kepuasan partner adalah tujuan kami.
          </p>
        </div>

        <div className="flex gap-3 md:flex-row flex-col mx-3">
          <div className="flex flex-col gap-3" data-aos="fade-up-right" data-aos-duration="1600">
            <Card
              img="integration.png"
              title="Kemudahan Integrasi"
              desc="Proses integrasi yang mudah dan tidak membutuhkan waktu lama adalah bukti nyata kami untuk mendukung bisnis Anda."
            />
            <Card
              img="integration.png"
              title="Kemudahan Integrasi"
              desc="Proses integrasi yang mudah dan tidak membutuhkan waktu lama adalah bukti nyata kami untuk mendukung bisnis Anda."
            />
          </div>
          <div className="flex flex-col gap-3 mt-10" data-aos="fade-up-left" data-aos-duration="1600">
            <Card
              img="integration.png"
              title="Kemudahan Integrasi"
              desc="Proses integrasi yang mudah dan tidak membutuhkan waktu lama adalah bukti nyata kami untuk mendukung bisnis Anda."
            />
            <Card
              img="integration.png"
              title="Kemudahan Integrasi"
              desc="Proses integrasi yang mudah dan tidak membutuhkan waktu lama adalah bukti nyata kami untuk mendukung bisnis Anda."
            />
          </div>
        </div>
      </div>
      <img src="image/35.png" className="absolute w-[9rem] h-[11rem] left-0 -bottom-0 z-0" alt="" />
    </div>
  );
};

export default Fitur;
