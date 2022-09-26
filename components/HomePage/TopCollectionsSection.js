import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const data = {
  title: 'Chimpanzee Tribe',
  bnb: '25 135,98',
  imageUrl: '/assets/images/cookMonkey_smallSize.png',
  percent: 45.28
};

export default function TopCollectionsSection() {
  return (
    <div className="relative max-w-[100rem] mx-auto">
      <div className="text-center flex justify-center items-baseline">
        <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl ml-40">Top Collections</h2>
        <span className="text-[#4E6AFF] text-sm ml-12">over last 7 days </span>
        <Icon icon="ep:arrow-down-bold" className="text-[#4E6AFF] text-lg pt-2" />
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <li key={item} className="col-span-1 bg-[#16151A] rounded-lg shadow divide-y divide-gray-200">
              <div className="w-full flex items-center justify-between py-6 pr-6 pl-3 space-x-6">
                <span className="text-gray-100 mr-5">{item + 1}</span>
                <Image className="bg-gray-300 rounded-md flex-shrink-0" width="60" height="60" src={data.imageUrl} alt="" />
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-100 text-sm font-medium truncate">{data.title}</h3>
                  </div>
                  <div className="flex items-center gap-x-2 text-gray-100 text-sm mt-1 truncate">
                    <Icon icon="cryptocurrency:bnb" className="mb-1" />
                    <p>{data.bnb}</p>
                  </div>
                </div>
                <p className="mt-1 text-[#6FCF97] text-sm truncate">+{data.percent}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}