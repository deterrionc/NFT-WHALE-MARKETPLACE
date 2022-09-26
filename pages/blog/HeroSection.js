import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <div>
      <p className='text-5xl text-gray-200 uppercase font-medium'>The Blog</p>
      <div className='flex justify-between items-center gap-x-8 mt-8'>
        <div className='w-3/5'>
          <Image src="/assets/images/cover.png" alt="" width={980} height={573} />
        </div>

        <div className='w-2/5'>
          <p className='text-gray-200 text-lg'>8 January, 2022</p>
          <p className='text-5xl text-gray-200 mt-8 leading-relaxed'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....
          </p>
          <p className='text-md text-gray-200 mt-8'>
            The Baby Ape Social Club is a limited collection of Baby Apes that reside on Dab Island in the heart of the Bermuda Triangle. With the help of Micho Toshi, a former Hollywood executive and current  The Baby Ape Social Club is a limited collection of Baby Apes that reside on Dab Island in the heart of the Bermuda Triangle. With the....
          </p>
        </div>
      </div>
    </div>
  );
}