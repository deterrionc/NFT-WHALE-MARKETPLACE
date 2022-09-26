import React from "react";
import UpcomingLanuchCard from "../../components/UpcomingLanuchCard";
import CategoriesFilter from "../../components/filters/CategoriesFilter";
import ChainsFilter from "../../components/filters/ChainsFilter";
import PriceFilter from "../../components/filters/PriceFilter";
import StatusFilter from "../../components/filters/StatusFilter";

const data = [
  { imageUrl: '/assets/images/whale1.png' },
  { imageUrl: '/assets/images/whale2.png' },
  { imageUrl: '/assets/images/whale3.png' },
  { imageUrl: '/assets/images/whale4.png' },
  { imageUrl: '/assets/images/whale5.png' },
  { imageUrl: '/assets/images/whale6.png' },
  { imageUrl: '/assets/images/whale7.png' },
  { imageUrl: '/assets/images/whale8.png' },
  { imageUrl: '/assets/images/whale9.png' },
  { imageUrl: '/assets/images/whale10.png' },
  { imageUrl: '/assets/images/whale11.png' },
  { imageUrl: '/assets/images/whale12.png' },
  { imageUrl: '/assets/images/whale13.png' },
  { imageUrl: '/assets/images/whale14.png' },
  { imageUrl: '/assets/images/whale15.png' },
  { imageUrl: '/assets/images/whale16.png' },
];

export default function ArtworksTab() {
  return (
    <div className="w-full flex gap-x-12">
      <div className="w-1/4">
        <p className="text-gray-100 text-sm pt-4 pb-2">Filters</p>
        <PriceFilter />
        <StatusFilter />
        <CategoriesFilter />
        <ChainsFilter />
      </div>
      <div className="w-3/4">
        <div className="flex justify-between items-center">
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

        <div className="mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {data.map((dataItem, index) => (
            <UpcomingLanuchCard key={index} dataItem={dataItem} />
          ))}
        </div>
      </div>
    </div>
  );
}