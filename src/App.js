import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import RegisterParking from "./components/RegisterParking";
import BookParking from "./components/BookParking";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register-parking" exact component={RegisterParking} />
          <Route path="/book-parking" exact component={BookParking} />
        </div>
      </Router>
    </div>
  );
}

export default App;
