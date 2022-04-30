import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
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
    
    const navigatingRegister = (event) => {
        navigate('/register')
    }
    if (loading) {
        <h3>Loading..........</h3>
    }
    if (user) {
        navigate('/blogs')
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
    </div>
  );
};

export default Login;
