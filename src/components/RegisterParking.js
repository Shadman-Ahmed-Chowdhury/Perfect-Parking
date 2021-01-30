import React from "react";
import authListener from "../app-logic/authListener";

class RegisterParking extends React.Component {
  state = {
    username: "",
    uid: "",
    divison: "",
    area: "",
    zipCode: "",
    thana: "",
    house: "",
    road: "",
    fullAddress: "",
  };
  componentDidMount() {
    authListener().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
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
  }
  goToLogin = () => {
    window.location.assign("/login");
  };

  goToHome = () => {
    window.location.assign("/");
  };

  // if (user !== null) {
  //   // If the user is logged In
  //   return (
  //     <div>
  //       <h2> Register Parking </h2>
  //     </div>
  //   );
  // } else {
  //   // If the user isn't logged in
  //   return (
  //     <SweetAlert
  //       warning
  //       confirmBtnText="Login Now!"
  //       confirmBtnBsStyle="primary"
  //       title="You are not authenticated!"
  //       onConfirm={() => goToLogin()}
  //       onCancel={() => goToHome()}
  //       focusCancelBtn
  //     ></SweetAlert>
  //   );
  // }

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="register-parking container">
        <h2 className="text-center mt-5">Register Your Parking Spot</h2>
        <form className="row g-3 form">
          <h5>Parking Location Information</h5>
          {/* divison */}
          <div className=" col-md-6">
            <label htmlFor="division" className="mb-2 text">
              Division
            </label>
            <select
              value={this.state.division}
              onChange={this.handleChange}
              name="division"
              className="form-control form-select"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>

          {/* area */}
          <div className="col-md-6">
            <label htmlFor="area" className="mb-2 text">
              Area
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="area"
              ref={(input) => (this.area = input)}
            />
          </div>

          {/* zipCode */}
          <div className="col-md-6">
            <label htmlFor="zipCode" className="mb-2 text">
              Zip Code
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Zip Code"
              ref={(input) => (this.zipCode = input)}
            />
          </div>

          {/* thana */}
          <div className="col-md-6">
            <label htmlFor="thana" className="mb-2 text">
              Thana
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Thana"
              ref={(input) => (this.thana = input)}
            />
          </div>

          {/* house */}
          <div className="col-md-6">
            <label htmlFor="house" className="mb-2 text">
              House No.
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="House No."
              ref={(input) => (this.house = input)}
            />
          </div>

          {/* road */}
          <div className="col-md-6">
            <label htmlFor="zipCode" className="mb-2 text">
              Road Name/No.
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Road Name"
              ref={(input) => (this.road = input)}
            />
          </div>

          {/* fullAddress */}
          <div className="col-md-12">
            <label htmlFor="fullAddress" className="mb-2 text">
              Full Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Address"
              ref={(input) => (this.fullAddress = input)}
            />
          </div>

          <h5>About Parking Spot</h5>
          {/* about */}
          <div className="col-md-12">
            <label htmlFor="fullAddress" className="mb-2 text">
              About(List your parking spot facilities)
            </label>
            <textarea
              type="text"
              className="form-control"
              placeholder="About"
              ref={(input) => (this.about = input)}
            ></textarea>
          </div>

          <h5>Owner's Information</h5>
          {/* ownerName */}
          <div className="col-md-6">
            <label htmlFor="ownerName" className="mb-2 text">
              Owner's Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Owner's Name"
              ref={(input) => (this.ownerName = input)}
            />
          </div>

          {/* ownerPhone */}
          <div className="col-md-6">
            <label htmlFor="ownerName" className="mb-2 text">
              Owner's Phone
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Owner's Phone"
              ref={(input) => (this.ownerPhone = input)}
            />
          </div>

          {/* ownerNID */}
          <div className="col-md-6">
            <label htmlFor="ownerName" className="mb-2 text">
              Owner's NID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Owner's NID"
              ref={(input) => (this.ownerNID = input)}
            />
          </div>

          {/* ownerEmail */}
          <div className="col-md-6">
            <label htmlFor="ownerEmail" className="mb-2 text">
              Owner's Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Owner's Email"
              ref={(input) => (this.ownerEmail = input)}
            />
          </div>

          <h5>Maintainer's Information</h5>

          {/* maintainerName */}
          <div className="col-md-6">
            <label htmlFor="maintainerName" className="mb-2 text">
              Maintainer's Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Maintainer's Name"
              ref={(input) => (this.maintainerName = input)}
            />
          </div>

          {/* maintainerPhone */}
          <div className="col-md-6">
            <label htmlFor="maintainerPhone" className="mb-2 text">
              Maintainer's Phone
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Maintainer's Phone"
              ref={(input) => (this.maintainerPhone = input)}
            />
          </div>

          {/* maintainerNID */}
          <div className="col-md-6">
            <label htmlFor="maintainerNID" className="mb-2 text">
              Maintainer's NID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Maintainer's NID"
              ref={(input) => (this.maintainerNID = input)}
            />
          </div>

          {/* maintainerEmail */}
          <div className="col-md-6">
            <label htmlFor="maintainerEmail" className="mb-2 text">
              Maintainer's Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Maintainer's Email"
              ref={(input) => (this.maintainerEmail = input)}
            />
          </div>

          <h5>Available Spaces and Rates</h5>
          {/* totalSpots */}
          <div className="col-md-6">
            <label htmlFor="totalSpots" className="mb-2 text">
              Total Parking Spots
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Total Spots"
              ref={(input) => (this.totalSpots = input)}
            />
          </div>

          {/* availableSpots */}
          <div className="col-md-6">
            <label htmlFor="availableSpots" className="mb-2 text">
              Available Parking Spots
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Available Spots"
              ref={(input) => (this.availableSpots = input)}
            />
          </div>

          {/* hourlyRate */}
          <div className="col-md-6">
            <label htmlFor="hourlyRate" className="mb-2 text">
              Hourly Rate
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Hourly Rate"
              ref={(input) => (this.hourlyRate = input)}
            />
          </div>

          {/* monthlyRate */}
          <div className="col-md-6">
            <label htmlFor="monthlyRate" className="mb-2 text">
              Monthly Rate
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Montly Rate"
              ref={(input) => (this.monthlyRate = input)}
            />
          </div>

          <div className="col-12 mb-5">
            <button className="btn btn-info ">Register Parking Spot</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterParking;
