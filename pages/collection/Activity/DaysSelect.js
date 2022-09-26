import { Icon } from '@iconify/react';
import React, { useState } from 'react';

export default function DaysSelect() {
  const [days, setDays] = useState(90);
  const [tags, setTags] = useState(['Listing', 'Sales', 'Bids', 'Transfers']);

  const handleRemoveTag = (index) => {
    const cloneTags = [ ...tags ];
    cloneTags.splice(index, 1);
    setTags(cloneTags);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-6">
        <div>
          <select
            id="days"
            name="days"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-gray-100 focus:outline-none sm:text-sm rounded-md bg-[#2D2C33] border-[#2D2C33] focus:border-[#2D2C33]"
            onChange={(e) => setDays(Number(e.target.value))}
            value={days}
          >
            <option value='90'>Last 90 days</option>
            <option value='60'>Last 60 days</option>
          </select>
        </div>
        <div className="w-full p-3 bg-[#1B2331] rounded-md">
          <p className='text-md text-gray-100'>{days} Day Avg, Price</p>
          <p className='text-md font-semibold text-gray-100 mt-1'>4.4132</p>
        </div>
        <div className="w-full p-3 bg-[#1B2331] rounded-md">
          <p className='text-md text-gray-100'>{days} Day Avg, Price</p>
          <p className='text-md font-semibold text-gray-100 mt-1'>23 367.815</p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-x-6 mt-6">
        {
          tags.map((tag, index) => (
            <div key={index} className='px-3 py-2 flex justify-between items-center bg-[#2D2C33] text-gray-100 text-md rounded-md'>
              {tag} <Icon icon="akar-icons:cross" className='cursor-pointer' onClick={() => handleRemoveTag(index)} />
            </div>
          ))
        }
        <div className="px-3 py-2 flex justify-between items-center border border-[#2D2C33] text-gray-100 text-md rounded-md">
          Close all <Icon icon="akar-icons:cross" className="cursor-pointer" onClick={() => setTags([])} />
        </div>
      </div>
    </div>
  );
}