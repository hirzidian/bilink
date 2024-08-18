import React from "react";
import Card from "./fragments/Card";

const Produk = () => {
  return (
    <div className="min-h-screen bg-[#040836] items-center flex flex-col gap-10 py-10">
     <div className="flex flex-col items-center gap-8 ">
     <div className="flex flex-col items-center mt-10">
        <p className="font-bold uppercase text-blue-900">produk & layanan</p>
        <h1 className="text-white font-bold text-3xl text-center ">
          Beragam pilihan produk dan layanan keuangan
        </h1>
      </div>
      <div className="flex gap-3">
        <button className=" bg-[#5138EE] rounded-md border border-blue-300 text-white px-4 font-semibold py-2 ">Postpaid</button>
        <button className=" bg-[#1E214A] rounded-md border border-blue-300 text-white px-4 font-semibold py-2 ">Prepaid</button>
      </div>
     </div>

    <div className="w-full px-8 md:px-[9rem]">
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-2 ">
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
        <Card 
        img="water.png"
        title="pdam"
        desc="Pembayaran layanan penyediaan dan distribusi air bersih."
        />
        
     </div>
    </div>

    <div className="w-full flex items-center flex-col justify-center min-h-[80vh]">
        <img src="image/1.png " className="absolute left-0 z-0 saturate-50 brightness-50" alt="" />
        <img src="image/8.png " className="absolute right-0 z-0 " alt="" />
        <div className="md:w-[30rem] w-full z-10 px-6 md:px-0">
        <h1 className="text-white  text-2xl text-center font-light   ">Mari bergabung dengan <span className="font-bold">ratusan klien</span> yang telah mempercayakan bisnisnya <span className="font-bold">berkembang bersama kami</span></h1>
        </div>
        <div>
            <button className="text-blue-800 font-bold text-3xl flex items-center"><img src="icon/arrow.svg" alt="" /> Daftar Sekarang</button>
        </div>
    </div>
    </div>
  );
};

export default Produk;
