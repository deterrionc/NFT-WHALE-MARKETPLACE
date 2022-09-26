import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.

const firebaseAuthConfig = {
	signInFlow: 'popup',
	// Auth providers
	// https://github.com/firebase/firebaseui-web#configure-oauth-providers
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
	// signInOptions: [
	// 	{
	// 		provider: [
	// 			firebase.auth.EmailAuthProvider.PROVIDER_ID,
	// 			firebase.auth.f.PROVIDER_ID,
	// 		],

	// 		requireDisplayName: false,
	// 	},
	// ],
	signInSuccessUrl: '/',
	credentialHelper: 'none',
	callbacks: {
		// https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
		signInSuccessWithAuthResult: () =>
			// Don't automatically redirect. We handle redirects using
			// `next-firebase-auth`.
			false,
	},
};

const FirebaseAuth = () => {
	// Do not SSR FirebaseUI, because it is not supported.
	// https://github.com/firebase/firebaseui-web/issues/213
	const [renderAuth, setRenderAuth] = useState(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setRenderAuth(true);
		}
	}, []);
	return (
		<div>
			{renderAuth ? (
				<StyledFirebaseAuth
					uiConfig={firebaseAuthConfig}
					firebaseAuth={firebase.auth()}
				/>
			) : null}
		</div>
	);
};

export default FirebaseAuth;
