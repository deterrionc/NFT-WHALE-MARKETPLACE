import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function SellNftCard({ dataItem, className }) {
  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden p-5 ${className || ''} border border-gray-800`}>
      <div className="flex-shrink-0 bg-transparent">
        <Image className="h-48 w-full object-cover rounded-md" src={dataItem.imageUrl} alt="" width='400' height='400' />
        <span className="text-xl text-gray-100 px-3"><Link href={`/artwork/${1}`}>Baby Ape Social Club #2521</Link></span>
        <p className="text-base text-gray-100 flex items-center text-transparent bg-gradient bg-clip-text px-3 mb-3">
          <Icon icon="akar-icons:circle-check" className="text-gray-100 mr-2" />
          Dreamland Monkeys
        </p>
        <p className="text-base text-gray-100 flex items-center text-transparent bg-gradient bg-clip-text px-3 mb-3">
          <Icon icon="simple-icons:binance" className="text-gray-100 mr-2" />
          1.47
        </p>
      </div>
      <div className="flex-1 bg-tranparent py-3 px-4 flex flex-col justify-between">
        <div className='mt-5'>
          <button
            type="button"
            className="w-full inline-flex justify-center shadow-sm px-4 py-2 bg-transparent text-gray-300 font-medium sm:mt-0 sm:col-start-2 sm:text-sm border-gradient rounded-lg"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}