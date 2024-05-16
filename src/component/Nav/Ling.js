import React from "react";
import {Route, Routes} from "react-router-dom";
import NavbarWrapper from "../assets/navbarWrapper";

import Beranda from "./Beranda";
import Kategori from "./Kategori";
import Keranjang from "./Keranjang";
import Contact from "./contact";

import Login from "../../pages/login";
import Regis from "../../pages/regis";
import Detail from "../../pages/detail";
import Search from "../../pages/search";
import Kirim from "../../pages/kirim";
import Account from "../../pages/account";
import SuccesPay from "../../pages/succesPay";


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
            <Route path="/Account" element={<Account />} />
            <Route path="/Regis" element={<Regis />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Kirim" element={<Kirim />} />
            <Route path="/succesPay" element={<SuccesPay />} />

          </Routes>
    );
  }
}

export default Ling;
