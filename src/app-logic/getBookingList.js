import firestore from "./firestore";

const getBookingList = () => {
  return firestore.collection("Bookings").get();
};

export default getBookingList;
