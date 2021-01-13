import fireConfig from '../firebaseConfig/config';

const loginUser = (email, password) => {
	fireConfig
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCreds) => {
			var uid = userCreds.user.uid;
			console.log(uid);
			console.log('user signed in');
			window.location.assign('/');
		})
		.catch((err) => {
			alert(err);
			console.log(err);
		});
};

export default loginUser;
