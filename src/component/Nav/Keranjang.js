import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";

// bagaimana cara menambahkan propert isChecked = false kedalam array data menggunakan function (tanpa mengubah array data secara langsung)

export default function Keranjang() {
  let tempCart = [];
  if (localStorage.getItem("cart") !== null) {
    tempCart = JSON.parse(localStorage.getItem("cart"));
  }

  const [keranjang, setKeranjang] = useState(tempCart);
  const [totalHarga, setTotalHarga] = useState(0);

  const calculateTotalHarga = () => {
    let total = 0;
    keranjang.forEach((item) => {
      total += item.harga * item.jumlahBeli;
    });
    setTotalHarga(total);
  };

  const inc = (e, isbn) => {
    e.preventDefault();
    const newKeranjang = keranjang.map(
      (item) =>
        item.isbn === isbn ? { ...item, jumlahBeli: item.jumlahBeli + 1 } : item // Create a new object
    );
    setKeranjang(newKeranjang);

    localStorage.setItem("cart", JSON.stringify(newKeranjang));

    keranjang.map((item) => {
      let total = 0;
      total += item.harga * item.jumlahBeli;
      setTotalHarga(total);
    });
  };

  const dec = (e, isbn) => {
    e.preventDefault()
    const newKeranjang = keranjang.map(
      (item) =>
        item.isbn === isbn && item.jumlahBeli > 1
          ? { ...item, jumlahBeli: item.jumlahBeli - 1 }
          : item // Create a new object
    );
    setKeranjang(newKeranjang);

    localStorage.setItem("cart", JSON.stringify(newKeranjang));

    keranjang.map((item) => {
      let total = 0;
      total += item.harga * item.jumlahBeli;
      setTotalHarga(total);
    });
  };

  const Drop = (item) => {
    // beri konfirmasi untuk menghapus data
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      // menghapus data
      let tempCart = keranjang;
      // posisi index data yg akan dihapus
      let index = tempCart.indexOf(item);
      // hapus data
      tempCart.splice(index, 1);
      setKeranjang(tempCart);

      localStorage.setItem("cart", JSON.stringify(tempCart));

      //hitung ulang total
      let totalHarga = 0;
      keranjang.map((item) => {
        totalHarga += item.harga * item.jumlahBeli;
      });
    }
  };

  const kirimPage = (data) => {
    localStorage.setItem("total", JSON.stringify(data));
    window.location.href = "/Kirim";
  };

  useEffect(() => {
    calculateTotalHarga();
  }, [keranjang]);

  return (
    <div className=" flex flex-col space-y-5 mt-40 m-5 p-5">
      {/* back button */}
      <button className=" w-max p-4 rounded-lg shadow-lg mb-5">
        <FaArrowLeft />
      </button>

      {/* judul page */}
      <p className=" text-5xl font-bold">Keranjang</p>

      <div className="flex justify-between space-x-5">
        <form className="flex- flex-col space-y-5 w-full">
          {/* filter */}
          <div className="flex justify-between px-5 py-2 rounded-lg shadow-lg">
            <p className="font-bold text-base">
              Pilih Semua<span className=" text-slate-500">2</span>
            </p>
            <p className="font-bold text-base">Hapus</p>
          </div>

          {/* isi keranjang */}
          {keranjang.map((item) => (
            <div className="relative flex flex-col p-5 rounded-lg shadow-lg">
              <div className=" flex justify-between">
                <div className="flex items-start space-x-8">
                  <input type="checkbox" name={item.title} />

                  <img
                    src={item.cover}
                    alt="cover"
                    className="w-[]82p h-[126px] rounded-lg"
                  />

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
                <button className="font-bold" onClick={() => Drop(item)}>
                  hapus
                </button>
                <div className=" absolute flex space-x-3 right-5 bottom-5 rounded-lg border-2 items-center">
                  <button
                    className={`hover:bg-slate-400 p-3  rounded-l-lg disabled:opacity-40`}
                    onClick={(e) => dec(e,item.isbn)}
                    disabled={item.jumlahBeli === 1}
                  >
                    <FaMinus />
                  </button>
                  <p className="text-2xl font-bold">{item.jumlahBeli}</p>
                  <button
                    className=" p-3 hover:bg-slate-400 rounded-r-lg"
                    onClick={(e) => inc(e, item.isbn)}
                  >
                    <FaPlus />
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
            <p className=" text-lg font-bold">Rp. {totalHarga}</p>
          </div>
          <hr className="outline-[#4B4B4B]" />
          <button
            onClick={() => kirimPage(totalHarga)}
            className=" items-center rounded-2xl px-4 py-2 bg-sky-500 text-white text-xl font-bold outline-none"
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}
