import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    src: '/assets/images/homeSlider1.png',
  },
  {
    src: '/assets/images/homeSlider2.png',
  },
  {
    src: '/assets/images/homeSlider3.png',
  }
];
export default function HeroSliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="relative mx-auto bg-black pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8 w-[100rem]">
      <div className="relative">
        <Slider {...settings} className="w-full max-w-lg mx-auto lg:max-w-none">
          {data.map((dataItem, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden px-3">
              <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" src={dataItem.src} alt="" width='1640' height='710' />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='grid grid-cols-2 gap-x-8 justify-between mt-8'>
        <div className="ml-4">
          <p className="text-gray-100 text-4xl">THE CATALINA</p>
          <p className="text-gray-100 text-4xl mt-6 ml-20">— WHALE MIXER</p>
        </div>
        <div className="mr-28">
          <p className="text-gray-100 capitalize text-lg">
            The most exclusive gathering of Whales in the Western Hemisphere since 1997. This lifestyle is a choice…and we choose you. Catalina Whales are a special breed…they are aggressive, passionate, a touch degenerate, with a lust for success. This is why we met. To form this alliance. Everybody wants to go to the moon but nobody is exploring the ocean. WAGMI.
          </p>
          <button className="px-8 py-3 mt-14 text-xl bg-white bg-steel-button bg-cover bg-center font-semibold text-black focus:shadow-outline hover:text-themePrimaryDark-100 rounded-md">
            Explore collection
          </button>
        </div>
      </div>
    </div>
  );
}