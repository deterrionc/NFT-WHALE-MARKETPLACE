import React from 'react';

export default function TitleSection() {
  return (
    <div>
      <p className='text-6xl text-gray-200 text-center uppercase'>Top Collections</p>
      <p className='text-lg text-gray-200 text-center uppercase mt-5'>Top NFT Collections on VAULT3D</p>
      <div className='mx-auto max-w-5xl mt-12'>
        <div className='grid grid-cols-3 gap-x-6'>
          <div>
            <select
              id="days"
              name="days"
              className="mt-1 block w-full pl-3 pr-10 py-3 text-gray-100 bg-transparent border-gradient"
              defaultValue="Last 90 days"
            >
              <option className='bg-[#222222]'>Last 90 days</option>
              <option className='bg-[#222222]'>Last 60 days</option>
              <option className='bg-[#222222]'>Last 30 days</option>
            </select>
          </div>

          <div>
            <select
              id="categories"
              name="categories"
              className="mt-1 block w-full pl-3 pr-10 py-3 text-gray-100 bg-transparent border-gradient"
              defaultValue="All categories"
            >
              <option hidden>All categories</option>
              <option className='bg-[#222222]'>Category 1</option>
              <option className='bg-[#222222]'>Category 2</option>
              <option className='bg-[#222222]'>Category 3</option>
            </select>
          </div>

          <div>
            <select
              id="chains"
              name="chains"
              className="mt-1 block w-full pl-3 pr-10 py-3 text-gray-100 bg-transparent border-gradient"
              defaultValue="All chains"
            >
              <option hidden>All chains</option>
              <option className='bg-[#222222]'>Chain 1</option>
              <option className='bg-[#222222]'>Chain 2</option>
              <option className='bg-[#222222]'>Chain 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}