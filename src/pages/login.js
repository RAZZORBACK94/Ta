import React from "react";
import loginImg from "../component/assets/login.jpeg";
import google from "../component/assets/google.png";
import axios from "axios";
import { Link, json } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { user } from "../component/data";
import md5 from "md5";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username_user: "",
      password_user: "",
      loggedUser: [],
    };
  }

  bind = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  backPage = () => {
    window.location.href = "/";
  };

  login = async () => {
    let url = "http://localhost:5000/auth/login";

    const form = {
      username_user: this.state.username_user,
      password_user: this.state.password_user,
    };
    console.log(form);
    const response = await axios.post(url, form);
    try {
      if (response.data.success == true) {
        alert(response.data.message);
        // alert('success');
        const data = JSON.stringify(response.data);

        localStorage.setItem("token", JSON.stringify(response.data.tkn));
        localStorage.setItem("user", data);
        if (response.data.data.role_user == "pengguna") {
          window.location.href = "/";
        } else if (response.data.data.role_user == "admin") {
          window.location.href = "/user-adm";
        }
      } else {
        alert("gagal");
        window.location.href = "/gagal";
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="p-5 flex-col">
        <button
          className=" w-max p-4 rounded-lg shadow-lg mb-5"
          onClick={this.backPage}
        >
          <FaArrowLeft />
        </button>
        <div className="flex justify-center">
          <img src={loginImg} alt="loginPic" className="rounded-lg w-1/2" />
          {/*bagian kanan*/}
          <div className="w-1/2 mx-5 ">
            <div className="px-10 text-center">
              {/* nama website */}
              <p className=" mb-10 text-5xl font-bold">
                BUKU <span className=" text-orange-300">KU</span>
              </p>
              {/* header */}
              <p className="font-bold text-4xl">Login Page</p>
              <form>
                {/* input email */}
                <div className="my-5 text-left">
                  <p className="mb-3 font-bold">Nama User</p>
                  <input
                    type="text"
                    value={this.state.username_user}
                    onChange={(ev) =>
                      this.setState({ username_user: ev.target.value })
                    }
                    className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg"
                  />
                </div>
                {/* input password */}
                <div className="my-5 text-left">
                  <p className="mb-3 font-bold">Password</p>
                  <input
                    type="password"
                    value={this.state.password_user}
                    onChange={(ev) =>
                      this.setState({ password_user: ev.target.value })
                    }
                    className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg"
                  />
                </div>
              </form>
              <div className="flex justify-between mb-5">
                {/* remember me */}
                <div className="flex">
                  <input type="checkbox" className="mr-1" />
                  <p className="font-bold">Remember Me</p>
                </div>
                {/*forget pass*/}
              </div>
              {/*sign in*/}
              <button
                onClick={this.login}
                className="bg-[#3B82F6] w-full p-3 rounded-lg"
              >
                <p className="text-white ">Sign In</p>
              </button>
              {/*sign google*/}
            </div>
            <div className="flex justify-center">
              <p className="mt-5 text-center">Don't Have Account? </p>
              <Link to="/Regis" className=" font-bold h-max mt-auto ml-2">
                {" "}
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
