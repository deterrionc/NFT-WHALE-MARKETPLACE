import React from 'react';
import Image from 'next/image';

export default function Custom404() {
	return (
		<div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
			<div className="sm:px-6 lg:px-28 gap-x-8 pt-40">
				<p className='text-gray-200 text-8xl font-bold text-center'>404</p>
				<p className='text-gray-400 text-center text-sm'>oooops ... nothing to see  here </p>

				<div className='flex justify-center mt-24'>
					<Image src="/assets/images/404.png" width={380} height={250} alt="" />
				</div>
			</div>
		</div>
	);
}
