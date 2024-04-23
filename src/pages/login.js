import React from "react";
import loginImg from "../component/assets/login.jpeg";
import google from "../component/assets/google.png";
import axios from "axios";
import { Link } from "react-router-dom";

import { user } from "../component/data";

class Login extends React.Component {

  constructor () {
    super();
    this.state = {
      nama_user: '',
      password_user: '',
      loggedUser: []
    }
  }

  bind = (event) =>{
    this.setState({[event.target.name] : event.target.value})
  }
  
  // login = () => {

  //   const {nama_user, password_user} = this.state;

  //   console.log(nama_user,password_user);

  //   const foundUser = user.find((userItem) => {
  //     return userItem.nama_user === nama_user && userItem.passowrd_user === password_user;
  //   })

  //   if (foundUser && foundUser.role_user === "user") {

  //     localStorage.setItem("user", JSON.stringify(foundUser))

  //     window.location.href = '/';
  //   } else if (foundUser && foundUser.role_user === "admin") {

  //     localStorage.setItem("user", JSON.stringify(foundUser))

  //     window.location.href = '/admin';
  //   } else {
  //     alert('username or password wrong')
  //   }
  // }

  login = () => {
    let url = "http://localhost:5000/auth/login";

    const form = {
      nama_user: this.state.nama_user,
      password_user: this.state.password_user,
    }
    console.log(form);
    axios.post(url, form)
    .then(res => {
      if (res.data.success) {

          alert(res.data.message)
          window.location.href = '/';
          localStorage.setItem("nama", res.data.data.nama_user);
          localStorage.setItem("username", res.data.data.username_user);
          localStorage.setItem("password", res.data.data.password_user);
          
          } else {
            alert("invalid username or password");
          }
    })
    .catch (Error => {
      console.log(Error);
      alert(Error);
    })
    // try {
    //   const response = axios.get(url,form);

    //   if (response) {
    //     localStorage.setItem("nama", response.data.data.nama_user);
    //     localStorage.setItem("username", response.data.data.username_user);
    //     localStorage.setItem("password", response.data.data.password_user);
    //     window.location.href = '/';
    //   } else {
    //     alert("invalid username or password");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   alert( error);
    // }
  }
  
  render() {
    return (
      <div className="p-5 flex justify-center">
        <img src={loginImg} alt="loginPic" className="rounded-lg w-1/2" />
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
              <p className="mb-3 font-bold">Nama User</p>
              <input
                type="text"
                value={this.state.nama_user}
                onChange={(ev) => this.setState({ nama_user: ev.target.value })}
                className="w-full border-2 border-[#E5E5E5] p-3 rounded-lg"
              />
            </div>
            {/* input password */}
            <div className="my-5 text-left">
              <p className="mb-3 font-bold">Password</p>
              <input
                type="password"
                value={this.state.password_user}
                onChange={(ev) => this.setState({ password_user: ev.target.value })}
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
          <button onClick={this.login} className="bg-[#3B82F6] w-full p-3 rounded-lg mb-5">
            <p className="text-white ">Sign In</p>
          </button>
          {/*sign google*/}
          <button className="border-2 border-[#E5E5E5] w-full p-3 rounded-lg">
            <div className="flex justify-center">
              <img src={google} alt="Google icon" className="w-6 mr-1" />
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
