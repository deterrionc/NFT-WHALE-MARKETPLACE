import React from "react";
import ArtCard from "../../components/ArtCard";

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
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft8.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft9.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft10.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft11.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft12.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft13.png'
  },
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
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft8.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft9.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft10.png'
  },
];

export default function CollectionsTab() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mt-12">
        <div className="w-1/6">
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-3 text-gray-100 focus:outline-none sm:text-sm rounded-md bg-[#2D2C33] border-[#2D2C33] focus:border-[#2D2C33]"
            defaultValue="Price: Low to high"
          >
            <option>Price: Low to high</option>
          </select>
        </div>
        <div className="w-1/6">
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-3 text-gray-100 focus:outline-none sm:text-sm rounded-md bg-[#2D2C33] border-[#2D2C33] focus:border-[#2D2C33]"
            defaultValue="Date Listed: Newest"
          >
            <option>Date Listed: Newest</option>
          </select>
        </div>
      </div>

      <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {
          data.map((dataItem, index) => (
            <ArtCard key={index} dataItem={dataItem} />
          ))
        }
      </div>
    </div>
  );
}