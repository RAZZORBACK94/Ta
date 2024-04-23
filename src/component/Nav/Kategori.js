import React, { useState } from "react";
import Barang from "../assets/barang.componet";
import { buku } from "../data";

export default function Kategori() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [stok, setStok] = useState(null);
  const [filterBuku, setFilterBuku] = useState(buku);
  const [minimum, setMinimum] = useState(0);
  const [maksimum, setMaksimum] = useState(0);

  const handleSortOrder = () => {
    setSortOrder((order) => (order === "asc" ? "desc" : "asc"));
  };
  const handleStok = () => {
    setStok((stok) => (stok === "semua" ? "tersedia" : "semua"));
  };

  console.log(stok)

  const rateOrderBuku = (a,b) => {
      if (sortOrder === "asc") {
        return  b.rate - a.rate
      } else if (sortOrder === "desc") {
        return a.rate - b.rate
      }
  }


  const filter = (event) => {
    if (event.keyCode === 13) {
      console.log("keycode succes");
      // 13 adalah kode untuk tombol enter
      let minimal;
      let maksimal;

      minimal = parseInt(minimum);
      maksimal = parseInt(maksimum);

      if (minimal < 0) {
        window.alert("harga minimal harus lebih besar dari Rp.1");
      } else if (maksimal < 0) {
        window.alert("harga maksimal harus lebih besar dari Rp.1");
      } else {
        if (minimal > 0 && maksimal > 0) {
          let result = buku.filter((item) => {
            return item.softDisc >= minimal && item.softDisc <= maksimal;
          });
          setFilterBuku(result);
        } else if (minimal > 0) {
          let result = buku.filter((item) => {
            return item.softDisc >= minimal;
          });
          setFilterBuku(result);
        } else if (maksimal > 0) {
          let result = buku.filter((item) => {
            return item.softDisc <= maksimal;
          });
          setFilterBuku(result);
        }
      }
    }
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
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              Rp
            </span>
            <input
              type="number"
              className="bg-[#E4F2FF] w-full rounded-lg py-5 pl-9"
              onChange={(ev) => setMinimum(ev.target.value)}
              onKeyUp={(ev) => filter(ev)}
            />
          </div>

          {/* input Maksimum */}
          <p className="text-xl text-[#1F1F1F]">Maksimum</p>
          <div className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              Rp
            </span>
            <input
              type="number"
              className="bg-[#E4F2FF] w-full rounded-lg py-5 pl-9"
              onChange={(ev) => setMaksimum(ev.target.value)}
              onKeyUp={(ev) => filter(ev)}
            />
          </div>

          {/* berdasarkan stok */}
          <p className="text-xl font-semibold text-[#1F1F1F]">
            Berdasarkan Stok
          </p>
          <label className="flex space-x-2">
            <input
              onChange={(ev) => setStok(ev.target.value)}
              id="Semua"
              class="peer/Semua"
              type="radio"
              value="semua"
              name="status"
              checked
            />
            <label
              for="Semua"
              class="peer-checked/Semua:text-sky-500 text-xl font-semibold text-[#1F1F1F]"
            >
              Semua
            </label>
          </label>

          <div className="flex space-x-2">
            <input
              onChange={() => window.alert('radio success')}
              id="Tersedia"
              class="peer/Tersedia"
              type="radio"
              value="tersedia"
              name="status"
            />
            <label
              for="Tersedia"
              class="peer-checked/Tersedia:text-sky-500 text-xl font-semibold text-[#1F1F1F]"
            >
              Tersedia
            </label>
          </div>
        </form>

        {/* bagian kanan */}
        <div className="w-full space-y-10">
          {/* header */}
          <div className="flex justify-between items-center">
            {/* hail pencarian */}
            <p className={`font-bold text-xl`}>
              {filterBuku.length} buku berhasil ditemukan
            </p>

            {/* button terpopuler */}
            <select
              className=" items-center rounded-2xl px-4 py-2 bg-sky-500 text-white text-xl font-bold outline-none"
              value={sortOrder}
              onChange={handleSortOrder}
            >
              <option className=" bg-white text-black font-bold" value="asc">
                Terpopuler
              </option>
              <option className=" bg-white text-black font-bold" value="desc">
                Unpopuler
              </option>
            </select>
          </div>
          <div className="flex">
            {filterBuku.sort((a,b) => rateOrderBuku(a,b)).map((item) => (
              <Barang
                stok = {item.stok}
                buku={item}
                cover={item.cover}
                author={item.author}
                title={item.title}
                softDisc={item.softDisc}
                soft={item.soft}
              />
            ))}
          </div>
          <p className={`${filterBuku.length === 0 ? "" : " hidden"} text-center font-bold text-2xl`}>
            Maaf, tidak ada buku yang sesuai dengan filter yang anda tentukan
          </p>
        </div>
      </div>
    </div>
  );
}
