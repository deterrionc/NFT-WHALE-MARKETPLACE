import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import AttributesFilter from '../../components/filters/AttributesFilter';
import PriceFilter from '../../components/filters/PriceFilter';
import { Icon } from '@iconify/react';
import UpcomingLanuchCard from '../../components/UpcomingLanuchCard';

const data = [
  { imageUrl: '/assets/images/whale1.png' },
  { imageUrl: '/assets/images/whale2.png' },
  { imageUrl: '/assets/images/whale3.png' },
  { imageUrl: '/assets/images/whale4.png' },
  { imageUrl: '/assets/images/whale5.png' },
  { imageUrl: '/assets/images/whale6.png' },
  { imageUrl: '/assets/images/whale7.png' },
  { imageUrl: '/assets/images/whale8.png' },
  { imageUrl: '/assets/images/whale9.png' },
  { imageUrl: '/assets/images/whale10.png' },
  { imageUrl: '/assets/images/whale11.png' },
  { imageUrl: '/assets/images/whale12.png' },
  { imageUrl: '/assets/images/whale13.png' },
  { imageUrl: '/assets/images/whale14.png' },
  { imageUrl: '/assets/images/whale15.png' },
  { imageUrl: '/assets/images/whale16.png' },
];

export default function Items() {
  const [gridCols, setGridCols] = useState(4);

  const handleGridCols = (tempGridCols) => {
    setGridCols(tempGridCols);
  };

  return (
    <div className='pt-6'>
      <p className="text-gray-100 text-sm pt-4 pb-2">Filters</p>
      <div className='flex gap-x-12'>
        <div className="w-1/4">
          <PriceFilter />
          <AttributesFilter />
        </div>
        <div className="w-3/4">
          <div className="flex gap-x-8">

            <div className='w-3/5'>
              {/* Search field */}
              <div className='w-full'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                  </div>
                  <input
                    id='search'
                    name='search'
                    className='block w-full pl-12 pr-6 py-3 border border-transparent leading-5 bg-[#2D2C33] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:border-indigo-800 focus:ring-indigo-800 focus:text-gray-200 sm:text-sm rounded-lg'
                    placeholder='Search Collection'
                    type='search'
                  />
                </div>
              </div>
            </div>

            <div className='w-2/5'>
              <div className='flex justify-between items-center'>
                <div>
                  <Icon icon="ci:refresh-02" className='text-2xl text-gray-200' />
                </div>

                <div className='w-3/5'>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-gray-100 focus:outline-none sm:text-sm rounded-md bg-[#2D2C33] border-[#2D2C33] focus:border-[#2D2C33]"
                    defaultValue="Price: Low to high"
                  >
                    <option>Price: Low to high</option>
                  </select>
                </div>

                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-[#2D2C33] text-sm font-medium text-gray-500 hover:text-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#16151A] focus:border-[#16151A] focus:text-gray-200"
                    onClick={() => handleGridCols(4)}
                  >
                    <Icon icon="bi:grid-fill" className='text-3xl' />
                  </button>
                  <button
                    type="button"
                    className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md bg-[#2D2C33] text-sm font-medium text-gray-500 hover:text-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#16151A] focus:border-[#16151A] focus:text-gray-200"
                    onClick={() => handleGridCols(6)}
                  >
                    <Icon icon="bi:grid-3x3-gap-fill" className='text-3xl' />
                  </button>
                </span>
              </div>
            </div>
          </div>
          {
            gridCols === 4 ? (
              <div className="mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
                {data.map((dataItem, index) => (
                  <UpcomingLanuchCard key={index} dataItem={dataItem} />
                ))}
              </div>
            ) : (
              <div className="mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-6 lg:max-w-none">
                {data.map((dataItem, index) => (
                  <UpcomingLanuchCard key={index} dataItem={dataItem} />
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

