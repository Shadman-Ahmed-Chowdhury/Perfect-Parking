import fireConfig from '../firebaseConfig/config';
import saveUserData from './saveUserData';

const registerUser = (name, phone, nid, email, password) => {
	fireConfig
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userCreds) => {
			console.log(userCreds.user.uid);
			const uid = userCreds.user.uid;
			saveUserData(uid, name, phone, nid, email);
		})
		.catch((err) => {
			alert(err);
			console.log(err);
		});
};

export default registerUser;
