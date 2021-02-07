import firebase from "firebase";
import firestore from "./firestore";

const saveBookingId = (parkingId, id) => {
  var userRef = firestore.collection("Users").doc(parkingId);
  return userRef
    .update({
      bookingsId: firebase.firestore.FieldValue.arrayUnion(id),
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

export default saveBookingId;
