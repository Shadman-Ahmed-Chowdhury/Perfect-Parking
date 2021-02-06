import firestore from "./firestore";

//Importing SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const saveParkingData = (
  uid,
  divison,
  area,
  zipCode,
  thana,
  house,
  road,
  fullAddress,
  about,
  ownerName,
  ownerPhone,
  ownerNID,
  ownerEmail,
  maintainerName,
  maintainerPhone,
  maintainerNID,
  maintainerEmail,
  totalSpots,
  availableSpots,
  hourlyRate,
  monthlyRate
) => {
  const MySwal = withReactContent(Swal);
  MySwal.showLoading();
  firestore
    .collection("ParkingSpots")
    .doc(uid)
    .set({
      uid,
      divison,
      area,
      zipCode,
      thana,
      house,
      road,
      fullAddress,
      about,
      ownerName,
      ownerPhone,
      ownerNID,
      ownerEmail,
      maintainerName,
      maintainerPhone,
      maintainerNID,
      maintainerEmail,
      totalSpots,
      availableSpots,
      hourlyRate,
      monthlyRate,
    })
    .then(() => {
      MySwal.fire({
        icon: "success",
        title: "Parking Spot Registration Completed!",
        confirmButtonText: "Continue",
      }).then(() => {
        window.location.assign("/");
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default saveParkingData;
