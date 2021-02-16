import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

import "./Profile.css";

import getBookingList from "../app-logic/getBookingList";
import authListener from "../app-logic/authListener";
import updateBookingData from "../app-logic/updateBookingData";
import getUserData from "../app-logic/getUserData";

const Profile = () => {
  const [user, setUser] = useState({});
  const [uid, setUid] = useState("");
  const [userData, setUserData] = useState({});
  const [bookingList, setBookingList] = useState([]);
  //const [filteredBookingList, setFilteredBookingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authListener().onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        setUid(user.uid);
        const promise = getUserData(user.uid);
        promise.then((doc) => {
          setUserData({ ...doc.data() });
        });
      } else {
        console.log("Logged out");
        window.location.assign("/login");
      }
    });
    const fetchBookingList = async () => {
      const data = await getBookingList(user.uid);
      setBookingList(data.docs);
      console.log(data.docs);
      setLoading(false);
    };
    fetchBookingList();

    // eslint-disable-next-line
  }, [uid]);

  const confirmBooking = (bookingId, uid) => {
    updateBookingData(bookingId, uid);
  };

  const rejectBooking = (bookingId, uid, message) => {
    updateBookingData(bookingId, uid, message);
  };

  const filteredBookingList = bookingList.filter((booking) => {
    return booking.data().parkingId === uid;
  });

  if (loading) {
    return (
      <div className="loader">
        <ScaleLoader
          color={"#282f5d"}
          height={100}
          width={5}
          radius={12}
          margin={3}
        />
      </div>
    );
  } else {
    //console.log(bookings);
    return (
      <div className="profile container align-items-center">
        <div className="card profile-custom-card mt-3">
          <div className="profile-card-body">
            <div className="d-flex flex-row align-items-center text-center justify-content-center">
              <div className="m-3">
                <img
                  src="../assets/avatar.png"
                  alt="Avatar"
                  className="rounded-circle m-3 img-thumbnail"
                  width="120"
                />
                <div>
                  <h4>{userData.name}</h4>
                </div>
              </div>
              <div className="m-3">
                <p>
                  <strong>Email: </strong>
                  {userData.email}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {userData.phone}
                </p>
                <p>
                  <strong>NID: </strong>
                  {userData.nid}
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-5">Booking Requests</h2>
        <hr />
        {filteredBookingList
          .slice(0)
          .reverse()
          .map((doc) => (
            <div key={doc.id} className="col-md-10 mt-5">
              <div className="card">
                <div className="card-body">
                  <h3>{doc.data().name}</h3>
                  <h5>
                    Phone Number: {doc.data().phone} | Email: {doc.data().email}{" "}
                  </h5>

                  <p>
                    Car license no: {doc.data().licenseNo} | Car Reg. no:{" "}
                    {doc.data().carRegNo}{" "}
                  </p>
                  <h5>Date: {doc.data().date}</h5>
                  <h5>Start Time: {doc.data().startTime}</h5>
                  <h5>End Time: {doc.data().endTime}</h5>
                  {doc.data().confirmed ? (
                    <h6>Confirmed</h6>
                  ) : doc.data().rejected ? (
                    <h6>Rejected!</h6>
                  ) : (
                    <div className="button-group">
                      <button
                        className="btn btn-sm btn-info me-3"
                        onClick={() => confirmBooking(doc.id, uid)}
                      >
                        Confirm
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => rejectBooking(doc.id, uid, "rejected")}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    );
  }
};

export default Profile;
