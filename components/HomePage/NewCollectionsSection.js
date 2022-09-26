import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    imageUrl: '/assets/images/nft7.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft3.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft1.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft7.png'
  },
  {
    title: 'Chimpanzee Tribe',
    description: '555 Chimpanzees living in the forest of the metaverse!',
    imageUrl: '/assets/images/nft3.png'
  },
];
export default function NewCollectionsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="relative bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-black h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">New Collections</h2>
        </div>
        <Slider {...settings} className="w-full mt-12 max-w-lg mx-auto lg:max-w-none">
          {data.map((dataItem, index) => (
            <ArtCard key={index} dataItem={dataItem} className="px-4" />
          ))}
        </Slider>
      </div>
    </div>
  );
}