import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';

const categories = [
  {
    name: 'new',
    icon: <Icon icon="foundation:burst-new" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'art',
    icon: <Icon icon="ic:baseline-palette" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'collectibles',
    icon: <Icon icon="bx:bx-box" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'music',
    icon: <Icon icon="bx:bxs-music" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'photography',
    icon: <Icon icon="bx:bx-box" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'trading cards',
    icon: <Icon icon="emojione-monotone:glowing-star" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'utility',
    icon: <Icon icon="entypo:wallet" className="text-[#4E6AFF] text-3xl" />
  },
  {
    name: 'casino',
    icon: <Icon icon="bi:patch-plus-fill" className="text-[#4E6AFF] text-3xl" />
  }
];

export default function ChainsFilter() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <>
      <button className={`inline-flex justify-between w-full rounded-t-md ${!opened && 'rounded-b-md'} px-4 py-3 bg-[#2D2C33] text-sm text-gray-100 mt-3`} onClick={handleOpened}>
        <p className="flex items-center gap-x-3 text-gray-100">
          <Icon icon="ant-design:tag-filled" />
          Chains
        </p>
        {opened ? (
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {
        opened && (
          <div className="w-full bg-[#222222] py-4 px-8 rounded-b-md">
            <div className="grid grid-cols-1 gap-4">
              <p className="flex items-center gap-x-2 text-gray-100">
                <Icon icon="simple-icons:binance" /> Binance
              </p>
              <p className="text-gray-100">Coming soon...</p>
              <p className="text-gray-100">Coming soon...</p>
            </div>
          </div>
        )
      }
    </>
  );
}