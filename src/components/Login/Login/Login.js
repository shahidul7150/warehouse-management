import React, { useRef } from "react";
import {  Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <div className="w-25 mx-auto mt-5">
          <h2 className="mb-4 text-success">Please Login</h2>
      <Form className="pb-2" onSubmit={handleFormSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" required autoComplete="off" />
        </Form.Group>

        <input className="btn btn-success" variant="success" type="submit" value="Login"/>
         
          </Form>
          <p>New to f2c stock? <Link to='/register' className="text-success text-decoration-none" onClick={navigatingRegister}>Please Register</Link></p>
          <p>Forget Password? <span style={{cursor:"pointer"}} className="text-success text-decoration-none" onClick={resetPassword}>Reset Password</span></p>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
