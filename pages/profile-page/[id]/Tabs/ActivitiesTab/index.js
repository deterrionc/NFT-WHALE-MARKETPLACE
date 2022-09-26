import Image from 'next/image';
import React from 'react';
import useProfile from '../../../../../hooks/useProfile';
import Table from './Table';

export default function ActivitiesTab() {
  const { isRegistered } = useProfile();
  return (
    <div className='bg-[#16151A] bg-opacity-60 p-5 mt-8 min-h-[45rem]'>
      {
        isRegistered ? (
          <Table />
        ) : (
          <div className='mt-48'>
            <p className='text-gray-200 text-md uppercase text-center'>No activities yet</p>
            <div className='flex justify-center mt-8'>
              <Image src="/assets/images/no_doc.png" alt='' width={150} height={160} />
            </div>
          </div>
        )
      }
    </div>
  );
}