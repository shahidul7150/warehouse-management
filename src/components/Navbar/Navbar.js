import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand fw-bold" to="/">
              <span className="text-success">F2C</span>
              STORE
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-dark"
                  to="blogs"
                  aria-disabled="true"
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <Link className="text-decoration-none text-dark" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
