import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterParking from "./components/RegisterParking";
import BookParking from "./components/BookParking";
import ParkingList from "./components/ParkingList";
import About from "./components/About";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/register-parking" exact component={RegisterParking} />
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/book-parking/:id" exact component={BookParking} />
          <Route path="/all-parking-spots" exact component={ParkingList} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
