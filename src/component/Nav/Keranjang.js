import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
// bagaimana cara menambahkan propert isChecked = false kedalam array data menggunakan function (tanpa mengubah array data secara langsung)

export default function Keranjang() {
  const [keranjang, setKeranjang] = useState([]);
  const [buku, setBuku] = useState([]);
  const [idBuku, setIdBuku] = useState([]);
  const [totalHarga, setTotalHarga] = useState();

  const user = JSON.parse(localStorage.getItem("user"));

  const calculateTotalHarga = () => {
    let totalHarga = null;

    if (keranjang && keranjang.length > 0) {
      keranjang.forEach((item) => {
        totalHarga += item.total;
      });
    } else {
      // Handle the case where keranjang is empty or undefined
      console.warn("Keranjang is empty or undefined");
    }

    setTotalHarga(totalHarga);
  };

  const inc = (e, id) => {
    keranjang.map(
      (item) => {
        if (item.id_buku === id) {
          let url = "http://localhost:5000/transaksi/add";

          const data = {
            id_buku: item.id_buku,
            qty: item.qty + 1,
          };

          axios
            .post(url, data, {
              headers: { Authorization: "Bearer " + user.tkn },
            })
            .then((response) => {
              setKeranjang(response.data.data);
              localStorage.setItem("coba1", JSON.stringify(response.data.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } // Create a new object
    );
    window.location.reload()
  };

  const dec = (e, id) => {
    keranjang.map(
      (item) => {
        if (item.id_buku === id && item.qty > 1) {
          let url = "http://localhost:5000/transaksi/add";

          const data = {
            id_buku: item.id_buku,
            qty: item.qty - 1,
          };

          axios
            .post(url, data, {
              headers: { Authorization: "Bearer " + user.tkn },
            })
            .then((response) => {
              setKeranjang(response.data.data);
              localStorage.setItem("coba1", JSON.stringify(response.data.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } // Create a new object
    );
    window.location.reload()
  };

  const Drop = async(event,item) => {
    // beri konfirmasi untuk menghapus data
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      let url = `http://localhost:5000/transaksi/remove/${item}`

      const headers = {
        Authorization: `Bearer ${user.tkn}`, // Use template literal and backticks
      };
      // menghapus data
      
      axios.post(url,{}, {headers})
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message)
        } else {
          alert(response.data.message)
        }
      })
      .catch((error) =>{
        console.error(error);
      })

      window.location.reload()
    }
  };

  const kirimPage = (data) => {
    localStorage.setItem("total", JSON.stringify(data));
    window.location.href = "/Kirim";
  };

  const fetchData = async () => {
    try {
      // Get keranjang data
      const keranjangResponse = await axios.get(
        "http://localhost:5000/keranjang/getKeranjang",
        { headers: { Authorization: "Bearer " + user.tkn } }
      );
      setKeranjang(keranjangResponse.data.data);
      localStorage.setItem(
        "coba1",
        JSON.stringify(keranjangResponse.data.data)
      );

      // Extract idBuku from keranjang
      const idBuku = keranjangResponse.data.data.map((item) => item.id_buku);
      setIdBuku(idBuku);
      localStorage.setItem("coba2", JSON.stringify(idBuku));

      // Get buku data based on idBuku
      const bukuPromises = idBuku.map((id) => {
        return axios.post(
          "http://localhost:5000/buku/findId",
          { id },
          { headers: { Authorization: "Bearer " + user.tkn } }
        );
      });

      const bukuResponse = await Promise.all(bukuPromises);
      const varBuku = bukuResponse.map((response) => response.data.data);
      setBuku(varBuku);
      localStorage.setItem("coba3", JSON.stringify(varBuku));

      let harga = 0;
      keranjangResponse.data.data.forEach((item) => {
        harga += item.total;
      });
      setTotalHarga(harga);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors appropriately, e.g., display an error message
    }
  };

  useEffect(() => {
    

    fetchData(); // Call the function on initial render

    // Re-render only when keranjang changes
  }, []);

  return (
    <div className=" flex flex-col space-y-5 mt-40 m-5 p-5">
      {/* back button */}
      <button className=" w-max p-4 rounded-lg shadow-lg mb-5">
        <FaArrowLeft />
      </button>

      {/* judul page */}
      <p className=" text-5xl font-bold">Keranjang</p>

      <div className="flex justify-between space-x-5">
      {buku.length > 0 ? 
                            (   <div className="flex- flex-col space-y-5 w-full">
                            {/* filter */}
                  
                            {/* isi keranjang */}
                            {buku.map((item, key) => (
                              <div className="relative flex flex-col space-y-20 p-5 rounded-lg shadow-lg">
                                <div className=" flex justify-between">
                                  <div className="flex items-start space-x-8">
                                    <img src={item.cover_buku}/>
                                    <div>
                                      <p className=" text-2xl font-semibold">{item.nama_buku}</p>
                                      <p className=" text-lg text-slate-500">
                                        {item.author_buku}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-2xl font-bold">RP.{item.harga_buku}</p>
                                </div>
                                <div className="flex mx-40 justify-end space-x-2">
                                  <button
                                    className="font-bold scale-150 hover:text-white hover:bg-sky-500 p-2 rounded-full"
                                    onClick={(e) => Drop(e,item.id)}
                                  >
                                    <MdDeleteOutline />
                                  </button>
                                  <div className=" absolute flex space-x-3 right-5 bottom-5 rounded-lg border-2 items-center">
                                   {keranjang[key].qty > 1? (
                                     <button
                                     className={`hover:bg-sky-500 hover:text-white p-3  rounded-l-lg disabled:opacity-40`}
                                     onClick={(e) => dec(e, keranjang[key].id_buku)}
                                   >
                                     <FaMinus />
                                   </button>
                                   ) : (
                                    <button
                                    className={` p-3  rounded-l-lg disabled:opacity-40 di`}
                                    onClick={(e) => dec(e, keranjang[key].id_buku)}
                                    disabled
                                  >
                                    <FaMinus />
                                  </button>
                                   )}
                                    <p className="text-2xl font-bold">{keranjang[key].qty}</p>
                                    <button
                                      className=" p-3 hover:bg-sky-500 hover:text-white rounded-r-lg"
                                      onClick={(e) => inc(e, keranjang[key].id_buku)}
                                    >
                                      <FaPlus />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>) 
                            : (
                                <p className="text-center font-bold text-2xl text-slate-300"> Kamu Tidak Memiliki Barang Apapun Di Dalam Keranjang</p>
                              )
                          }
        

        <div className=" flex flex-col space-y-5 p-5 w-[400px] h-max rounded-lg shadow-lg">
          <p className=" text-2xl font-bold"> Ringkasan Belanja</p>
          <div className="flex justify-between">
            <p className=" text-lg text-slate-500">Total</p>
            <p className=" text-lg font-bold">Rp. {totalHarga}</p>
          </div>
          <hr className="outline-[#4B4B4B]" />
          <button
            onClick={() => kirimPage(totalHarga)}
            className=" items-center rounded-2xl px-4 py-2 bg-sky-500 text-white hover:bg-sky-300 text-xl font-bold outline-none"
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}
