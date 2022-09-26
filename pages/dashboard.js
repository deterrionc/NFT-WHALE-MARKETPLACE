import React from 'react';
import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
} from 'next-firebase-auth';

const Demo = () => {
	const AuthUser = useAuthUser();
	return (
		<div>
			<p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
		</div>
	);
};

// Note that this is a higher-order function.
// export const getServerSideProps = withAuthUserTokenSSR()();

// export default withAuthUser()(Demo);

export default Demo;
