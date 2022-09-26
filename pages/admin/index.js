import * as React from 'react';
import { useRouter } from 'next/router';
import {
	AuthAction,
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
} from 'next-firebase-auth';

import admin from '../../utils/admin';

function AdminPage({ isAdmin }) {
	const AuthUser = useAuthUser();
	const router = useRouter();

	if (typeof window !== 'undefined' && !isAdmin) {
		router.push('/');
		return null;
	}

	return (
		<div>
			<p>You are on an admin page !</p>
			<p>You are logged and your email is {AuthUser.email}</p>
		</div>
	);
}

export default withAuthUser()(AdminPage);

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, res }) => {
	const token = await AuthUser.getIdToken();
	const decodedToken = await admin.auth().verifyIdToken(token);

	const isAdmin = !!decodedToken.admin;

	if (typeof window === 'undefined' && !isAdmin) {
		res.writeHead(302, { Location: '/' });
		res.end();

		return { props: {} }; // as never with Typescript
	} else {
		return {
			props: {
				isAdmin: isAdmin,
			},
		};
	}
});
