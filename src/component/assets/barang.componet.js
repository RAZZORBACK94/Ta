import React from "react";

export default function Barang() {
  const data = [
    {
      author: "test",
      title: "Rembulan",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1236734744i/1376124.jpg",
      prize: "$5",
      NormalPrize: "$10",
    },
    {
      author: "test1",
      title: "angin",
      img: "https://perpustakaan.cirebonkab.go.id/uploaded_files/sampul_koleksi/original/Monograf/38235.jpg",
      prize: "$5",
      NormalPrize: "$10",
    },
    {
      author: "test1",
      title: "angin",
      img: "https://perpustakaan.cirebonkab.go.id/uploaded_files/sampul_koleksi/original/Monograf/38235.jpg",
      prize: "$5",
      NormalPrize: "$10",
    },
  ];
  return (
    <div>
      <div className=" flex">
        {data.map((item, key) => (
          <div className=" mx-8 border rounded-lg shadow-lg w-56" key={key}>
            <img className=" text-center rounded-md object-contain w-full h-48 my-4" src={item.img} alt="image" />
            <div className=" p-4">
              <h4 className=" text-lg font-light text-gray-500">{item.author}</h4>
              <p className=" my-2  text-xl font-bold text-black">{item.title}</p>
              <p className=" my-2  text-2xl font-bold text-black">{item.prize}</p>
              <p className=" my-2  text-lg font-bold text-gray-500">
                <del>{item.NormalPrize}</del>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
