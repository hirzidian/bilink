import React, { useState } from "react";
import Card from "./fragments/Card";
import data from "./postpaid";
import data2 from "./prepaid";

const Produk = () => {
  const [activeData, setActiveData] = useState(data); // State untuk mengatur data yang aktif (Postpaid/Prepaid)
  const [activeButton, setActiveButton] = useState("postpaid"); // State untuk mengatur tombol yang aktif

  const handlePostpaidClick = () => {
    setActiveData(data); // Set data Postpaid
    setActiveButton("postpaid"); // Set tombol Postpaid sebagai aktif
  };

  const handlePrepaidClick = () => {
    setActiveData(data2); // Set data Prepaid
    setActiveButton("prepaid"); // Set tombol Prepaid sebagai aktif
  };

  return (
    <div className="min-h-screen bg-[#040836] items-center flex flex-col gap-10 py-10 relative">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center mt-10">
          <p className="font-bold uppercase text-blue-700 text-1xl">Produk & Layanan</p>
          <h1 className="text-white font-bold text-4xl text-center mt-4">
            Beragam pilihan produk dan layanan <br /> keuangan
          </h1>
        </div>
        <div className="text-white">
          <p>__________ __________</p>
        </div>
        <div className="flex gap-3 justify-center flex-col md:flex-row w-full px-10">
          <button
            className={`rounded-md border border-blue-300 text-white px-4 font-semibold py-2 ${
              activeButton === "postpaid" ? "bg-[#5138EE]" : "bg-[#1E214A]"
            }`}
            onClick={handlePostpaidClick}
          >
            Postpaid
          </button>
          <button
            className={`rounded-md border border-blue-300 text-white px-4 font-semibold py-2 ${
              activeButton === "prepaid" ? "bg-[#5138EE]" : "bg-[#1E214A]"
            }`}
            onClick={handlePrepaidClick}
          >
            Prepaid
          </button>
        </div>
      </div>

      <div className="w-full px-8 md:px-[2rem]">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          {activeData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="w-full flex items-center flex-col justify-center relative min-h-[60vh] px-4 md:px-0">
        <img
          src="image/1.png"
          className="absolute left-0 z-0 saturate-50 brightness-50"
          alt=""
        />
        <img src="image/8.png" className="absolute right-0 z-0" alt="" />
        <div className="w-full md:w-[35rem] text-center z-10 flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-3xl font-light leading-snug md:leading-relaxed">
            Mari bergabung dengan{" "}
            <span className="font-bold">ratusan klien</span> yang telah
            mempercayakan bisnisnya{" "}
            <span className="font-bold">berkembang bersama kami</span>
          </h1>
          <button className="text-[#7A77FF] font-bold text-2xl md:text-3xl flex items-center my-6 md:my-10 relative">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full absolute animate-ping bg-white/80 z-0"></div>
            <img
              src="icon/arrow.svg"
              className="h-10 w-10 md:h-12 md:w-12 bg-[#7A77FF] rounded-full z-10 relative"
              alt=""
            />
            <p className="ml-4 md:ml-5 relative z-10">DAFTAR SEKARANG</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produk;
