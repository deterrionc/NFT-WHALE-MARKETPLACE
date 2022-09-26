import React from 'react';
import '../styles/globals.css';
import App from 'next/app';
import Layout from '../components/layout';
import FullpageLayout from '../components/fullpagelayout';
import { ProfileProvider } from '../contexts/ProfileContext';

// import initAuth from '../utils/initAuth';
// initAuth();

class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props;

		if (router.pathname.startsWith('/login')) {
			return (
				<FullpageLayout>
					<Component {...pageProps}></Component>
				</FullpageLayout>
			);
		}

		return (
			<Layout>
				<ProfileProvider>
					<Component {...pageProps}></Component>
				</ProfileProvider>
			</Layout>
		);
	}
}

export default MyApp;
