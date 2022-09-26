import Link from 'next/link';
import React from 'react';

export default function ProfilePage() {
  return (
    <div className="relative pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8">
        <p className='text-md text-gray-200 uppercase text-center mt-36'>
          Connect wallet to see your profile page.
        </p>
        <div className='flex justify-center mt-8'>
          <button className='items-center px-5 py-2 border border-gray-200 text-md rounded-full shadow-sm text-white bg-transparent hover:bg-gradient hover:bg-clip-text focus:outline-none focus:ring-2 focus:ring-offset-2'>
            <Link href="/profile-page/BvabJkJxKtKBvabJkJxKtK1Jb4tZ">
              Select Wallet
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}