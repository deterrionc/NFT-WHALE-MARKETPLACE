import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingLanuchCard from '../../components/UpcomingLanuchCard';

const data = [
  { imageUrl: '/assets/images/whale1.png' },
  { imageUrl: '/assets/images/whale2.png' },
  { imageUrl: '/assets/images/whale3.png' },
  { imageUrl: '/assets/images/whale4.png' },
  { imageUrl: '/assets/images/whale5.png' },
  { imageUrl: '/assets/images/whale6.png' }
];

export default function MoreSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className='mt-12'>
      <div className="text-left">
        <h2 className="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">More from this collection</h2>
      </div>
      <Slider {...settings} className="w-full mt-12 max-w-lg mx-auto lg:max-w-none">
        {data.map((dataItem, index) => (
          <UpcomingLanuchCard key={index} dataItem={dataItem} className="px-4" />
        ))}
      </Slider>
    </div>
  );
}