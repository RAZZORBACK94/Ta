import React from "react";
import Carsel from "../assets/carosel.componet";
import Barang from "../assets/barang.componet";

let slide = [
  "https://cdn.gramedia.com/uploads/marketing/Gramedia.com_Super_Sale_Update_Storefront__wauto_h336.jpg",
  "https://cdn.gramedia.com/uploads/marketing/PO_Mommyclopedia_99_Resep_Mpasi_Storefront__wauto_h336.jpg",
  "https://cdn.gramedia.com/uploads/marketing/Road_To_Anniversary_Gramedia_54_Tahun_Storefront_xJVDfmX__wauto_h336.jpg",
];

export default function Beranda() {
  return (
    <div>
      {/* Image Slider / Carosel */}
      <div className=" max-w-6xl m-auto pt-28">
        <Carsel autoslide={true}>
          {slide.map((s) => (
            <img src={s} />
          ))}
        </Carsel>
      </div>
      {/* Text Persuasi */}
      <div className=" container">
        <div className=" text-black font-bold text-center text-xl pt-11">
          <p>Rekomendasi Nih Buat Kamu 🔥</p>
        </div>
        <p className=" text-gray-400 mt-4 font-medium text-lg m-auto">Lihat Semua</p>
      </div>
      {/* Carosel Barang Wrapper*/}
    </div>
  );
}
