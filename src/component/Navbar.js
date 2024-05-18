import React, {useState,useEffect} from "react";
import Ling from "./Nav/Ling";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState();

  const user = localStorage.getItem("user");

  const logout = () =>{

    window.location.href = '/login'
    localStorage.clear();
  }

  const searchFilter =(event) => {
    if (event.keyCode == 13) {
      let url = 'http://localhost:5000/buku/find';

      const keyword = search;
      alert(keyword)

      axios.post(url,{keyword})
      .then(response => {
        alert(JSON.stringify(response.data.data))
        localStorage.setItem("bukuSearch", JSON.stringify(response.data.data))
        window.location.href = '/Search'
      })
      .catch((error) => {
        console.error(error)
        alert(error);
      })
    }
  }

  useEffect(() => {
    
    setIsLoggedIn(user !== null);
  }, []); // Empty dependency array ensures useEffect runs only once
  
  return (
    <div>
      <div className=" bg-white py-6 px-32 w-screen top-0 fixed z-[90] shadow-lg">
        <div className=" flex justify-between items-center">
          <div className="logo font-bold text-2xl text-sky-400">
            <h1>
              <Link to="/">
                BUKU <span className=" text-orange-300">KU</span>
              </Link>
            </h1>
          </div>

          <div className="relative block w-3/5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoIosSearch/>
            </span>
            <input
              type="text"
              className="bg-slate-100 w-full rounded-full py-3 pl-9"
              onChange={(ev) => setSearch(ev.target.value)}
              onKeyUp={(e) => searchFilter(e)}
            />
          </div>

          <div className=" flex justify-around font-semibold w-40">
            <Link className=" px-2  hover:text-sky-400" to="/Kategori">
              kategori
            </Link>
            <Link className=" px-2 scale-150 hover:text-sky-400" to="/Keranjang">
              <FiShoppingCart/>
            </Link>
          </div>
          <div className={`button ${isLoggedIn ? 'hidden' : ''}`}>
            <Link to="/Login">
            <button className="px-4 py-2 border border-sky-300 rounded-lg text-sky-300 font-semibold hover:bg-sky-300 hover:text-white">Login</button>
            </Link>
            <span className=" text-2xl"> | </span>
            <Link to="/Regis">
            <button className="px-4 py-2 bg-sky-300 rounded-lg font-semibold text-white hover:bg-sky-500 hover:text-white">Daftar</button>
            </Link>
          </div>
          <div className={`button ${isLoggedIn ? '' : 'hidden'}`}>
            <button className="px-4 py-2 border border-sky-300 rounded-lg text-sky-300 font-semibold hover:bg-sky-300 hover:text-white" onClick={logout}>Logout</button>
            <span className=" text-2xl"> | </span>
            <Link to= "/Account">
            <button className="px-4 py-2 border border-sky-300 rounded-lg text-sky-300 font-semibold hover:bg-sky-300 hover:text-white"> Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
