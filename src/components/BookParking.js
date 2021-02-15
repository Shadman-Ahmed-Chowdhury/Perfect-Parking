import React from "react";
import authListener from "../app-logic/authListener";

import "./BookParking.css";

import saveBookingData from "../app-logic/saveBookingData";
import getParkingSpotDetails from "../app-logic/getParkingSpotDetails";

class BookParking extends React.Component {
  state = {
    username: "",
    uid: "",
    parkingSpotAddress: "",
    parkingSpotMaintainerName: "",
    parkingSpotMaintainerPhone: "",
  };

  componentDidMount() {
    authListener().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        this.setState({
          uid: user.uid,
        });
        // const promise = getUserData(user.uid);
        // promise.then((doc) => {
        //   console.log(doc.data().username);
        //   const uname = doc.data().username;
        //   this.setState({
        //     username: uname,
        //     uid: user.uid,
        //   });
        // });
      } else {
        console.log("Logged out");

        this.goToLogin();
      }
    });
    this.getParkingData();
  }

  getParkingData = () => {
    const parkingId = this.props.match.params.id;
    console.log(parkingId);

    //Get From Firestore
    const promise = getParkingSpotDetails(parkingId);
    promise.then((doc) => {
      this.setState({
        parkingSpotAddress: doc.data().fullAddress,
        parkingSpotMaintainerName: doc.data().maintainerName,
        parkingSpotMaintainerPhone: doc.data().maintainerPhone,
      });
    });
  };

  goToLogin = () => {
    window.location.assign("/login");
  };

  goToHome = () => {
    window.location.assign("/");
  };

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  bookParking = (e) => {
    e.preventDefault();

    const parkingId = this.props.match.params.id;
    const name = this.name.value;
    const phone = this.phone.value;
    const email = this.email.value;
    const licenseNo = this.licenseNo.value;
    const carRegNo = this.carRegNo.value;
    const date = this.date.value;
    const startTime = this.startTime.value;
    const endTime = this.endTime.value;
    const uid = this.state.uid;
    const parkingSpotAddress = this.state.parkingSpotAddress;
    const parkingSpotMaintainerName = this.state.parkingSpotMaintainerName;
    const parkingSpotMaintainerPhone = this.state.parkingSpotMaintainerPhone;

    saveBookingData(
      uid,
      parkingId,
      name,
      phone,
      email,
      licenseNo,
      carRegNo,
      date,
      startTime,
      endTime,
      parkingSpotAddress,
      parkingSpotMaintainerName,
      parkingSpotMaintainerPhone
    );
  };

  render() {
    return (
      <div className="book-parking container">
        <h2 className="text-center mt-5">Book this Parking Spot</h2>

        <form className="row g-3 form" onSubmit={this.bookParking}>
          <h5>Personal Info</h5>
          {/* name */}
          <div className="col-md-6">
            <label htmlFor="name" className="mb-2 text">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              ref={(input) => (this.name = input)}
              required
            />
          </div>
          {/* phone */}
          <div className="col-md-6">
            <label htmlFor="phone" className="mb-2 text">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone No."
              ref={(input) => (this.phone = input)}
              required
            />
          </div>
          {/* email */}
          <div className="col-md-6">
            <label htmlFor="email" className="mb-2 text">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              ref={(input) => (this.email = input)}
              required
            />
          </div>
          <hr />
          <h5>Vehicle Info</h5>
          {/* licenseNo */}
          <div className="col-md-6">
            <label htmlFor="name" className="mb-2 text">
              License No.
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="License No."
              ref={(input) => (this.licenseNo = input)}
              required
            />
          </div>
          {/* carRegNo */}
          <div className="col-md-6">
            <label htmlFor="name" className="mb-2 text">
              Car Registration No.
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Car Registration No."
              ref={(input) => (this.carRegNo = input)}
              required
            />
          </div>
          <hr />
          <h5>Date and Time</h5>
          {/* date */}
          <div className="col-md-6">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              className="form-control"
              ref={(input) => (this.date = input)}
              required
            />
          </div>
          <div className="col-md-6"></div>
          {/* startTime */}
          <div className="col-md-6">
            <label htmlFor="date">Starting Time:</label>
            <input
              type="time"
              className="form-control"
              ref={(input) => (this.startTime = input)}
              required
            />
          </div>
          {/* endTime */}
          <div className="col-md-6">
            <label htmlFor="date">End Time:</label>
            <input
              type="time"
              className="form-control"
              ref={(input) => (this.endTime = input)}
              required
            />
          </div>
          <hr />
          {/* confirm booking button */}
          <div className="col-12 mb-5">
            <button type="submit" className="btn btn-info">
              Confirm Your Booking
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookParking;
