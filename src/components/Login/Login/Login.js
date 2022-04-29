import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
      const password = passRef.current.value;
      console.log(email, password);
      event.target.reset()
    };
    
    const navigatingRegister = (event) => {
        navigate('/register')
    }
  return (
    <div className="w-25 mx-auto mt-5">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" required autoComplete="off" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
          </Form>
          <p>New to f2c stock? <span className="text-success" onClick={navigatingRegister}>Please Register</span></p>
    </div>
  );
};

export default Login;
