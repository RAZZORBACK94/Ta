import { FaArrowLeft } from "react-icons/fa";
import React, {useEffect, useState} from "react";

export default function SuccesPay () {

    const [total, setTotal] = useState();

    const buku = JSON.parse(localStorage.getItem("coba2"))
    const keranjang = JSON.parse(localStorage.getItem("coba1"))


    const backPage = () =>{
        window.location.href = '/';
        localStorage.removeItem("buku");
    }

    useEffect(() => {
        const calculateHarga = () => {
            let harga = 0
            keranjang.forEach(item => {
                harga += item.total
            });
            console.log(harga)
            setTotal(harga)
        }

        calculateHarga()
    }, [])

    return (
        <div className=" flex flex-col space-y-5 mt-40 m-5 p-5">
        
        {/* back button */}
        <button className=" w-max p-4 rounded-lg shadow-lg mb-5"
        onClick={() => backPage()}>
            <FaArrowLeft/>
        </button>

        {/* judul page */}
        <p className=" text-5xl font-bold">History Pembayaran</p>

        <div className="flex justify-between space-x-5">
          <form className="flex- flex-col space-y-5 w-full">

            {/* isi keranjang */}
            {buku.map((item,key) => (
              <div className="relative flex flex-col p-5 rounded-lg shadow-lg">
                <div className=" flex justify-between">
                  <div className="flex items-start space-x-8">

                    <img src={`http://localhost:5000/cover/${item.cover_buku}`} alt="cover" className="w-[]82p h-[126px] rounded-lg"/>

                    <div>
                      <p className=" text-2xl font-semibold">{item.nama_buku}</p>
                      <p className=" text-lg text-slate-500">{item.author_buku}</p>
                    </div>
                  </div>

                  <p className="text-2xl font-bold">RP.{item.harga_buku}</p>
                </div>

                <div className="flex mx-40 justify-end space-x-2">
                  <div className=" absolute flex space-x-3 right-5 bottom-5 rounded-lg border-2 items-center px-5">
                    <p className="text-2xl font-bold">{keranjang[key].qty}</p>
                  </div>
                </div>
              </div>
            ))} 
          </form>

          <div className=" flex flex-col space-y-5 p-5 w-1/2 h-max rounded-lg shadow-lg">
              <p className=" text-2xl font-bold"> Ringkasan Belanja</p>
              <div className="flex justify-between">
                <p className=" text-lg text-slate-500">Total</p>
                <p className=" text-lg font-bold">Rp. {total}</p>
              </div>
          </div>
            
        </div>
      </div>
    );
}