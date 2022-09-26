import React from 'react';
import { Icon } from '@iconify/react';

export default function Timer() {
  return (
    <div className='rounded-2xl py-8 px-12 bg-gradient-to-b from-blue-800 to-black-900'>
      <div className='flex'>
        <div className='w-2/5'>
          <div className='w-3/5'>
            <p className='text-gray-200 text-xl uppercase'>Starting bid</p>
            <p className='text-gray-200 text-6xl uppercase mt-6 flex gap-x-4 items-center'>
              0.5 <Icon icon="simple-icons:binance" className="text-5xl" />
            </p>
            <p className='text-gray-500 text-md flex gap-x-1 items-center mt-2'>
              Bid Increment: 1.00 <Icon icon="simple-icons:binance" />
            </p>
          </div>
        </div>

        <div className='w-3/5'>
          <div className='w-4/5'>
            <p className='text-gray-200 text-xl uppercase'>AUCTION STARTS IN</p>

            <div className='grid grid-cols-4 mt-6 gap-x-8'>
              <div>
                <p className='text-gray-200 text-6xl text-center'>03</p>
                <p className='text-gray-500 text-md text-center mt-2'>Hours</p>
              </div>
              <div>
                <p className='text-gray-200 text-6xl text-center'>45</p>
                <p className='text-gray-500 text-md text-center mt-2'>Minutes</p>
              </div>
              <div>
                <p className='text-gray-200 text-6xl text-center'>10</p>
                <p className='text-gray-500 text-md text-center mt-2'>Seconds</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}