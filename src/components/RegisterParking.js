import React, { useState, useEffect } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import authListener from "../app-logic/authListener";

const RegisterParking = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    authListener().onAuthStateChanged((user) => {
      setUser(user);
      // if (user !== null) {
      //   console.log(user.email);
      // } else {
      //   console.log("Logged Out");
      // }
    });
  }, []);
  const goToLogin = () => {
    window.location.assign("/login");
  };

  const goToHome = () => {
    window.location.assign("/");
  };

  if (user !== null) {
    // If the user is logged In
    return (
      <div>
        <h2> Register Parking </h2>
      </div>
    );
  } else {
    // If the user isn't logged in
    return (
      <SweetAlert
        warning
        confirmBtnText="Login Now!"
        confirmBtnBsStyle="primary"
        title="You are not authenticated!"
        onConfirm={() => goToLogin()}
        onCancel={() => goToHome()}
        focusCancelBtn
      ></SweetAlert>
    );
  }
};

export default RegisterParking;
