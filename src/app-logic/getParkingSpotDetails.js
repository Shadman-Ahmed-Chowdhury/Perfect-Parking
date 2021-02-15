import firestore from "./firestore";

const getParkingSpotDetails = (id) => {
  return firestore.collection("ParkingSpots").doc(id).get();
};

export default getParkingSpotDetails;
