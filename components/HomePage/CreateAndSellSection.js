import React from 'react';
import Image from 'next/image';

const data = [
  {
    title: 'Setup your wallet',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ',
    src: '/assets/images/gifs1.png'
  },
  {
    title: 'Create your collection',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ',
    src: '/assets/images/gifs2.png'
  },
  {
    title: 'Add you NFTs',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ',
    src: '/assets/images/gifs3.png'
  },
  {
    title: 'Listed items for sale',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ',
    src: '/assets/images/gifs4.png'
  }
];
export default function CreateAndSellSection() {
  return (
    <div className="relative bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-black h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">Create and Sell NFT's</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {data.map((dataItem, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" src={dataItem.src} alt="" width='400' height='400' />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={dataItem.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-100">{dataItem.title}</p>
                    <p className="mt-3 text-base text-gray-100">{dataItem.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}