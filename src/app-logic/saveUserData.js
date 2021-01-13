import firestore from './firestore';

//Importing SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const saveUserData = (uid, name, phone, nid, email) => {
	const MySwal = withReactContent(Swal);
	MySwal.showLoading();
	firestore
		.collection('Users')
		.doc()
		.set({
			uid,
			name,
			phone,
			nid,
			email,
		})
		.then(() => {
			MySwal.fire({
				icon: 'success',
				title: 'User Registration Completed!',
				confirmButtonText: 'Continue',
			}).then(() => {
				window.location.assign('/');
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export default saveUserData;
