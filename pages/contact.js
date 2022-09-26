import { useState } from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';

const Contact = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState('Send');

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors['fullname'] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors['email'] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors['subject'] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors['message'] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log('errors', errors);
		return isValid;
	};

	//   Handling form submit

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText('Sending');
			const res = await fetch('/api/sendgrid', {
				body: JSON.stringify({
					email: email,
					fullname: fullname,
					subject: subject,
					message: message,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText('Send');
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			// setButtonText('Send');
		}
	};
	function toggle() {
		setShowSuccessMessage(!showSuccessMessage);
	}

	return (
		<div>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='relative bg-gray-800 shadow-xl'>
					<h2 className='sr-only'>Contact us</h2>

					<div className='grid grid-cols-1 lg:grid-cols-3'>
						{/* Contact information */}
						<div className='relative overflow-hidden py-10 px-6 bg-indigo-900 sm:px-10 xl:p-12'>
							<div
								className='absolute inset-0 pointer-events-none sm:hidden'
								aria-hidden='true'
							>
								<svg
									className='absolute inset-0 w-full h-full'
									width={343}
									height={388}
									viewBox='0 0 343 388'
									fill='none'
									preserveAspectRatio='xMidYMid slice'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
										fill='url(#linear1)'
										fillOpacity='.1'
									/>
									<defs>
										<linearGradient
											id='linear1'
											x1='254.553'
											y1='107.554'
											x2='961.66'
											y2='814.66'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#fff' />
											<stop offset={1} stopColor='#fff' stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
								aria-hidden='true'
							>
								<svg
									className='absolute inset-0 w-full h-full'
									width={359}
									height={339}
									viewBox='0 0 359 339'
									fill='none'
									preserveAspectRatio='xMidYMid slice'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
										fill='url(#linear2)'
										fillOpacity='.1'
									/>
									<defs>
										<linearGradient
											id='linear2'
											x1='192.553'
											y1='28.553'
											x2='899.66'
											y2='735.66'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#fff' />
											<stop offset={1} stopColor='#fff' stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
								aria-hidden='true'
							>
								<svg
									className='absolute inset-0 w-full h-full'
									width={160}
									height={678}
									viewBox='0 0 160 678'
									fill='none'
									preserveAspectRatio='xMidYMid slice'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
										fill='url(#linear3)'
										fillOpacity='.1'
									/>
									<defs>
										<linearGradient
											id='linear3'
											x1='192.553'
											y1='325.553'
											x2='899.66'
											y2='1032.66'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#fff' />
											<stop offset={1} stopColor='#fff' stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className='text-lg font-medium text-white'>
								Contact Our Team
							</h3>
							<p className='mt-6 text-base text-indigo-50 max-w-3xl'>
								We are here to help! Drop a line and we will get back to you as
								soon as possible. Our team works around the clock to ensure our
								users are well taken care of.
							</p>
							<dl className='mt-8 space-y-6'>
								<dt>
									<span className='sr-only'>Email</span>
								</dt>
								<dd className='flex text-base text-indigo-50'>
									<MailIcon
										className='flex-shrink-0 w-6 h-6 text-indigo-200'
										aria-hidden='true'
									/>
									<span className='ml-3'>info@getVAULT3D.com</span>
								</dd>
							</dl>
							<ul role='list' className='mt-8 flex space-x-12'>
								<li>
									<a
										className='text-indigo-200 hover:text-indigo-100'
										href='https://t.me/vault3d'
										target='_blank'
										rel='noreferrer'
									>
										<span className='sr-only'>Telegram</span>
										<svg
											fill='currentColor'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 27 27'
											width={24}
											height={24}
											className='w-6 h-6 relative -top-[2px]'
											aria-hidden='true'
										>
											<path d='M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z' />
										</svg>
									</a>
								</li>
								<li>
									<a
										className='text-indigo-200 hover:text-indigo-100'
										href='https://twitter.com/vault3d'
										target='_blank'
										rel='noreferrer'
									>
										<span className='sr-only'>Twitter</span>
										<svg
											width={24}
											height={24}
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											aria-hidden='true'
										>
											<path
												d='M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209'
												fill='currentColor'
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>

						{/* Contact form */}
						<div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
							<h3 className='text-lg font-medium text-white'>
								Send us a message
							</h3>
							<form
								onSubmit={handleSubmit}
								className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
							>
								<div className=''>
									<label
										htmlFor='full-name'
										className='block text-sm font-medium text-offwhite'
									>
										Full Name
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='full-name'
											id='full-name'
											autoComplete='given-name'
											value={fullname}
											onChange={(e) => {
												setFullname(e.target.value);
											}}
											className='bg-darkgray py-3 px-4 block w-full shadow-sm text-offwhite focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-offwhite'
									>
										Email
									</label>
									<div className='mt-1'>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
											}}
											className='bg-darkgray py-3 px-4 block w-full shadow-sm text-offwhite focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-offwhite'
									>
										Subject
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='subject'
											id='subject'
											value={subject}
											onChange={(e) => {
												setSubject(e.target.value);
											}}
											className='bg-darkgray py-3 px-4 block w-full shadow-sm text-offwhite focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<div className='flex justify-between'>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-offwhite'
										>
											Message
										</label>
										<span id='message-max' className='text-sm text-gray-500'>
											Max. 500 characters
										</span>
									</div>
									<div className='mt-1'>
										<textarea
											id='message'
											name='message'
											rows={4}
											value={message}
											onChange={(e) => {
												setMessage(e.target.value);
											}}
											className='bg-darkgray py-3 px-4 block w-full shadow-sm text-offwhite focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
											aria-describedby='message-max'
										/>
									</div>
								</div>
								<div className='sm:col-span-2 sm:flex sm:justify-end'>
									<button
										type='submit'
										className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				{showSuccessMessage ? (
					<div className='rounded-md bg-green-50 p-4 mt-4' id='successmessage'>
						<div className='flex'>
							<div className='flex-shrink-0'>
								<CheckCircleIcon
									className='h-5 w-5 text-green-400'
									aria-hidden='true'
								/>
							</div>
							<div className='ml-3'>
								<p className='text-sm font-medium text-green-800'>
									Successfully submitted
								</p>
							</div>
							<div className='ml-auto pl-3'>
								<div className='-mx-1.5 -my-1.5'>
									<button
										type='button'
										onClick={toggle}
										className='inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'
									>
										<span className='sr-only'>Dismiss</span>
										<XIcon className='h-5 w-5' aria-hidden='true' />
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<p></p>
				)}
			</div>
		</div>
	);
};

export default Contact;
