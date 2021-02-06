import React, { useState, useEffect } from "react"; // import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logoutUser from "../app-logic/logoutUser";
import authListener from "../app-logic/authListener";

import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState({});

  const logout = () => {
    logoutUser();
    setUser({ user: null });
    console.log("Logout User");
  };

  useEffect(() => {
    authListener().onAuthStateChanged((user) => {
      setUser(user);
      if (user !== null) {
        console.log(user.email);
      } else {
        console.log("Logged Out");
      }
    });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Perfect Parker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register-parking" className="link">
                  Register Your Parking
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book-parking" className="link">
                  Book Parking
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/all-parking-spots" className="link">
                  All Parking Spots
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <span>
                    {" "}
                    <Link to="/profile" className="link">
                      Profile
                    </Link>
                  </span>
                  <span onClick={() => logout()} className="link">
                    Logout
                  </span>
                </li>
              ) : (
                <li className="nav-item">
                  {/* <span onClick={() => logout()}>Logout</span> */}
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
