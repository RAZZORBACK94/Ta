import React, { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { ImCancelCircle } from "react-icons/im";


import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import axios from "axios";



export default function Account () {

    const data = JSON.parse(localStorage.getItem('user'))

    const[user,setUser] = useState(data.data)

    const[nama,setNama] = useState()
    const[alamat,setAlamat] = useState()
    const[telepon,setTelepon] = useState()
    const[jK,setJK] = useState()
    const[username,setUsername] = useState()
    const[password,setPassword] = useState()
    

    const[editOpen, setEditOpen] = useState(false)

    


    const backPage = () =>{
        window.history.back();
    }

    const toggleEdit = () => {
        setEditOpen((prevState) => !prevState)
    }

    const save = () => {
        const userdata = JSON.parse(localStorage.getItem('user'))
        const userId = userdata.data.id

        const data = {
            nama_user : nama,
            jk_user: jK,
            alamat_user: alamat, 
            telepon_user: telepon,
            username_user: username,
            role_user: 'pengguna',
            password_user: password
        }

       const url = `http://localhost:5000/user/update/${userId}`
       axios.put(url,data,{headers:{Authorization: `Bearer ${userdata.tkn}`}})
       .then((response) => {
        alert(response.data.message)
        setUser(response.data.data)
        toggleEdit()
       })
       .catch((error) => {
        console.log(error);
       })
    }

    useEffect(() => {
        const data = () => {
           const userdata = JSON.parse(localStorage.getItem('user'))
           const userId = userdata.data.id
            
           const url = `http://localhost:5000/user/findId/${userId}`
           axios.get(url)
           .then((response) => {
            setUser(response.data.data)

            setNama(user.nama_user)
            setAlamat(user.alamat_user)
            setJK(user.jk_user)
            setTelepon(user.telepon_user)                   
            setUsername(user.username_user)
           })
           .catch((error) => {
            console.log(error);
           })
        }
       data()
    },[])

    return(
        <div>
            
            <Navbar/>
            <div className="flex flex-col space-y-10 my-40 m-5 p-5 ">
                <button className=" w-max p-4 rounded-lg shadow-lg mb-5" onClick={backPage}>
                    <FaArrowLeft/>
                </button>
                <div className="flex justify-between ">
                    <div 
                        className="w-[600px] h-[600px] rounded-full bg-no-repeat bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url("https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain")` 
                          }} />
                    <div className=" w-1/2 flex flex-col space-y-5 my-auto">
                        <div className=" flex flex-col space-y-3">
                            <p className="font-bold text-4xl">Nama User</p>
                            <p className="text-2xl">{user.nama_user}</p>
                            <hr className="w-full font-bold text-black"/>
                        </div>
                        <div className=" flex flex-col space-y-3">
                            <p className="font-bold text-4xl">Jenis Kelamin User</p>
                            <p className="text-2xl">{user.jk_user}</p>
                            <hr className="w-full font-bold text-black"/>
                        </div>
                        <div className=" flex flex-col space-y-3">
                            <p className="font-bold text-4xl">Telepon User</p>
                            <p className="text-2xl">{user.telepon_user}</p>
                            <hr className="w-full font-bold text-black"/>
                        </div>
                        <div className=" flex flex-col space-y-3">
                            <p className="font-bold text-4xl">Alamat User</p>
                            <p className="text-2xl">{user.alamat_user}</p>
                            <hr className="w-full font-bold text-black"/>
                        </div>
                        <div className=" flex flex-col space-y-3">
                            <p className="font-bold text-4xl">Username User</p>
                            <p className="text-2xl">{user.username_user}</p>
                            <hr className="w-full font-bold text-black"/>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-end w-full">
                    <button onClick={() => toggleEdit()} className="bg-slate-300 py-3 px-5 rounded-lg font-bold text-2xl">Edit</button>
                </div>
            </div>
            
            <Footer/>
            <div className={`${editOpen? "" : "hidden"} fixed flex justify-center items-center top-0 z-[99] bg-black bg-opacity-70 w-screen h-full`}>
                            <div className="relative bg-white p-5 flex flex-col space-y-5 rounded-md">
                                <button 
                                    onClick={() => toggleEdit()}
                                    className="absolute top-4 right-4 scale-150 bg-red-500 hover:bg-red-700 p-1 rounded-full hover:text-slate-200">
                                    <ImCancelCircle/>
                                </button>
                                <p className="text-2xl font-bold">Edit User</p>
            
                                <div className="grid grid-cols-2 gap-5 ">
                                    <div>
                                        <p className='text-xl'>
                                        Nama user
                                        </p>
                                        <input 
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                        type='text' 
                                        className='w-full p-2 bg-transparent rounded-lg border border-blue-400'/>
                                    </div>
                                    <div>
                                        <p className='text-xl'>
                                        Alamat
                                        </p>
                                        <input 
                                        value={alamat}
                                        onChange={(e) => setAlamat(e.target.value)}
                                        type='text' 
                                        className='w-full p-2 bg-transparent rounded-lg border border-blue-400'/>
                                    </div>
                                    <div>
                                        <p className='text-xl'>
                                        Telepon
                                        </p>
                                        <input 
                                        value={telepon}
                                        onChange={(e) => setTelepon(e.target.value)}
                                        type='number' 
                                        className='w-full p-2 bg-transparent rounded-lg border border-blue-400'/>
                                    </div>
                                    <div>
                                        <p className='text-xl'>
                                        Jenis Kelamin
                                        </p>
                                        <select
                                        value={jK}
                                        onChange={(e) => setJK(e.target.value)}
                                        type='text' 
                                        className='w-full p-2 bg-transparent rounded-lg border border-blue-400'>
                                            <option value='Laki'>Laki laki</option>
                                            <option value='Perempuan'>Perempuan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className='text-xl'>
                                        Username
                                        </p>
                                        <input 
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type='text' 
                                        className='w-full p-2 bg-transparent rounded-lg border border-blue-400'/>
                                    </div>
                                    <div>
                                        <p className='text-xl'>
                                        Password
                                        </p>
                                        <input 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type='password' 
                                        className='w-full p-2 bg-transparent rounded-lg border border-blue-400'/>
                                    </div>
                                </div>
            
                                <button
                                onClick={() => save()}
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:text-white text-3xl font-bold rounded-lg">
                                    save
                                </button>
                            </div>
                        </div>
        </div>
    )
}