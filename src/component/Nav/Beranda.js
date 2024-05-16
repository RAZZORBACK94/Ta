import React,{useState,useEffect} from "react";
import Carsel from "../assets/carosel.componet";
import Barang from "../assets/barang.componet";
import Navbar from "../Navbar";
import Footer from "../Footer";


import gambar from "../assets/Mask.png";
import axios from "axios";


let slide = [
  "https://cdn.gramedia.com/uploads/marketing/Gramedia.com_Super_Sale_Update_Storefront__wauto_h336.jpg",
  "https://cdn.gramedia.com/uploads/marketing/PO_Mommyclopedia_99_Resep_Mpasi_Storefront__wauto_h336.jpg",
  "https://cdn.gramedia.com/uploads/marketing/Road_To_Anniversary_Gramedia_54_Tahun_Storefront_xJVDfmX__wauto_h336.jpg"
];

export default function Beranda() { 
  const[buku,setBuku] = useState([]);

  const  data  = JSON.parse(localStorage.getItem("user")) || {}; // Handle empty object


  const dataBuku = () => {
    let url = "http://localhost:5000/buku/getAll"

    axios.get(url)
    .then(response => {
      setBuku(response.data.data)
      localStorage.setItem("coba", JSON.stringify(response.data.data))
    })
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const user = localStorage.getItem("user")
      setIsLoggedIn(user !== null);
      dataBuku();
    }, []);


  return (
    <div className="">
      <Navbar/>
      {/* Image Slider / Carosel */}
      <div className=" max-w-6xl m-auto pt-28">
        <Carsel autoslide={true}>
          {slide.map((s) => (
            <img src={s} />
          ))}
        </Carsel>
      </div>
      {isLoggedIn ? 
        ( 
          <div className=" bg-slate-50 my-10 mx-56 p-5 rounded-lg shadow-lg ">
            <p className=" text-4xl font-bold">Welcome {data.data.nama_user}</p>
          </div>) 
        : (
          <div></div>
          )
      }
      
      {/* icon category */}
      <div className=" mt-8">
        <div className=" bg-blue-100 mx-56 flex justify-around text-center font-medium">
          <div>
            <div>icon img</div>
            <p> Religi</p>
          </div>
          <div>
            <div>icon img</div>
            <p> Game & aktifitas </p>
          </div>
          <div>
            <div>icon img</div>
            <p>Desain</p>
          </div>
          <div>
            <div>icon img</div>
            <p> Matematika </p>
          </div>
          <div>
            <div>icon img</div>
            <p> fiksi </p>
          </div>
          <div>
            <div>icon img</div>
            <p> Comic </p>
          </div>
        </div>
      </div>
      {/* Text Persuasi */}
      <div className=" ">
        <div className=" text-black font-bold text-center text-xl pt-11">
          <p>Rekomendasi Nih Buat Kamu 🔥</p>
        </div>
        <p className=" ml-[85%] text-gray-400 mt-4 font-medium text-md">Lihat Semua</p>
      </div>
      {/* Carosel Barang Wrapper*/}
      <div className=" mt-6">
        <div className=" mx-40">
          <div className="flex">
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
        {/* line hr */}
        <div className=" my-14 font-bold text-black mx-36">
          <hr />
        </div>
      </div>
      {/* Carosel barang with img */}
      <div className=" mb-14 ">
        <p className=" ml-[85%] text-gray-400 mt-2 font-medium text-md ">Lihat Semua</p>
        <div className=" mx-36 flex mt-4 ">
          <img className=" w-[20%] h-full mr-8" src={gambar} />
          <div className="flex">
            {buku.map((item, index) => (
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
      </div>
      <Footer/>
    </div>
  );
}
