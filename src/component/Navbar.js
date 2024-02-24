import React from "react";
import Ling from "./Nav/Ling";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className=" bg-white py-6 w-full top-0 fixed z-[100] shadow-lg">
          <div className=" flex justify-evenly items-center">
            <div className="logo font-bold text-2xl text-sky-400">
              <h1>
                <Link to="/">
                  BUKU <span className=" text-orange-300">KU</span>
                </Link>
              </h1>
            </div>
            <div className=" font-semibold">
              <Link className="px-2  hover:text-sky-400" to="/">
                Beranda
              </Link>
              <Link className=" px-2  hover:text-sky-400" to="/Kategori">
                kategori
              </Link>
              <Link className=" px-2  hover:text-sky-400" to="/Keranjang">
                Keranjang
              </Link>
              <Link className=" px-2  hover:text-sky-400" to="/Contact">
                Contact
              </Link>
            </div>
            <div className="button">
              <button className="px-4 py-2 border border-sky-300 rounded-lg text-sky-300 font-semibold hover:bg-sky-300 hover:text-white">Login</button>
              <span className=" text-2xl"> | </span>
              <button className="px-4 py-2 bg-sky-300 rounded-lg font-semibold text-white hover:bg-sky-500 hover:text-white">Daftar</button>
            </div>
          </div>
        </div>
        <p>
          <Ling />
        </p>
      </div>
    );
  }
}

export default Navbar;
