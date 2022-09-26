import React from 'react';
// import { withAuthUser, AuthAction } from 'next-firebase-auth'; // Restore
// import FirebaseAuth from '../components/FirebaseAuth'; // Restore

const styles = {
	content: {
		padding: `8px 32px`,
	},
	textContainer: {
		display: 'flex',
		justifyContent: 'center',
		margin: 16,
	},
};

const Auth = () => (
	<div className='max-w-7xl mx-auto'>
		<h3 className='text-4xl my-10'>Sign in</h3>
		<div style={styles.textContainer}>
			<p>Sign in to manage your account, billing info, and more!</p>
		</div>
		<div>{/* <FirebaseAuth /> // Restore */}</div>
	</div>
);

// export default withAuthUser({
// 	whenAuthed: AuthAction.REDIRECT_TO_APP,
// 	whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
// 	whenUnauthedAfterInit: AuthAction.RENDER,
// })(Auth); // Restore

export default Auth;
