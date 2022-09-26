import React from 'react';
import Image from 'next/image';

export const CardsCollection = ({ collections, title, subtitle }) => {
	return (
		<div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
			<div className='space-y-12'>
				<div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
					<h2 className='text-offwhite text-3xl sm:text-4xl'>{title}</h2>
					<p className='text-xl text-gray-500'>{subtitle}</p>
				</div>
				<ul
					role='list'
					className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
				>
					{collections.map((collection) => (
						<li key={collection.name}>
							<div className='space-y-4'>
								<div className='aspect-w-3 aspect-h-2 '>
									<Image
										className='object-cover shadow-lg rounded-lg hover:opacity-90'
										src={collection.image}
										width='400'
										height='250'
										alt=''
									/>
								</div>

								<div className='space-y-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='text-offwhite'>{collection.name}</h3>
										<p className='text-indigo-400'>{collection.description}</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
