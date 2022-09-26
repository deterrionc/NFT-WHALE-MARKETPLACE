import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';
import 'tailwind-scrollbar';

export default function SubFilter({ dataItem }) {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <div>
      <button className={`inline-flex justify-between w-full rounded-t-md ${!opened && 'rounded-b-md'} px-4 py-3 bg-[#2D2C33] text-sm text-gray-100 mt-3`} onClick={handleOpened}>
        <p className="flex items-center gap-x-3 text-gray-100 capitalize">
          <Icon icon="si-glyph:hat" />
          {dataItem.title}
        </p>
        {opened ? (
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {
        opened && (
          <div className="w-full bg-[#333333] p-4 rounded-b-md h-64 overflow-y-scroll">
            <div className="grid grid-cols-1 gap-2">
              {dataItem.subData.map((subDataItem, index) => (
                <div key={index} className="w-full bg-[#2D2C33] px-3 py-2 flex justify-between items-center rounded-lg hover:text-indigo-400 text-gray-300 cursor-pointer">
                  <span className='capitalize'>{subDataItem.name}</span>
                  <span className='uppercase'>{subDataItem.value}</span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
}