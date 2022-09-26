import admin from 'firebase-admin';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
			clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
		}),
		databaseURL: process.env.FIREBASE_ADMIN_DATABASE_URL,
	});
}

export default admin;

/**
 * .env.local emulator variables
 * export FIRESTORE_EMULATOR_HOST="localhost:8080"
 * export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"
 */
