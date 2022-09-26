import React from 'react';

export default function AttributesTab() {
  return (
    <div className='bg-[#16151A] bg-opacity-60 p-5 mt-8 h-[45rem]'>
      <div className='grid grid-cols-6 gap-6'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
            <div key={item} className='bg-[#1B2331] rounded-lg p-5'>
              <p className='text-gray-200 text-lg uppercase'>face</p>
              <p className='text-gray-200 text-lg font-medium uppercase'>0.59 BNB</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}