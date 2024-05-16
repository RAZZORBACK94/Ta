import React, { useEffect } from "react"
import { FaArrowLeft } from "react-icons/fa"


import Navbar from "../component/Navbar"
import Footer from "../component/Footer"



export default function Account () {

    const data = JSON.parse(localStorage.getItem('user'))
    const user = data.data

    const backPage = () =>{
        window.history.back();
        localStorage.removeItem("buku");
    }

    return(
        <div>
            <Navbar/>
            <div className="flex flex-col space-y-10 my-40 m-5 p-5 bg-slate-100 ">
                <button className=" w-max p-4 rounded-lg shadow-lg mb-5" onClick={backPage}>
                    <FaArrowLeft/>
                </button>
                <div className="flex justify-between bg-slate-200">
                    <div 
                        className="w-[600px] h-[600px] rounded-full bg-slate-300 bg-no-repeat bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url("https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain")` 
                          }} />
                    <div className="bg-slate-300 w-1/2">
                        <div className=" flex flex-col space-y-3">
                            <p className="font-bold text-4xl">Nama User</p>
                            <p className="text-2xl">{user.nama_user}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}