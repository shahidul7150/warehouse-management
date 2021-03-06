import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-yellow ">
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
            <Link className="navbar-brand fw-bold text-white" to="/">
              <span className="text-white">F2C</span>
              STORE
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <Link className="nav-link  text-white " aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-white"
                  to="blogs"
                  aria-disabled="true"
                >
                  Blogs
                </Link>
              </li>
            </ul>

            {user ? (
              <ul className="privet-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="manage">
                    Manage Inventory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="addservice">
                    Add Item
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="myitem">
                    My Items
                  </Link>
                </li>
                <button
                  className="btn btn-link text-decoration-none text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </ul>
            ) : (
              <Link className="text-decoration-none text-white" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
