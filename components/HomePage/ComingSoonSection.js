import React from 'react';
import ArtCard from '../ArtCard';

const data = [
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft1.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft2.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft3.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft4.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft5.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft6.png'
  }
];
export default function ComingSoonSection() {
  return (
    <div className="relative bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-black h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">Coming Soon</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data.map((dataItem, index) => (
            <ArtCard key={index} dataItem={dataItem} />
          ))}
        </div>
      </div>
    </div>
  );
}