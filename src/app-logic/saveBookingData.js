import firestore from "./firestore";

//Importing SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const saveBookingData = (
  uid,
  parkingId,
  name,
  phone,
  email,
  licenseNo,
  carRegNo,
  date,
  startTime,
  endTime
) => {
  const MySwal = withReactContent(Swal);
  MySwal.showLoading();
  //Generating ID;
  var d = new Date();
  var id = Date.parse(d).toString();
  firestore
    .collection("Bookings")
    .doc(id)
    .set({
      id,
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
    })
    .then(() => {
      MySwal.fire({
        icon: "success",
        title: "Your booking has been confirmed successfully!",
        confirmButtonText: "Continue",
      }).then(() => {
        window.location.assign("/");
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default saveBookingData;
