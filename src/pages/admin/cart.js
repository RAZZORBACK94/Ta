import React, { Component } from "react";
import axios from "axios";

class Carts extends Component {
  constructor() {
    super();
    this.state = {
      carts: null,
      cartsDetails: [], // Untuk menyimpan detail keranjang
    };
  }

  componentDidMount() {
    this.getKeranjang();
  }

  getKeranjang = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      console.log("Token not found");
      return;
    }

    axios
      .get(`http://localhost:5000/keranjang/getKeranjangAll`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.succes) {
          console.log(response.data)
          this.setState({
            carts: response.data.keranjang,
            cartsDetails: response.data.data,
          });
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { carts, cartsDetails } = this.state;

    return (
      <div className="m-3 card text-sm">
        <div className="card-header bg-info text-white">Data Keranjang</div>
        <div className="card-body">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Administrasi Buku
            </h2>
            <p className="text-sm text-gray-500 mb-2">Tabel daftar data Buku</p>
          </div>
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border px-4 py-2 text-left">ID Keranjang</th>
                <th className="border px-4 py-2 text-left">ID User</th>
                <th className="border px-4 py-2 text-left">Total Transaksi</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {carts ? (
                cartsDetails.length > 0 ? (
                  carts.map((detail, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{detail.id}</td>
                      <td className="border px-4 py-2">{detail.id_user}</td>
                      <td className="border px-4 py-2">
                        {detail.total_transaksi}
                      </td>
                      <td className="border px-4 py-2">{detail.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="border px-4 py-2 text-center">
                      No detail available
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="7" className="border px-4 py-2 text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Carts;
