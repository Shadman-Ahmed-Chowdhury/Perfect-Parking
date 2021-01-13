import fireConfig from "../firebaseConfig/config";

const logoutUser = () => {
  fireConfig.auth().signOut();
  console.log("Logout algasjdlf");
};

export default logoutUser;
