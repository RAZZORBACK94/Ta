import { React } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Cobain from "./pages/cobain";
import Login from "./pages/login";
import Detail from "./pages/detail";
import Kirim from "./pages/kirim";
import Bayar from "./pages/bayar";
import Keranjang from "./component/Nav/Keranjang";

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Footer/> */}
      <Bayar />
      
      
    </div>
  );
}

export default App;
