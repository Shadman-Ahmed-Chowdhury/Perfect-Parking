import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import "./BookingList.css";

import getBookingList from "../app-logic/getBookingList";
import authListener from "../app-logic/authListener";
//import updateBookingData from "../app-logic/updateBookingData";

const BookingList = () => {
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

  // const confirmBooking = (bookingId, uid) => {
  //   updateBookingData(bookingId, uid);
  // };

  const filteredBookingList = bookingList.filter((booking) => {
    return booking.data().uid === uid;
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
      <div className="profile container">
        <h2 className="mt-5">My Requested Bookings</h2>
        {filteredBookingList.map((doc) => (
          <div key={doc.id} className="col-md-10 mt-5">
            <div className="card">
              <div className="card-body">
                <h4>{doc.data().parkingSpotAddress}</h4>
                <h5>Date: {doc.data().date}</h5>
                <h5>Start Time: {doc.data().startTime}</h5>
                <h5>End Time: {doc.data().endTime}</h5>
                <p>Maintainer's Name: {doc.data().parkingSpotMaintainerName}</p>
                <p>
                  Maintainer's Phone no.:{" "}
                  {doc.data().parkingSpotMaintainerPhone}
                </p>
                {doc.data().confirmed ? (
                  <h6>
                    Confirmed with token:{" "}
                    <span className="tokenId"> {doc.data().confirmToken} </span>
                  </h6>
                ) : doc.data().rejected ? (
                  <h6>Rejected</h6>
                ) : (
                  <div>
                    <h6>Yet to be confirmed!</h6>
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

export default BookingList;
