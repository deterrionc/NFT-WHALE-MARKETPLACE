import React from 'react';
// import firebase from 'firebase/compat/app';// Restore
// import 'firebase/compat/auth';// Restore

// import {// Restore
// 	getFirestore,
// 	collection,
// 	query,
// 	where,
// 	getDocs,
// } from 'firebase/compat/firestore';

// import {// Restore
// 	useAuthUser,
// 	withAuthUser,
// 	withAuthUserTokenSSR,
// } from 'next-firebase-auth';

import useDocumentDataSSR from '../hooks/firestore-hook';

// const db = getFirestore(firebase);

// const db = firebase.firestore(); // Restore

import { CardsCollection } from '../components/cardsCollection';
import HomePage from '../components/HomePage';

const styles = {
	content: {
		padding: 32,
	},
	infoTextContainer: {
		marginBottom: 32,
	},
};

const upcomingLaunches = [
	{
		name: 'Bored Apes',
		description:
			'The Bored Ape Yacht Club is a collection of 10000 unique Bored Ape NFTs',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Flying Monkeys',
		description: 'Flying digital friends',
		image:
			'https://images.unsplash.com/photo-1640881815205-b6385852f1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
	},
	{
		name: 'Flying Radio',
		description: 'Flying digital sounds',
		image:
			'https://images.unsplash.com/photo-1640768693327-5c5ddca90231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
	},
	{
		name: 'Flying Toasters',
		description: 'Flying digital accessories',
		image:
			'https://images.unsplash.com/photo-1501435544023-df4e0c503ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
	},
	{
		name: 'Windows Things',
		description: 'Lorem ipsum',
		image:
			'https://images.unsplash.com/photo-1640622657236-e83b28df8e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
	},
	{
		name: 'Building NFTs',
		description: 'Buildings',
		image:
			'https://images.unsplash.com/photo-1631269214007-850d107f92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
	},
];

async function loadCollectionData() {
	// Resore
	// try {
	// 	const { name } = req.query;
	// 	let users = [];
	// 	const q = query(
	// 		collection(db, 'collections/upcoming-launches/'),
	// 		where('name', '==', name)
	// 	);
	// 	const querySnapshot = await getDocs(q);
	// 	if (querySnapshot.empty) {
	// 		res.status(404).json({ error: 'Document does not exist.' });
	// 	} else {
	// 		querySnapshot.forEach((doc) => {
	// 			users.push(doc.data());
	// 		});
	// 		res.status(200).json(users);
	// 	}
	// } catch (err) {
	// 	res.status(404).json({ error: err });
	// }
}

const Home = (props) => {
	// function isDateBeforeToday() {
	// const passedInDate = new Date(date.toDateString());
	// const todaysDate = new Date(new Date().toDateString());

	// var today = new Date();
	// var date =
	// 	today.getFullYear() +
	// 	'-' +
	// 	(today.getMonth() + 1) +
	// 	'-' +
	// 	today.getDate();

	// console.log(date);

	// return new Date(date.toDateString()) < new Date(new Date().toDateString());
	// }

	// console.log(isToday);

	// var dateLimiter = console.log(newDate);
	// const ref = firestore.doc('collections/upcoming-launches');
	// const [item] = useDocumentDataSSR(ref, { startWith: props.item });

	// const userRef = firestore
	// .collection('collections/upcoming-launches/')
	// .collection();

	// firestore
	// 	.collection('collections/upcoming-launches')
	// 	.collection(dateLimiter)
	// 	.document('notifications');

	// console.log(userRef);

	// console.log(item);

	// const AuthUser = useAuthUser(); // Restore

	// const isBeforeToday = isDateBeforeToday(new Date(2021, 12, 20));
	// console.log(isBeforeToday);

	// const q = query(
	// 	collection(db, 'collections'),
	// 	where('collection', '==', true)
	// );

	// const querySnapshot = await getDocs(q);

	return (
		<div>
			{/* {item?.name} */}

			{/* <CardsCollection
				collections={upcomingLaunches}
				title='Upcoming Launches'
			/> */}
			<HomePage />
		</div>
	);
};
{
	/* <Header email={AuthUser.email} signOut={AuthUser.signOut} /> */
}

// export const getServerSideProps = withAuthUserTokenSSR()();
// export default withAuthUser()(Home);

export default Home;
