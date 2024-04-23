import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdInfo,MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { Rating, Progress } from "@material-tailwind/react";

import { buku, commentData } from "../component/data";
import Barang from "../component/assets/barang.componet";
 

export default function Detail () {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [comment, setComment] = useState(commentData)
    const [userComment, setUserComment] = useState("")
    const [rate, setRate] = useState(0)
    const [showInput, setShowInput] = useState(false);
    const [showTeks, setShowTeks] = useState(false);

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
    

    const {id,author,authorProf,bahasa,berat,cover,img,deskripsi,halaman,hard,isbn,lebar,panjang,penerbit,soft,softDisc,terbit,title} = JSON.parse(localStorage.getItem("buku")) || {};
    
    const imgData = img;
    
    let openComm =false;
    const toggleOpenComm = () => {
      openComm = !openComm; // Toggle the value of openComm
      console.log(openComm)
    };



    const [currentIndex,setCurrentIndex] = useState(0);
    const slicing = imgData.slice(currentIndex,currentIndex+3)
    console.log (slicing);

    const handleNext = () => {
        let newIndex = (currentIndex + 1) % imgData.length;
        setCurrentIndex(newIndex);
    };
      
    const  handlePrev = () => {
        let newIndex = (currentIndex - 1) % imgData.length;
        setCurrentIndex(newIndex);
    };

    const backPage = () =>{
        window.history.back();
        localStorage.removeItem("buku");
    }

    const  addToCartHard = (bookIsbn) => {
        const user = localStorage.getItem("user");
        setIsLoggedIn(user !== null);
        if (isLoggedIn) {
            // membuat sebuah variabel untuk menampung cart sementara
            let tempCart = [];
        
            // cek eksistensi dari data cart pada localStorage
            if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"));
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
            }
        
            // cek data yang dipilih user ke keranjang belanja
            let existItem = tempCart.find((item) => item.isbn === bookIsbn);
        
            if (existItem) {
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini");
            } else {
                let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "");
                if (promptJumlah !== null && promptJumlah !== "") {
                // jika user memasukkan jumlah item yg dibeli
                
                // menambahkan properti "jumlahBeli" pada item yang dipilih 
                    const jumlahBeli = parseInt(promptJumlah);
                    const harga = hard;
                    
                    // masukkan item yg dipilih ke dalam cart
                    tempCart.push({id,isbn,author,title,cover,hard,harga,jumlahBeli});

                    
                    // simpan array tempCart ke localStorage
                    localStorage.setItem("cart", JSON.stringify(tempCart));
                    window.alert('berhasil memasukkan barang ke keranjang');
                }
            }
        } else {
            window.alert('harus login / sign in terlebih dahulu')
        }
      };

     const addToCartSoft = (bookIsbn) => {
        const user = localStorage.getItem("user");
        setIsLoggedIn(user !== null);
        if (isLoggedIn) {
            let tempCart = [];
    
        // cek eksistensi dari data cart pada localStorage
        if (localStorage.getItem("cart") !== null) {
          tempCart = JSON.parse(localStorage.getItem("cart"));
          // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }
    
        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find((item) => item.isbn === bookIsbn);
    
        if (existItem) {
          // jika item yang dipilih ada pada keranjang belanja
          window.alert("Anda telah memilih item ini");
        } else {
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "");
            if (promptJumlah !== null && promptJumlah !== "") {
              // jika user memasukkan jumlah item yg dibeli
            
              // menambahkan properti "jumlahBeli" pada item yang dipilih
                const jumlahBeli = parseInt(promptJumlah);
                const harga = softDisc;
                
                // masukkan item yg dipilih ke dalam cart
                tempCart.push({id,isbn,author,title,cover,soft,harga,jumlahBeli});

                
                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempCart));
                window.alert('berhasil memasukkan barang ke keranjang');
            }
          }
        } else {
            window.alert('harus login / sign in terlebih dahulu')
        }
      };
    
        const discPersent = (soft - softDisc) / soft * 100;

        let sumOfRatings = 0;
        let numberOfRatings = 0;

        // Assuming comments is an array containing rating information
       for (let index = 0; index < comment.length; index++) {
         sumOfRatings += comment[index].rating;
         numberOfRatings ++;
       }

        const avrRating = sumOfRatings / numberOfRatings;

        return(
            <div className="flex flex-col space-y-40 my-40 m-5 p-5 ">
                <div>
                    <button className=" w-max p-4 rounded-lg shadow-lg mb-5" onClick={backPage}>
                        <FaArrowLeft/>
                    </button>
                    <div className="flex space-x-10 mb-5">
                        <div  className=" w-5/12 flex flex-col space-y-4 rounded-2xl">
                            <img id="cover" src={cover} alt="cover" className=" rounded-3xl m-6"/>
        
                            <div className="flex justify-between items-center">
                                <button className="p-2 rounded-full shadow-lg" onClick={handlePrev}>
                                    <MdKeyboardArrowLeft/>
                                </button>
                                {imgData.slice(currentIndex,currentIndex + 3).map((item,index) => ( 
                                    <img id="alternate" src={item} alt={`alternate ${index}`} className=" w-1/6 rounded-lg " onClick={(ev) =>  cover= ev.target.src }/>                    
                                ))}
                                <button className="p-2 rounded-full shadow-lg" onClick={handleNext}>
                                    <MdKeyboardArrowRight/>
                                </button>
                            </div>
        
                        </div>
                        <div className="w-full space-y-10">

                            {/* header */}
                            <div>
                                <p className=" text-xl text-[#4B4B4B]">{author}</p>
                                <p className=" text-5xl font-bold">{title}</p>
                            </div>

                            <hr className="outline-[#4B4B4B]"/>

                            <p className=" text-3xl font-bold text-center">Pilih Format Buku yang Tersedia</p>
                            
                            {/* pilih tipe cover */}
                            <div className=" grid grid-cols-2 justify-items-center">

                                {/* hardcover price */}
                                <button id="hard" onClick={() => addToCartHard(isbn)} className=" relative flex flex-col space-y-1.5 shadow-2xl p-8 rounded-lg w-[400px]">
                                    <div className="absolute top-0 right-0 scale-150 m-5">
                                        <MdInfo />
                                    </div>
                                    <p className=" text-3xl font-semibold">Hard Cover</p>
                                    <p className=" text-4xl font-bold text-[#3A70E2]">Rp. {hard}</p>
                                </button>

                                {/* softcover price */}
                                <button id="soft"onClick={() => addToCartSoft(isbn)} className=" relative flex flex-col space-y-1.5 shadow-2xl p-8 rounded-lg w-[400px]" >
                                    <div className="absolute top-0 right-0 scale-150 m-5">
                                        <MdInfo />
                                    </div>
                                    <p className=" text-3xl font-semibold">Soft Cover</p>
                                    <p className=" text-4xl font-bold text-[#3A70E2]">Rp. {softDisc}</p>
                                    
                                    <div className="flex items-center space-x-5">
                                        <p className=" line-through text-2xl font-bold text-[#4B4B4B]">Rp. {soft}</p>
                                        <p className=" text-base font-bold p-2 rounded-md bg-red-300 text-red-500 w-max">{discPersent}%</p>
                                    </div>
                                </button>
                            </div>

                            {/* deskipsi */}
                            <p className=" text-3xl font-bold">Deskripsi Buku {title}</p>
                            {showTeks? (
                                <div>
                                    <p className=" text-justify">{deskripsi}</p>
                                    <button onClick={toggleTeks} className="text-blue-500 text-xl font-bold">Selengkapnya</button>
                                </div>
                            ) : (
                                <div>
                                    <p className=" text-justify line-clamp-4">{deskripsi}</p>
                                    <button onClick={ toggleTeks} className="text-blue-500 text-xl font-bold">Selengkapnya</button>
                                </div>
                            )}
                            
                            {/* detail buku */}
                            <div className=" flex flex-col space-y-9 bg-[#F1F8FF] p-9 rounded-2xl w-max mx-auto">
                                <p className=" text-3xl font-bold">Detail Buku</p>

                                <div className=" grid grid-cols-3 gap-10">
                                    <div>
                                        <p className=" text-2xl font-bold">Jumlah Halaman</p>
                                        <p>{halaman}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Bahasa</p>
                                        <p>{bahasa}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Berat</p>
                                        <p>{berat}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Tanggal Terbit</p>
                                        <p>{terbit}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Penerbit</p>
                                        <p>{penerbit}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Lebar</p>
                                        <p>{lebar}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">ISBN</p>
                                        <p>{isbn}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Author</p>
                                        <p>{author}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Panjang</p>
                                        <p>{panjang}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rating and rivew */}
                <div className="  flex flex-col space-y-5">
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
                        <p>{authorProf}</p>
                    </div>

                    {/* rate this book */}
                    <div className="flex flex-col space-y-5">
                        <p className="text-2xl font-bold">Rate This Book</p>
                        <p>Tell us what you think</p>
                        {showInput ? 
                            (   <div>
                                    <Rating className="flex"
                                        onChange={(ev) => setRate(ev.target.value)}/>
                                    <input 
                                        type="text" 
                                        className="border-2 rounded-xl px-4 py-1 w-full p-3"
                                        onChange={(ev) => setComment( ev.target.value)}
                                        onKeyUp={(ev) => sendComment(ev)} />
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
                      {buku.map((item,index) => (
                          <Barang 
                            stok ={item.stok}
                            buku ={item}
                            cover = {item.cover}
                            author = {item.author}
                            title = {item.title}
                            softDisc = {item.softDisc}
                            soft = {item.soft}
                          />
                      ))}
                    </div>
                </div>
    
            </div>
        );
    }