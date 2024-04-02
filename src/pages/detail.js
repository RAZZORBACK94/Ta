import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdInfo } from "react-icons/md";

import { Rating, Progress } from "@material-tailwind/react";

import Barang from "../component/assets/barang.componet";
 

class Detail extends React.Component{

    constructor () {
        super();
        this.state = {
          selected: {
            author: "test",
            authorProf: "Gege Akutami, the pen name of a talented and mysterious Japanese manga artist, is best known for their creation, Jujutsu Kaisen. While shrouded in secrecy, their work speaks volumes, captivating readers with its unique blend of story and art.",
            title: "Rembulan",
            cover: "https://i.pinimg.com/736x/a0/9b/2e/a09b2eca90d800a22c62d50fbeb8ea48.jpg",
            hard: 500,
            soft: 100,
            softDisc: 50,
          },
          
          buku: {
            deskripsi: "Kemunculan Toji Zenin yang tak terduga, menambah kekacauan “Insiden Shibuya”! Di sisi lain, Nanami yang sedang menuju ke tempat Geto di peron bawah tanah, sangat marah atas luka yang diderita para asisten pengawas. Shaman tingkat 1 yang memasuki medan pertempuran pun semakin bertambah, sementara Itadori bertarung sengit melawan si sulung kusozu, Choso!!  Di antara jenis buku lainnya, komik memang disukai oleh semua kalangan mulai dari anak kecil hingga orang dewasa. Alasan komik lebih disukai oleh banyak orang karena disajikan dengan penuh dengan gambar dan cerita yang mengasyikan sehingga mampu menghilangkan rasa bosan di kala waktu senggang. Komik seringkali dijadikan sebagai koleksi dan diburu oleh penggemarnya karena serinya yang cukup terkenal dan kepopulerannya terus berlanjut sampai saat ini. Dalam memilih jenis komik, ada baiknya perhatikan terlebih dahulu ringkasan cerita komik di sampul bagian belakang sehingga sesuai dengan preferensi pribadi pembaca. Jujutsu Kaisen adalah serial manga Jepang yang ditulis dan diilustrasikan oleh Gege Akutami. Ini telah diserialkan di majalah manga shōnen Shueisha Weekly Shonen Jump sejak Maret 2018, dengan bab-babnya dikumpulkan dan diterbitkan dalam 20 volume tankōbon per Agustus 2022. Ceritanya mengikuti siswa sekolah menengah Yuji Itadori saat ia bergabung dengan organisasi rahasia Penyihir Jujutsu untuk menghilangkan Kutukan yang kuat bernama Ryomen Sukuna, di mana Yuji menjadi inangnya. Jujutsu Kaisen adalah sekuel dari Sekolah Teknik Kutukan Metropolitan Tokyo Akutami, yang diserialkan di Jump GIGA Shueisha dari April hingga Juli 2017, kemudian dikumpulkan dalam volume tankōbon, dengan judul retroaktif sebagai Jujutsu Kaisen 0, pada Desember 2018.",
            img: [
                "https://i.pinimg.com/736x/a0/9b/2e/a09b2eca90d800a22c62d50fbeb8ea48.jpg",
                "https://i.pinimg.com/236x/37/3e/76/373e7691ecf16e725e49890edbca1b57.jpg",
                "https://i.pinimg.com/236x/89/12/0e/89120e7751ab997b40f4729ef7b837ab.jpg",
                "https://i.pinimg.com/236x/ae/55/34/ae553467fb105bdbeb3bed3cf051933c.jpg"
                ],
            halaman: "50",
            terbit: "19 Jnauari 2023",
            isbn:"ggggugkojh",
            bahasa: "indonesia",
            penerbit: "PT Mactohicto",
            berat: "11",
            lebar: "12",
            panjang: "13",
          },

          comment: [
            {
                name: "Hudan Faishal",
                profile: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
                date: "1 Januari 1111",
                rating: 5,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci vel varius. Nulla egestas ex augue. Cras vel nulla blandit, sodales ex non, placerat est. Proin malesuada purus ut diam placerat fringilla. Ut tempus risus nec diam eleifend, nec laoreet quam rutrum. In suscipit nibh id leo rutrum dignissim. Donec mollis sit amet lectus et auctor. Aenean hendrerit, ante at condimentum ultrices, odio lorem consequat magna, a tincidunt metus dui et lacus. Ut non mi nulla. Suspendisse sit amet lectus eget justo posuere tristique. Pellentesque sed vestibulum lorem.",
            },
            {
                name: "Fajar Baru",
                profile: "https://media.istockphoto.com/id/1205742669/photo/young-indian-man-wearing-denim-shirt-standing-over-isolated-yellow-background-cheerful-with-a.jpg?s=612x612&w=0&k=20&c=OnnM5rjkR_xl7ohnUx2ZlJXfVl9-8hcOdSimZQW5DBM=",
                date: "2 Februari 2222",
                rating: 4,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci vel varius. Nulla egestas ex augue. Cras vel nulla blandit, sodales ex non, placerat est. Proin malesuada purus ut diam placerat fringilla. Ut tempus risus nec diam eleifend, nec laoreet quam rutrum. In suscipit nibh id leo rutrum dignissim. Donec mollis sit amet lectus et auctor. Aenean hendrerit, ante at condimentum ultrices, odio lorem consequat magna, a tincidunt metus dui et lacus. Ut non mi nulla. Suspendisse sit amet lectus eget justo posuere tristique. Pellentesque sed vestibulum lorem.",
            },
            {
                name: "Hudan Faishal",
                profile: "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg",
                date: "3 Maret 3333",
                rating: 3,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci vel varius. Nulla egestas ex augue. Cras vel nulla blandit, sodales ex non, placerat est. Proin malesuada purus ut diam placerat fringilla. Ut tempus risus nec diam eleifend, nec laoreet quam rutrum. In suscipit nibh id leo rutrum dignissim. Donec mollis sit amet lectus et auctor. Aenean hendrerit, ante at condimentum ultrices, odio lorem consequat magna, a tincidunt metus dui et lacus. Ut non mi nulla. Suspendisse sit amet lectus eget justo posuere tristique. Pellentesque sed vestibulum lorem.",
            },
          ],

          user: {
            rate: 0,
            comment: "",
          },

          currentIndex : 0,
          setCurrentIndex: 0
        };  
    }
    handleNext = () => {
        this.setState((prevState) => ({
          currentIndex: (prevState.currentIndex + 1) % this.state.buku.img.length,
        }));
      };
      
      handlePrev = () => {
        this.setState((prevState) => ({
          currentIndex: (prevState.currentIndex - 1 + prevState.img.length) % this.state.buku.img.length,
        }));
      };

      addToCartHard = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = [];
    
        // cek eksistensi dari data cart pada localStorage
        if (localStorage.getItem("cart") !== null) {
          tempCart = JSON.parse(localStorage.getItem("cart"));
          // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }
    
        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find((item) => item.isbn === selectedItem.isbn);
    
        if (existItem) {
          // jika item yang dipilih ada pada keranjang belanja
          window.alert("Anda telah memilih item ini");
        } else {
            selectedItem.jumlahBeli = 1;

            delete selectedItem.soft;
    
            // masukkan item yg dipilih ke dalam cart
            tempCart.push(selectedItem);

    
            // simpan array tempCart ke localStorage
            localStorage.setItem("cart", JSON.stringify(tempCart));
            console.log(tempCart);
          }
      };

    addToCartSoft = (selectedItem) => {
        // Get the cart from local storage
        let cart = []
        cart = JSON.parse(localStorage.getItem("cart"));
      
        // Check if the selected item is already in the cart
        let existingItemIndex = null;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].isbn === selectedItem.isbn) {
            existingItemIndex = i;
            break;
            }
        }
        if (existingItemIndex !== null) {
          // jika item yang dipilih ada pada keranjang belanja
          window.alert("Anda telah memilih item ini");
        } else {
          // Add the selected item to the cart
          selectedItem.jumlahBeli = 1;
          delete selectedItem.hard;
          cart.push(selectedItem);
        }
      
        // Save the updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
      
        // Display a message to the user
        window.alert("Item berhasil ditambahkan ke keranjang!");
      };
    
      

    render (){
        const discPersent = (this.state.selected.soft - this.state.selected.softDisc) / this.state.selected.soft * 100;

        let sumOfRatings = 0;
        let numberOfRatings = 0;

        // Assuming comments is an array containing rating information
        for (const comment of this.state.comment) {
            sumOfRatings += comment.rating;
            numberOfRatings++;
        }

        const avrRating = sumOfRatings / numberOfRatings;

        return(
            <div className="flex flex-col space-y-40 my-40 m-5 p-5 ">
                <div>
                    <button className=" w-max p-4 rounded-lg shadow-lg mb-5">
                        <FaArrowLeft/>
                    </button>
                    <div className="flex space-x-10 mb-5">
                        <div  className=" w-5/12 flex flex-col space-y-4 rounded-2xl">
                            <img id="cover" src={this.state.selected.cover} alt="cover" className=" rounded-3xl m-6"/>
        
                            <div className="flex justify-between items-center">
                                <button className="p-2 rounded-full shadow-lg" onClick={this.handlePrev}>
                                    <MdKeyboardArrowLeft/>
                                </button>
                                {this.state.buku.img.slice(this.state.currentIndex, this.state.currentIndex + 3).map((item) => ( 
                                    <img id="alternate" src={item} alt="alternate" className=" w-1/6 rounded-lg " onClick={(ev) => this.setState({ cover: ev.target.src })}/>                       
                                ))}
                                <button className="p-2 rounded-full shadow-lg" onClick={this.handleNext}>
                                    <MdKeyboardArrowRight/>
                                </button>
                            </div>
        
                        </div>
                        <div className="w-full space-y-10">

                            {/* header */}
                            <div>
                                <p className=" text-xl text-[#4B4B4B]">{this.state.selected.author}</p>
                                <p className=" text-5xl font-bold">{this.state.selected.title}</p>
                            </div>

                            <hr className="outline-[#4B4B4B]"/>

                            <p className=" text-3xl font-bold text-center">Pilih Format Buku yang Tersedia</p>
                            
                            {/* pilih tipe cover */}
                            <div className=" grid grid-cols-2 justify-items-center">

                                {/* hardcover price */}
                                <button id="hard" className=" relative flex flex-col space-y-1.5 shadow-2xl p-8 rounded-lg w-[400px]" onClick={this.addToCartHard}>
                                    <div className="absolute top-0 right-0 scale-150 m-5">
                                        <MdInfo />
                                    </div>
                                    <p className=" text-3xl font-semibold">Hard Cover</p>
                                    <p className=" text-4xl font-bold text-[#3A70E2]">Rp. {this.state.selected.hard}</p>
                                </button>

                                {/* softcover price */}
                                <button id="soft" className=" relative flex flex-col space-y-1.5 shadow-2xl p-8 rounded-lg w-[400px]" onClick={this.addToCartSoft}>
                                    <div className="absolute top-0 right-0 scale-150 m-5">
                                        <MdInfo />
                                    </div>
                                    <p className=" text-3xl font-semibold">Soft Cover</p>
                                    <p className=" text-4xl font-bold text-[#3A70E2]">Rp. {this.state.selected.softDisc}</p>
                                    
                                    <div className="flex items-center space-x-5">
                                        <p className=" line-through text-2xl font-bold text-[#4B4B4B]">Rp. {this.state.selected.soft}</p>
                                        <p className=" text-base font-bold p-2 rounded-md bg-red-300 text-red-500 w-max">{discPersent}%</p>
                                    </div>
                                </button>
                            </div>

                            {/* deskipsi */}
                            <p className=" text-3xl font-bold">Deskripsi Buku {this.state.selected.title}</p>
                            <div>
                                <p className=" text-justify line-clamp-4">{this.state.buku.deskripsi}</p>
                                <p className="text-blue-500 text-xl">Selengkapnya</p>
                            </div>
                            
                            {/* detail buku */}
                            <div className=" flex flex-col space-y-9 bg-[#F1F8FF] p-9 rounded-2xl w-max mx-auto">
                                <p className=" text-3xl font-bold">Detail Buku</p>

                                <div className=" grid grid-cols-3 gap-10">
                                    <div>
                                        <p className=" text-2xl font-bold">Jumlah Halaman</p>
                                        <p>{this.state.buku.halaman}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Bahasa</p>
                                        <p>{this.state.buku.bahasa}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Berat</p>
                                        <p>{this.state.buku.berat}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Tanggal Terbit</p>
                                        <p>{this.state.buku.terbit}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Penerbit</p>
                                        <p>{this.state.buku.penerbit}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Lebar</p>
                                        <p>{this.state.buku.lebar}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">ISBN</p>
                                        <p>{this.state.buku.isbn}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Author</p>
                                        <p>{this.state.selected.author}</p>
                                    </div>
                                    <div>
                                        <p className=" text-2xl font-bold">Panjang</p>
                                        <p>{this.state.buku.panjang}</p>
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
                            <p className=" text-4xl font-bold">{this.state.comment.length}</p>
                            <p className="text-xl text-[#4B4B4B]">Grown in reviews on this your</p>
                        </div>
                        {/* average rating */}
                        <div className=" flex flex-col space-y-5">
                            <p className=" text-lg font-semibold">Average Rating</p>
                            <div className="flex space-x-5">
                                <p className=" text-4xl font-bold">{avrRating}</p>
                                <Rating className="flex" value={avrRating} color="yellow" readonly/>
                            </div>
                            <p className="text-xl text-[#4B4B4B]">Average rating on this your</p>
                        </div>
                        {/* type rating */}
                        <div className="flex flex-col space-y-5">
                            <div className="flex bg-slate-300">
                                <p>5</p>
                                <Progress value={25} color="light-blue"/>
                            </div>
                        </div>
                    </div>

                    <hr className="outline-[#4B4B4B] my-10"/>

                    {this.state.comment.map((item) =>(
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
                        <p>{this.state.authorProf}</p>
                    </div>

                    {/* rate this book */}
                    <div className="flex flex-col space-y-5">
                        <p className="text-2xl font-bold">Rate This Book</p>
                        <p>Tell us what you think</p>
                        <div className="flex justify-between">
                            <Rating className="flex" unratedColor="amber" ratedColor="amber"/>
                            <button className="bg-blue-500 px-5 py-3 rounded-2xl text-lg font-bold text-white">Write Your Comment</button>
                        </div>
                    </div>
                </div>

                {/* rekomendasi buku lain */}
                <div className="flex flex-col space-y-10">
                    <p className=" text-3xl font-bold">Rekomendasi buku yang rilis terbaru</p>
                    <Barang/>
                </div>
    
            </div>
        );
    }
}

export default Detail;