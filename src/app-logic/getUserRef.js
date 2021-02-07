import firestore from "./firestore";

const getUserRef = (id) => {
  return firestore.collection("Users").doc(id);
};

export default getUserRef;
