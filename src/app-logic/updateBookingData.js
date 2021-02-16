import firebase from "firebase";
import firestore from "./firestore";

//Importing SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const updateBookingData = (bookingId, parkingId, message) => {
  const MySwal = withReactContent(Swal);
  if (message) {
    MySwal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          firestore.collection("Bookings").doc(bookingId).update({
            confirmToken: "rejected",
            confirmed: false,
            rejected: true,
          });
        }
      })
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Booking Rejected!",
          confirmButtonText: "Okay",
        }).then(() => {
          window.location.reload();
        });
      });
  } else {
    MySwal.fire({
      title: "Are you sure?",
      text: "Do you want to confirm this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        //console.log("Confirm Button Clicked!", bookingId);
        console.log(parkingId);
        var d = new Date();
        var confirmId = Date.parse(d).toString();
        firestore
          .collection("Bookings")
          .doc(bookingId)
          .update({
            confirmToken: confirmId,
            confirmed: true,
          })
          .then(() => {
            MySwal.fire({
              icon: "success",
              title: "Booking Confirmed!",
              confirmButtonText: "Okay",
            }).then(() => {
              firestore
                .collection("ParkingSpots")
                .doc(parkingId)
                .update({
                  availableSpots: firebase.firestore.FieldValue.increment(-1),
                })
                .then(() => {
                  window.location.reload();
                });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
};

export default updateBookingData;
