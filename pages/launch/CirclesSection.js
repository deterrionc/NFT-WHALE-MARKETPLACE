import React from 'react';
import Image from 'next/image';

export default function CriclesSection() {
  return (
    <div className='mt-24'>
      <div className='grid grid-cols-2 items-center relative'>
        <div className='flex justify-end'>
          <div>
            <p className='text-gray-200 font-medium text-5xl text-center'>
              Vault3D Launchpad
            </p>
            <div className='flex justify-center mt-4'>
              <div className='w-3/5'>
                <button className='w-full bg-transparent border-gradient text-gray-300 p-2'>Launch Your Collection</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image src="/assets/images/circles.png" alt="" width={908.49} height={716.26} className='object-contain mr-28' />
        </div>
      </div>
    </div>
  );
}