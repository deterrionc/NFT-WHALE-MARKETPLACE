import {
	AuthAction,
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
} from 'next-firebase-auth';

import admin from '../../utils/admin';

function UserPage() {
	const AuthUser = useAuthUser();

	return (
		<div>
			<p>You are logged and your email is {AuthUser.email}</p>
			<button onClick={() => AuthUser.signOut()}>sign out</button>
		</div>
	);
}

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(UserPage);

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
	const token = await AuthUser.getIdToken();
	const decodedToken = await admin.auth().verifyIdToken(token);

	// set admin to true in custom claims
	// admin.auth().setCustomUserClaims(decodedToken.uid, { admin: true })

	// reset custom claims
	admin.auth().setCustomUserClaims(decodedToken.uid, null);

	return { props: {} };
});
