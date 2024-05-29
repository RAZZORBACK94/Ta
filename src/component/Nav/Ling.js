import React from "react";
import {Route, Routes} from "react-router-dom";
import NavbarWrapper from "../assets/navbarWrapper";

import Beranda from "./Beranda";
import Kategori from "../../pages/kategori";
import Keranjang from "./Keranjang";
import Contact from "./contact";
import Rekomendasi from "../../pages/Rekomendasi";
import Filter from "./filter";

import Login from "../../pages/login";
import Regis from "../../pages/regis";
import Detail from "../../pages/detail";
import Search from "../../pages/search";
import Kirim from "../../pages/kirim";
import Account from "../../pages/account";
import SuccesPay from "../../pages/succesPay";

import ProtectedRoutes from "../../pages/admin/protected";
import Content from "../../pages/admin/content";
import User from "../../pages/admin/user";
import Buku from "../../pages/admin/buku";
import Carts from "../../pages/admin/cart";


const WrappedBeranda = NavbarWrapper(Beranda);
const WrappedKategori = NavbarWrapper(Kategori);
const WrappedKeranjang = NavbarWrapper(Keranjang);

class Ling extends React.Component {
  render() {
    return (
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/user-adm" element={<Content> <User /></Content>} />
              <Route exact path="/item-adm" element={<Content><Buku /></Content>} />
              <Route exact path="/cart-adm" element={<Content><Carts /></Content>} />
            </Route>
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
            <Route path="/Rekomendasi" element={<Rekomendasi />} />
            <Route path="/Filter" element={<Filter />} />

          </Routes>
    );
  }
}

export default Ling;
