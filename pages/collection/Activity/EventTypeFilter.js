import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';

const buttonTexts = [
  'Buy Now',
  'On Auction',
  'New',
  'Has Offers',
];

export default function EventTypeFilter({ setVisibleChart, visibleChart }) {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <>
      <button className={`inline-flex justify-between w-full rounded-t-md ${!opened && 'rounded-b-md'} px-4 py-3 bg-[#2D2C33] text-sm text-gray-100`} onClick={handleOpened}>
        <p className="flex items-center gap-x-3 text-gray-100">
          <Icon icon="whh:barchartasc" />
          Event Type
        </p>
        {opened ? (
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {
        opened && (
          <div className="w-full bg-[#222222] p-4 rounded-b-md">
            <div className="grid grid-cols-2 gap-2">
              {buttonTexts.map((buttonText, index) => (
                <div key={index}>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm border border-transparent rounded-md text-gray-100 bg-[#2D2C33] hover:bg-gray-800 w-full"
                    onClick={() => setVisibleChart(!visibleChart)}
                  >
                    {buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      }

    </>
  );
}