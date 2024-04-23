import React, { useEffect , useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";


export default function Kirim() {

  let tempCart = []
  if (localStorage.getItem("cart") !== null) {
    tempCart = JSON.parse(localStorage.getItem("cart"));
  }
  let userData = JSON.parse(localStorage.getItem("user"));

  const [user,setuser] =useState(userData)
  const [keranjang, setKeranjang] = useState(tempCart);
  const [totalHarga, setTotalHarga] = useState(0);
  const [showInput, setShowInput] = useState(false); // State variable to control visibility
  const [alamat, setAlamat] = useState(user.alamat_user); // State variable to control visibility

  console.log(user)
  
  const toggleInput = () => {
    setShowInput((prevState) => !prevState); // Function to toggle input visibility
  };

  const calculateTotalHarga = () => {
    let total = 0;
    keranjang.forEach((item) => {
      total += item.harga * item.jumlahBeli;
    });
    setTotalHarga(total);
  };

  const inc = (isbn) => {
    const newKeranjang = keranjang.map((item) =>
     item.isbn === isbn? 
     { ...item, jumlahBeli: item.jumlahBeli + 1 } : item, // Create a new object
     )
   setKeranjang(newKeranjang);

   localStorage.setItem("cart", JSON.stringify(newKeranjang));

   keranjang.map((item) => {
     let total = 0;
      total += item.harga * item.jumlahBeli;
     setTotalHarga(total)
   });
   }
 
 const dec = (isbn) => {
    const newKeranjang = keranjang.map((item) =>
     item.isbn === isbn && item.jumlahBeli > 1? 
      {...item, jumlahBeli: item.jumlahBeli - 1} : item, // Create a new object
     )
   setKeranjang(newKeranjang);

   localStorage.setItem("cart", JSON.stringify(newKeranjang));

   keranjang.map((item) => {
     let total = 0
      total += item.harga * item.jumlahBeli;
     setTotalHarga(total)
   });
   }

  const Drop = (item) => {
     // beri konfirmasi untuk menghapus data
     if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
         // menghapus data
         let tempCart = keranjang;
         // posisi index data yg akan dihapus
         let index = tempCart.indexOf(item);
         // hapus data
         tempCart.splice(index, 1);
         setKeranjang(tempCart)

         localStorage.setItem("cart", JSON.stringify(tempCart));

         //hitung ulang total
         let totalHarga = 0;
         keranjang.map((item) => {
           totalHarga += item.harga * item.jumlahBeli;
         });
       }
     };

     const gantiAlamat = (event) => {
        if (event.keyCode === 13) {
          window.alert('function called2')
          const updateUser = {...user}
          window.alert(`call user success`)
          updateUser.alamat_user = alamat
          window.alert(`modify user success success`)
          localStorage.setItem("alamat", JSON.stringify(updateUser.alamat_user))
          window.alert(`alamat input is ${alamat}`)
          setuser(updateUser)
          window.alert(`set success`)
          localStorage.setItem("user", JSON.stringify(updateUser))
          window.alert(`local success`)
        }
     }

     useEffect(() => {
      calculateTotalHarga();
    }, [keranjang]);

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

            {/* alamat */}
            <div className="flex flex-col space-y-5 px-5 py-2 rounded-lg shadow-lg">
              <p className="font-bold text-base text uppercase text-slate-500">Alamat Pengiriman</p>
              {showInput ? 
                (<input 
                  type="text" 
                  className="border-2 rounded-xl px-4 py-1 w-full p-3"
                  onChange={(ev) => setAlamat( ev.target.value)}
                  onKeyUp={(ev) => gantiAlamat(ev,user.nama_user)} />) 
                : (
                    <div className=" flex-col space-y-5">
                      <p>{alamat}</p>
                      <button className="flex items-center space-x-5 rounded-xl border-2 hover:bg-sky-500 w-max px-4 py-1 hover:text-white" onClick={toggleInput}>
                        <LuMapPin />
                        <p className="font-bold text-base">Ganti Alamat</p>
                      </button>
                    </div>
                  )
              }
            </div>

            {/* isi keranjang */}
            {keranjang.map((item) => (
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

                  <p className="text-2xl font-bold">RP.{item.harga}</p>
                </div>

                <div className="flex mx-40 justify-end space-x-2">
                  <button className="font-bold">ringkasan</button>
                  <button className="font-bold">favorit</button>
                  <button className="font-bold" onClick={() => Drop(item)}>hapus</button>
                  <div className=" absolute flex space-x-3 right-5 bottom-5 rounded-lg border-2 items-center">
                    <button className={`${'disabled'? ' cursor-not-allowed' : ''} hover:bg-slate-400 p-3  rounded-l-lg disabled:opacity-40`} onClick={() => dec(item.isbn)}  disabled={item.jumlahBeli === 1}>
                      <FaMinus/>
                    </button>
                    <p className="text-2xl font-bold">{item.jumlahBeli}</p>
                    <button className=" p-3 hover:bg-slate-400 rounded-r-lg" onClick={() => inc(item.isbn)}>
                      <FaPlus/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </form>

          <div className=" flex flex-col space-y-5 p-5 w-1/2 h-max rounded-lg shadow-lg">
              <p className=" text-2xl font-bold"> Ringkasan Belanja</p>
              <div className="flex justify-between">
                <p className=" text-lg text-slate-500">Total</p>
                <p className=" text-lg font-bold">Rp.{totalHarga}</p>
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


