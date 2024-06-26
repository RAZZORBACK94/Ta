import React from "react";
import loginImg from "../component/assets/login.jpeg";
import google from "../component/assets/google.png";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="p-5 flex justify-center">
        <img src={loginImg} className="rounded-lg w-1/2" />
        {/*bagian kanan*/}
        <div className="w-auto mx-5 ">
          <div className="p-10 text-center">
            {/* nama website */}
          <p className="bg-blue-300 mb-20">
            BUKU <span className=" text-orange-300">KU</span>
          </p>
          {/* header */}
          <p className="font-bold text-4xl">Login Page</p>
          <p>
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
          <form>
            {/* input email */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Email</p>
              <input
                type="email"
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg"
              />
            </div>
            {/* input password */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Password</p>
              <input
                type="password"
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
            <p className="font-bold">Forget Password?</p>
          </div>
          {/*sign in*/}
          <button className="bg-[#3B82F6] w-full p-3 rounded-lg mb-5">
            <p className="text-white ">Sign In</p>
          </button>
          {/*sign google*/}
          <button className="border-2 border-[#E5E5E5] w-full p-3 rounded-lg">
            <div className="flex justify-center">
              <img src={google} className="w-6 mr-1" />
              <p className="">Login With Google</p>
            </div>
          </button>
          </div>
          <div className="flex justify-center">
            <p className="mt-5 text-center">Don't Have Account? </p>
            <Link to ="/Regis" className=" font-bold h-max mt-auto ml-2"> Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
