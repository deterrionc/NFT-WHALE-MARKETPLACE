import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';

export default function PriceFilter() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <>
      <button className={`inline-flex justify-between w-full rounded-t-md ${!opened && 'rounded-b-md'} px-4 py-3 bg-[#2D2C33] text-sm text-gray-100`} onClick={handleOpened}>
        <p className="flex items-center gap-x-3 text-gray-100"><Icon icon="ant-design:tag-filled" />
          Price filter</p>
        {opened ? (
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {
        opened && (
          <div className="w-full bg-[#222222] p-4 rounded-b-md">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-gray-100 focus:outline-none sm:text-sm rounded-md bg-[#2D2C33] border-[#2D2C33] focus:border-[#2D2C33]"
              defaultValue="BNB"
            >
              <option>BNB</option>
            </select>
            <div className="mt-5 flex items-center">
              <div className="w-2/5">
                <input
                  name="min"
                  id="min"
                  className="focus:ring-[#2D2C33] focus:border-[#2D2C33] block w-full sm:text-sm border-[#2D2C33] rounded-md bg-[#2D2C33] py-2 px-3 text-gray-100"
                  placeholder="Min"
                />
              </div>
              <div className="w-1/5 flex justify-center">
                <span className="text-gray-100">to</span>
              </div>
              <div className="w-2/5">
                <input
                  name="max"
                  id="max"
                  className="focus:ring-[#2D2C33] focus:border-[#2D2C33] block w-full sm:text-sm border-[#2D2C33] rounded-md bg-[#2D2C33] py-2 px-3 text-gray-100"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="w-full inline-flex justify-center shadow-sm px-4 py-2 bg-transparent text-gray-300 font-medium sm:mt-0 sm:col-start-2 sm:text-sm border-gradient rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
        )
      }

    </>
  );
}