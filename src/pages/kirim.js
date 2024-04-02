import React, { useEffect , useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";


export default function Kirim() {

  const data =[ 
    {
      id: 1,
      author: "test",
      authorProf: "Gege Akutami, the pen name of a talented and mysterious Japanese manga artist, is best known for their creation, Jujutsu Kaisen. While shrouded in secrecy, their work speaks volumes, captivating readers with its unique blend of story and art.",
      title: "Rembulan",
      cover: "https://i.pinimg.com/736x/a0/9b/2e/a09b2eca90d800a22c62d50fbeb8ea48.jpg",
      soft: 100,
      softDisc: 50,
      beli: 1,
    },
    {
      id: 2,
      author: "coba",
      authorProf: "Gege Akutami, the pen name of a talented and mysterious Japanese manga artist, is best known for their creation, Jujutsu Kaisen. While shrouded in secrecy, their work speaks volumes, captivating readers with its unique blend of story and art.",
      title: "percobaan",
      cover: "https://i.pinimg.com/236x/37/3e/76/373e7691ecf16e725e49890edbca1b57.jpg",
      hard: 3423,
      beli: 1,
    },
  ]

  const [keranjang, setKeranjang] = useState(data);
  const [alamat, setAlamat] = useState("Percobaan Data Untuk Alamat");

  const inc = (itemId) => {
    setKeranjang((prevKeranjang) =>
      prevKeranjang.map((item) =>
        item.id === itemId ? { ...item, beli: item.beli + 1 } : item
      )
    );
  };

  const dec = (itemId) => {
    setKeranjang((prevKeranjang) =>
      prevKeranjang.map((item) =>
        item.id === itemId ? (item.beli > 1 ? { ...item, beli: item.beli - 1 } : item) : item
      )
    );
  };

  const total = () => {
    // Filter checked items first:
    const checkedItems = keranjang.filter((item) => item.isChecked);
  
    // Then calculate total price using reduce:
    return checkedItems.reduce((acc, item) => {
      const price = item.hard ? item.hard : item.softDisc;
      return acc + (price * item.beli);
    }, 0);
  };
  // const checkedBox = () => {
  //  setCheck((prevCheck) => 
  //  )
    
  //   return checked.length;
  // }

    return (
      <div className=" flex flex-col space-y-5 mt-40 m-5 p-5">
        
        {/* back button */}
        <button className=" w-max p-4 rounded-lg shadow-lg mb-5">
          <FaArrowLeft/>
        </button>

        {/* judul page */}
        <p className=" text-5xl font-bold">Pengiriman</p>

        <div className="flex justify-between space-x-5">
          <form className="flex- flex-col space-y-5 w-full">

            {/* filter */}
            <div className="flex flex-col space-y-5 px-5 py-2 rounded-lg shadow-lg">
              <p className="font-bold text-base text uppercase text-slate-500">Alamat Pengiriman</p>
              <p>{alamat}</p>
              <div className="flex items-center space-x-5 rounded-xl border-2 hover:bg-slate-500 w-max px-4 py-1">
                <LuMapPin/>
                <p className="font-bold text-base">Ganti Alamat</p>
              </div>
            </div>

            {/* isi keranjang */}
            {keranjang.map((item,index) => (
              <div className="relative flex flex-col p-5 rounded-lg shadow-lg">
                <div className=" flex justify-between">
                  <div className="flex items-start space-x-8">
                    <input
                      type="checkbox"
                      name={item.title}/>

                    <img src={item.cover} alt="cover" className="w-[]82p h-[126px] rounded-lg"/>

                    <div>
                      <p className=" text-2xl font-semibold">{item.title}</p>
                      <p className=" text-2xl font-semibold">
                        {item.soft ? "" : "(Hard Cover)"}
                        {item.hard ? "" : "(Soft Cover)"}
                      </p>
                      <p className=" text-lg text-slate-500">{item.author}</p>
                    </div>
                  </div>

                  <p className="text-2xl font-bold">RP. 
                    {item.soft ? item.softDisc : ""}
                    {item.hard ? item.hard : ""}
                  </p>
                </div>

                <div className=" absolute flex space-x-3 right-5 bottom-5 rounded-lg border-2 items-center">
                  <button className=" p-3 hover:bg-slate-400 rounded-l-lg" onClick={() => dec(item.id)} disabled={item.beli === 1}>
                    <FaMinus/>
                  </button>
                  <p className="text-2xl font-bold">{item.beli}</p>
                  <button className=" p-3 hover:bg-slate-400 rounded-r-lg" onClick={() => inc(item.id)}>
                    <FaPlus/>
                  </button>

                </div>
              </div>
            ))}
          </form>

          <div className=" flex flex-col space-y-5 p-5 w-1/2 h-max rounded-lg shadow-lg">
              <p className=" text-2xl font-bold"> Ringkasan Belanja</p>
              <div className="flex justify-between">
                <p className=" text-lg text-slate-500">Total</p>
                <p className=" text-lg font-bold">Rp.{total()}</p>
              </div>
              <hr className="outline-[#4B4B4B]"/>
              <button className=" items-center rounded-2xl px-4 py-2 bg-sky-500 text-white text-xl font-bold outline-none">
                Beli
              </button>
          </div>
            
        </div>
      </div>
    );
}


