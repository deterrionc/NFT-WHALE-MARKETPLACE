import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import SellNftCard from '../../../../../components/SellNftICart';

const data = [
  { imageUrl: '/assets/images/whale17.png' },
  { imageUrl: '/assets/images/whale18.png' },
  { imageUrl: '/assets/images/whale19.png' },
  { imageUrl: '/assets/images/whale20.png' },
  { imageUrl: '/assets/images/whale21.png' }
];
export default function ToggleNftGroup() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
      <button className={`inline-flex justify-between items-center w-full rounded-md px-4 py-3 bg-[#2D2C33] text-sm text-gray-100 mt-3`} onClick={handleOpened}>
        <div className='flex items-center gap-x-4'>
          <Image src="/assets/images/nft_detail_tiny.png" alt='' width={80} height={60} />
          <p className="text-gray-100 text-xl">
            Chimpanzee Tribe
          </p>
        </div>

        <div className='flex items-center'>
          <p className='text-lg text-gray-200'>See All</p>
          {opened ? (
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          ) : (
            <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          )}
        </div>
      </button>
      {
        opened && (
          <div className="w-full bg-transparent pt-4 rounded-b-md">
            <div className="flex gap-2">
              {
                data.map((dataItem, index) => (
                  <SellNftCard dataItem={dataItem} key={index} />
                ))
              }
            </div>
          </div>
        )
      }
    </>
  );
}