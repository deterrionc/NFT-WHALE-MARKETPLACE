import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const data = [
  {
    title: 'floor price',
    price: 0.59
  },
  {
    title: 'TOTAL VOLUME (ALL TIME, ',
    price: 123.59
  },
  {
    title: 'AVG SALE PRICE (LAS 24h',
    price: 0.59
  },
  {
    title: 'TOTAL LISTED COUNT',
    price: 420
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeroSection({ tabs, tabName, handleTab }) {
  return (
    <div className='bg-dark-gradient'>
      {/* Hero image */}
      <div className="relative w-full">
        <Image className="object-cover z-10" src='/assets/images/whales.png' width="1920" height="538" alt="" />
        <div className="absolute flex justify-center w-full top-80 mt-8">
          <Image className="z-20" src="/assets/images/logo-whale.png" width="280" height="280" alt="" />
        </div>
      </div>

      {/* Social buttons */}
      <div className='flex justify-end mt-5 gap-x-2 mx-10'>
        <button
          type="button"
          className="p-2 border border-transparent rounded-md shadow-sm bg-[#202851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202851] text-gray-100"
        >
          <Icon icon="fontisto:world-o" className='text-xl' />
        </button>
        <button
          type="button"
          className="p-2 border border-transparent rounded-md shadow-sm bg-[#202851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202851] text-gray-100"
        >
          <Icon icon="akar-icons:discord-fill" className='text-xl' />
        </button>
        <button
          type="button"
          className="p-2 border border-transparent rounded-md shadow-sm bg-[#202851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202851] text-gray-100"
        >
          <Icon icon="akar-icons:twitter-fill" className='text-xl' />
        </button>
      </div>

      {/* Title */}
      <div className='mt-36'>
        <p className="text-gray-100 text-5xl text-center">Catalina Whale Mixer</p>
        <div className="w-1/2 mx-auto mt-6">
          <div className='grid grid-cols-4 gap-x-3'>
            {
              data.map((dataItem, index) => (
                <div key={index} className="rounded-lg w-full bg-[#1B2331] py-2 px-1">
                  <p className="text-gray-300 text-sm uppercase text-center">{dataItem.title}</p>
                  <p className="text-gray-100 text-md uppercase text-center mt-1">{dataItem.price} BNB</p>
                </div>
              ))
            }
          </div>
          <p className='text-gray-200 text-md mt-12'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className='mt-36'>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-gray-100 focus:border-gray-100 border-gray-300 rounded-md"
            value={tabName}
            onChange={() => handleTab(tabs.find(tabItem => tabItem.name === tabName))}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="-mb-px flex justify-center" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  href={tab.href}
                  onClick={() => handleTab(tab)}
                  className={classNames(
                    tab.name === tabName
                      ? 'border-gray-100 text-gray-100'
                      : 'border-transparent text-gray-100 hover:text-gray-400',
                    'w-1/12 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-x-2'
                  )}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}