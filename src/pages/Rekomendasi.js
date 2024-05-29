import React ,{ useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Barang from "../component/assets/barang.componet";
import { FaArrowLeft } from "react-icons/fa";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";

export default function Rekomendasi() {
    const [buku, setBuku] = useState([])

    const backPage = () =>{
        window.history.back();
    }

    const dataBuku = () => {
      let url = "http://localhost:5000/buku/getAll"

      axios.get(url)
      .then((response) => {
        setBuku(response.data.data)
      })
      }

    useEffect(() => {
        dataBuku()
  }, [])


    return (
        <div>
            <Navbar/>
            <div className="flex flex-col space-y-40 my-40 m-5 p-5">
                <button className=" w-max p-4 rounded-lg shadow-lg mb-5" onClick={backPage}>
                    <FaArrowLeft/>
                </button>
                <p className="text-center font-bold text-2xl">Rekomendasi Nih Buat Kamu 🔥</p>
                <div className=" grid grid-cols-5">
                    {buku.map((item) => (
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
            </div>
            <Footer/>
        </div>
       
    )
}