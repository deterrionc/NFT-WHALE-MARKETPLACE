import React from 'react';
import Image from 'next/image';

export default function ArtCard({ dataItem, className }) {
  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${className || ''}`} >
      <div className="flex-shrink-0">
        <Image className="h-48 w-full object-cover" src={dataItem.imageUrl} alt="" width='500' height='300' />
      </div>
      <div className="flex-1 bg-[#16151A] p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a href={dataItem.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-100">{dataItem.title}</p>
            <p className="mt-3 text-base text-gray-100">{dataItem.description}</p>
          </a>
        </div>
      </div>
    </div >
  );
}