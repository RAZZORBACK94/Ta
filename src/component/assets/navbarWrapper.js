import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const NavbarWrapper = (WrappedComponent) => (props) => {
  return (
    <div>
      <Navbar />
      <WrappedComponent {...props} />
      <Footer />
    </div>
  );
};

export default NavbarWrapper;
