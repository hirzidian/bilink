import React from "react";
import Text from "./Text";

const Footer = () => {
  return (
    <footer className="bg-[#040836] text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Kolom pertama dengan logo dan deskripsi */}
        <div className="w-full md:w-1/2">
          <img src="icon/logo-light.png" className="w-[13rem] mb-4" alt="Logo" />
          <p className="text-[#d1d1d1] text-md leading-relaxed">
            BILINK membantu banyak server pulsa & aplikator tumbuh pesat dengan
            menghubungkan mereka kepada 700 lebih produk PPOB seperti PDAM, PLN,
            KARTU KREDIT, GAME ONLINE, PULSA & Paket Data, Emoney dengan harga
            dan layanan terbaik.
          </p>
        </div>

        {/* Kolom kedua dengan link "Tentang Kami" */}
        <div className="w-full md:w-1/4 flex flex-col">
          <h1 className="font-bold text-[20px] mb-4">Tentang Kami</h1>
          <div className="flex flex-col space-y-2">
            <Text text="Tentang Kami" />
            <Text text="Hubungi Kami" />
            <Text text="Produk" />
          </div>
        </div>

        {/* Kolom ketiga dengan link "Bantuan" */}
        <div className="w-full md:w-1/4 flex flex-col">
          <h1 className="font-bold text-[20px] mb-4">Bantuan</h1>
          <div className="flex flex-col space-y-2">
            <Text text="Pusat Bantuan" />
            <Text text="Syarat dan Ketentuan" />
            <Text text="Kebijakan Privasi" />
          </div>
        </div>
      </div>

      <hr className="my-6 border-[#1a1a2e]" />

      <p className="text-center text-[#d1d1d1] text-sm">
        © Copyright 2024
      </p>
    </footer>
  );
};

export default Footer;
