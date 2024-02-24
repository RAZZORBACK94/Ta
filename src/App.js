import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/assets/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
