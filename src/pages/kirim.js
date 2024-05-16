import axios from "axios";
import React, { useEffect , useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


export default function Kirim() {

  let tempCart = []
  if (localStorage.getItem("cart") !== null) {
    tempCart = JSON.parse(localStorage.getItem("cart"));
  }
  let userData = JSON.parse(localStorage.getItem("user"));

  const [user,setuser] =useState(userData)
  const [totalHarga, setTotalHarga] = useState(0);
  const [showInput, setShowInput] = useState(false); // State variable to control visibility
  const [alamat, setAlamat] = useState(user.alamat_user); // State variable to control visibility
  const navigate = useNavigate();

  const buku = JSON.parse(localStorage.getItem("coba3"))
    const keranjang = JSON.parse(localStorage.getItem("coba1"))

  
  const toggleInput = () => {
    setShowInput((prevState) => !prevState); // Function to toggle input visibility
  };

  const calculateTotalHarga = () => {
    let total = 0;
    keranjang.forEach((item) => {
      total += item.total;
    });
    setTotalHarga(total);
  };

  

     const gantiAlamat = (event,id) => {
      event.preventDefault();
      
        if (event.keyCode === 13) {
          let url = `http://localhost:5000/user/update/${id}`

          alert('success call')

          const data = user.data;
          data.alamat_user = alamat

          const headers = {
            Authorization: `Bearer ${user.tkn}`, // Use template literal and backticks
          };

          axios.put(url,data,{headers})
          .then((response) => {
            alert(response.data.message)
            url = `http://localhost:5000/user/find/${id}`

            const headers = {
              Authorization: `Bearer ${user.tkn}`, // Use template literal and backticks
            };
            axios.get(url,{headers})
            .then((response) => {
              setuser(response.data.data)
            })
            .catch((error) => {
              console.error(error);
            })
          })
          .catch((error) => {
            console.error(error);
          })
          // const updateUser = {...user.data}
          // alert(JSON.stringify(updateUser))
          // window.alert(`call user success`)
          // updateUser.alamat_user = alamat
          // window.alert(`modify user success success`)
          // localStorage.setItem("alamat", JSON.stringify(updateUser.alamat_user))
          // window.alert(`alamat input is ${alamat}`)
          // setuser(updateUser)
          // window.alert(`set success`)
          // localStorage.setItem("user", JSON.stringify(updateUser))
          // window.alert(`local success`)
        }
     }

    const pay = async() => {
      const data = JSON.parse(localStorage.getItem("user"))

      let url = "http://localhost:5000/transaksi/checkout"

      const headers = {
        Authorization: `Bearer ${data.tkn}`, // Use template literal and backticks
      };

      const success = (data) => {
        window.location.href = `/succesPay`
        localStorage.setItem("payment", JSON.stringify(data))
      }
      const pending = (data) => {
        navigate(`/pendingPay`)
        localStorage.setItem("payment", JSON.stringify(data))
      }

      axios.post(url,{}, {headers})
      .then(response => {
        if (response.data.success === true) {
          window.snap.pay(response.data.token, {
            onSuccess: function(result){success(result);console.log(result);},
            onPending: function(result){pending();console.log(result);},
            onError: function(result){console.log('error');console.log(result);},
            onClose: function(){console.log('customer closed the popup without finishing the payment');}
          })
        } else {
          alert(response.data.message)
          if (response.data.message === "stok habis") {
            window.location.href = '/Keranjang'
          }
        }
      })
      .catch((error) => {
        alert(error)
      })   
    }

     useEffect(() => {
      calculateTotalHarga()


      const src = "https://app.sandbox.midtrans.com/snap/snap.js"
      const clientKey = "SB-Mid-client-OI2y6xAq4D-Dwx5i"

      const script = document.createElement('script')
      script.src = src
      script.setAttribute('data-client-key', clientKey)
      script.async = true

      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }

      

      
    }, []);

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
                  onKeyUp={(ev) => gantiAlamat(ev,user.data.id)} />) 
                : (
                    <div className=" flex-col space-y-5">
                      <p>{user.data.alamat_user}</p>
                      <button className="flex items-center space-x-5 rounded-xl border-2 hover:bg-sky-500 w-max px-4 py-1 hover:text-white" onClick={toggleInput}>
                        <LuMapPin />
                        <p className="font-bold text-base">Ganti Alamat</p>
                      </button>
                    </div>
                  )
              }
            </div>

            {/* isi keranjang */}
            

            {/* isi keranjang */}
            {buku.map((item,key) => (
              <div className="relative flex flex-col p-5 rounded-lg shadow-lg">
                <div className=" flex justify-between">
                  <div className="flex items-start space-x-8">

                    <img src={item.cover_buku} alt="cover" className="w-[]82p h-[126px] rounded-lg"/>

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
                <p className=" text-lg font-bold">Rp.{totalHarga}</p>
              </div>
              <hr className="outline-[#4B4B4B]"/>
              <button className=" items-center rounded-2xl px-4 py-2 bg-sky-500 text-white text-xl font-bold outline-none"
                onClick={() => pay()}>
                Beli
              </button>
          </div>
            
        </div>
        <div className="paymentGateway"></div>
      </div>
    );
}


