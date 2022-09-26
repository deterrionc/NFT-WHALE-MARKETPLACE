import Footer from './footer';
import Navbar from './navbar';
import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR,
} from 'next-firebase-auth';

const Layout = ({ children }) => {
	// const AuthUser = useAuthUser(); // Restore
	return (
		<>
			<div className='min-h-full'>
				<Navbar
					// name={AuthUser.displayName} // Restore
					// email={AuthUser.email} // Restore
					// image={AuthUser.photoURL} // Restore
					// signOut={AuthUser.signOut} // Restore
					name={'John Doe'}
					email={'John@doe.com'}
					image={'image.jpg'}
					signOut={null}
				/>

				<div className=''>
					<main>
						{children}
					</main>
				</div>
			</div>
			<Footer />
		</>
	);
};

// export default withAuthUser()(Layout); // Restore

export default Layout;
