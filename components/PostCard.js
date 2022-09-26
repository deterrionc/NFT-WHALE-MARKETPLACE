import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ dataItem, className }) {
  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden px-3 ${className || ''}`}>
      <div className="flex-shrink-0">
        <Image className="h-48 w-full object-cover" src={dataItem.imageUrl} alt="" width='500' height='300' />
      </div>
      <div className="flex-1 bg-transparent p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-lg text-gray-100">{dataItem.date}</p>

          <p className="text-xl font-semibold text-gray-100">
            <Link href={dataItem.href} className="block mt-4">
              {dataItem.title}
            </Link>
          </p>

          <p className="mt-3 text-base text-gray-100">{dataItem.description}</p>

        </div>
      </div>
    </div>
  );
}