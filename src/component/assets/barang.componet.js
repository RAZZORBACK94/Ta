import React, { useState, useEffect } from "react";
import axios from "axios";

function Barang(props) {
  // const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   const fetchImageUrl = async () => {
  //     let url = `http://localhost:5000/buku/getImg/${props.cover}`
  //     axios.get(url)
  //     .then(async response => {
  //       if(response.ok) {
  //         const blob = await response.blob();
  //         const url = URL.createObjectURL(blob);
  //         setImageUrl(url);
  //       } else {
  //         console.error(`error fetching image: `,response.statusText);
  //       }

  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   }

  //   fetchImageUrl();
  // })
 // Rerun useEffect only if props.cover changes

  const detailData = (data) => {
    localStorage.setItem("buku", JSON.stringify(data));
    window.location.href = "/Detail";
  };

  return (
    <div
      className="relative overflow-hidden mx-8 border rounded-lg shadow-lg w-56 hover:cursor-pointer"
      onClick={() => detailData(props.buku)}
    >
      {props.stok < 1 ? (
        <div className="absolute rotate-[20deg]">
          <p className="p-2 pr-10 font-semibold text-white text-xl bg-red-300 w-60 text-right">
            Stok Habis
          </p>
        </div>
      ) : (
        <div></div>
      )}
      <img
        className="text-center rounded-md object-contain w-full h-48 my-4"
        src={props.cover}
        alt={props.cover} // Set default alt text
      />
      <div className="p-4">
        <h4 className="text-lg font-light text-gray-500">{props.author}</h4>
        <p className="my-2 text-xl font-bold text-black">{props.nama}</p>
        <p className="my-2 text-2xl font-bold text-black">{props.harga}</p>
      </div>
    </div>
  );
}

export default Barang;
