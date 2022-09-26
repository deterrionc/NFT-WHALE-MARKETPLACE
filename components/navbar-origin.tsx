import React from 'react';
import Router from 'next/router';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { getAuth, signOut } from 'firebase/auth';
import { Fragment } from 'react';
import Logo from './logo';
import Link from 'next/link';
import Image from 'next/image';
import NavbarSearch from './navbarSearch';

import WalletConnect from './walletConnect';

// import WalletConnect from './walletConnect';

const nfaDependencyVersion =
	require('../package.json').dependencies['next-firebase-auth'];
const nextDependencyVersion = require('../package.json').dependencies.next;
const firebaseDependencyVersion =
	require('../package.json').dependencies.firebase;

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: 16,
	},
	versionsContainer: {
		marginLeft: 0,
		marginRight: 'auto',
	},
};

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const navigation = [
	{ name: 'Apply', href: '/apply', current: true },
	{ name: 'Browse', href: '/browse', current: true },
	{ name: 'Sell', href: '/new-listing', current: false },
	{ name: 'Community', href: '/community', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '/profile' },
	{ name: 'Settings', href: '/settings' },
];

// function buttonClicked() {
// 	setCustomOpen((prev) => !prev);
// }

function MyLink(props) {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a
				{...rest}
				className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'
			>
				{children}
			</a>
		</Link>
	);
}

const Navbar = ({ name, email, image, signOut }) => (
	<Disclosure
		as='nav'
		className='bg-darkgray shadow-md shadow-[rgba(207,38,225,0.13)]'
	>
		{({ open }) => (
			<>
				<div className='max-w-9xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between py-2'>
						<div className='flex'>
							<div className='flex-shrink-0 flex items-center'>
								<Logo />
							</div>
						</div>
						<div className='flex items-center'>
							<NavbarSearch />
						</div>

						<div className='flex items-center'>
							<div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
								{navigation.map((item) => (
									<Link href={item.href} key={item.name}>
										<a
											key={item.name}
											className={classNames(
												item.current
													? 'uppercase text-offwhite hover:text-gray-400'
													: 'border-transparent uppercase text-offwhite hover:text-gray-400',
												'inline-flex items-center px-1 pt-1 text-md font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									</Link>
								))}
								{name ? (
									<Link href='#'>
										<a
											onClick={() => {
												signOut().catch(function (error) {
													console.log('issue signing out');
												});
											}}
											className='border-transparent uppercase text-offwhite hover:text-gray-400 inline-flex items-center px-1 pt-1 text-md font-medium'
										>
											Sign Out
										</a>
									</Link>
								) : (
									<>
										<Link href='/auth'>
											<a>
												<button
													type='button'
													className='border-transparent uppercase text-offwhite hover:text-gray-400 inline-flex items-center px-1 pt-1 text-md font-medium'
												>
													Sign in
												</button>
											</a>
										</Link>
									</>
								)}
							</div>
						</div>

						<div style={styles.container}>
							<div className='hidden sm:ml-6 sm:flex sm:items-center'>
								{/* <Link href='#'>
									<a>
										<button className='text-offwhite hover:text-purple-300 bordergradient'>
											Select Wallet
										</button>
									</a>
								</Link> */}
								<WalletConnect />
							</div>
						</div>
						<div className='-mr-2 flex items-center sm:hidden'>
							{/* Mobile menu button */}
							<Disclosure.Button className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
								<span className='sr-only'>Open main menu</span>
								{open ? (
									<XIcon className='block h-6 w-6' aria-hidden='true' />
								) : (
									<MenuIcon className='block h-6 w-6' aria-hidden='true' />
								)}
							</Disclosure.Button>
						</div>
					</div>
				</div>

				<Disclosure.Panel className='sm:hidden'>
					<div className='pt-4 pb-3 border-t border-gray-200'>
						<div className='mt-3 space-y-1'>
							{userNavigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
								>
									{item.name}
								</Disclosure.Button>
							))}
							<WalletConnect />
						</div>
					</div>
				</Disclosure.Panel>
			</>
		)}
	</Disclosure>
);

export default Navbar;
