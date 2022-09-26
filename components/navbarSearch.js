import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
export default function NavbarSearch() {
	return (
		<div className='max-w-2xl w-full lg:max-w-lg border-gradient'>
			<label htmlFor='search' className='sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
					<SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
				</div>
				<input
					id='search'
					name='search'
					className='block w-full pl-12 pr-6 py-2 border border-transparent leading-5 bg-black text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:border-indigo-800 focus:ring-indigo-800 focus:text-gray-200 sm:text-sm'
					placeholder='Search Collection'
					type='search'
				/>
			</div>
		</div>
	);
}
