import React from "react";
import { Routes, Route } from "react-router-dom";

import User from './user'
import Item from "./buku";
import Cart from "./cart";
import Login from "./login";
import ProtectedRoutes from "./protected";
import Navigation from "./Navigation";
import Sidebar from "./sidebar";

const Link = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navigation />
        <main className="flex-1 p-4">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/user-adm" element={<User />} />
              <Route exact path="/item-adm" element={<Item />} />
              <Route exact path="/cart-adm" element={<Cart />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Link;
