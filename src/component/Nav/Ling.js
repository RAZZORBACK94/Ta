import React from "react";
import {Route, Routes } from "react-router-dom";
import NavbarWrapper from "../assets/navbarWrapper";

import Beranda from "./Beranda";
import Kategori from "./Kategori";
import Keranjang from "./Keranjang";
import Contact from "./contact";

import Login from "../../pages/login";
import Regis from "../../pages/regis";
import Detail from "../../pages/detail";
import Bayar from "../../pages/bayar";
import Kirim from "../../pages/kirim";


const WrappedBeranda = NavbarWrapper(Beranda);
const WrappedKategori = NavbarWrapper(Kategori);
const WrappedKeranjang = NavbarWrapper(Keranjang);

class Ling extends React.Component {
  render() {
    return (
          <Routes>
            <Route exacth path="/" element={<Beranda />} exact />
            <Route path="/Kategori" element={<Kategori />} />
            <Route path="/Keranjang" element={<Keranjang />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Regis" element={<Regis />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Bayar" element={<Bayar />} />
            <Route path="/Kirim" element={<Kirim />} />
          </Routes>
    );
  }
}

export default Ling;
