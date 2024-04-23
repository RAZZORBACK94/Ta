import React,{useEffect} from "react";
import regisImg from "../component/assets//regis.jpeg";
import google from "../component/assets/google.png";
import { Link } from "react-router-dom";

import { user } from "../component/data";

class Regis extends React.Component {

  constructor() {
    super();
    this.state = {
      nama_user: '',
      alamat_user: '',
      telepon_user: '',
      username_user: '',
      password_user: '',

      usernameCheck: false,
    }
  }

  checkUsername = (event) => {
    this.setState({ username_user: event.target.value });
    console.log(this.state.username_user)
    const usernameExists = user.find((userItem) => 
      userItem.username_user === this.state.username_user
    );
    if(usernameExists) {
      this.setState({usernameCheck : true})
    } else {
      this.setState({usernameCheck : false})
    }
    console.log(this.state.usernameCheck)
  }

  regis = () => {

    const regisNew = { 
      nama_user: this.state.nama_user,
      alamat_user: this.state.alamat_user,
      telepon_user: this.state.telepon_user,
      username_user: this.state.username_user,
      password_user: this.state.password_user,
    }

    user.push(regisNew)

    let register = []
    register.push(regisNew)

    localStorage.setItem("user", JSON.stringify(register))

    window.location.href = '/';
  }

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
            {/* input nama */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Nama</p>
              <input
                type="text"
                value={this.state.nama_user}
                onChange={(ev) => this.setState({ nama_user: ev.target.value })}
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg focus:outline-blue-500"
              />
            </div>
            {/* input alamat */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Alamat</p>
              <input
                type="text"
                value={this.state.alamat_user}
                onChange={(ev) => this.setState({ alamat_user: ev.target.value })}
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg focus:outline-blue-500"
              />
            </div>
            {/* input telepon */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Telepon</p>
              <input
                type="text"
                value={this.state.telepon_user}
                onChange={(ev) => this.setState({ telepon_user: ev.target.value })}
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg focus:outline-blue-500"
              />
            </div>
            {/* input username */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Username</p>
              <input
                type="text"
                value={this.state.username_user}
                onChange={this.checkUsername}
                className={`w-full border-2 border-[#E5E5E5] p-3 rounded-lg ${ this.state.usernameCheck? ' border-red-500 focus:outline-red-500' : 'focus:outline-blue-500'}`}
              />
              <p className={`${this.state.usernameCheck? '':'hidden'} text-red-500 text-sm`}>Username telah dipakai. Silahkan gunakan Username lain</p>
            </div>
            {/* input password */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Password</p>
              <input
                type="password"
                value={this.state.password_user}
                onChange={(ev) => this.setState({ password_user: ev.target.value })}
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg focus:outline-blue-500"
              />
            </div>
            {/* input pengulangan password */}
            {/* <div className="my-5 text-left">
              <p className="mb-3 font-bold">Ulangi Password</p>
              <input
                type="password"
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg focus:outline-blue-500"
              />
            </div> */}
          </form>
            {/* term and condition */}
            <div className="flex mb-2">
              <input type="checkbox" className="mr-1" required/>
              <p className="font-bold">I Agree To All Term & Conditions</p>
            </div>
          {/*sign in*/}
          <button className="bg-[#3B82F6] w-full p-3 rounded-lg mb-2" onClick={this.regis}>
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
