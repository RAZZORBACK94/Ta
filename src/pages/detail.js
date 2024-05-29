import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdInfo,MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


import { Rating, Progress } from "@material-tailwind/react";
import { commentData } from "../component/data";

import Barang from "../component/assets/barang.componet";
 

export default function Detail () {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [varBuku, setVarBuku] = useState([]);
    const [keranjang, setKeranjang] = useState([]);
    const [comment, setComment] = useState(commentData)
    const [userComment, setUserComment] = useState("")
    const [rate, setRate] = useState(0)
    const [showInput, setShowInput] = useState(false);
    const [showTeks, setShowTeks] = useState(false);

    const buku = JSON.parse(localStorage.getItem("buku"));
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        setIsLoggedIn(user !== null);
    }, [])

    const sendComment = (event) => {
       if (event.keycode === 13) {
        const { nama_user } = JSON.parse(localStorage.getItem("user")) || {};
        const data ={ 
            name: nama_user,
            profile: "https://media.istockphoto.com/id/1205742669/photo/young-indian-man-wearing-denim-shirt-standing-over-isolated-yellow-background-cheerful-with-a.jpg?s=612x612&w=0&k=20&c=OnnM5rjkR_xl7ohnUx2ZlJXfVl9-8hcOdSimZQW5DBM=",
            date: new Date(),
            rating: rate,
            review: userComment
        }
        console.log(data)
        localStorage.setItem("comment",JSON.stringify(data))
       }
    }
    
    const toggleInput = () => {
        setShowInput((prevState) => !prevState); // Function to toggle input visibility
      };

    const toggleTeks = () => {
        setShowTeks((prevState) => !prevState); // Function to toggle input visibility
      };
    
    const selectedBuku = JSON.parse(localStorage.getItem("buku")) || {};
    
    let openComm =false;
    const toggleOpenComm = () => {
      openComm = !openComm; // Toggle the value of openComm
      console.log(openComm)
    };


    const backPage = () =>{
        window.history.back();
        localStorage.removeItem("buku");
    }

    const renderImage = (buffer) => {
        const base64String = btoa(new Uint8Array(buffer).reduce((data,byte) => data + String.fromCharCode(byte), ""));
        return `data:image/jpeg;base64,${base64String}`;
    }
    

    const  addToCart = () => {
        if (isLoggedIn) {
            // membuat sebuah variabel untuk menampung cart sementar
            // cek data yang dipilih user ke keranjang belanja
            if (selectedBuku.stok_buku > 0) {
                let existItem = false
                    // keranjang.find((item) => item.id_buku === idBuku);
                if (existItem) {
                // jika item yang dipilih ada pada keranjang belanja
                window.alert("Anda telah memilih item ini");
                } else {
                    let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "");

                    if (promptJumlah !== null && promptJumlah !== "") {
                        const jumlahBeli = parseInt(promptJumlah);

                        let url = "http://localhost:5000/transaksi/add"

                        const data = {
                            id: buku.id,
                            id_buku: buku.id,
                            qty: jumlahBeli
                        }

                        axios.post(url,data, {headers: {Authorization: "Bearer " + user.tkn}})
                        .then((response) => {
                            alert(response.data.message)
                        }).catch((error) => {
                            alert(error)
                        })
                    }
                }
            } else {
                alert('stok buku saat ini sedang habis')
            }
        } else {
            window.alert('harus login / sign in terlebih dahulu')
        }
      };

      

        let sumOfRatings = 0;
        let numberOfRatings = 0;

        // Assuming comments is an array containing rating information
       for (let index = 0; index < comment.length; index++) {
         sumOfRatings += comment[index].rating;
         numberOfRatings ++;
       }

        const avrRating = sumOfRatings / numberOfRatings;

       

        useEffect(() => {
            const dataBuku = () => {
                let url = "http://localhost:5000/buku/getAll"
            
                axios.get(url)
                .then(response => {
                  setVarBuku(response.data.data)
                  localStorage.setItem("coba", JSON.stringify(response.data.data))
                })
              }
              dataBuku()
        },[])

        return(
            <div className="">
                <Navbar/>
                <div className="flex flex-col space-y-40 my-40 m-5 p-5 ">
                    <button className=" w-max p-4 rounded-lg shadow-lg mb-5" onClick={backPage}>
                        <FaArrowLeft/>
                    </button>
                    <div className="flex space-x-10 mb-5">
                        <div  className=" w-5/12 flex flex-col space-y-4 rounded-2xl">
                            <img id="cover" src={`http://localhost:5000/cover/${buku.cover_buku}`} alt="cover" className=" rounded-3xl m-6"/>
                        </div>
                        <div className="w-full space-y-10">

                            {/* header */}
                            <div>
                                <p className=" text-xl text-[#4B4B4B]">{buku.author_buku}</p>
                                <p className=" text-5xl font-bold">{buku.nama_buku}</p>
                            </div>

                            <hr className="outline-[#4B4B4B]"/>

                            <p className=" text-3xl font-bold text-center">Pilih Format Buku yang Tersedia</p>

                            {/* price */}
                            <button id="hard" onClick={() => addToCart()} className=" relative flex flex-col space-y-1.5 shadow-2xl p-8 rounded-lg w-[400px] mx-auto">
                                <div className="absolute top-0 right-0 scale-150 m-5">
                                    <MdInfo />
                                </div>
                                <p className=" text-3xl font-semibold">Harga</p>
                                <p className=" text-4xl font-bold text-[#3A70E2]">Rp. {buku.harga_buku}</p>
                            </button>

                            {/* deskipsi */}
                            <p className=" text-3xl font-bold">Deskripsi Buku {buku.judul_buku}</p>
                            {showTeks? (
                                <div>
                                    <p className=" text-justify">{buku.deskripsi_buku}</p>
                                    <button onClick={toggleTeks} className="text-blue-500 text-xl font-bold">Selengkapnya</button>
                                </div>
                            ) : (
                                <div>
                                    <p className=" text-justify line-clamp-4">{buku.deskripsi_buku}</p>
                                    <button onClick={ toggleTeks} className="text-blue-500 text-xl font-bold">Selengkapnya</button>
                                </div>
                            )}
                            
                            {/* detail buku */}
                            <div className=" flex flex-col space-y-9 bg-[#F1F8FF] p-9 rounded-2xl w-max mx-auto">
                                <p className=" text-3xl font-bold">Detail Buku</p>

                                <div className=" grid grid-cols-3 gap-10">
                                    <div>
                                        <p className=" text-2xl font-bold">Author</p>
                                        <p>{buku.author_buku}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Isbn</p>
                                        <p>{buku.author_buku}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Kategori</p>
                                        <p>{buku.kategori_buku}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Tanggal Terbit</p>
                                        <p>{buku.createdAt}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Penerbit</p>
                                        <p>{buku.penerbit_buku}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rating and rivew */}
                <div className="  flex flex-col space-y-5  m-5 p-5">
                    <p className=" text-3xl font-bold">Rating & Review</p>
                    <div className="flex justify-between">
                        {/* total rating */}
                        <div className="flex flex-col space-y-5">
                            <p className=" text-lg font-semibold">Total Reviews</p>
                            <p className=" text-4xl font-bold">{comment.length}</p>
                            <p className="text-xl text-[#4B4B4B]">Grown in reviews on this your</p>
                        </div>
                        {/* average rating */}
                        <div className=" flex flex-col space-y-5">
                            <p className=" text-lg font-semibold">Average Rating</p>
                            <div className="flex space-x-5">
                                <p className=" text-4xl font-bold">{avrRating}</p>
                                <Rating className="flex" value={avrRating} unratedColor="amber" ratedColor="amber" readonly/>
                            </div>
                            <p className="text-xl text-[#4B4B4B]">Average rating on this your</p>
                        </div>
                        {/* type rating */}
                        <div className="flex flex-col space-y-5">
                            <div className="flex bg-slate-300">
                                <p>5</p>
                                <div className="flex">
                                    <Progress value={50} color="light-blue"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="outline-[#4B4B4B] my-10"/>

                    {comment.map((item) =>(
                        <div className="">
                            <div className="flex justify-between">
                                <div className=" flex space-x-2 items-center">
                                    <img src={item.profile} className=" w-[110px] h-[110px] rounded-md" alt="profile"/>
                                    <div className="">
                                        <p className="text-2xl font-bold">{item.name}</p>
                                        <p className="text-xl text-[#4B4B4B]">{item.date}</p>
                                    </div>
                                </div>

                                <div className=" w-[70%]">
                                    <div className="flex space-x-2">
                                        <Rating className="flex" value={item.rating} readonly/>
                                        <p className="text-xl text-[#4B4B4B]">{item.date}</p>
                                    </div>
                                    <p className="text-xl text-justify">{item.review}</p>
                                </div>
                            </div>

                            <hr className="outline-[#4B4B4B] my-10"/>
                        </div>
                    ))}

                    <p className="text-blue-500 text-xl font-bold">See All Reviews</p>

                    {/* about creator */}
                    <div>
                        <p className="text-2xl font-bold">About Creator</p>
                        {/* <p>{authorProf}</p> */}
                    </div>

                    {/* rate this book */}
                    <div className="flex flex-col space-y-5">
                        <p className="text-2xl font-bold">Rate This Book</p>
                        <p>Tell us what you think</p>
                        {showInput ? 
                            (   <div className=" flex flex-col space-y-5">
                                    <Rating className="flex"
                                        onChange={(ev) => setRate(ev.target.value)}/>
                                    <input 
                                        type="text" 
                                        className="border-2 rounded-xl px-4 py-1 w-1/2 p-3"
                                         />
                                </div>) 
                            : (
                                <div className={`flex justify-between`}>
                                    <Rating className="flex"
                                        onChange={(ev) => setRate(ev.target.value)}/>
                                    <button onClick={toggleInput} className={`bg-blue-500 px-5 py-3 rounded-2xl text-lg font-bold text-white`}>Write Your Comment</button>
                                </div>
                              )
                          }
                        
                    </div>
                </div>

                {/* rekomendasi buku lain */}
                <div className="flex flex-col space-y-10">
                    <p className=" text-3xl font-bold">Rekomendasi buku yang rilis terbaru</p>
                    <div className="flex">
                        {varBuku.map((item) => (
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
                <Footer/>
            </div>
        );
    }