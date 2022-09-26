import React from 'react';
import Image from 'next/image';
import useProfile from '../hooks/useProfile';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const { registerProfile } = useProfile();

  const handleSubmit = () => {
    registerProfile();
    router.push('/profile-page/BvabJkJxKtKBvabJkJxKtK1Jb4tZ');
  };
  return (
    <div className="relative pb-20 lg:pb-28 bg-dark-gradient bg-transparent bg-no-repeat">
      <div className="sm:px-6 lg:px-28 gap-x-8">
        <p className='text-4xl font-medium text-gray-200 pt-24 text-center'>Profile</p>

        <div className='flex gap-x-32 mt-16'>
          <div className='w-2/5'>
            <div>
              <label className='text-gray-200'>Display name*</label>
              <input
                name="max"
                id="max"
                className="focus:ring-[#2D2C33] focus:border-[#2D2C33] block w-full sm:text-sm border-[#2D2C33] rounded-md bg-[#2D2C33] py-2 px-3 text-gray-100 mt-2"
                placeholder='Victoria'
              />
            </div>

            <div className='mt-5'>
              <label className='text-gray-200'>User name*</label>
              <input
                name="max"
                id="max"
                className="focus:ring-[#2D2C33] focus:border-[#2D2C33] block w-full sm:text-sm border-[#2D2C33] rounded-md bg-[#2D2C33] py-2 px-3 text-gray-100 mt-2"
                placeholder='Victoria'
              />
            </div>

            <div className='mt-5'>
              <label className='text-gray-200'>Bio</label>
              <textarea
                name="max"
                id="max"
                className="focus:ring-[#2D2C33] focus:border-[#2D2C33] block w-full sm:text-sm border-[#2D2C33] rounded-md bg-[#2D2C33] py-2 px-3 text-gray-100 mt-2"
                placeholder='Victoria'
                rows={5}
              ></textarea>
            </div>
          </div>

          <div className='w-3/5 mt-8'>
            <div className='flex justify-center'>
              <Image src="/assets/images/wallet_mark.png" alt='' width={150} height={150} />
            </div>

            <div className='flex justify-center mt-8'>
              <button className='items-center px-12 py-2 border border-gray-200 text-md rounded-lg shadow-sm text-white bg-transparent hover:bg-gradient hover:bg-clip-text focus:outline-none focus:ring-2 focus:ring-offset-2'>
                Upload
              </button>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <div className='w-2/5'>
            <button
              className="w-full items-center justify-center px-8 py-2 font-medium rounded-md text-gray-900 bg-gradient"
              onClick={handleSubmit}
            >Submit</button>
          </div>
        </div>
      </div >
    </div >
  );
}