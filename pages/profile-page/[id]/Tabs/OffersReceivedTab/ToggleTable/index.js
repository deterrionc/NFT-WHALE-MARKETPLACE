import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Table from './Table';

export default function ToggleTable() {
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
          <p className="text-[#4E6AFF] text-xl uppercase">
            FLOOR PRICE : 0.94 BNB
          </p>
          <p className="text-[#4E6AFF] text-xl uppercase">
            TOTAL FLOOR VALUE : 0.94 BNB
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
            <Table />
          </div>
        )
      }
    </>
  );
}