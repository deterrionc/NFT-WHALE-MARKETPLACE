import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useProfile from '../../../hooks/useProfile';
import Tabs from './Tabs';

export default function ProfileDetail() {
  const { isRegistered } = useProfile();

  return (
    <div className="relative pb-20 lg:pb-28 bg-dark-gradient bg-transparent bg-no-repeat">
      <div className="sm:px-6 lg:px-28 gap-x-8">
        {/* HeroSection */}
        <div className="pt-28">
          <div className='flex justify-center'>
            <Image src={`/assets/images/${isRegistered ? 'empty_avatar' : 'wallet_mark'}.png`} alt='' width={150} height={150} />
          </div>

          {
            isRegistered ? (
              <div className='mt-8'>
                <div className='flex justify-center gap-x-4'>
                  <p className='text-gray-200 uppercase text-xl'>Victoria</p>
                  <p className='bg-gradient bg-clip-text text-transparent font-medium text-xl'>@victoria</p>
                </div>

                <div className='flex justify-center mt-5'>
                  <div className='bg-[#2D2C33] text-gray-500 rounded-lg px-2 py-1 text-sm'>
                    BvabJkJxKtKBvabJkJxKtK1Jb4tZ
                  </div>
                </div>

                <div className='flex justify-center mt-5'>
                  <button className='items-center px-12 py-2 border border-gray-200 text-md rounded-lg shadow-sm text-white bg-transparent hover:bg-gradient hover:bg-clip-text focus:outline-none focus:ring-2 focus:ring-offset-2'>
                    <Link href="/register">
                      Edit profile
                    </Link>
                  </button>
                </div>

                <div className='mx-auto max-w-xl mt-5'>
                  <p className='text-center text-sm text-gray-200'>
                    The Baby Ape Social Club is a limited collection of Baby Apes that reside on Dab Island in the heart of the Bermuda Triangle. With the help of Micho Toshi, a former Hollywood
                  </p>
                </div>
              </div>
            ) : (
              <div className='flex justify-center mt-8'>
                <button className='items-center px-12 py-2 border border-gray-200 text-md rounded-lg shadow-sm text-white bg-transparent hover:bg-gradient hover:bg-clip-text focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  <Link href="/register">
                    Register
                  </Link>
                </button>
              </div>
            )
          }

          <div className={`w-1/6 ${isRegistered ? 'mt-16' : 'mt-32'} p-4 bg-[#1B2331] rounded-lg`}>
            <p className="text-gray-300 text-md text-center uppercase">Total floor value</p>
            <p className="text-gray-200 text-md text-center uppercase font-medium">--- BNB</p>
          </div>
        </div >

        <Tabs />
      </div >
    </div >
  );
}