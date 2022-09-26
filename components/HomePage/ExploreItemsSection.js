import React from 'react';
import UpcomingLanuchCard from '../UpcomingLanuchCard';

const data = [
  {
    imageUrl: '/assets/images/nft14.png'
  },
  {
    imageUrl: '/assets/images/nft15.png'
  },
  {
    imageUrl: '/assets/images/nft16.png'
  },
  {
    imageUrl: '/assets/images/nft17.png'
  },
  {
    imageUrl: '/assets/images/nft18.png'
  },
  {
    imageUrl: '/assets/images/nft19.png'
  },
  {
    imageUrl: '/assets/images/nft20.png'
  },
  {
    imageUrl: '/assets/images/nft21.png'
  },
  {
    imageUrl: '/assets/images/nft22.png'
  },
  {
    imageUrl: '/assets/images/nft23.png'
  },
  {
    imageUrl: '/assets/images/nft24.png'
  },
  {
    imageUrl: '/assets/images/nft25.png'
  },
];
export default function ExploreItemsSection() {
  return (
    <div className="relative bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-black h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">Explore Items</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {data.map((dataItem, index) => (
            <UpcomingLanuchCard key={index} dataItem={dataItem} />
          ))}
        </div>
      </div>
    </div>
  );
}