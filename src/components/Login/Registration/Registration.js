import React, { useRef } from "react";
import { Form } from "react-bootstrap";
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
    <div className="w-25 mx-auto mt-5 register">
      <h2 className="mb-4 text-success">Please Register</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            required
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
            autoComplete="off"
          />
        </Form.Group>
        <input className="btn btn-success" type="submit" value="Register" />
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-success text-decoration-none"
          onClick={navigatingLogin}
        >
          Please Login
        </Link>
          </p>
      <SocialLogin></SocialLogin>
      <ToastContainer/>
    </div>
  );
};

export default Registration;
