import './firebase';
import { init } from 'next-firebase-auth';

const initAuth = () => {
	init({
		authPageURL: '/auth',
		appPageURL: '/',
		loginAPIEndpoint: '/api/login', // required
		logoutAPIEndpoint: '/api/logout', // required
		onLoginRequestError: (err) => {
			console.error(err);
		},
		onLogoutRequestError: (err) => {
			console.error(err);
		},
		// firebaseAuthEmulatorHost: 'localhost:9099',
		firebaseAdminInitConfig: {
			credential: {
				projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
				// Using JSON to handle newline problems when storing the
				// key as a secret in Vercel. See:
				// https://github.com/vercel/vercel/issues/749#issuecomment-707515089
				privateKey: process.env.FIREBASE_PRIVATE_KEY
					? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
					: undefined,
			},
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
		},
		// Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
		// useFirebaseAdminDefaultCredential: true,
		firebaseClientInitConfig: {
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		},
		cookies: {
			name: 'VAULT3D', // required
			// Keys are required unless you set `signed` to `false`.
			// The keys cannot be accessible on the client side.
			keys: [
				process.env.COOKIE_SECRET_CURRENT,
				process.env.COOKIE_SECRET_PREVIOUS,
			],
			httpOnly: true,
			maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
			overwrite: true,
			path: '/',
			sameSite: 'strict',
			secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true',
			signed: true,
		},
		onVerifyTokenError: (err) => {
			console.error(err);
		},
		onTokenRefreshError: (err) => {
			console.error(err);
		},
	});
};

export default initAuth;
