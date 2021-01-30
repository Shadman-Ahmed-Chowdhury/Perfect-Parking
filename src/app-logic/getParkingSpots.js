import firestore from "./firestore";

const getParkingSpots = () => {
  return firestore.collection("ParkingSpots").get();
};

export default getParkingSpots;
