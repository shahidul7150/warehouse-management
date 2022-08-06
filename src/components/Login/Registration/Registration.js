import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import '../Login/Login.css';
import SocialLogin from "../SocialLogin/SocialLogin";
const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
    toast('Please verify your email')
    event.target.reset();
  };

  const navigatingLogin = (event) => {
    navigate("/login");
  };
  if (loading) {
    <h3 className="display-3">Loading........</h3>;
  }
  if (user) {
    navigate("/");
  }
  return (
   

<div class="w-full max-w-xs mx-auto my-7">
  <form onSubmit={handleFormSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Name
      </label>
      <input ref={nameRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name" required autoComplete="off" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email address
      </label>
      <input ref={emailRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email" required autoComplete="off" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input ref={passRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required autoComplete="off" />
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign Up
      </button>
   
      {/* <p>New to f2c stock? <Link to='/register' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={navigatingRegister}>Please Register</Link></p> */}
    </div>
    <p>Already registered? <Link to='/login' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={navigatingLogin}>Please Signin</Link></p>
  </form>
  <SocialLogin></SocialLogin> 
  <p class="text-center text-gray-500 text-xs">
    &copy;2022 F2C. All rights reserved.
  </p>
  <ToastContainer/>
</div>

  );
};

export default Registration;
