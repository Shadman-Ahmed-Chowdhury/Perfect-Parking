import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

import "./Profile.css";

import getBookingList from "../app-logic/getBookingList";
import authListener from "../app-logic/authListener";
import updateBookingData from "../app-logic/updateBookingData";
//import getUserData from "../app-logic/getUserData";

const Profile = () => {
  const [user, setUser] = useState({});
  const [uid, setUid] = useState("");
  const [bookingList, setBookingList] = useState([]);
  //const [filteredBookingList, setFilteredBookingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authListener().onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        setUid(user.uid);
        // const promise = getUserData(user.uid);
        // promise.then((doc) => {
        //   setBookingsId(doc.data().bookingsId);
        // });
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

  const filteredBookingList = bookingList.filter((booking) => {
    return booking.data().parkingId === uid;
  });

  if (loading) {
    return (
      <div className="loader">
        <ScaleLoader
          color={"#36D7B7"}
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
      <div className="profile container">
        <h2 className="mt-5">
          Current Booking Requests for your Parking Spot!
        </h2>
        {filteredBookingList.map((doc) => (
          <div key={doc.id} className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body">
                <h3>{doc.data().name}</h3>
                <h5>Date: {doc.data().date}</h5>
                <h5>Start Time: {doc.data().startTime}</h5>
                <h5>End Time: {doc.data().endTime}</h5>
                {doc.data().confirmed ? (
                  <h6>Confirmed</h6>
                ) : (
                  <div className="button-group">
                    <button
                      className="btn btn-sm btn-info me-3"
                      onClick={() => confirmBooking(doc.id, uid)}
                    >
                      Confirm
                    </button>
                    <button className="btn btn-sm btn-danger">Reject</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <hr />
        <h2 className="mt-5">All Previous Requests</h2>
      </div>
    );
  }
};

export default Profile;
