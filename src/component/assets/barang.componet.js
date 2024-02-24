import React from "react";

export default function Barang() {
  const data = [
    {
      author: "test",
      title: "Rembulan",
      img: "",
      prize: "$5",
    },
    {
      author: "test1",
      title: "angin",
      img: "",
      prize: "$5",
    },
  ];
  return (
    <div>
      <div>
        {data.map((item, key) => (
          <div className="w-full rounded-lg shadow-sm" key={key}>
            <img className=" object-cover w-full h-48" src={item.img} alt="image" />
            <div className=" p-4">
              <h4 className=" text-lg font-thin text-gray-200">{item.author}</h4>
              <p className=" my-2 leading-normal">{item.title}</p>
              <p className=" my-2 leading-normal">{item.prize}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
