import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function UpcomingLanuchCard({ dataItem, className }) {
  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${className || ''}`}>
      <div className="flex-shrink-0 bg-[#16151A]">
        <Image className="h-48 w-full object-cover" src={dataItem.imageUrl} alt="" width='400' height='400' />
        <span className="text-xl text-gray-100 px-3"><Link href={`/artwork/${1}`}>Baby Ape Social Club #2521</Link></span>
        <p className="text-base text-gray-100 flex items-center text-transparent bg-gradient bg-clip-text px-3 mb-3"><Icon icon="akar-icons:circle-check" className="text-gray-100 mr-2" /> Dreamland Monkeys</p>
      </div>
      <div className="flex-1 bg-[#222222] py-3 px-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-md mb-1">Current bid</p>
            <p className="text-gray-200 text-sm flex items-center gap-x-2">1.47 <Icon icon="cryptocurrency:bnb" /> </p>
          </div>
          <div>
            <p className="text-gray-600 text-md mb-1">Ending in</p>
            <p className="text-gray-200 text-sm flex items-center gap-x-2">52m 20s</p>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="button"
            className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-[#333030] text-base font-medium text-gray-300 sm:col-start-1 sm:text-sm"
          >
            Make Offer
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center shadow-sm px-4 py-2 bg-transparent text-gray-300 font-medium sm:mt-0 sm:col-start-2 sm:text-sm border-gradient rounded-lg"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}