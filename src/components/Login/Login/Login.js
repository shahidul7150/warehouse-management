import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const [sendPasswordResetEmail, sending, resetPasserror] = useSendPasswordResetEmail(
    auth
  );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
      const password = passRef.current.value;
      console.log(email, password);
      signInWithEmailAndPassword(email,password)
      event.target.reset()
    };
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigatingRegister = (event) => {
        navigate('/register')
  }
  const resetPassword = async (event) => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail (email)
    console.log('Toast');
    await toast('send email')
  }
    if (loading) {
       return <h3>Loading..........</h3>
    }
    if (user) {
        navigate(from, { replace: true });
    }
  return (
  
    <div class="w-full max-w-xs mx-auto my-7">
  <form onSubmit={handleFormSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        Sign In
      </button>

<button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={resetPassword}>Reset Password</button>

    </div>
    <p>New to f2c stock? <Link to='/register' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={navigatingRegister}>Please Register</Link></p>
  </form>
  <SocialLogin></SocialLogin> 
  <p class="text-center text-gray-500 text-xs">
    &copy;2022 F2C. All rights reserved.
  </p>
  <ToastContainer />
</div>

  );
};

export default Login;
