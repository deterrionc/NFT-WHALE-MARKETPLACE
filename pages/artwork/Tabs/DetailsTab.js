import React from 'react';

const data = [
  {
    name: 'Mint address',
    value: 'qRCrqPmhCVTkb6oqKBeXm7YMHMToYHxUMCrAjEa8CY1'
  },
  {
    name: 'Token address',
    value: 'qRCrqPmhCVTkb6oqKBeXm7YMHMToYHxUMCrAjEa8CY1'
  },
  {
    name: 'Owner',
    value: 'qRCrqPmhCVTkb6oqKBeXm7YMHMToYHxUMCrAjEa8CY1'
  },
  {
    name: 'Artist Royalities',
    value: '7.2%'
  },
  {
    name: 'Transaction Fee',
    value: '2%'
  },
  {
    name: 'Listing/Bidding/Cancel',
    value: 'Free'
  }
];

export default function DetailsTab() {
  return (
    <div className='bg-[#16151A] bg-opacity-60 p-5 mt-8 h-[45rem]'>
      {
        data.map((dataItem, index) => (
          <div key={index} className='flex items-center gap-x-6 text-xl mt-3'>
            <div className='w-1/6'>
              <p className='text-gray-200 font-medium'>{dataItem.name}</p>
            </div>
            <div className='w-5/6'>
              <p className='text-gray-200 '>{dataItem.value}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}