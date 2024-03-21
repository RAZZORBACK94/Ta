import React from "react";
import regisImg from "../component/assets//regis.jpeg";
import google from "../component/assets/google.png";
import { Link } from "react-router-dom";

class Regis extends React.Component {
  render() {
    return (
      <div className="p-5 flex justify-center">
        {/*bagian kanan*/}
        <div className="w-auto mx-5 ">
          <div className="p-5 text-center">
            {/* nama website */}
          <p className="bg-blue-300 mb-10">
            BUKU <span className=" text-orange-300">KU</span>
          </p>
          {/* header */}
          <p className="font-bold text-4xl">Create Account</p>
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
            {/* input pengulangan password */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Ulangi Password</p>
              <input
                type="password"
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg"
              />
            </div>
          </form>
            {/* term and condition */}
            <div className="flex mb-2">
              <input type="checkbox" className="mr-1" />
              <p className="font-bold">I Agree To All Term & Conditions</p>
            </div>
          {/*sign in*/}
          <button className="bg-[#3B82F6] w-full p-3 rounded-lg mb-2">
            <p className="text-white ">Sign Up</p>
          </button>
          <div className="flex mb-2 ">
            <hr className="w-1/2"/>
            <p className=" text-[#E5E5E5] text-center">Or</p>
            <hr className="w-1/2"/>
          </div>
          {/*sign google*/}
          <button className="border-2 border-[#E5E5E5] w-full p-3 rounded-lg">
            <div className="flex justify-center">
              <img src={google} className="w-6 mr-1" />
              <p className="">Login With Google</p>
            </div>
          </button>
          </div>
          <div className="flex justify-center">
            <p className="mt-5 text-center">Already Have Account? </p>
            <Link to ="/Login" className=" font-bold h-max mt-auto ml-2"> Sign Up</Link>
          </div>
        </div>
        <img src={regisImg} className="rounded-lg w-1/2" />
      </div>
    );
  }
}

export default Regis;
