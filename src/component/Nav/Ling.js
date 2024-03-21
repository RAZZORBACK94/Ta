import React from "react";
import { Route, Routes } from "react-router-dom";

import Beranda from "./Beranda";
import Kategori from "./Kategori";
import Keranjang from "./Keranjang";
import Contact from "./contact";
import Login from "../../pages/login";
import Regis from "../../pages/regis";

class Ling extends React.Component {
  render() {
    return (
      <Routes>
        <Route exacth path="/" element={<Beranda />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/Keranjang" element={<Keranjang />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Regis" element={<Regis />} />
      </Routes>
    );
  }
}

export default Ling;
