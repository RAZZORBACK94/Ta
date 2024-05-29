import React, { useState, useEffect } from "react";
import Barang from "../assets/barang.componet";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";


export default function Filter() {

  const [stok, setStok] = useState("semua");
  const [varBuku, setVarBuku] = useState([]);
  const [filterBuku, setFilterBuku] = useState([]);
  const [minimum, setMinimum] = useState(0);
  const [maksimum, setMaksimum] = useState(0);



  const dataBuku = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    let url = "http://localhost:5000/buku/getAll"

    axios.get(url, {headers : {authorization : "Bearer " + user.tkn }})
    .then(response => {
      setVarBuku(response.data.data)
      setFilterBuku(response.data.data)   
    })
    .catch((error) => {
      console.error(error);
    })

    console.log(varBuku)
    console.log(filterBuku)
  }


  const handleStok = () => {
    // setStok((stok) => (stok === "semua" ? "tersedia" : "semua"));
    if (stok === "semua") {
      setStok("tersedia")
    } else if (stok === "tersedia") {
      setStok("semua")
    }
    console.log(stok)
  };
  

   
      
      // 13 adalah kode untuk tombol enter
      const filter = (event) => {

        console.log("keycode succes");
      
        if ( event.keyCode === 13){
          
        let minimal = parseInt(minimum);
        let maksimal = parseInt(maksimum);
        console.log(minimal)
        console.log(maksimal)
        console.log(stok)
      
        if (minimal < 0) {
          window.alert("Harga minimal harus lebih besar dari Rp.1");
          return;
        }
      
        if (maksimal < 0) {
          window.alert("Harga maksimal harus lebih besar dari Rp.1");
          return;
        }

        const filter= varBuku.filter((item) => {
          if (stok === "semua") {
            if (minimal > 0 && maksimal > 0) {
              return item.harga_buku >= minimal && item.harga_buku <= maksimal;
            } else if (minimal > 0 && maksimal === 0) {
              return item.harga_buku >= minimal;
            } else if (maksimal > 0 && minimal === 0) {
              return item.harga_buku <= maksimal;
            } else {
              return item.stok_buku >= 0
            }
          } else if (stok === "tersedia") {
            if (minimal > 0 && maksimal > 0) {
              return item.harga_buku >= minimal && item.harga_buku <= maksimal && item.stok_buku > 0;
            } else if (minimal > 0 && maksimal === 0) {
              return item.harga_buku >= minimal && item.stok_buku > 0;
            } else if (maksimal > 0 && minimal === 0) {
              return item.harga_buku <= maksimal && item.stok_buku > 0;
            }
            return item.stok_buku > 0
          }
        })

        
      
        setFilterBuku(filter);}
        // ... (rest of your code)
      };


  useEffect(() => {
    dataBuku();
  }, []);

  return (
    <div className="">
      <Navbar/>
      <div className="flex space-x-10 my-40 ml-20 mr-10">
        {/* tab filter */}
        <form className=" w-4/6 bg-[#F1F8FF] py-10 px-7 flex flex-col space-y-4 rounded-2xl"
          onKeyUp={(e) => filter(e)}
        >
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
            />
          </div>

          {/* berdasarkan stok */}
          <p className="text-xl font-semibold text-[#1F1F1F]">
            Berdasarkan Stok
          </p>
            <form onChange={() =>handleStok()}>
              <div className="flex space-x-2">
                <input
                  type="radio"
                  id="Semua"
                  value="semua"
                  name="status"
                  checked={stok === "semua"}
                />
                <label for="Semua" className="text-xl font-semibold text-[#1F1F1F]">
                  Semua
                </label>
              </div>

              <div className="flex space-x-2">
                <input
                  type="radio"
                  id="Tersedia"
                  value="tersedia"
                  name="status"
                  checked={stok === "tersedia"}
                />
                <label for="Tersedia" className="text-xl font-semibold text-[#1F1F1F]">
                  Tersedia
                </label>
              </div>
            </form>
        </form>

        {/* bagian kanan */}
        <div className="w-full space-y-10">
          {/* header */}
          <div className="flex justify-between items-center">
            {/* hail pencarian */}
            <p className={`font-bold text-xl`}>
              {`${filterBuku.length} buku berhasil ditemukan`} 
            </p>

            {/* button terpopuler */}

          </div>
          <div className=" grid  grid-cols-3">
            {filterBuku.map((item) => (
              <Barang 
              buku ={item}
              cover = {item.cover_buku}
              author = {item.author_buku}
              title = {item.nama_buku}
              stok = {item.stok_buku}
              harga = {item.harga_buku}
            />
            ))}
          </div>
          <p className={`${filterBuku.length === 0 ? "" : " hidden"} text-center font-bold text-2xl`}>
            Maaf, tidak ada buku yang sesuai dengan filter yang anda tentukan
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
