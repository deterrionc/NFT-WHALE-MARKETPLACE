import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import HeroSection from './HeroSection';
import Items from './Items';
import Activity from './Activity';

const tabs = [
  {
    name: 'Items',
    icon: <Icon icon="bi:grid-3x3" className="text-lg" />,
    content: <Items />,
  },
  {
    name: 'Activity',
    icon: <Icon icon="ph:chart-line-up-bold" className="text-lg" />,
    content: <Activity />,
  },
];


export default function Collection() {

  const [tabName, setTabName] = useState('Items');

  const handleTab = (tab) => {
    setTabName(tab.name);
  };

  return (
    <div className="relative bg-black pb-20 lg:pb-28">
      <HeroSection
        tabs={tabs}
        tabName={tabName}
        handleTab={handleTab}
      />
      <div className='bg-[#16151A] bg-opacity-40 px-4 sm:px-6 lg:px-8'>
        {tabs.find(tabItem => tabItem.name === tabName).content}
      </div>
    </div>
  );
}