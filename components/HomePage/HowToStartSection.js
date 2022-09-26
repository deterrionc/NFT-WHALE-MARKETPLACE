import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCard from '../PostCard';

const data = [
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    imageUrl: '/assets/images/post-card.png',
    date: '8 January, 2022',
    href: '/blog/1'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    imageUrl: '/assets/images/post-card.png',
    date: '8 January, 2022',
    href: '/blog/1'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    imageUrl: '/assets/images/post-card.png',
    date: '8 January, 2022',
    href: '/blog/1'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    imageUrl: '/assets/images/post-card.png',
    date: '8 January, 2022',
    href: '/blog/1'
  },
];
export default function HowToStartSection() {
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
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">How to Start</h2>
        </div>
        <Slider {...settings} className="w-full mt-12 max-w-lg mx-auto lg:max-w-none">
          {data.map((dataItem, index) => (
            <PostCard key={index} dataItem={dataItem} />
          ))}
        </Slider>
      </div>
    </div>
  );
}