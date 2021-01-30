import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";

import registerUser from "../app-logic/registerUser";

class Register extends React.Component {
  register = (e) => {
    e.preventDefault();
    console.log("Register Button button clicked");
    const name = this.name.value;
    const phone = this.phone.value;
    const nid = this.nid.value;
    const email = this.email.value;
    const password = this.password.value;

    if (email === "" || password === "") {
      alert("Email or Password can't be empty");
    } else {
      registerUser(name, phone, nid, email, password);
      console.log(email);
      this.formReset();
    }
  };
  formReset() {
    this.name.value = "";
    this.phone.value = "";
    this.nid.value = "";
    this.email.value = "";
    this.password.value = "";
  }
  render() {
    return (
      <div className="register mt-5">
        <h3 className="text-center text">Sign Up</h3>

        <div className="registerForm">
          <form onSubmit={this.register}>
            <div className="form-group">
              <label htmlFor="name" className="mt-2 mb-2 text">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                ref={(input) => (this.name = input)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="mt-2 mb-2 text">
                Phone no:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone no"
                ref={(input) => (this.phone = input)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="mt-2 mb-2 text">
                NID no:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="NID no"
                ref={(input) => (this.nid = input)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="mt-2 mb-2 text">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                ref={(input) => (this.email = input)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="mt-2 mb-2 text">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={(input) => (this.password = input)}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-dark mt-3 registerBtn">Sign Up</button>
            </div>
          </form>
        </div>
        <p className="text-center mt-3 text">
          Already have an account?{" "}
          <Link to="/login" className="loginLink">
            Login Now!
          </Link>
        </p>
      </div>
    );
  }
}

export default Register;
