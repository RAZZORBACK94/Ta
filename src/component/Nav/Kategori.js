import React, { useState } from "react";
import Barang from "../assets/barang.componet";

export default function Kategori() {

  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleSortOrder = () => {
    setSortOrder((order) => (order === "asc" ? "desc" : "asc"));
  };

  return (
      <div className=" my-40 ml-20 mr-10">
        <div className="flex space-x-10">
          {/* tab filter */}
          <form className=" w-4/6 bg-[#F1F8FF] py-10 px-7 flex flex-col space-y-4 rounded-2xl">
            <p className="font-bold text-4xl">Filter</p>

            <p className="font-bold text-2xl">Harga</p>

            {/* input Minimum */}
            <p className="text-xl text-[#1F1F1F]">Minimum</p>
            <div className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">Rp</span>
              <input className="bg-[#E4F2FF] w-full rounded-lg py-5 pl-9" />
            </div>

            {/* input Maksimum */}
            <p className="text-xl text-[#1F1F1F]">Maksimum</p>
            <div className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">Rp</span>
              <input className="bg-[#E4F2FF] w-full rounded-lg py-5 pl-9" />
            </div>

            {/* berdasarkan stok */}
            <p className="text-xl font-semibold text-[#1F1F1F]">Berdasarkan Stok</p>
            <label className="flex space-x-2">
              <input id="Semua" class="peer/Semua" type="radio" name="status"/>
              <label for="Semua" class="peer-checked/Semua:text-sky-500 text-xl font-semibold text-[#1F1F1F]">Semua</label>
            </label>

            <div className="flex space-x-2">
              <input id="Tersedia" class="peer/Tersedia" type="radio" name="status"/>
              <label for="Tersedia" class="peer-checked/Tersedia:text-sky-500 text-xl font-semibold text-[#1F1F1F]">Tersedia</label>
            </div>
          </form>

          {/* bagian kanan */}
          <div className="w-full space-y-10">
            {/* header */}
            <div className="flex justify-between items-center">
              {/* hail pencarian */}
              <p className=" font-bold text-xl">[1-20] dari [1000] hasil pencarian pencarian produk dengan kata kunci</p>

              {/* button terpopuler */}
              <select
                className=" items-center rounded-2xl px-4 py-2 bg-sky-500 text-white text-xl font-bold outline-none"
                value={sortOrder}
                onChange={handleSortOrder}
              >
                <option className=" bg-white text-black font-bold" value="asc">Terpopuler</option>
                <option className=" bg-white text-black font-bold" value="desc">Unpopuler</option>
              </select>
            </div>
            <Barang/>
          </div>
        </div>
      </div>
  );
}
